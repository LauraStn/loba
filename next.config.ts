import type { NextConfig } from "next";

import { DEFAULT_LOCALE } from "./i18n/config";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => [
    { source: "/", destination: `/${DEFAULT_LOCALE}`, permanent: false },
  ],
};

export default nextConfig;
