import { notFound } from "next/navigation";
import ShopPage from "@/app/shop/page";
import { collections, getCollection } from "@/lib/shopify";
import {
  getCollectionByHandle,
  getStorefrontCollections,
} from "@/features/products/services/shopify-products";

interface RouteParams {
  params: Promise<{ handle: string }>;
}

// export function generateStaticParams() {
//   return collections.map((collection) => ({ handle: collection.handle }))
// }

// 1. Generate path segments dynamically matching live Shopify dashboard handles
export async function generateStaticParams() {
  try {
    const collections = await getStorefrontCollections();
    return collections.map((collection) => ({ handle: collection.handle }));
  } catch (error) {
    console.error("Failed generating static routes:", error);
    return [];
  }
}

// export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
//   const { handle } = await params
//   const collection = getCollection(handle)
//   return {
//     title: collection?.title ?? "Collection",
//     description: collection?.description ?? "Explore Hira Mani Couture collections.",
//   }
// }

// 2. Fetch metadata titles asynchronously directly from the Shopify API
export async function generateMetadata({ params }: RouteParams) {
  const { handle } = await params;
  const collection = await getCollectionByHandle(handle, 1);

  return {
    title: collection?.title ?? "Collection",
    description:
      collection?.description ?? "Explore Hira Mani Couture collections.",
  };
}

// export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
//   const { handle } = await params
//   if (!getCollection(handle)) notFound()
//   return <ShopPage collectionHandle={handle} />
// }

// 3. Main server component rendering target item nodes
export default async function CollectionPage({ params }: RouteParams) {
  const { handle } = await params;

  // Validate the collection exists in Shopify before rendering
  const collection = await getCollectionByHandle(handle, 1);
  if (!collection) {
    notFound();
  }

  return <ShopPage collectionHandle={handle} />;
}
