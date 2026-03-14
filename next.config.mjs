/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    /* Disabled: Turbopack fs cache causes stale builds on Windows */
    turbopackFileSystemCacheForDev: false,
  },
}

export default nextConfig
