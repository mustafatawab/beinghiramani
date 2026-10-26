# Hira Mani Couture

Editorial storefront for Hira Mani Couture — a Next.js App Router site with the full
catalogue, collections, policy pages, WhatsApp-based ordering, and an in-site AI
concierge.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start
```

## Studio concierge

The floating "Ask the studio" button opens a chat panel that can navigate the site,
scroll to sections, search the catalogue, and add a piece to the cart (always behind an
explicit confirmation).

1. Create a Gemini API key at <https://aistudio.google.com/apikey>.
2. Copy `.env.example` to `.env.local` and set `GOOGLE_GENERATIVE_AI_API_KEY`.
3. Restart the dev server.

`GEMINI_MODEL` defaults to `gemini-3-flash`. The key is only read in
`app/api/chat/route.ts`, so it never reaches the browser.

Without a key the panel still opens, but every message returns "The concierge is not
switched on yet." — by design.

### How the actions work

- Tools are declared in `app/api/chat/route.ts`; `navigate`, `scrollTo`, `addToCart`,
  `openCart` and `getCart` have no `execute`, which marks them as client-side.
- `components/boty/concierge.tsx` runs them in `onToolCall`, replies with
  `addToolOutput`, and `sendAutomaticallyWhen` hands the result back to the model.
- `lib/ai/catalog.ts` builds the system prompt from the real catalogue and whitelists
  every route and section the model may target.
- `lib/ai/rate-limit.ts` is an in-memory guard (10/min, 120/hour, 700/day). On Vercel
  each instance keeps its own counters; add a durable limiter (Upstash, Vercel KV) if
  traffic grows.

### Deploying to Vercel

Add `GOOGLE_GENERATIVE_AI_API_KEY` (and optionally `GEMINI_MODEL`) in the project's
environment variables. Nothing else needs configuring — `/api/chat` is a Node route
with `maxDuration = 30`.

## Content

All copy, products, collections, images and policies live in `lib/data/`. Prices are in
PKR and shown as `Rs.XX,XXX`. Checkout is completed on WhatsApp: the cart prepares the
order message and the studio confirms it.
