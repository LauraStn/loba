import { ContactForm } from "@/components/contact/ContactForm";
import { CONTAINER_CLASS } from "@/components/ui/container-styles";
import { CONTACT_EMAIL, SECTION_IDS } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

const TITLE_ID = "contact-title";

type ContactSectionProps = {
  content: Dictionary["contact"];
};

export const ContactSection = ({ content }: ContactSectionProps) => (
  <section
    id={SECTION_IDS.contact}
    aria-labelledby={TITLE_ID}
    className="bg-contact scroll-mt-21"
  >
    <div
      className={`${CONTAINER_CLASS} grid min-h-dvh content-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-22`}
    >
      <div>
        <h2
          id={TITLE_ID}
          className="font-display text-heading-sm font-extrabold text-white md:text-title"
        >
          {content.title}
        </h2>
        <p className="mt-4.5 max-w-[400px] text-note text-pretty text-white/72">
          {content.lead}
        </p>
        <p className="mt-7 text-note">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="border-b border-white/35 text-white transition-colors hover:border-white"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
      <ContactForm labels={content.form} />
    </div>
  </section>
);
