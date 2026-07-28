import Link from "next/link";

import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { SECTION_IDS } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

type SiteFooterProps = {
  labels: Dictionary["footer"];
};

export const SiteFooter = ({ labels }: SiteFooterProps) => (
  <footer className="border-t border-gray-200 dark:border-dark-border">
    <div
      className={`${CONTAINER_CLASS} flex flex-col gap-4 py-8 text-meta text-gray-500 dark:text-dark-ink-faint md:flex-row md:items-center md:justify-between`}
    >
      <p>{labels.copyright}</p>
      <div className="flex gap-6">
        <Link
          href={`#${SECTION_IDS.contact}`}
          className="transition-colors hover:text-navy dark:hover:text-dark-ink"
        >
          {labels.contact}
        </Link>
        <Link
          href={`#${SECTION_IDS.contact}`}
          className="transition-colors hover:text-navy dark:hover:text-dark-ink"
        >
          {labels.legal}
        </Link>
      </div>
    </div>
  </footer>
);
