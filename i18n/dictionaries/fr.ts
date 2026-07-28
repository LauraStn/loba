export const fr = {
  meta: {
    title: "Atelier Rivage — studio de développement web à deux",
    description:
      "Sites vitrines, boutiques en ligne et applications métier, du premier croquis à la mise en ligne. Deux développeurs, sans intermédiaire.",
  },
  nav: {
    brand: "Atelier Rivage",
    wordmark: "ATELIER RIVAGE",
    services: "Savoir-faire",
    works: "Réalisations",
    studio: "L’atelier",
    cta: "Parlons-en",
    ariaLabel: "Navigation principale",
    languageLabel: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    skipToContent: "Aller au contenu",
  },
  hero: {
    eyebrow: "Studio de développement · à deux",
    titleBeforeAccent: "Votre projet web, confié à ",
    titleAccent: "deux artisans",
    titleAfterAccent: " du code.",
    lead: "Sites vitrines, boutiques en ligne, applications métier. Nous prenons le projet du premier croquis jusqu’à la mise en ligne — et nous restons joignables après.",
    primaryCta: "Décrire mon projet",
    secondaryCta: "Voir nos travaux",
    imageAlt: "Les deux développeurs de l’atelier au travail sur leurs postes",
    stats: [
      { value: "48 h", label: "pour un premier retour" },
      { value: "2", label: "interlocuteurs, sans intermédiaire" },
      { value: "1 mois", label: "de corrections après la mise en ligne" },
    ],
  },
  services: {
    title: "Ce que nous faisons",
    lead: "Six prestations, un même fonctionnement : on cadre, on chiffre, on livre.",
    items: {
      showcase: {
        title: "Site vitrine",
        description:
          "Cinq à dix pages, rapide, bien référencé, que vous pouvez modifier vous-même.",
      },
      shop: {
        title: "Boutique en ligne",
        description:
          "Vendre sans usine à gaz : catalogue, paiement, suivi des commandes.",
      },
      webApp: {
        title: "Application web",
        description:
          "L’outil sur mesure qui remplace vos douze fichiers Excel.",
      },
      mobileApp: {
        title: "Application mobile",
        description:
          "iOS et Android à partir d’une seule base de code, publication comprise.",
      },
      redesign: {
        title: "Refonte",
        description:
          "Un site lent, daté ou impossible à mettre à jour ? On repart proprement, sans perdre votre référencement.",
      },
      design: {
        title: "Intégration Figma",
        description:
          "Pour les agences et les designers : vos maquettes intégrées au pixel près.",
      },
    },
  },
  works: {
    title: "Quelques réalisations",
    seeAll: "Tout voir",
    projects: {
      "projet-vitrine": {
        title: "Nom du projet",
        category: "Site vitrine · CMS headless",
        coverAlt: "Aperçu de la page d’accueil du site sur un écran de bureau",
      },
      "projet-boutique": {
        title: "Nom du projet",
        category: "Boutique en ligne · Stripe",
        coverAlt: "Intérieur de la boutique dont le site a été réalisé",
      },
      "projet-application": {
        title: "Nom du projet",
        category: "Application métier · React",
        coverAlt: "Tableau de bord de l’application affiché sur un portable",
      },
    },
  },
  studio: {
    title: "L’atelier, c’est nous deux",
    paragraphs: [
      "Deux développeurs, en couple à la ville et associés à l’atelier. Pas de commercial, pas de chef de projet intermédiaire : vous parlez directement aux personnes qui écrivent le code de votre projet.",
      "Nous prenons peu de projets à la fois, pour les mener correctement.",
    ],
    portraitAlts: [
      "Portrait de la première associée de l’atelier",
      "Portrait du second associé de l’atelier",
    ],
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Node",
      "React Native",
      "Figma",
    ],
  },
  contact: {
    title: "Racontez-nous votre projet.",
    lead: "Quelques lignes suffisent. Nous répondons sous 48 h avec un premier retour honnête — et un devis si le projet nous correspond.",
    form: {
      name: "Nom",
      email: "Email",
      message: "Votre projet",
      submit: "Envoyer",
      submitting: "Envoi…",
      errors: {
        name: "Indiquez votre nom (2 caractères minimum).",
        email: "Indiquez une adresse email valide.",
        message: "Décrivez votre projet en 20 caractères minimum.",
      },
      networkError: "L’envoi a échoué. Écrivez-nous directement à",
      success: {
        title: "Message bien reçu.",
        body: "Nous revenons vers vous sous 48 h.",
      },
    },
  },
  footer: {
    copyright: "© 2026 Atelier Rivage",
    contact: "Contact",
    legal: "Mentions légales",
  },
};

export type Dictionary = typeof fr;
