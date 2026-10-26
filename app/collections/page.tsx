import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { collections } from "@/lib/data/products"
import { site } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore every Hira Mani Couture collection — Nau Bahar festive lawn, Afsanay 2025 bridal wear and the individual couture pieces.",
}

const PER_PAGE = 9

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const list = collections.filter((collection) => collection.handle !== "all")
  const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE))
  const requestedPage = Number.parseInt(pageParam ?? "1", 10)
  const page = Number.isNaN(requestedPage) ? 1 : Math.min(Math.max(requestedPage, 1), totalPages)
  const visible = list.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <main className="min-h-screen">
      <Header />

      <section className="px-6 pb-24 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-9 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Collections</span>
          </nav>

          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">The house of Hira Mani</p>
            <h1 className="mt-3 font-serif text-5xl leading-none md:text-7xl">Collections</h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Festive lawn, bridal couture and one-of-a-kind pieces — every collection is handcrafted in our studio
              and designed to be worn for years to come.
            </p>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((collection, index) => {
              const count = collection.products.length
              return (
                <Link
                  key={collection.handle}
                  href={`/collections/${collection.handle}`}
                  className="group block"
                  aria-label={`Shop ${collection.title}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card">
                    {collection.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={collection.image}
                        alt={`${collection.title} by Hira Mani Couture`}
                        loading={index < 3 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#e9e3da]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={site.logo}
                          alt="Hira Mani Couture"
                          className="h-20 w-auto opacity-60"
                        />
                      </div>
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-[#f7f4ef]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-foreground backdrop-blur">
                      {count === 0 ? "Coming soon" : `${count} ${count === 1 ? "piece" : "pieces"}`}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ef] text-foreground opacity-0 transition duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="px-2 pt-5 text-center">
                    <h2 className="font-serif text-2xl md:text-[1.7rem]">{collection.title}</h2>
                    <p className="mx-auto mt-2 line-clamp-2 max-w-sm text-sm leading-6 text-muted-foreground">
                      {collection.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
                      Shop the collection
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {totalPages > 1 && (
            <nav aria-label="Collections pagination" className="mt-16 flex items-center justify-center gap-2">
              {page > 1 ? (
                <Link
                  href={page === 2 ? "/collections" : `/collections?page=${page - 1}`}
                  aria-label="Previous page"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-foreground/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground/40">
                  <ChevronLeft className="h-4 w-4" />
                </span>
              )}

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                <Link
                  key={number}
                  href={number === 1 ? "/collections" : `/collections?page=${number}`}
                  aria-current={number === page ? "page" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition ${
                    number === page
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground/50"
                  }`}
                >
                  {number}
                </Link>
              ))}

              {page < totalPages ? (
                <Link
                  href={`/collections?page=${page + 1}`}
                  aria-label="Next page"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-foreground/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 text-muted-foreground/40">
                  <ChevronRight className="h-4 w-4" />
                </span>
              )}
            </nav>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
