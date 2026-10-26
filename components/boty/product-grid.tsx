import Link from "next/link"
import { featuredProducts } from "@/lib/data/products"
import { ProductCard } from "./product-card"

export function ProductGrid() {
  return (
    <section id="shop-favorites" className="scroll-mt-20 bg-card py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-[11px] uppercase tracking-[0.3em] text-primary">Hira&apos;s edit</span>
            <h2 className="font-serif text-4xl md:text-5xl">Shop Hira&apos;s Favorites</h2>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/collections" className="text-sm underline underline-offset-8">
              All collections
            </Link>
            <Link href="/collections/all" className="text-sm underline underline-offset-8">
              View all pieces
            </Link>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-6 border-b border-border/60 pb-4 text-xs uppercase tracking-[0.14em]">
          <span className="border-b-2 border-foreground pb-4">All</span>
          <Link href="/collections/nau-bahar" className="pb-4 text-muted-foreground hover:text-foreground">
            Nau Bahar
          </Link>
          <Link href="/collections/afsanay-2025" className="pb-4 text-muted-foreground hover:text-foreground">
            Afsanay 2025
          </Link>
        </div>

        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
