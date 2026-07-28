import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { SECTION_IDS } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

const HERO_IMAGE = "/images/hero-studio.jpg";

type HeroSectionProps = {
  content: Dictionary["hero"];
};

export const HeroSection = ({ content }: HeroSectionProps) => (
  <section className="bg-hero dark:bg-hero-dark">
    <div
      className={`${CONTAINER_CLASS} grid min-h-dvh content-center items-center gap-14 pt-16 pb-16 md:pt-20 md:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pt-26 lg:pb-24`}
    >
      <div>
        <p className="text-micro font-bold tracking-[0.14em] uppercase text-accent dark:text-cyan">
          {content.eyebrow}
        </p>
        <h1 className="mt-5 font-display text-display-sm font-extrabold text-balance text-navy md:text-display-md lg:text-display dark:text-dark-ink">
          {content.titleBeforeAccent}
          <span className="text-accent-bright dark:text-cyan-vivid">{content.titleAccent}</span>
          {content.titleAfterAccent}
        </h1>
        <p className="mt-6 max-w-[520px] text-lead text-pretty text-gray-600 dark:text-dark-ink-muted">
          {content.lead}
        </p>
        <div className="mt-9 flex flex-col gap-3.5 md:flex-row">
          <ButtonLink
            href={`#${SECTION_IDS.contact}`}
            size="lg"
            className="max-md:w-full"
          >
            {content.primaryCta}
          </ButtonLink>
          <ButtonLink
            href={`#${SECTION_IDS.works}`}
            variant="secondary"
            size="lg"
            className="max-md:w-full"
          >
            {content.secondaryCta}
          </ButtonLink>
        </div>
        <ul className="mt-13 flex flex-col gap-5 md:flex-row md:gap-10">
          {content.stats.map((stat) => (
            <li key={stat.label}>
              <span className="block font-display text-stat font-extrabold text-navy dark:text-dark-ink">
                {stat.value}
              </span>
              <span className="mt-0.5 block text-meta text-gray-500 dark:text-dark-ink-faint">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-brand relative h-[300px] rounded-surface md:h-auto md:aspect-[3/2]">
        <div className="absolute inset-[18px] overflow-hidden rounded-frame md:inset-8">
          <Image
            src={HERO_IMAGE}
            alt={content.imageAlt}
            fill
            priority
            sizes="(min-width: 1600px) 566px, (min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
