import Link from "next/link"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ProductCard } from "@/components/boty/product-card"
import { getCollection, getCollectionProducts, products } from "@/lib/shopify"

export const metadata = {
  title: "Shop",
  description: "Explore the Nau Bahar and Afsanay 2025 collections by Hira Mani Couture.",
}

export default function ShopPage({ collectionHandle }: { collectionHandle?: string }) {
  const collection = collectionHandle ? getCollection(collectionHandle) : undefined
  const list = collectionHandle ? getCollectionProducts(collectionHandle) : products
  const title = collection?.title ?? "Shop Hira's Favorites"
  const description =
    collection?.description ?? "Every piece from Hira Mani Couture, handcrafted and carefully curated."

  const isFlagshipCollection =
    !collectionHandle || ["all", "nau-bahar", "afsanay-2025"].includes(collectionHandle)

  const tabs = [
    { label: "All", href: "/collections/all", active: collectionHandle === "all" || !collectionHandle },
    { label: "Nau Bahar", href: "/collections/nau-bahar", active: collectionHandle === "nau-bahar" },
    { label: "Afsanay 2025", href: "/collections/afsanay-2025", active: collectionHandle === "afsanay-2025" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="px-6 pb-20 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-9 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/collections" className="hover:text-foreground">Collections</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{title}</span>
          </nav>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
                {collectionHandle && collectionHandle !== "all" ? "Collection" : "The collection"}
              </p>
              <h1 className="mt-3 font-serif text-5xl leading-none md:text-6xl">{title}</h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{description}</p>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {list.length} {list.length === 1 ? "piece" : "pieces"}
            </p>
          </div>

          {isFlagshipCollection ? (
            <div className="mt-9 flex flex-wrap gap-6 border-b border-border/60 pb-4 text-xs uppercase tracking-[0.14em]">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  aria-current={tab.active ? "page" : undefined}
                  className={
                    tab.active
                      ? "border-b-2 border-foreground pb-4"
                      : "pb-4 text-muted-foreground hover:text-foreground"
                  }
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4 text-xs uppercase tracking-[0.14em]">
              <Link href="/collections" className="text-muted-foreground hover:text-foreground">
                ← All collections
              </Link>
              <Link href="/collections/all" className="text-muted-foreground hover:text-foreground">
                View all pieces
              </Link>
            </div>
          )}

          {list.length > 0 ? (
            <div
              className={
                list.length === 1
                  ? "mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-12"
                  : list.length === 2
                    ? "mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2"
                    : "mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }
            >
              {list.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 4} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-serif text-3xl">Nothing here yet.</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Explore the{" "}
                <Link href="/collections/nau-bahar" className="underline underline-offset-4">Nau Bahar</Link>{" "}
                collection instead.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
