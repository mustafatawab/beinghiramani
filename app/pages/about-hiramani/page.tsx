import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { about, site, type AboutParagraph } from "@/lib/data/site"

export const metadata = {
  title: "About",
  description:
    "I am Hira Mani, and this brand is the most personal thing I have ever created. Read the story behind Hira Mani Couture.",
}

function Paragraph({ paragraph }: { paragraph: AboutParagraph }) {
  if (typeof paragraph === "string") {
    return <p>{paragraph}</p>
  }

  const phrase = "Hira Mani Bridal Wear"
  const [before, after] = paragraph.text.split(phrase)

  return (
    <p>
      {before}
      <Link href={paragraph.href} className="underline underline-offset-4 hover:text-foreground">
        {phrase}
      </Link>
      {after}
    </p>
  )
}

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="px-6 pb-16 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">About</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary">About Hiramani Couture</p>
              <h1 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl">
                A feeling,
                <br />
                made to be worn.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              {about.intro[0]}
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.image}
              alt="Hira Mani, founder of Hira Mani Couture"
              className="aspect-[16/9] w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <article className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            {about.intro.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {about.sections.map((section) => (
            <section key={section.heading} className="mt-14 border-t border-border/60 pt-12">
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
                {section.paragraphs.map((paragraph, index) => (
                  <Paragraph
                    key={typeof paragraph === "string" ? paragraph : index}
                    paragraph={paragraph}
                  />
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 rounded-[2rem] bg-card p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Explore the collections</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Find your piece.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/collections/nau-bahar"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground"
              >
                Nau Bahar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/collections/afsanay-2025"
                className="rounded-full border border-foreground/20 px-6 py-3.5 text-sm transition hover:border-foreground/50"
              >
                Afsanay 2025
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Questions? WhatsApp us at{" "}
              <a className="underline underline-offset-4" href={`https://wa.me/${site.whatsapp.number}`}>
                {site.whatsapp.display}
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
