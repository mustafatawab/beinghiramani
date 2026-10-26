import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Instagram } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { Newsletter } from "@/components/boty/newsletter"
import { brandStatement, site } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "News",
  description:
    "Stories from the Hira Mani Couture atelier — collection notes, craftsmanship and the moments behind each piece.",
}

const quickLinks = [
  {
    label: "Explore the collections",
    description: "Nau Bahar festive lawn and Afsanay 2025 bridal couture.",
    href: "/collections",
  },
  {
    label: "The house of Hira Mani",
    description: "The story, the craft and the promise behind every piece.",
    href: "/pages/about-hiramani",
  },
  {
    label: "Talk to the studio",
    description: "Sizing, fabrics and made-to-order questions, answered personally.",
    href: "/pages/contact",
  },
]

export default function NewsPage() {
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
            <span className="text-foreground">News</span>
          </nav>

          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">The Hira Mani Journal</p>
            <h1 className="mt-3 font-serif text-5xl leading-none md:text-7xl">News</h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Collection notes, studio diaries and the craft behind each piece. The first story is being written —
              subscribe below and we will let you know when it is ready.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-card lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <span className="w-fit rounded-full border border-foreground/15 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                From the atelier
              </span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
                The first story is being written.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
                Journal entries on fabric, embroidery and the women who wear Hira Mani will live here. In the
                meantime, step inside the collections or follow the studio on Instagram for the latest.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground transition hover:bg-primary/90"
                >
                  Explore the collections
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-foreground/20 px-6 py-3.5 text-sm transition hover:border-foreground/50"
                >
                  <Instagram className="h-4 w-4" />
                  Follow the studio
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[340px] lg:min-h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brandStatement.images[1].src}
                alt={brandStatement.images[1].alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-[10px] uppercase tracking-[0.24em] text-white/75">
                Hira Mani Couture · Karachi
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-border/60 pt-10 md:grid-cols-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group block">
                <span className="flex items-center justify-between gap-4 font-serif text-2xl">
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
