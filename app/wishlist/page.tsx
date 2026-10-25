import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ProductCard } from "@/components/boty/product-card"
import { featuredProducts } from "@/lib/data/products"
import { site } from "@/lib/data/site"

export const metadata = {
  title: "Wishlist | Hira Mani Couture",
  description: "Hira's favourite pieces from the Nau Bahar collection.",
}

export default function WishlistPage() {
  return (
    <main>
      <Header />

      <section className="px-6 pb-24 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-9 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Wishlist</span>
          </nav>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Saved for later</p>
              <h1 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Your wishlist</h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                Hira&apos;s current favourites, gathered in one place. Tap the heart on any piece and message our
                studio on WhatsApp to reserve it before it sells out.
              </p>
            </div>
            <a
              href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
                "Hello Hira Mani Couture, I would like help with a piece from my wishlist.",
              )}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Ask about a piece
            </a>
          </div>

          <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 5} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-[2rem] bg-card px-6 py-12 text-center">
            <Heart className="h-6 w-6 text-primary" />
            <p className="font-serif text-3xl">Can&apos;t find the piece you loved?</p>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              Browse the full Nau Bahar and Afsanay 2025 collections, or send us a screenshot on Instagram and we
              will help you find it.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/collections/nau-bahar"
                className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground"
              >
                Shop Nau Bahar
              </Link>
              <Link
                href="/collections/afsanay-2025"
                className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm transition hover:border-foreground/50"
              >
                Shop Afsanay 2025
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
