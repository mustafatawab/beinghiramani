import { notFound } from "next/navigation"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ProductDetail } from "@/components/boty/product-detail"
import { getCollectionProducts, getProduct, products } from "@/lib/shopify"

export function generateStaticParams() {
  return products.map((product) => ({ handle: product.handle }))
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = getProduct(handle)
  return {
    title: product ? product.title : "Product not found",
    description: product?.summary ?? "Hira Mani Couture",
    openGraph: product
      ? {
          title: `${product.title} | Hira Mani Couture`,
          description: product.summary,
          images: [{ url: product.images[0] }],
        }
      : undefined,
  }
}

export default async function ProductByHandlePage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const product = getProduct(handle)
  if (!product) notFound()

  const related = getCollectionProducts(product.collectionHandle)
    .filter((item) => item.handle !== product.handle)
    .slice(0, 4)

  return (
    <main className="min-h-screen">
      <Header />
      <ProductDetail product={product} related={related} />
      <Footer />
    </main>
  )
}
