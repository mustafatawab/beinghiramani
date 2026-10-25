"use client"

import { useState, type FormEvent } from "react"
import { Check } from "lucide-react"
import { site } from "@/lib/data/site"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") ?? "")
    const phone = String(form.get("phone") ?? "")
    const email = String(form.get("email") ?? "")
    const comment = String(form.get("comment") ?? "")

    const subject = `Website enquiry from ${name || email}`
    const body = [
      `Name: ${name}`,
      `Phone number: ${phone}`,
      `Email: ${email}`,
      "",
      comment,
    ].join("\n")

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-full border border-border bg-card px-5 py-4"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm">Phone number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="w-full rounded-full border border-border bg-card px-5 py-4"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm">
          Email <span className="text-destructive">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-full border border-border bg-card px-5 py-4"
        />
      </div>

      <div>
        <label htmlFor="contact-comment" className="mb-2 block text-sm">
          Comment <span className="text-destructive">*</span>
        </label>
        <textarea
          id="contact-comment"
          name="comment"
          required
          rows={8}
          className="w-full rounded-3xl border border-border bg-card px-5 py-4"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/90"
        >
          Submit
        </button>
        <a
          href={`https://wa.me/${site.whatsapp.number}`}
          className="rounded-full border border-foreground/20 px-8 py-4 text-sm transition hover:border-foreground/50"
        >
          Message on WhatsApp
        </a>
      </div>

      {sent && (
        <p className="inline-flex items-center gap-2 text-sm text-primary" role="status">
          <Check className="h-4 w-4" />
          Thank you — your email app should open with your message ready to send.
        </p>
      )}
    </form>
  )
}
