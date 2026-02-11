import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  async rewrites() {
    return [{ source: "/force-error", destination: "https://google.com" }];
  },
};

export default nextConfig;
