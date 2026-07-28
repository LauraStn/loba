import type { Metadata } from "next";
import { Mulish, Poppins, Story_Script } from "next/font/google";
import { notFound } from "next/navigation";

import { InlineScript } from "@/components/layout/InlineScript";
import { ThemeSync } from "@/components/layout/ThemeSync";
import { SITE_URL } from "@/content/site";
import { LOCALES, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

import "../globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const storyScript = Story_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-story-script",
  display: "swap",
});

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})()`;

export const generateStaticParams = () =>
  LOCALES.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> => {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        LOCALES.map((available) => [available, `/${available}`]),
      ),
    },
    openGraph: {
      type: "website",
      locale,
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      images: [{ url: "/images/hero-studio.jpg", width: 1200, height: 800 }],
    },
  };
};

const LocaleLayout = async ({ children, params }: LayoutProps<"/[locale]">) => {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      data-theme="light"
      suppressHydrationWarning
      className={`${mulish.variable} ${poppins.variable} ${storyScript.variable}`}
    >
      <head>
        <InlineScript html={THEME_INIT_SCRIPT} />
      </head>
      <body suppressHydrationWarning>
        <ThemeSync locale={locale} />
        {children}
      </body>
    </html>
  );
};

export default LocaleLayout;
