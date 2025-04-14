import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
