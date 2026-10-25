"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { ProductCard } from "@/components/boty/product-card"
import { products, searchProducts } from "@/lib/data/products"

export function SearchClient() {
  const [query, setQuery] = useState("")
  const results = useMemo(() => (query.trim() ? searchProducts(query) : products), [query])

  return (
    <section className="px-6 pb-24 pt-[150px] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Search</p>
        <h1 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Search the collection</h1>

        <div className="relative mt-9 max-w-2xl">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            aria-label="Search products"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, fabric or collection"
            autoFocus
            className="w-full rounded-full border border-border bg-card py-4 pl-14 pr-5"
          />
        </div>

        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {query.trim()
            ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query.trim()}”`
            : "All pieces"}
        </p>

        {results.length > 0 ? (
          <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif text-3xl">No pieces found.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Try another name, or browse the{" "}
              <Link href="/collections/nau-bahar" className="underline underline-offset-4">
                Nau Bahar
              </Link>{" "}
              collection.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
