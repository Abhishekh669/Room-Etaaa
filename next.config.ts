import type { NextConfig } from "next";

import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

const nextConfig: NextConfig = {
 
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol : 'https',
        hostname : 'utfs.io',
        pathname : '/**'
      },
      {
        protocol : 'https',
        hostname : 'cn0d0b79y9.ufs.sh',
        pathname : '/**'
      }
    ],
  },
};

export default nextConfig;
