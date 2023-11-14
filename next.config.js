/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['files-ecommerce.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
