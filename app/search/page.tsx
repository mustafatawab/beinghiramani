import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { SearchClient } from "@/components/boty/search-client"

export const metadata = {
  title: "Search",
  description: "Search Hira Mani Couture by name, fabric or collection.",
}

export default function SearchPage() {
  return (
    <main>
      <Header />
      <SearchClient />
      <Footer />
    </main>
  )
}
