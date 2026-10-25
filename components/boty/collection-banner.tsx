import Link from "next/link"
import { collectionSlides } from "@/lib/data/site"

export function CollectionBanner() {
  const slide = collectionSlides[0]

  return (
    <section className="bg-background">
      <Link href={slide.href} className="block" aria-label={slide.alt}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={slide.desktop} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.mobile} alt={slide.alt} loading="lazy" className="h-auto w-full object-cover" />
        </picture>
      </Link>
    </section>
  )
}
