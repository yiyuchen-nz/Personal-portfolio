/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['content.omlet.co.uk'],
  },
}

module.exports = nextConfig
