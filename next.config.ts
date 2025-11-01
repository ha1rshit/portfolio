import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  srcDir: 'src',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
