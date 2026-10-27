"use client"

import { useChat } from "@ai-sdk/react"
import {
  DefaultChatTransport,
  lastAssistantMessageIsCompleteWithToolCalls,
  type UIMessage,
} from "ai"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowUp, Check, ShoppingBag, X } from "lucide-react"
import { site } from "@/lib/data/site"
import { formatPrice } from "@/lib/utils"
import { useCart } from "./cart-context"

type CartCandidate = {
  toolCallId: string
  handle: string
  title: string
  price: number
  image: string
  pieces: string
  variants: { title: string; price: number }[]
  needsSize: boolean
  quantity: number
}

type SearchResult = {
  handle: string
  title: string
  collection: string
  price: string
  was: string | null
  image?: string
  summary?: string
}

type ToolPart = {
  type: string
  state?: string
  toolCallId?: string
  input?: Record<string, unknown>
  output?: unknown
  errorText?: string
}

const SUGGESTIONS = [
  "Show me Nau Bahar",
  "What's under Rs. 25,000?",
  "Tell me about Sohaye",
  "How does stitching work?",
]

const readyToWearSizes = ["XS", "S", "M", "L", "XL", "Custom"]

function asToolPart(part: unknown): ToolPart | null {
  const candidate = part as ToolPart
  return typeof candidate?.type === "string" && candidate.type.startsWith("tool-")
    ? candidate
    : null
}

export function Concierge({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const pathname = usePathname()
  const { items, addItem, setIsOpen } = useCart()

  const [input, setInput] = useState("")
  const [pending, setPending] = useState<CartCandidate | null>(null)
  const [variant, setVariant] = useState("")
  const [size, setSize] = useState("M")
  const [notice, setNotice] = useState("")

  const inputRef = useRef<HTMLTextAreaElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef(pathname)
  const cartRef = useRef(items)
  const pendingRef = useRef(pending)

  pathRef.current = pathname
  cartRef.current = items
  pendingRef.current = pending

  const { messages, sendMessage, status, addToolOutput, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    async onToolCall({ toolCall }) {
      if (toolCall.dynamic) return
      const input = (toolCall.input ?? {}) as Record<string, unknown>

      if (toolCall.toolName === "navigate") {
        const path = String(input.path ?? "/")
        if (path !== pathRef.current) router.push(path)
        addToolOutput({
          tool: "navigate",
          toolCallId: toolCall.toolCallId,
          output: `Opened ${path}`,
        })
        return
      }

      if (toolCall.toolName === "scrollTo") {
        const target = String(input.target ?? "top")
        const element = document.getElementById(target)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (target === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
          router.push(`/#${target}`)
        }
        addToolOutput({
          tool: "scrollTo",
          toolCallId: toolCall.toolCallId,
          output: `Scrolled to ${target}`,
        })
        return
      }

      if (toolCall.toolName === "openCart") {
        setIsOpen(true)
        addToolOutput({
          tool: "openCart",
          toolCallId: toolCall.toolCallId,
          output: "Cart opened",
        })
        return
      }

      if (toolCall.toolName === "getCart") {
        const current = cartRef.current
        addToolOutput({
          tool: "getCart",
          toolCallId: toolCall.toolCallId,
          output: current.length
            ? current.map((item) => `${item.name} — ${item.description} ×${item.quantity}`).join("; ")
            : "The cart is empty.",
        })
        return
      }

      if (toolCall.toolName === "addToCart") {
        // A second add-to-cart in the same turn would orphan the first tool
        // call; close it out so the conversation can continue.
        if (pendingRef.current) {
          addToolOutput({
            tool: "addToCart",
            toolCallId: pendingRef.current.toolCallId,
            output: "Superseded by a newer request.",
          })
        }

        const { getProduct } = await import("@/lib/data/products")
        const product = getProduct(String(input.handle ?? ""))
        if (!product) {
          addToolOutput({
            tool: "addToCart",
            toolCallId: toolCall.toolCallId,
            state: "output-error",
            errorText: "That piece could not be found.",
          })
          return
        }

        const requested = String(input.variant ?? "")
        const chosen =
          product.variants.find((item) => item.title.toLowerCase() === requested.toLowerCase()) ??
          product.variants[0]

        const quantity = Math.min(5, Math.max(1, Math.round(Number(input.quantity ?? 1)) || 1))

        setPending({
          toolCallId: toolCall.toolCallId,
          handle: product.handle,
          title: product.title,
          price: chosen.price,
          image: product.images[0],
          pieces: product.pieces,
          variants: product.variants.map((item) => ({ title: item.title, price: item.price })),
          needsSize: product.variants.length === 1,
          quantity,
        })
        setVariant(chosen.title)
        setSize("M")
      }
    },
  })

  useEffect(() => {
    if (!open) return
    // Only pull focus on pointer devices; on phones autofocus throws the
    // keyboard up before the visitor can read the greeting.
    if (!window.matchMedia("(min-width: 640px)").matches) return
    const timer = setTimeout(() => inputRef.current?.focus(), 120)
    return () => clearTimeout(timer)
  }, [open])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    scroller.scrollTo({ top: scroller.scrollHeight, behavior: "smooth" })
  }, [messages, pending, notice])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  const busy = status === "submitted" || status === "streaming"

  function submit(text: string) {
    const value = text.trim()
    if (!value || busy) return
    if (pending) {
      setNotice("Confirm or cancel the piece above first.")
      return
    }
    setNotice("")
    sendMessage({ text: value })
    setInput("")
  }

  function confirmAdd() {
    if (!pending) return
    const variantPrice =
      pending.variants.find((item) => item.title === variant)?.price ?? pending.price

    for (let index = 0; index < pending.quantity; index += 1) {
      addItem({
        id: `${pending.handle}::${variant}::${pending.needsSize ? size : ""}`,
        name: pending.title,
        description: pending.needsSize
          ? `${variant} · Size: ${size} · ${pending.pieces}`
          : `${variant} · ${pending.pieces}`,
        price: variantPrice,
        image: pending.image,
      })
    }

    addToolOutput({
      tool: "addToCart",
      toolCallId: pending.toolCallId,
      output: `${pending.title} (${variant}${pending.needsSize ? `, size ${size}` : ""}) ×${pending.quantity} added to cart.`,
    })
    setPending(null)
    setNotice("")
  }

  function cancelAdd() {
    if (!pending) return
    addToolOutput({
      tool: "addToCart",
      toolCallId: pending.toolCallId,
      output: "The customer declined to add this piece.",
    })
    setPending(null)
    setNotice("")
  }

  if (!open) return null

  return (
    <div
      id="studio-concierge"
      role="dialog"
      aria-label="Hira Mani studio concierge"
      className="fixed inset-x-3 bottom-3 z-[45] flex h-[min(82svh,660px)] flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-background shadow-[0_30px_90px_-30px_rgba(31,28,26,0.55)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[402px]"
    >
      <header className="flex items-start justify-between gap-4 border-b border-border/60 bg-[#1f1c1a] px-5 py-4 text-[#f7f4ef]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.26em] text-[#f7f4ef]/55">
            Hira Mani Couture
          </p>
          <h2 className="mt-1 font-serif text-xl leading-none">Studio Concierge</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close concierge"
          className="rounded-full p-1.5 text-[#f7f4ef]/70 transition hover:bg-white/10 hover:text-[#f7f4ef]"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      <div ref={scrollerRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
        {messages.length === 0 && (
          <div className="space-y-5">
            <p className="text-sm leading-6 text-muted-foreground">
              Assalam-o-alaikum. I can show you the collections, explain fabrics and stitching,
              and take you straight to a piece.
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submit(suggestion)}
                  className="rounded-full border border-border bg-card px-3.5 py-2 text-left text-xs leading-5 transition hover:border-foreground/40"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message: UIMessage) => (
          <div
            key={message.id}
            className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={
                message.role === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-6 text-primary-foreground"
                  : "w-full max-w-[95%] space-y-3 text-sm leading-6 text-foreground"
              }
            >
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return (
                    <p key={`${message.id}-text-${index}`} className="whitespace-pre-wrap">
                      {part.text}
                    </p>
                  )
                }

                const tool = asToolPart(part)
                if (!tool) return null

                if (tool.type === "tool-searchProducts" && tool.state === "output-available") {
                  const output = tool.output as { products?: SearchResult[] } | undefined
                  const results = output?.products ?? []
                  if (!results.length) {
                    return (
                      <p key={`${message.id}-search-${index}`} className="text-muted-foreground">
                        Nothing matched that search — the studio can help on WhatsApp.
                      </p>
                    )
                  }
                  return (
                    <div key={`${message.id}-search-${index}`} className="space-y-2">
                      {results.map((result) => (
                        <Link
                          key={result.handle}
                          href={`/product/${result.handle}`}
                          className="flex items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-2.5 transition hover:border-foreground/30"
                        >
                          {result.image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={result.image}
                              alt={result.title}
                              className="h-14 w-11 rounded-lg object-cover"
                            />
                          )}
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium">
                              {result.title}
                            </span>
                            <span className="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                              {result.collection}
                            </span>
                            <span className="mt-0.5 block text-xs">
                              {result.price}
                              {result.was && (
                                <span className="ml-1.5 text-muted-foreground line-through">
                                  {result.was}
                                </span>
                              )}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )
                }

                if (tool.type === "tool-addToCart") {
                  const candidate =
                    pending && pending.toolCallId === tool.toolCallId ? pending : null
                  if (candidate) {
                    const current = candidate
                    return (
                      <div
                        key={`${message.id}-cart-${index}`}
                        className="space-y-3 rounded-2xl border border-border bg-card p-3.5"
                      >
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={current.image}
                            alt={current.title}
                            className="h-16 w-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-serif text-lg leading-none">{current.title}</p>
                            <p className="mt-1.5 text-xs text-muted-foreground">
                              {formatPrice(current.price)} · {current.pieces}
                            </p>
                          </div>
                        </div>

                        {current.variants.length > 1 && (
                          <div className="flex flex-wrap gap-1.5">
                            {current.variants.map((option) => (
                              <button
                                key={option.title}
                                type="button"
                                onClick={() => {
                                  setVariant(option.title)
                                  setPending({ ...current, price: option.price })
                                }}
                                className={`rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] transition ${
                                  variant === option.title
                                    ? "border-foreground bg-foreground text-background"
                                    : "border-border hover:border-foreground/40"
                                }`}
                              >
                                {option.title} · {formatPrice(option.price)}
                              </button>
                            ))}
                          </div>
                        )}

                        {current.needsSize && (
                          <div>
                            <p className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                              Size
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {readyToWearSizes.map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => setSize(option)}
                                  className={`h-8 min-w-8 rounded-full border px-2.5 text-[11px] transition ${
                                    size === option
                                      ? "border-foreground bg-foreground text-background"
                                      : "border-border hover:border-foreground/40"
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={confirmAdd}
                            className="flex-1 rounded-full bg-primary px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-primary-foreground transition hover:bg-primary/90"
                          >
                            Add to cart
                          </button>
                          <button
                            type="button"
                            onClick={cancelAdd}
                            className="rounded-full border border-border px-4 py-2.5 text-xs uppercase tracking-[0.14em] transition hover:border-foreground/40"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )
                  }

                  if (tool.state === "output-available") {
                    return (
                      <p
                        key={`${message.id}-cart-${index}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        <Check className="h-3 w-3" />
                        {typeof tool.output === "string" ? tool.output : "Cart updated"}
                      </p>
                    )
                  }
                  return null
                }

                if (
                  tool.state === "output-available" &&
                  (tool.type === "tool-navigate" ||
                    tool.type === "tool-scrollTo" ||
                    tool.type === "tool-openCart")
                ) {
                  return (
                    <p
                      key={`${message.id}-action-${index}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {tool.type === "tool-openCart" ? (
                        <ShoppingBag className="h-3 w-3" />
                      ) : (
                        <Check className="h-3 w-3" />
                      )}
                      {typeof tool.output === "string" ? tool.output : "Done"}
                    </p>
                  )
                }

                if (tool.state === "output-error") {
                  return (
                    <p
                      key={`${message.id}-error-${index}`}
                      className="text-xs text-destructive"
                    >
                      {tool.errorText ?? "That action did not go through."}
                    </p>
                  )
                }

                return null
              })}
            </div>
          </div>
        ))}

        {busy && (
          <div className="flex items-center gap-1.5 text-muted-foreground" aria-live="polite">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-3 text-xs leading-5 text-destructive">
            {error.message?.includes("GOOGLE_GENERATIVE_AI_API_KEY")
              ? "The concierge is not switched on yet."
              : error.message?.includes("429") || error.message?.includes("questions today")
                ? "The concierge is busy right now."
                : "Something interrupted us."}{" "}
            You can always message the studio on{" "}
            <a
              className="underline underline-offset-2"
              href={`https://wa.me/${site.whatsapp.number}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            .
          </div>
        )}

      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          submit(input)
        }}
        className="border-t border-border/60 bg-background px-3.5 pb-3.5 pt-3"
      >
        {notice && (
          <p className="mb-2 text-center text-[11px] text-destructive" role="status">
            {notice}
          </p>
        )}
        <div className="flex items-end gap-2 rounded-2xl border border-border bg-card px-3 py-2 focus-within:border-foreground/40">
          <label htmlFor="concierge-input" className="sr-only">
            Message the studio concierge
          </label>
          <textarea
            id="concierge-input"
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault()
                submit(input)
              }
            }}
            placeholder="Ask about a piece, a size, a budget…"
            className="max-h-24 min-h-[24px] flex-1 resize-none bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            aria-label="Send message"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition disabled:opacity-30"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 text-center text-[10px] leading-4 text-muted-foreground">
          For orders, custom work and order status:{" "}
          <a
            href={`https://wa.me/${site.whatsapp.number}`}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            {site.whatsapp.display}
          </a>
        </p>
      </form>
    </div>
  )
}
