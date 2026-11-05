"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { navLinks, site } from "@/lib/data/site"
import { CartDrawer } from "./cart-drawer"
import { useCart } from "./cart-context"

type NavCollection = {
  handle: string
  title: string
  description: string
  image: string | null
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const [collections, setCollections] = useState<NavCollection[]>([])
  const { setIsOpen, itemCount } = useCart()

  // Fetch the current collections from Shopify (falls back to the local
  // catalogue server-side). Fetched once per full page load.
  useEffect(() => {
    let cancelled = false
    fetch("/api/collections")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!cancelled && Array.isArray(data?.collections)) {
          setCollections(data.collections)
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])


  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 bg-[#2e2926] px-4 py-2 text-center text-[11px] tracking-wide text-[#f7f4ef]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 sm:justify-between">
          <p className="truncate">{site.announcement}</p>
          <a
            href={`https://wa.me/${site.whatsapp.number}`}
            className="hidden shrink-0 items-center gap-2 text-[#f7f4ef]/80 hover:text-[#f7f4ef] sm:flex"
          >
            <span aria-hidden="true">📱</span> WhatsApp: {site.whatsapp.display}
          </a>
        </div>
      </div>

      <header className="fixed inset-x-0 top-[34px] z-40 px-3 sm:px-4">
        <nav className="relative mx-auto max-w-7xl rounded-lg border border-white/40 bg-[#f7f4ef]/90 px-4 backdrop-blur-md sm:px-5">
          <div className="flex h-[68px] items-center justify-between">
            <button
              className="-ml-1 p-2 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navLinks.map((link, index) => (
                <div key={link.href} className="contents">
                  {index === navLinks.length - 2 && (
                    <div
                      className="relative"
                      onMouseEnter={() => setCollectionsOpen(true)}
                      onMouseLeave={() => setCollectionsOpen(false)}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 p-0 text-[11px] tracking-[0.12em] text-foreground/70 hover:text-foreground"
                        aria-expanded={collectionsOpen}
                        onClick={() => setCollectionsOpen((value) => !value)}
                      >
                        COLLECTIONS
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${collectionsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {collectionsOpen && (
                        <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4">
                          <ul className="max-h-80 overflow-y-auto rounded-xl border border-border/70 bg-[#f7f4ef] p-2 shadow-xl">
                            {collections.map((collection) => (
                              <li key={collection.handle}>
                                <Link
                                  href={`/collections/${collection.handle}`}
                                  onClick={() => setCollectionsOpen(false)}
                                  className="block rounded-lg px-3 py-2 text-xs text-foreground/75 hover:bg-card hover:text-foreground"
                                >
                                  {collection.title}
                                </Link>
                              </li>
                            ))}
                            {collections.length === 0 && (
                              <li className="px-3 py-2 text-xs text-muted-foreground">
                                Loading collections…
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  <Link
                    href={link.href}
                    className="text-[11px] tracking-[0.12em] text-foreground/70 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2" aria-label="Hira Mani Couture home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.logo} alt="Hira Mani Couture" className="h-11 w-auto" />
            </Link>

            <div className="flex items-center gap-0.5">
              <Link href="/search" className="p-2" aria-label="Search">
                <Search className="h-5 w-5" />
              </Link>
              <Link href="/wishlist" className="hidden p-2 sm:block" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
              </Link>
              <Link href="/account" className="hidden p-2 sm:block" aria-label="Account">
                <User className="h-5 w-5" />
              </Link>
              <button
                className="relative p-2"
                onClick={() => setIsOpen(true)}
                aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {open && (
            <div className="max-h-[70vh] overflow-y-auto border-t border-border/50 py-5 lg:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-sm tracking-[0.1em]"
                    >
                      {link.name}
                    </Link>
                    {index === navLinks.length - 2 && (
                      <details className="group mt-3">
                        <summary className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground">
                          <ChevronDown className="h-3.5 w-3.5" />
                          Collections
                        </summary>
                        <div className="mt-2 flex flex-col gap-2 border-l border-border/70 pl-4">
                          {collections.map((collection) => (
                            <Link
                              key={collection.handle}
                              href={`/collections/${collection.handle}`}
                              onClick={() => setOpen(false)}
                              className="text-sm text-muted-foreground"
                            >
                              {collection.title}
                            </Link>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-4 border-t border-border/50 pt-4">
                  <Link href="/wishlist" onClick={() => setOpen(false)} className="text-sm">
                    My wishlist
                  </Link>
                  <Link href="/account" onClick={() => setOpen(false)} className="text-sm">
                    My account
                  </Link>
                </div>
                <a
                  href={`https://wa.me/${site.whatsapp.number}`}
                  className="text-sm text-muted-foreground"
                >
                  WhatsApp: {site.whatsapp.display}
                </a>
              </div>
            </div>
          )}

          <CartDrawer />
        </nav>
      </header>
    </>
  )
}
