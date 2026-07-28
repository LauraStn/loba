import Image from "next/image";

import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { SECTION_IDS } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

const PORTRAITS = ["/images/portrait-1.jpg", "/images/portrait-2.jpg"];

const TITLE_ID = "studio-title";

type StudioSectionProps = {
  content: Dictionary["studio"];
};

export const StudioSection = ({ content }: StudioSectionProps) => (
  <section
    id={SECTION_IDS.studio}
    aria-labelledby={TITLE_ID}
    className="scroll-mt-21 border-b border-gray-200 bg-gray-100 dark:border-dark-border dark:bg-dark-surface-alt"
  >
    <div
      className={`${CONTAINER_CLASS} grid content-center items-center gap-14 py-16 md:py-20 lg:min-h-dvh lg:grid-cols-[0.9fr_1.1fr] lg:py-24`}
    >
      <div className="flex items-start gap-4.5 max-lg:order-2 md:max-w-[340px] lg:max-w-none">
        {PORTRAITS.map((portrait, index) => (
          <Image
            key={portrait}
            src={portrait}
            alt={content.portraitAlts[index]}
            width={160}
            height={200}
            sizes="(min-width: 1600px) 321px, (min-width: 1024px) 22vw, (min-width: 768px) 165px, 45vw"
            className={`h-auto w-full min-w-0 flex-1 rounded-card object-cover ${
              index === 1 ? "lg:mt-8.5" : ""
            }`}
          />
        ))}
      </div>
      <div className="max-lg:order-1">
        <h2
          id={TITLE_ID}
          className="font-display text-heading-sm font-extrabold text-navy md:text-heading dark:text-dark-ink"
        >
          {content.title}
        </h2>
        {content.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`text-intro leading-[1.7] text-pretty text-gray-600 dark:text-dark-ink-muted ${
              index === 0 ? "mt-4.5" : "mt-3.5"
            }`}
          >
            {paragraph}
          </p>
        ))}
        <ul className="mt-6 flex flex-wrap gap-2">
          {content.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-pill border border-gray-400 bg-white px-3.5 py-1.5 text-micro text-gray-700 dark:border-dark-border-strong dark:bg-dark-surface dark:text-dark-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
