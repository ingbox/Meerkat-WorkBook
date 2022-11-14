/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.vimeocdn.com", "picsum.photos"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig
