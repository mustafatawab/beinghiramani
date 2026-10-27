const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN;

if (!domain || !accessToken) {
  throw new Error(
    `Shopify environment variables are missing! Domain: ${domain}, Token: ${accessToken ? 'Loaded' : 'Missing'}`
  );
}


const endpoint = `https://${domain}/api/2026-10/graphql.json`;

export async function shopifyClient<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken!,
      },
      body: JSON.stringify({ query, variables }),
      // Next.js automatically caches fetch requests. 
      // You can add revalidation strategies here later.
      next: { revalidate: 3600 }, 
    });

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    return result.data;
  } catch (error) {
    console.error('Shopify fetch error:', error);
    throw error;
  }
}
