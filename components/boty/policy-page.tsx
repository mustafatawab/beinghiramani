import Link from "next/link"
import { Header } from "./header"
import { Footer } from "./footer"

export function PolicyPage({ title, html }: { title: string; html: string }) {
  return (
    <main>
      <Header />
      <section className="px-6 pb-24 pt-[150px] lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{title}</span>
          </nav>

          <h1 className="font-serif text-4xl capitalize md:text-6xl">{title}</h1>
          <div className="policy-content mt-10" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
