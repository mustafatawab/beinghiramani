import {
  collections,
  featuredProducts,
  getCollection,
  getCollectionProducts,
  getProduct,
  getProducts,
  products,
  searchProducts,
} from "./data/products"

export {
  collections,
  featuredProducts,
  getCollection,
  getCollectionProducts,
  getProduct,
  getProducts,
  products,
  searchProducts,
}

export function getCollections() {
  return collections
}

export function getHomepageContent() {
  return {
    eyebrow: "Pre-orders live",
    title: "Nau Bahar",
    description: "Festive silhouettes, rooted in tradition and designed for today.",
    values: [
      "Rooted in tradition, designed for today",
      "Luxury that belongs to every woman",
      "Bridal wear, a promise for your most important day",
      "More than a brand, a feeling",
    ],
  }
}
