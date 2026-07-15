import type { Locale } from "./data/projects";

export const supportedLocales = ["en", "fr"] as const;
export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    nav: { home: "Home", projects: "Projects", skills: "Skills", about: "About" },
    hero: {
      eyebrow: "Python software development portfolio",
      title: "Python Software Designer and Developer",
      intro: "Projects focused on Python application development, data processing, automation, software design and web development.",
      projects: "View projects",
      skills: "Key skills"
    },
    sections: {
      projectsEyebrow: "Projects",
      projects: "Selected projects",
      projectsIntro: "Published projects presented through their current progress, technologies used and skills demonstrated.",
      skills: "Main skills",
      aboutEyebrow: "Positioning",
      about: "A profile combining software development and real-world IT experience",
      aboutText: "I am building on experience in industrial environments, user support, reporting, automation and IT/OT to design useful, documented and maintainable Python applications."
    },
    labels: {
      planned: "Planned",
      inProgress: "In progress",
      validated: "Validated",
      openclassrooms: "OpenClassrooms",
      details: "View project",
      source: "Source code",
      objective: "Objective",
      context: "Context",
      highlights: "Highlights",
      technologies: "Skills and technologies",
      back: "Back to portfolio"
    }
  },
  fr: {
    nav: { home: "Accueil", projects: "Projets", skills: "Compétences", about: "À propos" },
    hero: {
      eyebrow: "Portfolio développement logiciel Python",
      title: "Développeur Concepteur Logiciel en Python",
      intro: "Projets autour du développement d’applications Python, du traitement des données, de l’automatisation, de la conception logicielle et du développement web.",
      projects: "Voir les projets",
      skills: "Compétences clés"
    },
    sections: {
      projectsEyebrow: "Réalisations",
      projects: "Projets sélectionnés",
      projectsIntro: "Des projets publiés présentés selon leur avancement, les technologies utilisées et les compétences démontrées.",
      skills: "Compétences principales",
      aboutEyebrow: "Positionnement",
      about: "Un profil associant développement logiciel et expérience informatique de terrain",
      aboutText: "Je m’appuie sur mon expérience des environnements industriels, du support utilisateurs, du reporting, de l’automatisation et de l’IT/OT pour concevoir des applications Python utiles, documentées et maintenables."
    },
    labels: {
      planned: "À venir",
      inProgress: "En cours",
      validated: "Validé",
      openclassrooms: "OpenClassrooms",
      details: "Voir la fiche",
      source: "Code source",
      objective: "Objectif",
      context: "Contexte",
      highlights: "Points clés",
      technologies: "Compétences et technologies",
      back: "Retour au portfolio"
    }
  }
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "fr";
}

export function localePath(locale: Locale, path = ""): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${prefix}${cleanPath ? `/${cleanPath}` : ""}/`;
}
