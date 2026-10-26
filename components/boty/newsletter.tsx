"use client"

import { useState, type FormEvent } from "react"
import { Check } from "lucide-react"
import { newsletter } from "@/lib/data/site"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail("")
  }

  return (
    <section id="newsletter" className="scroll-mt-20 bg-[#2e2926] py-20 text-[#f7f4ef]">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#f7f4ef]/60">Stay close</span>
        <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{newsletter.heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f7f4ef]/70">
          {newsletter.description}
        </p>

        {subscribed ? (
          <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#f7f4ef]/20 bg-[#f7f4ef]/10 px-7 py-4">
            <Check className="h-5 w-5" />
            <span>{newsletter.success}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-full border border-[#f7f4ef]/25 bg-transparent px-5 py-4 text-[#f7f4ef] placeholder:text-[#f7f4ef]/40 focus:border-[#f7f4ef]/60 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#f7f4ef] px-8 py-4 text-sm tracking-wide text-[#2e2926] transition hover:bg-white"
            >
              {newsletter.submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
