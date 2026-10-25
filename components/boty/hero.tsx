"use client"

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react"
import Link from "next/link"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react"
import { heroSlides } from "@/lib/data/site"

const AUTOPLAY_MS = 7000

export function Hero() {
  const [index, setIndex] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [userStarted, setUserStarted] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const slide = heroSlides[index]
  const autoplayOff = userPaused || (reducedMotion && !userStarted)

  const go = useCallback((next: number) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (autoplayOff || hovered) return

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, AUTOPLAY_MS)

    return () => window.clearTimeout(timer)
  }, [index, autoplayOff, hovered])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      go(index - 1)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      go(index + 1)
    } else if (event.key === "Home") {
      event.preventDefault()
      go(0)
    } else if (event.key === "End") {
      event.preventDefault()
      go(heroSlides.length - 1)
    }
  }

  return (
    <section
      id="home-hero"
      aria-roledescription="carousel"
      aria-label="Hira Mani Couture featured pieces"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setHovered(false)}
      onTouchStart={(event) => {
        touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current
        touchStart.current = null
        if (!start) return

        const dx = event.changedTouches[0].clientX - start.x
        const dy = event.changedTouches[0].clientY - start.y
        if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return
        go(index + (dx < 0 ? 1 : -1))
      }}
      className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white focus-visible:outline-none"
    >
      <h1 className="sr-only">
        Hira Mani Couture — handcrafted Pakistani designer wear, Nau Bahar and Afsanay 2025
      </h1>

      <div className="absolute inset-0">
        {heroSlides.map((item, slideIndex) => {
          const active = slideIndex === index
          const imageStyle = {
            "--hero-position-mobile": item.mobilePosition,
            "--hero-position-desktop": item.desktopPosition,
          } as CSSProperties

          return (
            <div
              key={item.title}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              <picture>
                <source media="(min-width: 768px)" srcSet={item.desktop} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.mobile}
                  alt={item.alt}
                  draggable={false}
                  fetchPriority={slideIndex === 0 ? "high" : "low"}
                  loading="eager"
                  style={imageStyle}
                  className={`hero-image h-full w-full object-cover ${active ? "hero-zoom" : ""}`}
                />
              </picture>
            </div>
          )
        })}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-32 sm:px-8 sm:pb-7 lg:px-12 lg:pb-8 lg:pt-40">
        <p className="sr-only" aria-live="polite">
          {`Slide ${index + 1} of ${heroSlides.length}: ${slide.title}`}
        </p>

        <div key={`${slide.title}-copy`} className="animate-blur-in max-w-[46rem]">
          <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-white/75 sm:text-[11px]">
            <span aria-hidden="true" className="h-px w-7 bg-white/50 sm:w-10" />
            {slide.eyebrow}
          </p>

          <h2 className="mt-4 font-serif text-[clamp(3.75rem,9vw,8.5rem)] font-normal leading-[0.85] tracking-[-0.03em] text-white sm:mt-5">
            {slide.title}
          </h2>

          <p className="mt-5 max-w-md text-[13px] leading-relaxed text-white/75 sm:mt-6 sm:text-sm md:text-[15px]">
            {slide.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <Link
              href={slide.primary.href}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#f7f4ef] px-6 py-3.5 text-[12px] uppercase tracking-[0.14em] text-[#2c2c2c] transition duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:py-4"
            >
              {slide.primary.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={slide.secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-[12px] uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-300 hover:border-white/70 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:py-4"
            >
              {slide.secondary.label}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-4 sm:mt-14 sm:pt-5 lg:mt-16">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-[10px] tracking-[0.28em] text-white/85 tabular-nums">
                {String(index + 1).padStart(2, "0")}
                <span className="ml-1.5 text-white/40">/ {String(heroSlides.length).padStart(2, "0")}</span>
              </span>

              <div className="flex items-center gap-1.5 sm:gap-2" role="group" aria-label="Choose a slide">
                {heroSlides.map((item, slideIndex) => {
                  const active = slideIndex === index
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => go(slideIndex)}
                      aria-label={`Go to slide ${slideIndex + 1}: ${item.title}`}
                      aria-current={active ? "true" : undefined}
                      className="group flex h-7 items-center px-0.5"
                    >
                      <span
                        className={`block h-px transition-all duration-500 ${
                          active ? "w-10 bg-white sm:w-14" : "w-4 bg-white/35 group-hover:bg-white/70 sm:w-6"
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="#shop-favorites"
                className="group mr-2 hidden items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/65 transition hover:text-white md:inline-flex"
              >
                Scroll to explore
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <span aria-hidden="true" className="mr-1 hidden h-5 w-px bg-white/20 md:block" />

              <button
                type="button"
                onClick={() => {
                  if (autoplayOff) {
                    setUserPaused(false)
                    setUserStarted(true)
                    setHovered(false)
                  } else {
                    setUserPaused(true)
                  }
                }}
                aria-label={autoplayOff ? "Play automatic slideshow" : "Pause automatic slideshow"}
                aria-pressed={autoplayOff}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-white/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-10 sm:w-10"
              >
                {autoplayOff ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/50 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-10 sm:w-10"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/50 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-10 sm:w-10"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
