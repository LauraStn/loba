import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const HomePage = async ({ params }: PageProps<"/[locale]">) => {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-40 focus:rounded-field focus:bg-white focus:px-4 focus:py-2 focus:text-body focus:text-navy focus:shadow-card"
      >
        {dictionary.nav.skipToContent}
      </a>
      <SiteHeader locale={locale} labels={dictionary.nav} />
      <main id="main">
        <HeroSection content={dictionary.hero} />
        <ServicesSection content={dictionary.services} />
        <WorksSection content={dictionary.works} />
        <StudioSection content={dictionary.studio} />
        <ContactSection content={dictionary.contact} />
      </main>
      <SiteFooter labels={dictionary.footer} />
    </>
  );
};

export default HomePage;
