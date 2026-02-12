import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/certio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
