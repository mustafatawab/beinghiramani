"use client"

import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/data/products"
import { formatPrice } from "@/lib/utils"
import { useCart } from "./cart-context"

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart()
  const variant = product.variants[0]
  const multiplePrices = new Set(product.variants.map((item) => item.price)).size > 1

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-card">
        <Link href={`/product/${product.handle}`} className="absolute inset-0" aria-label={`View ${product.title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={`${product.title} by Hira Mani Couture`}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#f7f4ef]/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-foreground/80 backdrop-blur">
          {product.availability}
        </span>

        <Link
          href="/wishlist"
          aria-label={`Add ${product.title} to wishlist`}
          className="absolute right-3 top-3 rounded-full bg-[#f7f4ef]/90 p-2 text-foreground/70 backdrop-blur transition hover:text-foreground"
        >
          <Heart className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() =>
            addItem({
              id: `${product.handle}::${variant.title}`,
              name: product.title,
              description: `${variant.title} · ${product.pieces}`,
              price: variant.price,
              image: product.images[0],
            })
          }
          className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#f7f4ef] text-foreground opacity-0 shadow transition duration-300 hover:bg-white group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
          aria-label={`Add ${product.title} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link href={`/product/${product.handle}`}>
            <h3 className="truncate font-serif text-xl leading-tight">{product.title}</h3>
          </Link>
          <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {product.collection}
          </p>
        </div>
        <div className="shrink-0 text-right text-sm">
          <p>{multiplePrices ? "From " : ""}{formatPrice(product.price)}</p>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <p className="text-xs text-muted-foreground line-through">{formatPrice(product.compareAtPrice)}</p>
          )}
        </div>
      </div>
    </article>
  )
}
