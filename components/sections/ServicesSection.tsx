import {
  AppWindow,
  Component,
  LayoutTemplate,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { SECTION_IDS } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

type ServiceId = keyof Dictionary["services"]["items"];

const SERVICE_ICONS: Record<ServiceId, LucideIcon> = {
  showcase: LayoutTemplate,
  shop: ShoppingBag,
  webApp: AppWindow,
  mobileApp: Smartphone,
  redesign: RefreshCw,
  design: Component,
};

const SERVICE_ORDER: ServiceId[] = [
  "showcase",
  "shop",
  "webApp",
  "mobileApp",
  "redesign",
  "design",
];

const TITLE_ID = "services-title";

type ServicesSectionProps = {
  content: Dictionary["services"];
};

export const ServicesSection = ({ content }: ServicesSectionProps) => (
  <section
    id={SECTION_IDS.services}
    aria-labelledby={TITLE_ID}
    className="scroll-mt-21 border-y border-gray-200 bg-contact dark:border-dark-border"
  >
    <div
      className={`${CONTAINER_CLASS} flex min-h-dvh flex-col justify-center py-16 md:py-20 lg:py-24`}
    >
      <h2
        id={TITLE_ID}
        className="font-display text-heading-sm font-extrabold text-white md:text-heading"
      >
        {content.title}
      </h2>
      <p className="mt-3 max-w-[560px] text-intro text-pretty text-white/80">
        {content.lead}
      </p>
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICE_ORDER.map((serviceId) => {
          const service = content.items[serviceId];
          const Icon = SERVICE_ICONS[serviceId];

          return (
            <li
              key={serviceId}
              className="rounded-card border border-gray-200 bg-white p-7 shadow-card transition-all duration-[180ms] ease-out hover:-translate-y-0.5 hover:shadow-card-hover dark:border-dark-border dark:bg-dark-surface"
            >
              <span className="bg-accent-surface grid size-10 place-items-center rounded-field">
                <Icon
                  size={20}
                  strokeWidth={2}
                  className="text-navy"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-4.5 font-display text-card font-bold text-navy dark:text-dark-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-body text-gray-600 dark:text-dark-ink-muted">
                {service.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
