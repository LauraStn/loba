import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { projects } from "@/content/projects";
import { SECTION_IDS } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

const TITLE_ID = "travaux-title";

type WorksSectionProps = {
  content: Dictionary["works"];
};

export const WorksSection = ({ content }: WorksSectionProps) => (
  <section
    id={SECTION_IDS.works}
    aria-labelledby={TITLE_ID}
    className="bg-works scroll-mt-21 border-b border-gray-200"
  >
    <div className={`${CONTAINER_CLASS} py-16 md:py-20 lg:py-24`}>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2
          id={TITLE_ID}
          className="font-display text-heading-sm font-extrabold text-navy md:text-heading"
        >
          {content.title}
        </h2>
        <Link
          href={`#${SECTION_IDS.works}`}
          className="inline-flex items-center gap-1.5 text-body font-bold text-accent transition-colors hover:text-navy"
        >
          {content.seeAll}
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
      <ul className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const details = content.projects[project.slug];

          return (
            <li key={project.slug} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-card transition-all duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:shadow-card-hover">
                <Image
                  src={project.cover}
                  alt={details.coverAlt}
                  fill
                  sizes="(min-width: 1600px) 491px, (min-width: 1024px) 32vw, (min-width: 768px) 47vw, 92vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3.5 font-display text-intro font-bold text-navy">
                {details.title}
              </h3>
              <p className="mt-1 text-meta text-gray-500">{details.category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
