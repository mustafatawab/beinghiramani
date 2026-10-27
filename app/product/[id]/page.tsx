import { notFound } from "next/navigation";
import { Header } from "@/components/boty/header";
import { Footer } from "@/components/boty/footer";
import { ProductDetail } from "@/components/boty/product-detail";
import { getCollectionProducts, getProduct } from "@/lib/shopify";

import {
  getProductByHandle,
  getRelatedProducts,
} from "@/features/products/services/shopify-products";

interface RouteProps {
  params: Promise<{ id: string }>;
}

// 2. Dynamic SEO Metadata Generation using live async Shopify streams
export async function generateMetadata({ params }: RouteProps) {
  const { id } = await params;

  // In Shopify, the 'id' parameter in your URL route maps to the product handle string
  const product = await getProductByHandle(id);

  return {
    title: product
      ? `${product.title} | Hira Mani Couture`
      : "Product not found",
    description: product?.summary ?? "Hira Mani Couture",
    openGraph: product
      ? {
          title: `${product.title} | Hira Mani Couture`,
          description: product.summary,
          images: [{ url: product.images[0] }],
        }
      : undefined,
  };
}

// export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params
//   const product = getProduct(id)
//   return {
//     title: product ? product.title : "Product not found",
//     description: product?.summary ?? "Hira Mani Couture",
//     openGraph: product
//       ? {
//           title: `${product.title} | Hira Mani Couture`,
//           description: product.summary,
//           images: [{ url: product.images[0] }],
//         }
//       : undefined,
//   }
// }

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // const product = getProduct(id)

  const product = await getProductByHandle(id);

  if (!product) notFound();

const related = await getRelatedProducts(product.collectionHandle, product.handle);


  return (
    <main className="min-h-screen">
      <Header />
      <ProductDetail product={product} related={related} />
      <Footer />
    </main>
  );
}
