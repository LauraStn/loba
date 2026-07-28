"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { SECTION_IDS } from "@/content/site";
import { LOCALES, otherLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const STICKY_SHADOW_OFFSET = 8;

const BRAND_MARK = "/images/logo2.png";

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
      className="flex items-center gap-1 rounded-pill border border-gray-200 bg-gray-50 p-1"
      role="group"
      aria-label={labels.languageLabel}
    >
      {LOCALES.map((available) =>
        available === locale ? (
          <span
            key={available}
            aria-current="true"
            className="bg-accent rounded-pill px-2.5 py-1 text-micro font-bold uppercase text-white"
          >
            {available}
          </span>
        ) : (
          <Link
            key={available}
            href={`/${available}`}
            onClick={switchLocaleKeepingAnchor}
            className="rounded-pill px-2.5 py-1 text-micro font-bold uppercase text-gray-600 transition-colors hover:text-navy"
          >
            {available}
          </Link>
        ),
      )}
    </div>
  );

  const wordmark = (
    <span className="bg-contact bg-clip-text font-display text-note font-semibold tracking-[0.14em] text-transparent">
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
        <div className={`${CONTAINER_CLASS} flex items-center justify-between`}>
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5"
            aria-label={labels.brand}
          >
            <Image
              src={BRAND_MARK}
              alt=""
              width={747}
              height={818}
              priority
              sizes="80px"
              className="h-16 w-auto shrink-0 md:h-20"
            />
            <span className="hidden sm:inline">{wordmark}</span>
          </Link>

          <nav
            aria-label={labels.ariaLabel}
            className="hidden items-center gap-5 md:flex"
          >
            <div className="flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-note font-semibold text-navy transition-colors hover:text-accent"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="bg-accent-surface absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-pill transition-[width] duration-200 ease-out group-hover:w-full"
                  />
                </Link>
              ))}
            </div>

            <span aria-hidden="true" className="h-6 w-px bg-gray-200" />

            {localeSwitcher}

            <ButtonLink href={`#${SECTION_IDS.contact}`} size="md">
              {labels.cta}
            </ButtonLink>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            {localeSwitcher}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={labels.openMenu}
              aria-expanded={isMenuOpen}
              className="grid size-11 place-items-center rounded-field text-navy transition-colors hover:bg-accent/[0.07]"
            >
              <Menu size={24} strokeWidth={2.25} aria-hidden="true" />
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
