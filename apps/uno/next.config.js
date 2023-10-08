/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
