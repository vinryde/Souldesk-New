import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ❌ This will completely skip ESLint checks when you run `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
