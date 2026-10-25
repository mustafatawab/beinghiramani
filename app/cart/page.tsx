"use client"

import Link from "next/link"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { useCart } from "@/components/boty/cart-context"
import { site } from "@/lib/data/site"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()
  const shipping = 0
  const total = subtotal + shipping

  const message = [
    "Hello Hira Mani Couture, I would like to order:",
    ...items.map(
      (item) =>
        `- ${item.name} (${item.description}) x${item.quantity} — ${formatPrice(item.price * item.quantity)}`,
    ),
    `Total: ${formatPrice(total)}`,
  ].join("\n")

  return (
    <main>
      <Header />

      <section className="px-6 pb-24 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-9 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Cart</span>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Your selection</p>
              <h1 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Your cart</h1>
            </div>
            {items.length > 0 && (
              <button type="button" onClick={clearCart} className="text-xs text-muted-foreground underline underline-offset-4">
                Clear cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="mt-16 rounded-[2rem] bg-card px-6 py-20 text-center">
              <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground/60" />
              <p className="mt-5 font-serif text-3xl">Your cart is empty.</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                Discover Nau Bahar festive lawn or the Afsanay 2025 bridal collection.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/collections/nau-bahar" className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground">
                  Shop Nau Bahar
                </Link>
                <Link href="/collections/afsanay-2025" className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm">
                  Shop Afsanay 2025
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
              <div className="divide-y divide-border/60 border-y border-border/60">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-6 sm:gap-6">
                    <Link href={`/products/${item.id.split("::")[0]}`} className="w-24 shrink-0 overflow-hidden rounded-xl bg-card sm:w-32">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className="aspect-[3/4] w-full object-cover" />
                    </Link>

                    <div className="flex flex-1 flex-col justify-between gap-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link href={`/products/${item.id.split("::")[0]}`} className="font-serif text-xl">
                            {item.name}
                          </Link>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.description}</p>
                        </div>
                        <p className="shrink-0 text-sm">{formatPrice(item.price * item.quantity)}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded-full border border-border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="rounded-l-full p-2 hover:bg-card"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="rounded-r-full p-2 hover:bg-card"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="rounded-[2rem] bg-card p-6 sm:p-8 lg:sticky lg:top-32">
                <h2 className="font-serif text-2xl">Order summary</h2>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between border-t border-border/60 pt-3 text-base">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`}
                  className="mt-6 block rounded-full bg-primary px-7 py-4 text-center text-sm text-primary-foreground transition hover:bg-primary/90"
                >
                  Order on WhatsApp
                </a>
                <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                  Our team will confirm your order, sizing and delivery on WhatsApp.
                </p>

                <Link
                  href="/collections/all"
                  className="mt-3 block rounded-full border border-foreground/20 px-7 py-4 text-center text-sm transition hover:border-foreground/50"
                >
                  Continue shopping
                </Link>

                <div className="mt-6 border-t border-border/60 pt-4 text-xs leading-5 text-muted-foreground">
                  <p>{site.whatsapp.display} · {site.email}</p>
                  <p className="mt-1">30-day returns on eligible items.</p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
