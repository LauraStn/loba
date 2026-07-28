import { en } from "./dictionaries/en";
import { fr, type Dictionary } from "./dictionaries/fr";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary };
