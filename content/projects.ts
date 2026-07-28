import type { Dictionary } from "@/i18n/dictionaries";

export type ProjectSlug = keyof Dictionary["works"]["projects"];

export type Project = {
  slug: ProjectSlug;
  cover: string;
  year: number;
};

export const projects: Project[] = [
  { slug: "projet-vitrine", cover: "/images/projet-vitrine.jpg", year: 2026 },
  { slug: "projet-boutique", cover: "/images/projet-boutique.jpg", year: 2025 },
  {
    slug: "projet-application",
    cover: "/images/projet-application.jpg",
    year: 2025,
  },
];
