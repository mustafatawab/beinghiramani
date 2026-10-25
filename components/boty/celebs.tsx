import Link from "next/link"
import { Instagram } from "lucide-react"
import { celebrityImages, site } from "@/lib/data/site"

export function Celebs() {
  return (
    <section className="overflow-hidden bg-card py-20" aria-labelledby="celebs-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Follow along</span>
          <h2 id="celebs-heading" className="font-serif text-4xl md:text-5xl">
            CELEBS IN @HIRAMANICOUTURE
          </h2>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm underline underline-offset-8"
          >
            <Instagram className="h-4 w-4" /> {site.instagramHandle}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {celebrityImages.map((image, index) => (
            <Link
              key={image.src}
              href={image.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                  index % 2 === 0 ? "aspect-[4/5]" : "aspect-[3/4]"
                }`}
              />
              <span className="absolute inset-0 bg-[#2e2926]/0 transition group-hover:bg-[#2e2926]/20" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
