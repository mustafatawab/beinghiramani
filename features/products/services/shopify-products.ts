// src/features/products/services/shopify-products.ts

import { shopifyClient } from '@/lib/shopify-client';
import type { Product, ProductVariant, Collection } from '@/lib/data/products';

// 1. Define the actual complete query string
const GET_ALL_PRODUCTS_QUERY = `
  query getAllProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          productType
          tags
          availableForSale
          collections(first: 1) {
            edges {
              node {
                title
                handle
              }
            }
          }
          images(first: 10) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 50) {
            edges {
              node {
                title
                sku
                availableForSale
                price {
                  amount
                }
                compareAtPrice {
                  amount
                }
              }
            }
          }
          options {
            name
            values
          }
          fabric: metafield(namespace: "custom", key: "fabric") { value }
          pieces: metafield(namespace: "custom", key: "pieces") { value }
          delivery: metafield(namespace: "custom", key: "delivery") { value }
        }
      }
    }
  }
`;


const GET_COLLECTIONS_WITH_PRODUCTS_QUERY = `
  query getCollectionsWithProducts($firstProducts: Int!) {
    collections(first: 10) {
      edges {
        node {
          title
          handle
          description
          image {
            url
          }
          products(first: $firstProducts) {
            edges {
              node {
                id
                handle
                title
                description
                descriptionHtml
                productType
                tags
                availableForSale
                collections(first: 1) {
                  edges {
                    node {
                      title
                      handle
                    }
                  }
                }
                images(first: 10) {
                  edges {
                    node {
                      url
                    }
                  }
                }
                variants(first: 50) {
                  edges {
                    node {
                      title
                      sku
                      availableForSale
                      price { amount }
                      compareAtPrice { amount }
                    }
                  }
                }
                options {
                  name
                  values
                }
                fabric: metafield(namespace: "custom", key: "fabric") { value }
                pieces: metafield(namespace: "custom", key: "pieces") { value }
                delivery: metafield(namespace: "custom", key: "delivery") { value }
              }
            }
          }
        }
      }
    }
  }
`;



const GET_SINGLE_COLLECTION_QUERY = `
  query getCollectionByHandle($handle: String!, $firstProducts: Int!) {
    collection(handle: $handle) {
      title
      handle
      description
      image {
        url
      }
      products(first: $firstProducts) {
        edges {
          node {
            id
            handle
            title
            description
            descriptionHtml
            productType
            tags
            availableForSale
            collections(first: 1) {
              edges {
                node {
                  title
                  handle
                }
              }
            }
            images(first: 10) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 50) {
              edges {
                node {
                  title
                  sku
                  availableForSale
                  price { amount }
                  compareAtPrice { amount }
                }
              }
            }
            options {
              name
              values
            }
            fabric: metafield(namespace: "custom", key: "fabric") { value }
            pieces: metafield(namespace: "custom", key: "pieces") { value }
            delivery: metafield(namespace: "custom", key: "delivery") { value }
          }
        }
      }
    }
  }
`;

const GET_SINGLE_PRODUCT_BY_HANDLE_QUERY = `
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      productType
      tags
      availableForSale
      collections(first: 1) {
        edges {
          node {
            title
            handle
          }
        }
      }
      images(first: 20) {
        edges {
          node {
            url
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            sku
            availableForSale
            price {
              amount
            }
            compareAtPrice {
              amount
            }
          }
        }
      }
      options {
        name
        values
      }
      fabric: metafield(namespace: "custom", key: "fabric") { value }
      pieces: metafield(namespace: "custom", key: "pieces") { value }
      delivery: metafield(namespace: "custom", key: "delivery") { value }
    }
  }
`;

const CREATE_CHECKOUT_MUTATION = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        webUrl
      }
      checkoutUserErrors {
        field
        message
      }
    }
  }
`;


interface CartItemInput {
  variantSku?: string;
  title: string;
  quantity: number;
}



export async function createShopifyCheckout(variantsData: Array<{ variantId: string; quantity: number }>): Promise<string | null> {
  const lineItems = variantsData.map(item => ({
    variantId: item.variantId,
    quantity: item.quantity
  }));

  try {
    const data = await shopifyClient<{ checkoutCreate: { checkout: { webUrl: string }; checkoutUserErrors: any[] } }>({
      query: CREATE_CHECKOUT_MUTATION,
      variables: { input: { lineItems } }
    });

    if (data.checkoutCreate?.checkoutUserErrors?.length > 0) {
      console.error("Checkout validation error:", data.checkoutCreate.checkoutUserErrors);
      return null;
    }

    return data.checkoutCreate?.checkout?.webUrl || null;
  } catch (error) {
    console.error("Failed creating web checkout token portal:", error);
    return null;
  }
}


export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyClient<{ product: any }>({
    query: GET_SINGLE_PRODUCT_BY_HANDLE_QUERY, // This is the query we created in the previous step
    variables: { handle },
    tags: [`product:${handle}`]
  });

  if (!data?.product) return null;

  return transformShopifyProduct(data.product);
}




export async function getRelatedProducts(collectionHandle: string, currentProductHandle: string): Promise<Product[]> {
  const data = await shopifyClient<{ collection: any }>({
    query: `
      query getRelated($handle: String!, $limit: Int!) {
        collection(handle: $handle) {
          products(first: $limit) {
            edges {
              node {
                id
                handle
                title
                description
                descriptionHtml
                productType
                tags
                availableForSale
                collections(first: 1) { edges { node { title handle } } }
                images(first: 5) { edges { node { url } } }
                variants(first: 20) { edges { node { title sku availableForSale price { amount } compareAtPrice { amount } } } }
                options { name values }
                fabric: metafield(namespace: "custom", key: "fabric") { value }
                pieces: metafield(namespace: "custom", key: "pieces") { value }
                delivery: metafield(namespace: "custom", key: "delivery") { value }
              }
            }
          }
        }
      }
    `,
    variables: { handle: collectionHandle, limit: 10 },
    tags: [`collection:${collectionHandle}`]
  });

  if (!data?.collection?.products?.edges) return [];

  return data.collection.products.edges
    .map(({ node }: any) => transformShopifyProduct(node))
    .filter((item: Product) => item.handle !== currentProductHandle)
    .slice(0, 4); // Keep exactly 4 related pieces
}


// Look for this section inside transformShopifyProduct within shopify-products.ts
function transformShopifyProduct(node: any): Product {
  const variants: ProductVariant[] = node.variants.edges.map(({ node: v }: any) => ({
    id: v.id,
    title: v.title,
    price: parseFloat(v.price.amount),
    compareAtPrice: v.compareAtPrice ? parseFloat(v.compareAtPrice.amount) : null,
    sku: v.sku || null,
    available: v.availableForSale,
  }));

  const images: string[] = node.images.edges.map(({ node: img }: any) => img.url);
  const primaryCollection = node.collections.edges?.[0]?.node; // Fixed array bracket safely

  // Expert Fix: Access the first element [0] of the variants array!
  const basePrice = variants.length > 0 ? variants[0].price : 0;
  const baseComparePrice = variants.length > 0 ? variants[0].compareAtPrice : null;

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    summary: node.description ? node.description.substring(0, 120) + '...' : '',
    description: node.description || '',
    descriptionHtml: node.descriptionHtml || '',
    productType: node.productType || '',
    price: basePrice,
    compareAtPrice: baseComparePrice,
    collection: (primaryCollection?.title || 'Nau Bahar') as "Nau Bahar" | "Afsanay 2025",
    collectionHandle: (primaryCollection?.handle || 'nau-bahar') as "nau-bahar" | "afsanay-2025",
    fabric: node.fabric?.value || 'Premium Lawn',
    pieces: node.pieces?.value || '3 Piece',
    delivery: node.delivery?.value || '3 - 5 Working Days',
    availability: node.tags.includes('Pre-order') ? 'Pre-order' : 'Available',
    images: images.length > 0 ? images : ['/fallback-placeholder.jpg'],
    variants,
    options: node.options || [],
    tags: node.tags || [],
    featured: node.tags.includes('Featured') || false,
  };
}




export async function getCleanProducts(limit = 12): Promise<Product[]> {
  // Pass the actual query variable here
  const data = await shopifyClient<{ products: { edges: Array<{ node: any }> } }>({
    query: GET_ALL_PRODUCTS_QUERY, 
    variables: { first: limit },
    tags: ['products']
  });

  return data.products.edges.map(({ node }) => transformShopifyProduct(node));
}


export async function getStorefrontCollections(productsLimit = 12): Promise<Collection[]> {
  const data = await shopifyClient<{ collections: { edges: Array<{ node: any }> } }>({
    query: GET_COLLECTIONS_WITH_PRODUCTS_QUERY,
    variables: { firstProducts: productsLimit },
    tags: ['collections']
  });

  return data.collections.edges.map(({ node }) => {
    return {
      handle: node.handle,
      title: node.title,
      description: node.description || '',
      image: node.image?.url || undefined, // Converts null to undefined to match your optional string shape
      
      // We pass each raw shopify product through your existing transformer function!
      products: node.products.edges.map(({ node: p }: any) => transformShopifyProduct(p))
    };
  });
}



export async function getCollectionByHandle(handle: string, productsLimit = 50): Promise<Collection | null> {
  const data = await shopifyClient<{ collection: any }>({
    query: GET_SINGLE_COLLECTION_QUERY,
    variables: { handle, firstProducts: productsLimit },
    tags: [`collection:${handle}`]
  });

  if (!data?.collection) return null;

  const { collection } = data;
  return {
    handle: collection.handle,
    title: collection.title,
    description: collection.description || '',
    image: collection.image?.url || undefined,
    products: collection.products.edges.map(({ node: p }: any) => transformShopifyProduct(p))
  };
}

