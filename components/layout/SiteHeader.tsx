"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { SECTION_IDS } from "@/content/site";
import { LOCALES, otherLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const STICKY_SHADOW_OFFSET = 8;

type SiteHeaderProps = {
  locale: Locale;
  labels: Dictionary["nav"];
};

export const SiteHeader = ({ locale, labels }: SiteHeaderProps) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: `#${SECTION_IDS.services}`, label: labels.services },
    { href: `#${SECTION_IDS.works}`, label: labels.works },
    { href: `#${SECTION_IDS.studio}`, label: labels.studio },
  ];

  useEffect(() => {
    const syncScrollState = () =>
      setIsScrolled(window.scrollY > STICKY_SHADOW_OFFSET);

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const switchLocaleKeepingAnchor = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;

    if (!hash) return;

    event.preventDefault();
    setIsMenuOpen(false);
    router.push(`/${otherLocale(locale)}${hash}`);
  };

  const localeSwitcher = (
    <div
      className="flex items-center gap-1.5 text-micro font-bold"
      role="group"
      aria-label={labels.languageLabel}
    >
      {LOCALES.map((available, index) => (
        <span key={available} className="flex items-center gap-1.5">
          {index > 0 ? (
            <span aria-hidden="true" className="text-gray-400">
              ·
            </span>
          ) : null}
          {available === locale ? (
            <span aria-current="true" className="uppercase text-navy">
              {available}
            </span>
          ) : (
            <Link
              href={`/${available}`}
              onClick={switchLocaleKeepingAnchor}
              className="uppercase text-gray-400 transition-colors hover:text-navy"
            >
              {available}
            </Link>
          )}
        </span>
      ))}
    </div>
  );

  const wordmark = (
    <span className="font-display text-body font-semibold tracking-[0.14em] text-navy">
      {labels.wordmark}
    </span>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-20 border-b border-gray-200 bg-white/92 backdrop-blur-[8px] transition-shadow duration-[180ms] ease-out ${
          isScrolled ? "shadow-nav" : ""
        }`}
      >
        <div
          className={`${CONTAINER_CLASS} flex items-center justify-between py-5`}
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5"
            aria-label={labels.brand}
          >
            <span
              aria-hidden="true"
              className="bg-brand size-[26px] shrink-0 rounded-logo"
            />
            {wordmark}
          </Link>

          <nav
            aria-label={labels.ariaLabel}
            className="hidden items-center gap-[30px] md:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-meta text-gray-600 transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            {localeSwitcher}
            <ButtonLink href={`#${SECTION_IDS.contact}`} size="sm">
              {labels.cta}
            </ButtonLink>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            {localeSwitcher}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={labels.openMenu}
              aria-expanded={isMenuOpen}
              className="grid size-11 place-items-center text-navy"
            >
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-30 flex flex-col bg-white md:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            {wordmark}
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label={labels.closeMenu}
              className="grid size-11 place-items-center text-navy"
            >
              <X size={22} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={labels.ariaLabel} className="flex flex-col gap-2 px-5 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-11 items-center text-nav-mobile text-navy"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href={`#${SECTION_IDS.contact}`}
              size="lg"
              className="mt-6 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {labels.cta}
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </>
  );
};
