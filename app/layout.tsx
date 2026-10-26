import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/boty/cart-context"
import { ConciergeLauncher } from "@/components/boty/concierge-launcher"
import { site } from "@/lib/data/site"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL("https://beinghiramani.com"),
  title: {
    default: "Hira Mani Couture",
    template: "%s | Hira Mani Couture",
  },
  description: site.description,
  keywords: [
    "Hira Mani Couture",
    "Hira Mani",
    "Pakistani designer wear",
    "Nau Bahar",
    "Afsanay 2025",
    "bridal wear",
    "festive lawn",
  ],
  openGraph: {
    siteName: site.name,
    title: "Hira Mani Couture",
    description: site.description,
    type: "website",
    url: "/",
    images: [{ url: site.logoSquare, width: 1080, height: 1080, alt: "Hira Mani Couture" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hira Mani Couture",
    description: site.description,
    images: [site.logoSquare],
  },
}

export const viewport: Viewport = { themeColor: "#F7F4EF" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <ConciergeLauncher />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
