/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "beinghiramani.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
    ],
  },
}

export default nextConfig
