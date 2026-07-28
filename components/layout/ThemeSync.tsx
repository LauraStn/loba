"use client";

import { useLayoutEffect } from "react";

const applyStoredTheme = () => {
  try {
    const stored = localStorage.getItem("theme");

    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch {
    // localStorage unavailable (private mode, blocked, etc.) — keep server default.
  }
};

type ThemeSyncProps = {
  locale: string;
};

// The <html> element persists across client-side navigations, so the layout's
// data-theme="light" default gets re-applied by React on every locale switch,
// clobbering the user's stored preference. This re-syncs it after each commit.
export const ThemeSync = ({ locale }: ThemeSyncProps) => {
  useLayoutEffect(() => {
    applyStoredTheme();
  }, [locale]);

  return null;
};
