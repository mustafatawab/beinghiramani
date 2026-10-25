import { PolicyPage } from "@/components/boty/policy-page"
import { privacyPolicy } from "@/lib/data/policies"

export const metadata = {
  title: "Privacy Policy | Hira Mani Couture",
  description: "How Hira Mani Couture collects, uses and discloses your personal information.",
}

export default function PrivacyPolicyPage() {
  return <PolicyPage title={privacyPolicy.title} html={privacyPolicy.html} />
}
