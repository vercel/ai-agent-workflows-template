import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // Workflows require this experimental flag
    workflows: true,
  },
}

export default nextConfig
