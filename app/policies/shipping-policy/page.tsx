import { PolicyPage } from "@/components/boty/policy-page"
import { shippingPolicy } from "@/lib/data/site"

export const metadata = {
  title: "Shipping Policy",
  description: "Delivery times, risk and order tracking for Hira Mani Couture orders.",
}

export default function ShippingPolicyPage() {
  const html = shippingPolicy.sections
    .map(
      (section) =>
        `<h2>${section.heading}</h2>${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}`,
    )
    .join("")

  return <PolicyPage title={shippingPolicy.title} html={html} />
}
