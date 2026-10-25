import { PolicyPage } from "@/components/boty/policy-page"
import { refundPolicy } from "@/lib/data/policies"

export const metadata = {
  title: "Refund Policy | Hira Mani Couture",
  description: "Hira Mani Couture's 30-day return and refund policy.",
}

export default function RefundPolicyPage() {
  return <PolicyPage title={refundPolicy.title} html={refundPolicy.html} />
}
