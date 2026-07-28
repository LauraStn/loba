import type { MetadataRoute } from "next";

import { DEFAULT_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const manifest = (): MetadataRoute.Manifest => {
  const { meta, nav } = getDictionary(DEFAULT_LOCALE);

  return {
    name: nav.brand,
    short_name: nav.brand,
    description: meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
};

export default manifest;
