import type { MetadataRoute } from "next"
import { products } from "@/lib/data/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/shop",
    "/collections/nau-bahar",
    "/collections/afsanay-2025",
    "/collections/all",
    "/pages/about-hiramani",
    "/pages/contact",
    "/policies/privacy-policy",
    "/policies/refund-policy",
    "/policies/shipping-policy",
    "/policies/terms-of-service",
  ]

  return [
    ...staticPaths.map((path) => ({
      url: `https://beinghiramani.com${path}`,
      lastModified: new Date(),
    })),
    ...products.map((product) => ({
      url: `https://beinghiramani.com/products/${product.handle}`,
      lastModified: new Date(),
      images: product.images,
    })),
  ]
}
