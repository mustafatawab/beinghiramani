/** Collection summary shaped for navigation menus. */
export type NavCollection = {
  handle: string
  title: string
  description: string
  image: string | null
}

const COLLECTIONS_FOR_MENU_QUERY = /* GraphQL */ `
  query collectionsForMenu($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          title
          handle
          description
          image {
            url
          }
        }
      }
    }
  }
`

/**
 * Lightweight collection list for menus and link pickers — no products, so it
 * stays fast. Served from the local catalogue by default; if the Shopify
 * Storefront API is configured, it tries live collections first and falls back
 * to the local catalogue on any error.
 */
export async function GET() {
  const shape = (collections: Array<{ handle: string; title: string; description?: string; image?: string }>) =>
    collections.map((collection) => ({
      handle: collection.handle,
      title: collection.title,
      description: collection.description ?? "",
      image: collection.image ?? null,
    }))

  try {
    const { shopifyClient } = await import("@/lib/shopify-client")
    const data = await shopifyClient<{
      collections: { edges: Array<{ node: { title: string; handle: string; description?: string; image?: { url: string } } }> }
    }>({
      query: COLLECTIONS_FOR_MENU_QUERY,
      variables: { first: 10 },
    })

    const live = data.collections.edges.map(
      ({ node }) => ({
        handle: node.handle,
        title: node.title,
        description: node.description || "",
        image: node.image?.url || null,
      }),
    )
    if (live.length > 0) {
      return Response.json(
        { collections: live, source: "shopify" },
        { headers: { "cache-control": "public, max-age=600, stale-while-revalidate=1800" } },
      )
    }
  } catch {
    // Shopify not configured or unreachable — fall through to the local catalogue.
  }

  const { getCollections } = await import("@/lib/shopify")
  return Response.json(
    { collections: shape(getCollections()), source: "local" },
    { headers: { "cache-control": "public, max-age=600, stale-while-revalidate=1800" } },
  )
}
