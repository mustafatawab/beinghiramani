"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Check,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Ruler,
  Share2,
  ShoppingBag,
  Truck,
} from "lucide-react"
import type { Product } from "@/lib/data/products"
import { site } from "@/lib/data/site"
import { formatPrice } from "@/lib/utils"
import { useCart } from "./cart-context"
import { ProductCard } from "./product-card"

const readyToWearSizes = ["XS", "S", "M", "L", "XL", "Custom"]

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const { addItem } = useCart()
  const [variantIndex, setVariantIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [size, setSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [copied, setCopied] = useState(false)

  const variant = product.variants[variantIndex]
  const isReadyToWear = product.variants.length === 1
  const hasCompareAt = Boolean(variant.compareAtPrice && variant.compareAtPrice > variant.price)

  const cartDescription = useMemo(() => {
    const parts = [variant.title]
    if (isReadyToWear) parts.push(`Size: ${size}`)
    parts.push(product.pieces)
    return parts.join(" · ")
  }, [variant.title, isReadyToWear, size, product.pieces])

  const addToCart = () => {
    for (let index = 0; index < quantity; index += 1) {
      addItem({
        id: `${product.handle}::${variant.title}::${isReadyToWear ? size : ""}`,
        name: product.title,
        description: cartDescription,
        price: variant.price,
        image: product.images[0],
      })
    }
  }

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    try {
      if (navigator.share) {
        await navigator.share({ title: product.title, text: product.summary, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      // Sharing was cancelled.
    }
  }

  const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
    `I would like to order ${product.title} (${variant.title}${isReadyToWear ? `, Size: ${size}` : ""}) — ${formatPrice(variant.price)}`,
  )}`

  return (
    <>
      <section className="px-6 pb-20 pt-[130px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/collections/${product.collectionHandle}`} className="hover:text-foreground">
              {product.collection}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images[activeImage]}
                  alt={`${product.title} by Hira Mani Couture — view ${activeImage + 1}`}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#f7f4ef]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] backdrop-blur">
                  {product.availability}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
                {product.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show image ${index + 1} of ${product.title}`}
                    aria-current={activeImage === index}
                    className={`aspect-[3/4] overflow-hidden rounded-xl bg-card ring-2 transition ${
                      activeImage === index ? "ring-foreground" : "ring-transparent hover:ring-border"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[11px] uppercase tracking-[0.24em] text-primary">
                {product.collection} · {product.pieces}
              </p>
              <h1 className="mt-3 font-serif text-5xl leading-none md:text-6xl">{product.title}</h1>

              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <span className="text-2xl">{formatPrice(variant.price)}</span>
                {hasCompareAt && (
                  <>
                    <span className="text-base text-muted-foreground line-through">
                      {formatPrice(variant.compareAtPrice!)}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                      Save {formatPrice(variant.compareAtPrice! - variant.price)}
                    </span>
                  </>
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Tax included. Shipping calculated at checkout.</p>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">{product.summary}</p>

              {product.variants.length > 1 && (
                <div className="mt-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {product.options[0]?.name ?? "Option"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((item, index) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setVariantIndex(index)}
                        aria-pressed={variantIndex === index}
                        className={`rounded-full border px-5 py-2.5 text-sm transition ${
                          variantIndex === index
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        {item.title} · {formatPrice(item.price)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isReadyToWear && (
                <div className="mt-7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Size</p>
                    <a
                      href={site.sizeChart}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs underline underline-offset-4"
                    >
                      <Ruler className="h-3.5 w-3.5" /> Size chart
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {readyToWearSizes.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSize(option)}
                        aria-pressed={size === option}
                        className={`min-w-12 rounded-full border px-4 py-2.5 text-sm transition ${
                          size === option
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    Custom size? Choose “Custom” and message us on WhatsApp or Instagram after placing your order.
                  </p>
                </div>
              )}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <div className="flex items-center justify-between rounded-full border border-border px-2 py-1 sm:w-36">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-full p-2 hover:bg-card"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-sm" aria-live="polite">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-full p-2 hover:bg-card"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={addToCart}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground transition hover:bg-primary/90"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to cart · {formatPrice(variant.price * quantity)}
                </button>
              </div>

              <div className="mt-3 flex gap-2">
                <a
                  href={whatsappHref}
                  className="flex-1 rounded-full border border-foreground/20 px-6 py-3.5 text-center text-sm transition hover:border-foreground/50"
                >
                  Order on WhatsApp
                </a>
                <Link
                  href="/wishlist"
                  className="rounded-full border border-border p-3.5 transition hover:border-foreground/50"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={share}
                  className="rounded-full border border-border p-3.5 transition hover:border-foreground/50"
                  aria-label="Share this product"
                >
                  {copied ? <Check className="h-4 w-4 text-primary" /> : <Share2 className="h-4 w-4" />}
                </button>
              </div>

              <div className="mt-6 grid gap-3 rounded-2xl bg-card p-4 text-xs text-muted-foreground sm:grid-cols-3">
                <span className="flex items-center gap-2"><Truck className="h-4 w-4 shrink-0" /> {product.delivery}</span>
                <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4 shrink-0" /> 30-day returns</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0" /> Handcrafted in Pakistan</span>
              </div>

              <div className="mt-8 border-t border-border/60">
                <details className="border-b border-border/60 py-5" open>
                  <summary className="cursor-pointer text-sm font-medium">Description</summary>
                  <div
                    className="product-description mt-4 text-sm leading-7 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                  />
                </details>

                <details className="border-b border-border/60 py-5">
                  <summary className="cursor-pointer text-sm font-medium">Fabric &amp; details</summary>
                  <dl className="mt-4 grid gap-3 text-sm text-muted-foreground">
                    <div className="flex justify-between gap-4 border-b border-border/40 pb-2">
                      <dt>Fabric</dt>
                      <dd className="text-right text-foreground">{product.fabric}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-border/40 pb-2">
                      <dt>Pieces</dt>
                      <dd className="text-right text-foreground">{product.pieces}</dd>
                    </div>
                    {variant.sku && (
                      <div className="flex justify-between gap-4 border-b border-border/40 pb-2">
                        <dt>SKU</dt>
                        <dd className="text-right text-foreground">{variant.sku}</dd>
                      </div>
                    )}
                    {product.tags.length > 0 && (
                      <div className="flex justify-between gap-4">
                        <dt>Type</dt>
                        <dd className="text-right text-foreground">{product.tags.join(", ")}</dd>
                      </div>
                    )}
                  </dl>
                </details>

                <details className="border-b border-border/60 py-5">
                  <summary className="cursor-pointer text-sm font-medium">Delivery &amp; returns</summary>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                    <p>Delivery: {product.delivery}. Delivery times are estimates and may vary.</p>
                    <p>
                      We have a 30-day return policy. Items must be unworn, unused, with tags and in their original
                      packaging. Read our{" "}
                      <Link href="/policies/refund-policy" className="underline underline-offset-4">refund policy</Link>.
                    </p>
                    <p>
                      For shipping details, read our{" "}
                      <Link href="/policies/shipping-policy" className="underline underline-offset-4">shipping policy</Link>.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-card py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-primary">You may also love</p>
                <h2 className="mt-2 font-serif text-4xl">More from {product.collection}</h2>
              </div>
              <Link href={`/collections/${product.collectionHandle}`} className="text-sm underline underline-offset-8">
                View the collection
              </Link>
            </div>
            <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
