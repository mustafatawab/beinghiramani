import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { site } from "@/lib/data/site"

const shopLinks = [
  ["Home", "/"],
  ["Nau Bahar", "/collections/nau-bahar"],
  ["Afsanay 2025", "/collections/afsanay-2025"],
  ["About", "/pages/about-hiramani"],
  ["Contact Us", "/pages/contact"],
]

const informationLinks = [
  ["Privacy Policy", "/policies/privacy-policy"],
  ["Refund Policy", "/policies/refund-policy"],
  ["Shipping Policy", "/policies/shipping-policy"],
  ["Terms of Service", "/policies/terms-of-service"],
]

const customerLinks = [
  ["My Account", "/account"],
  ["My Orders", "/account"],
  ["Track your Order", "/track-order"],
  ["Contact Us", "/pages/contact"],
  ["Profile", "/account"],
]

export function Footer() {
  return (
    <footer className="bg-[#1f1c1a] text-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Hira Mani Couture home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={site.logo} alt="Hira Mani Couture" className="mb-5 h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-[#f7f4ef]/60">{site.tagline}</p>
            <div className="flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f7f4ef]/10 p-3 transition hover:bg-[#f7f4ef]/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f7f4ef]/10 p-3 transition hover:bg-[#f7f4ef]/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-[#f7f4ef]/60">
              <p>
                <a href={`https://wa.me/${site.whatsapp.number}`} className="hover:text-[#f7f4ef]">
                  WhatsApp: {site.whatsapp.display}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-[#f7f4ef]">
                  {site.email}
                </a>
              </p>
              <p className="max-w-xs leading-relaxed">{site.address}</p>
            </div>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Information" links={informationLinks} />
          <FooterColumn title="Customer Service" links={customerLinks} />
        </div>
      </div>

      <div className="border-t border-[#f7f4ef]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-[#f7f4ef]/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2025 BEING HIRA MANI.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="uppercase tracking-[0.18em]">Payment methods</span>
            {site.paymentMethods.map((method) => (
              <span key={method} className="rounded border border-[#f7f4ef]/15 px-2 py-1">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#f7f4ef]">{title}</h3>
      <ul className="space-y-3">
        {links.map(([name, href]) => (
          <li key={`${title}-${name}`}>
            <Link href={href} className="text-sm text-[#f7f4ef]/60 transition hover:text-[#f7f4ef]">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
