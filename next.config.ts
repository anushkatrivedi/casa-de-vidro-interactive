import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves project sites from /<repository-name>.
  // The workflow supplies this value during the production build.
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
