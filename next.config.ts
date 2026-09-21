import type { NextConfig } from "next";

/** Vuoto in locale; in CI = /NomeRepo (es. /Attimi) per GitHub Pages */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
