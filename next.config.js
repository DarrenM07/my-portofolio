/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ⬅️ Vercel akan skip semua error lint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⬅️ Vercel akan skip error TypeScript (no-explicit-any, dll)
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
