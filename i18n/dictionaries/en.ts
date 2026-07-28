import type { Dictionary } from "./fr";

export const en = {
  meta: {
    title: "Astralya Studio — a two-person web development studio",
    description:
      "Marketing sites, online shops and business applications, from the first sketch to going live. Two developers, no middlemen.",
  },
  nav: {
    brand: "Astralya Studio",
    wordmark: "ASTRALYA STUDIO",
    services: "What we do",
    works: "Work",
    studio: "The studio",
    cta: "Let’s talk",
    ariaLabel: "Main navigation",
    languageLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
  },
  hero: {
    eyebrow: "Development studio · just the two of us",
    titleBeforeAccent: "Your web project, in the hands of ",
    titleAccent: "two craftspeople",
    titleAfterAccent: " of code.",
    lead: "Marketing sites, online shops, business applications. We take the project from the first sketch all the way to launch — and we stay reachable afterwards.",
    primaryCta: "Tell us about your project",
    secondaryCta: "See our projects",
    imageAlt: "The studio’s two developers at work at their desks",
    stats: [
      { value: "48 h", label: "for a first answer" },
      { value: "2", label: "people to talk to, no middlemen" },
      { value: "1 month", label: "of fixes included after launch" },
    ],
  },
  services: {
    title: "What we do",
    lead: "Six services, one way of working: we scope it, we price it, we ship it.",
    items: {
      showcase: {
        title: "Marketing site",
        description:
          "Five to ten pages, fast, easy to find on search engines, and editable by you.",
      },
      shop: {
        title: "Online shop",
        description:
          "Selling without the overkill: catalogue, payment, order tracking.",
      },
      webApp: {
        title: "Web application",
        description: "The tailor-made tool that replaces your twelve spreadsheets.",
      },
      mobileApp: {
        title: "Mobile application",
        description:
          "iOS and Android from a single codebase, store submission included.",
      },
      redesign: {
        title: "Redesign",
        description:
          "A site that is slow, dated or impossible to update? We start over cleanly, without losing your search ranking.",
      },
      design: {
        title: "Figma handoff",
        description:
          "For agencies and designers: your designs built pixel-perfect.",
      },
    },
  },
  works: {
    title: "Selected work",
    seeAll: "See all",
    projects: {
      "projet-vitrine": {
        title: "Project name",
        category: "Marketing site · headless CMS",
        coverAlt: "The site’s home page shown on a desktop screen",
      },
      "projet-boutique": {
        title: "Project name",
        category: "Online shop · Stripe",
        coverAlt: "Inside the shop the online store was built for",
      },
      "projet-application": {
        title: "Project name",
        category: "Business application · React",
        coverAlt: "The application dashboard shown on a laptop",
      },
    },
  },
  studio: {
    title: "The studio is the two of us",
    paragraphs: [
      "Two developers, partners in life and in the studio. No sales rep, no project manager in between: you talk directly to the people writing your project’s code.",
      "We take on few projects at a time, so we can do them properly.",
    ],
    portraitAlts: [
      "Portrait of the studio’s first partner",
      "Portrait of the studio’s second partner",
    ],
    tags: ["TypeScript", "React", "Next.js", "Node", "Flutter", "Figma"],
  },
  contact: {
    title: "Tell us about your project.",
    lead: "A few lines are enough. We answer within 48 hours with an honest first take — and a quote if the project is a good fit.",
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      phone: "Phone",
      message: "Your project",
      optional: "optional",
      requiredNote:
        "Fields marked with an asterisk are required. The others simply help us prepare a better answer.",
      submit: "Send",
      submitting: "Sending…",
      errors: {
        name: "Please enter your name (2 characters minimum).",
        email: "Please enter a valid email address.",
        company: "This company name is too long (120 characters maximum).",
        phone: "This phone number is too long (30 characters maximum).",
        message: "Please describe your project in 20 characters minimum.",
      },
      networkError: "Sending failed. Write to us directly at",
      success: {
        title: "Message received.",
        body: "We will get back to you within 48 hours.",
      },
    },
  },
  footer: {
    copyright: "© 2026 Astralya Studio",
    contact: "Contact",
    legal: "Legal notice",
  },
} satisfies Dictionary;
