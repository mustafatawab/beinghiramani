import { notFound } from "next/navigation"
import ShopPage from "@/app/shop/page"
import { getCollection } from "@/lib/shopify"

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const collection = getCollection(handle)
  return {
    title: collection ? `${collection.title} | Hira Mani Couture` : "Collection | Hira Mani Couture",
    description: collection?.description ?? "Explore Hira Mani Couture collections.",
  }
}

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  if (!getCollection(handle)) notFound()
  return <ShopPage collectionHandle={handle} />
}
