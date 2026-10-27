import type { MetadataRoute } from "next"
import { collections, products } from "@/lib/data/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/shop",
    "/collections",
    "/blogs/news",
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
    ...collections.map((collection) => ({
      url: `https://beinghiramani.com/collections/${collection.handle}`,
      lastModified: new Date(),
      images: collection.image ? [collection.image] : undefined,
    })),
    ...products.map((product) => ({
      url: `https://beinghiramani.com/product/${product.handle}`,
      lastModified: new Date(),
      images: product.images,
    })),
  ]
}
