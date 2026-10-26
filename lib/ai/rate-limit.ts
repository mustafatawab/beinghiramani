/**
 * Lightweight in-memory rate limiter for the concierge route.
 *
 * Serverless caveat: each instance keeps its own counters, so this is a
 * best-effort guard, not a hard quota. It stops casual abuse and runaway
 * loops; put a durable limiter (Upstash, Vercel KV) in front of the route if
 * the widget ever gets real traffic.
 */

type Bucket = { hits: number[]; blockedUntil?: number }

const buckets = new Map<string, Bucket>()

const MINUTE = 60_000
const PER_MINUTE = 10
const PER_HOUR = 120
const HOUR = 60 * MINUTE

let dayKey = ""
let dayCount = 0
const DAY_LIMIT = 700

function currentDayKey() {
  return new Date().toISOString().slice(0, 10)
}

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfter: number; reason: "minute" | "hour" | "day" }

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now()

  const today = currentDayKey()
  if (today !== dayKey) {
    dayKey = today
    dayCount = 0
  }
  if (dayCount >= DAY_LIMIT) {
    return { ok: false, retryAfter: 3600, reason: "day" }
  }

  const bucket = buckets.get(key) ?? { hits: [] }
  bucket.hits = bucket.hits.filter((hit) => now - hit < HOUR)
  buckets.set(key, bucket)

  if (bucket.blockedUntil && bucket.blockedUntil > now) {
    return {
      ok: false,
      retryAfter: Math.ceil((bucket.blockedUntil - now) / 1000),
      reason: "minute",
    }
  }

  const lastMinute = bucket.hits.filter((hit) => now - hit < MINUTE)
  if (lastMinute.length >= PER_MINUTE) {
    bucket.blockedUntil = now + MINUTE
    return { ok: false, retryAfter: Math.ceil(MINUTE / 1000), reason: "minute" }
  }

  if (bucket.hits.length >= PER_HOUR) {
    return { ok: false, retryAfter: Math.ceil(HOUR / 1000), reason: "hour" }
  }

  bucket.hits.push(now)
  dayCount += 1

  // Keep the map from growing without bound in long-lived processes.
  if (buckets.size > 2000) {
    for (const [bucketKey, value] of buckets) {
      if (value.hits.every((hit) => now - hit > HOUR)) buckets.delete(bucketKey)
    }
  }

  return { ok: true }
}

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0]!.trim()
  return request.headers.get("x-real-ip") ?? "anonymous"
}
