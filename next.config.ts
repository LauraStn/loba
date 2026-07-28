import type { NextConfig } from "next";

import { DEFAULT_LOCALE } from "./i18n/config";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => [
    { source: "/", destination: `/${DEFAULT_LOCALE}`, permanent: false },
  ],
};

export default nextConfig;
