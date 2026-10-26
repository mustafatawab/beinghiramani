import Link from "next/link"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ContactForm } from "@/components/boty/contact-form"
import { contact } from "@/lib/data/site"

export const metadata = {
  title: "Contact",
  description:
    "Have a question or comment? Contact Hira Mani Couture on Instagram, Facebook, WhatsApp or by email.",
}

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="px-6 pb-24 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Contact Us</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Contact us</p>
              <h1 className="mt-4 font-serif text-5xl leading-[0.95] md:text-7xl">{contact.title}</h1>
              <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">{contact.intro}</p>

              <div className="mt-10 divide-y divide-border/60 border-y border-border/60">
                {contact.channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex flex-col gap-1 py-4 transition hover:text-primary sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {channel.label}
                    </span>
                    <span className="text-sm sm:text-right">{channel.value}</span>
                  </a>
                ))}
              </div>

              <p className="mt-8 text-xs leading-6 text-muted-foreground">
                Returns and order questions are handled at{" "}
                <a href="mailto:hiramani.designs@gmail.com" className="underline underline-offset-4">
                  hiramani.designs@gmail.com
                </a>
                . Our 30-day return policy applies to eligible items.
              </p>
            </div>

            <div className="rounded-[2rem] bg-background p-6 ring-1 ring-border/60 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
