import Link from "next/link"
import { ArrowRight, Mail, MessageCircle, PackageSearch } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { site } from "@/lib/data/site"

export const metadata = {
  title: "My Account",
  description: "Order updates and customer care for Hira Mani Couture.",
}

const actions = [
  {
    icon: PackageSearch,
    title: "Track your order",
    description: "Share your order number and our team will send you the latest delivery update.",
    href: "/track-order",
    label: "Track an order",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp our studio",
    description: "Sizing, fabric and order questions answered directly by the studio.",
    href: `https://wa.me/${site.whatsapp.number}`,
    label: `WhatsApp ${site.whatsapp.display}`,
  },
  {
    icon: Mail,
    title: "Email customer care",
    description: "Returns, exchanges and order changes are handled by email.",
    href: `mailto:${site.email}`,
    label: site.email,
  },
]

export default function AccountPage() {
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
            <span className="text-foreground">My Account</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Customer care</p>
            <h1 className="mt-3 font-serif text-5xl leading-none md:text-7xl">My account</h1>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Hira Mani Couture orders are personally confirmed by our studio. Use the options below for order
              updates, sizing help and after-sales care.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {actions.map((action) => (
              <a
                key={action.title}
                href={action.href}
                className="group flex flex-col rounded-[2rem] bg-card p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <action.icon className="h-6 w-6 text-primary" />
                <h2 className="mt-5 font-serif text-2xl">{action.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{action.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4">
                  {action.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-14 grid gap-8 border-t border-border/60 pt-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl">New to Hira Mani Couture?</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Explore the Nau Bahar festive lawn collection and Afsanay 2025 bridal wear, then message the studio
                to place your order.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/collections/nau-bahar"
                  className="rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground"
                >
                  Shop Nau Bahar
                </Link>
                <Link
                  href="/collections/afsanay-2025"
                  className="rounded-full border border-foreground/20 px-6 py-3.5 text-sm"
                >
                  Shop Afsanay 2025
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] bg-card p-7">
              <h2 className="font-serif text-2xl">Studio details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">WhatsApp</dt>
                  <dd className="mt-1">{site.whatsapp.display}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Email</dt>
                  <dd className="mt-1">{site.email}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Studio</dt>
                  <dd className="mt-1 leading-6">{site.address}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
