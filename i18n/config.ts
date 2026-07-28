export const LOCALES = ["fr", "en"] as const;

export const DEFAULT_LOCALE = "fr";

export type Locale = (typeof LOCALES)[number];

export const isLocale = (value: string): value is Locale =>
  LOCALES.includes(value as Locale);

export const otherLocale = (locale: Locale): Locale =>
  locale === "fr" ? "en" : "fr";
