"use client"

import { useState, type FormEvent } from "react"
import { MessageCircle, PackageSearch } from "lucide-react"
import { site } from "@/lib/data/site"

export function TrackOrderForm() {
  const [orderNumber, setOrderNumber] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = orderNumber.trim()
      ? `Hello Hira Mani Couture, could you please share an update on order ${orderNumber.trim()}?`
      : "Hello Hira Mani Couture, could you please help me track my order?"
    window.open(`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`, "_blank", "noopener")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <div>
        <label htmlFor="order-number" className="mb-2 block text-sm">
          Order number
        </label>
        <input
          id="order-number"
          value={orderNumber}
          onChange={(event) => setOrderNumber(event.target.value)}
          placeholder="e.g. HMC-1024"
          className="w-full rounded-full border border-border bg-card px-5 py-4"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground transition hover:bg-primary/90"
      >
        <MessageCircle className="h-4 w-4" /> Track on WhatsApp
      </button>
      <p className="text-center text-xs leading-5 text-muted-foreground">
        This opens WhatsApp with your order number ready to send. Our team replies during studio hours.
      </p>
    </form>
  )
}
