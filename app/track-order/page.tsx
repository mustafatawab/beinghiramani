import Link from "next/link"
import { PackageSearch } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { TrackOrderForm } from "@/components/boty/track-order-form"
import { site } from "@/lib/data/site"

export const metadata = {
  title: "Track Your Order | Hira Mani Couture",
  description: "Track your Hira Mani Couture order with the studio on WhatsApp.",
}

export default function TrackOrderPage() {
  return (
    <main>
      <Header />

      <section className="px-6 pb-24 pt-[150px] lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <nav aria-label="Breadcrumb" className="mb-9 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Track your order</span>
            </nav>

            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Order updates</p>
            <h1 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Track your order</h1>
            <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
              Enter your order number and we will open WhatsApp with your details ready to send. Our studio will
              reply with the latest status of your piece.
            </p>

            <div className="mt-8 rounded-[2rem] bg-card p-6">
              <div className="flex items-center gap-3">
                <PackageSearch className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium">Order not confirmed yet?</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Orders are confirmed personally on WhatsApp. If you have not received a confirmation, message us at{" "}
                <a href={`https://wa.me/${site.whatsapp.number}`} className="underline underline-offset-4">
                  {site.whatsapp.display}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-background p-7 ring-1 ring-border/60 sm:p-9">
            <TrackOrderForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
