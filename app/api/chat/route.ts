import { google } from "@ai-sdk/google"
import {
  convertToModelMessages,
  isStepCount,
  streamText,
  type UIMessage,
} from "ai"
import { z } from "zod"
import {
  COLLECTION_HANDLES,
  NAVIGABLE_PATHS,
  PRODUCT_HANDLES,
  SCROLL_TARGETS,
  buildSystemPrompt,
} from "@/lib/ai/catalog"
import { checkRateLimit, clientKey } from "@/lib/ai/rate-limit"
import { collections, getCollectionProducts, products } from "@/lib/data/products"
import { formatPrice } from "@/lib/utils"

export const maxDuration = 30

const MODEL = process.env.GEMINI_MODEL ?? "gemini-3-flash"

const SIZES = ["XS", "S", "M", "L", "XL", "Custom"] as const

/** Occasion words a customer uses that do not appear in product copy. */
const OCCASIONS: Record<string, string[]> = {
  bridal: ["afsanay-2025"],
  bride: ["afsanay-2025"],
  wedding: ["afsanay-2025"],
  shaadi: ["afsanay-2025"],
  shadi: ["afsanay-2025"],
  dulhan: ["afsanay-2025"],
  valima: ["afsanay-2025"],
  walima: ["afsanay-2025"],
  nikkah: ["afsanay-2025"],
  mehndi: ["nau-bahar"],
  dholki: ["nau-bahar"],
  festive: ["nau-bahar"],
  eid: ["nau-bahar"],
  lawn: ["nau-bahar"],
  casual: ["nau-bahar"],
  "ready to wear": ["nau-bahar"],
  "ready-to-wear": ["nau-bahar"],
}

/** Words that carry no product meaning once the occasion and price are parsed. */
const STOPWORDS = new Set([
  "under", "below", "less", "than", "around", "about", "budget", "price", "prices",
  "pkr", "rs", "rupees", "thousand", "lakh", "lac", "max", "maximum", "upto", "up",
  "for", "the", "and", "with", "show", "me", "some", "piece", "pieces", "something",
  "looking", "want", "need", "please", "have", "any", "all", "wear", "outfit",
  "collection", "new",
])

/** Every collection a piece belongs to, so "bridal" can match the Afsanay edit. */
const collectionCopy = new Map<string, string>()
for (const entry of collections) {
  if (entry.handle === "all") continue
  for (const product of entry.products) {
    const previous = collectionCopy.get(product.handle) ?? ""
    collectionCopy.set(
      product.handle,
      `${previous} ${entry.title} ${entry.description}`.trim(),
    )
  }
}

function search(query?: string, collection?: string, maxPrice?: number) {
  const raw = (query ?? "").trim().toLowerCase()

  const occasionFilters = Object.entries(OCCASIONS)
    .filter(([word]) => raw.includes(word))
    .flatMap(([, handles]) => handles)
  const preferredHandles = occasionFilters.length
    ? new Set(
        occasionFilters.flatMap((handle) =>
          getCollectionProducts(handle).map((product) => product.handle),
        ),
      )
    : null

  const memberHandles = collection
    ? new Set(getCollectionProducts(collection).map((product) => product.handle))
    : preferredHandles

  let rest = raw
  for (const word of Object.keys(OCCASIONS)) rest = rest.replaceAll(word, " ")
  const words = rest
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOPWORDS.has(word) && !/^\d[\d,.]*$/.test(word))

  return products
    .filter((product) => {
      if (memberHandles && !memberHandles.has(product.handle)) return false
      if (maxPrice && product.price > maxPrice) return false
      if (!words.length) return true
      const haystack =
        `${product.title} ${product.collection} ${product.productType} ${product.fabric} ${product.description} ${product.tags.join(" ")} ${collectionCopy.get(product.handle) ?? ""}`.toLowerCase()
      return words.some((word) => haystack.includes(word))
    })
    .sort((a, b) => (maxPrice ? a.price - b.price : 0))
    .slice(0, 6)
    .map((product) => ({
      handle: product.handle,
      title: product.title,
      collection: product.collection,
      price: formatPrice(product.price),
      was: product.compareAtPrice ? formatPrice(product.compareAtPrice) : null,
      image: product.images[0] ?? null,
      variants: product.variants.map((variant) => variant.title),
      summary: product.summary,
    }))
}

/**
 * Keep the prompt small, and start the slice on a user turn so a tool call and
 * its result are never separated.
 */
function trimToUserTurn(messages: UIMessage[], limit = 12) {
  const recent = messages.slice(-limit)
  const firstUser = recent.findIndex((message) => message.role === "user")
  return firstUser > 0 ? recent.slice(firstUser) : recent
}

export async function POST(request: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json(
      {
        error:
          "The concierge is not configured yet. Add GOOGLE_GENERATIVE_AI_API_KEY to the environment.",
      },
      { status: 503 },
    )
  }

  const limit = checkRateLimit(clientKey(request))
  if (!limit.ok) {
    return Response.json(
      {
        error:
          limit.reason === "minute"
            ? "You're sending messages quickly — give it a few seconds."
            : "The concierge has had a lot of questions today. Please message the studio on WhatsApp.",
      },
      { status: 429, headers: { "retry-after": String(limit.retryAfter) } },
    )
  }

  let messages: UIMessage[]
  try {
    const body = (await request.json()) as { messages?: UIMessage[] }
    messages = Array.isArray(body.messages) ? body.messages : []
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  const lastUser = messages.findLast((message) => message.role === "user")
  const lastText = lastUser?.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(" ")

  if (lastText && lastText.length > 1500) {
    return Response.json(
      { error: "That message is a little long — could you shorten it?" },
      { status: 400 },
    )
  }

  try {
    const result = streamText({
      model: google(MODEL),
      system: buildSystemPrompt(),
      messages: await convertToModelMessages(trimToUserTurn(messages)),
      temperature: 0.6,
      maxOutputTokens: 500,
      stopWhen: isStepCount(3),
      tools: {
        navigate: {
          description:
            "Open a page on the Hira Mani Couture website. Use this whenever the customer asks to go somewhere or see something.",
          inputSchema: z.object({
            path: z.enum(NAVIGABLE_PATHS).describe("The exact in-site path to open."),
          }),
        },
        scrollTo: {
          description:
            "Scroll the current page to a section. Use 'shop-favorites' for the homepage product row, 'celebrities' for the red-carpet gallery, 'brand-story' for Hira's letter, 'newsletter' for sign-up, 'site-footer' for the footer links.",
          inputSchema: z.object({
            target: z.enum(SCROLL_TARGETS),
          }),
        },
        searchProducts: {
          description:
            "Search the catalogue by style words, collection handle, or maximum price in PKR. Always search before recommending pieces.",
          inputSchema: z.object({
            query: z
              .string()
              .optional()
              .describe("Style, fabric, colour or occasion words, e.g. 'bridal ivory'."),
            collection: z
              .enum(COLLECTION_HANDLES)
              .optional()
              .describe("Optional collection handle, e.g. 'nau-bahar'."),
            maxPrice: z
              .number()
              .optional()
              .describe("Maximum price in PKR, e.g. 25000 for 'under 25,000'."),
          }),
          execute: async ({ query, collection, maxPrice }) => {
            const results = search(query, collection, maxPrice)
            return {
              count: results.length,
              products: results,
            }
          },
        },
        getProduct: {
          description:
            "Get the full details of one piece: price, variants, fabric, pieces included, delivery and availability.",
          inputSchema: z.object({
            handle: z.enum(PRODUCT_HANDLES),
          }),
          execute: async ({ handle }) => {
            const product = products.find((item) => item.handle === handle)
            if (!product) return { error: "No such piece." }
            return {
              handle: product.handle,
              title: product.title,
              collection: product.collection,
              price: formatPrice(product.price),
              was: product.compareAtPrice ? formatPrice(product.compareAtPrice) : null,
              summary: product.summary,
              image: product.images[0] ?? null,
              fabric: product.fabric,
              pieces: product.pieces,
              delivery: product.delivery,
              availability: product.availability,
              variants: product.variants.map((variant) => ({
                title: variant.title,
                price: formatPrice(variant.price),
                available: variant.available,
              })),
              options: product.options,
              sizes: product.variants.length === 1 ? SIZES : null,
            }
          },
        },
        addToCart: {
          description:
            "Add a piece to the cart. Only call after the customer has explicitly agreed to add that exact piece and variant. The interface shows a final confirmation.",
          inputSchema: z.object({
            handle: z.enum(PRODUCT_HANDLES),
            variant: z.string().optional().describe("'Un-Stitched' or 'Stitched' when relevant."),
            size: z.enum(SIZES).optional().describe("Size for ready-to-wear pieces."),
            quantity: z.number().min(1).max(5).optional(),
          }),
        },
        openCart: {
          description: "Open the cart drawer so the customer can review their selection.",
          inputSchema: z.object({}),
        },
        getCart: {
          description: "Read the current cart contents (names, variants and quantities).",
          inputSchema: z.object({}),
        },
      },
    })

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error("[concierge]", error)
        return "Something went wrong at the studio. Please try again, or message us on WhatsApp."
      },
    })
  } catch (error) {
    console.error("[concierge]", error)
    return Response.json(
      { error: "The concierge is unavailable right now. Please message the studio on WhatsApp." },
      { status: 500 },
    )
  }
}
