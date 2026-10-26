import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Hira Mani Couture selection and send your order to the studio on WhatsApp.",
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children
}
