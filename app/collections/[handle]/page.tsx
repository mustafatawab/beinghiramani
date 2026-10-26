import { notFound } from "next/navigation"
import ShopPage from "@/app/shop/page"
import { collections, getCollection } from "@/lib/shopify"

export function generateStaticParams() {
  return collections.map((collection) => ({ handle: collection.handle }))
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const collection = getCollection(handle)
  return {
    title: collection?.title ?? "Collection",
    description: collection?.description ?? "Explore Hira Mani Couture collections.",
  }
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  if (!getCollection(handle)) notFound()
  return <ShopPage collectionHandle={handle} />
}
