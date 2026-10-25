import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { brandStatement } from "@/lib/data/site"

export function FeatureSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-md pb-12 lg:max-w-none lg:pb-16">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brandStatement.images[0].src}
              alt={brandStatement.images[0].alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 right-0 aspect-[3/4] w-[42%] overflow-hidden rounded-[1.75rem] border-[6px] border-background shadow-xl lg:-bottom-4 lg:-right-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brandStatement.images[1].src}
              alt={brandStatement.images[1].alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="mb-4 block text-[11px] uppercase tracking-[0.3em] text-primary">
            The woman behind the label
          </span>
          <h2 className="mb-7 font-serif text-5xl leading-[0.95] md:text-7xl">BY HIRA MANI</h2>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            {brandStatement.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/pages/about-hiramani"
            className="group mt-8 inline-flex items-center gap-3 text-sm underline underline-offset-8"
          >
            Read Hira&apos;s story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
