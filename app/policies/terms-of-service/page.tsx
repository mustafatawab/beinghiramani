import { PolicyPage } from "@/components/boty/policy-page"
import { termsPolicy } from "@/lib/data/policies"

export const metadata = {
  title: "Terms of Service | Hira Mani Couture",
  description: "The terms of service for shopping with Hira Mani Couture.",
}

export default function TermsOfServicePage() {
  return <PolicyPage title={termsPolicy.title} html={termsPolicy.html} />
}
