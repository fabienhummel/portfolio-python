import type { Locale } from "./projects";

export interface Skill {
  id: string;
  published: boolean;
  order: number;
  category: Record<Locale, string>;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const skills: Skill[] = [
  {
    id: "python",
    published: true,
    order: 1,
    category: { en: "Development", fr: "Développement" },
    name: { en: "Python", fr: "Python" },
    description: {
      en: "Scripts, data extraction and maintainable application logic.",
      fr: "Scripts, extraction de données et logique applicative maintenable."
    }
  },
  {
    id: "etl",
    published: true,
    order: 2,
    category: { en: "Data", fr: "Données" },
    name: { en: "ETL and data processing", fr: "ETL et traitement des données" },
    description: {
      en: "Extraction, transformation, validation and structured export of data.",
      fr: "Extraction, transformation, validation et export structuré des données."
    }
  },
  {
    id: "web-scraping",
    published: true,
    order: 3,
    category: { en: "Automation", fr: "Automatisation" },
    name: { en: "Web scraping", fr: "Web scraping" },
    description: {
      en: "Reliable collection of multi-page web data with Requests and Beautiful Soup.",
      fr: "Collecte fiable de données web multi-pages avec Requests et Beautiful Soup."
    }
  },
  {
    id: "git",
    published: true,
    order: 4,
    category: { en: "Tools", fr: "Outils" },
    name: { en: "Git and GitHub", fr: "Git et GitHub" },
    description: {
      en: "Version control, repository organisation and project documentation.",
      fr: "Versionnement, organisation des dépôts et documentation des projets."
    }
  },
  {
    id: "django",
    published: false,
    order: 10,
    category: { en: "Back end", fr: "Back-end" },
    name: { en: "Django", fr: "Django" },
    description: {
      en: "Server-rendered web applications with Django.",
      fr: "Applications web avec rendu serveur sous Django."
    }
  },
  {
    id: "testing",
    published: false,
    order: 11,
    category: { en: "Quality", fr: "Qualité" },
    name: { en: "Testing and debugging", fr: "Tests et débogage" },
    description: {
      en: "Automated tests, debugging and regression prevention.",
      fr: "Tests automatisés, débogage et prévention des régressions."
    }
  }
];

export const publishedSkills = skills
  .filter((skill) => skill.published)
  .sort((a, b) => a.order - b.order);
