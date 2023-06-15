/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
      },
    ],
    minimumCacheTTL: 15000000,
  },
  // images: {
  //   domains: ["i.dummyjson.com"],
  // },
}

module.exports = nextConfig
