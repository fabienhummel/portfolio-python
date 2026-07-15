import type { Locale } from "./data/projects";

export const supportedLocales = ["en", "fr"] as const;
export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    nav: { home: "Home", projects: "Projects", skills: "Skills", about: "About" },
    hero: {
      eyebrow: "Python developer portfolio",
      title: "IT technician transitioning to Python development",
      intro: "I build useful, documented and maintainable applications by combining Python, data, automation and real-world IT experience.",
      projects: "View projects",
      github: "GitHub profile"
    },
    sections: {
      projects: "Selected projects",
      projectsIntro: "Only validated and intentionally published projects are displayed.",
      skills: "Key skills",
      skillsIntro: "Skills become visible as soon as they are supported by completed work.",
      about: "About",
      aboutText: "After a career spanning industrial operations, user support, reporting and IT/OT environments, I am developing a new specialisation in Python application development."
    },
    labels: { validated: "Validated", openclassrooms: "OpenClassrooms", details: "View project", source: "Source code", objective: "Objective", highlights: "Highlights", technologies: "Technologies", back: "Back to portfolio" }
  },
  fr: {
    nav: { home: "Accueil", projects: "Projets", skills: "Compétences", about: "À propos" },
    hero: {
      eyebrow: "Portfolio développeur Python",
      title: "Technicien informatique en évolution vers le développement Python",
      intro: "Je conçois des applications utiles, documentées et maintenables en associant Python, données, automatisation et expérience informatique de terrain.",
      projects: "Voir les projets",
      github: "Profil GitHub"
    },
    sections: {
      projects: "Projets sélectionnés",
      projectsIntro: "Seuls les projets validés et volontairement publiés sont affichés.",
      skills: "Compétences clés",
      skillsIntro: "Les compétences deviennent visibles dès qu’elles sont démontrées par un projet terminé.",
      about: "À propos",
      aboutText: "Après un parcours mêlant industrie, support utilisateurs, reporting et environnements IT/OT, je développe une nouvelle spécialisation dans la conception d’applications Python."
    },
    labels: { validated: "Validé", openclassrooms: "OpenClassrooms", details: "Voir le projet", source: "Code source", objective: "Objectif", highlights: "Points clés", technologies: "Technologies", back: "Retour au portfolio" }
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
