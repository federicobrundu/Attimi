import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/attimi-wedding",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
