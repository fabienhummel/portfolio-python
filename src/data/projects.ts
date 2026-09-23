export type Locale = "en" | "fr";
export type ProjectStatus = "planned" | "in-progress" | "validated";

export interface LocalizedProjectContent {
  title: string;
  summary: string;
  context: string;
  objective: string;
  highlights: string[];
}

export interface Project {
  id: string;
  slug: string;
  code: string;
  type: "openclassrooms" | "personal";
  published: boolean;
  featured: boolean;
  status: ProjectStatus;
  order: number;
  technologies: string[];
  skills: string[];
  githubUrl?: string;
  content: Record<Locale, LocalizedProjectContent>;
}

export const projects: Project[] = [
  {
    id: "oc-py02",
    slug: "oc-py02",
    code: "OC-PY02",
    type: "openclassrooms",
    published: true,
    featured: true,
    status: "validated",
    order: 2,
    technologies: ["Python", "Beautiful Soup", "Requests", "CSV", "Git", "GitHub"],
    skills: ["python", "etl", "web-scraping", "data-processing", "git"],
    githubUrl: "https://github.com/fabienhummel/OC-PY02",
    content: {
      en: {
        title: "Market analysis with Python",
        summary: "An ETL application that extracts product data from an online bookstore, transforms it and exports structured CSV files and images.",
        context: "OpenClassrooms Python Developer project based on a competitive market analysis scenario for an online bookseller.",
        objective: "Automate the collection of product information across all categories while producing reusable and clearly organised exports.",
        highlights: [
          "Multi-page and multi-category web scraping",
          "Structured CSV exports encoded for spreadsheet tools",
          "Image downloads organised by category",
          "Error handling, logs and progress reporting",
          "Refactored English code, functions and documentation"
        ]
      },
      fr: {
        title: "Analyse de marché avec Python",
        summary: "Une application ETL qui extrait les données produits d’une librairie en ligne, les transforme puis génère des fichiers CSV structurés et télécharge les images.",
        context: "Projet du parcours Développeur Python OpenClassrooms basé sur un scénario d’analyse concurrentielle pour une librairie en ligne.",
        objective: "Automatiser la collecte des informations produits de toutes les catégories et produire des exports réutilisables et clairement organisés.",
        highlights: [
          "Web scraping multi-pages et multi-catégories",
          "Exports CSV structurés et compatibles avec les tableurs",
          "Téléchargement des images organisé par catégorie",
          "Gestion des erreurs, journalisation et suivi de progression",
          "Code, fonctions et documentation refactorisés en anglais"
        ]
      }
    }
  },
  {
    id: "oc-py03",
    slug: "oc-py03",
    code: "OC-PY03",
    type: "openclassrooms",
    published: true,
    featured: true,
    status: "validated",
    order: 3,
    technologies: ["UML", "Agile", "Scrum", "DDD", "Jira", "Confluence"],
    skills: ["requirements", "uml", "agile", "technical-design", "technology-watch"],
    githubUrl: "https://github.com/fabienhummel/OC-PY03",
    content: {
      en: {
        title: "Design a Python application for a client",
        summary: "An application design project focused on requirements analysis, functional and technical specifications, UML modelling, technology watch and agile project planning.",
        context: "OpenClassrooms project based on the design of a Python application for an education-sector organisation.",
        objective: "Translate a client need into a documented, coherent and implementable software solution before development begins.",
        highlights: [
          "Functional requirements and stakeholder analysis",
          "Technical specifications and architecture choices",
          "UML use-case and class diagrams",
          "Product backlog and user stories",
          "Technology watch and documented decision-making"
        ]
      },
      fr: {
        title: "Concevoir une application Python adaptée aux besoins d’un client",
        summary: "Un projet de conception d’application centré sur l’analyse du besoin, les spécifications fonctionnelles et techniques, la modélisation UML, la veille technologique et la planification agile.",
        context: "Projet OpenClassrooms basé sur la conception d’une application Python pour une organisation du secteur de l’éducation.",
        objective: "Transformer un besoin client en une solution logicielle documentée, cohérente et réalisable avant le démarrage du développement.",
        highlights: [
          "Analyse des besoins fonctionnels et des parties prenantes",
          "Spécifications techniques et choix d’architecture",
          "Diagrammes UML de cas d’utilisation et de classes",
          "Backlog produit et user stories",
          "Veille technologique et décisions documentées"
        ]
      }
    }
  },
  {
    id: "oc-py04",
    slug: "oc-py04",
    code: "OC-PY04",
    type: "openclassrooms",
    published: true,
    featured: true,
    status: "validated",
    order: 4,
    technologies: ["Python", "MVC", "PEP 8"],
    skills: ["python", "object-oriented-programming", "mvc", "software-design"],
    githubUrl: "https://github.com/fabienhummel/OC-PY04-chessflow",
    content: {
      en: {
        title: "Object-oriented Python application",
        summary: "An object-oriented Python application project focused on software architecture, maintainable code and clear separation of responsibilities.",
        context: "Validated OpenClassrooms Python Developer project focused on building an offline chess tournament management application.",
        objective: "Design and develop a structured Python application using object-oriented principles and a maintainable architecture.",
        highlights: [
          "Object-oriented design",
          "MVC architecture",
          "PEP 8 code quality",
          "Project documentation",
          "Incremental development"
        ]
      },
      fr: {
        title: "Application Python orientée objet",
        summary: "Un projet d’application Python orientée objet centré sur l’architecture logicielle, la maintenabilité du code et la séparation claire des responsabilités.",
        context: "Projet validé du parcours Développeur Python OpenClassrooms consacré au développement d’une application hors ligne de gestion de tournois d’échecs.",
        objective: "Concevoir et développer une application Python structurée en appliquant les principes de la programmation orientée objet et une architecture maintenable.",
        highlights: [
          "Conception orientée objet",
          "Architecture MVC",
          "Qualité du code selon PEP 8",
          "Documentation du projet",
          "Développement incrémental"
        ]
      }
    }
  },
  {
    id: "atelier-pate",
    slug: "atelier-pate",
    code: "PERSO-01",
    type: "personal",
    published: true,
    featured: true,
    status: "in-progress",
    order: 5,
    technologies: ["Python", "Kivy", "pytest", "Ruff", "Git", "GitHub", "i18n"],
    skills: ["python", "git"],
    githubUrl: "https://github.com/fabienhummel/atelier-pate",
    content: {
      en: {
        title: "Atelier Pâte",
        summary: "A local, offline Python/Kivy application for calculating pizza dough ingredient quantities with multilingual support.",
        context: "Personal project designed as a lightweight, privacy-friendly application with no account, advertising, tracking or telemetry.",
        objective: "Build a simple and maintainable cross-platform pizza dough calculator with a shared Python core for desktop and future mobile builds.",
        highlights: [
          "Offline graphical interface with Kivy",
          "Baker's percentage calculations for flour, water, salt and yeast",
          "French and English interface with persistent local language preference",
          "Automated tests and Ruff quality checks",
          "Prepared structure for desktop, Android and iOS packaging"
        ]
      },
      fr: {
        title: "Atelier Pâte",
        summary: "Une application Python/Kivy locale et hors ligne pour calculer les quantités d’ingrédients d’une pâte à pizza, avec prise en charge multilingue.",
        context: "Projet personnel conçu comme une application légère et respectueuse de la vie privée, sans compte, publicité, tracking ni télémétrie.",
        objective: "Créer un calculateur de pâte à pizza simple, maintenable et multiplateforme, avec un cœur Python commun pour le desktop et de futurs builds mobiles.",
        highlights: [
          "Interface graphique hors ligne avec Kivy",
          "Calculs en pourcentages boulangers pour farine, eau, sel et levure",
          "Interface français/anglais avec mémorisation locale de la langue",
          "Tests automatisés et contrôle qualité avec Ruff",
          "Structure préparée pour le packaging desktop, Android et iOS"
        ]
      }
    }
  },
  ...[
    ["oc-py06", "OC-PY06", "Web user interface", "Interface utilisateur web", ["HTML", "CSS", "JavaScript", "REST API"]],
    ["oc-py07", "OC-PY07", "Algorithms and optimisation", "Algorithmes et optimisation", ["Python", "Big O", "Algorithms"]],
    ["oc-py09", "OC-PY09", "Django web application", "Application web Django", ["Python", "Django", "SQL"]],
    ["oc-py10", "OC-PY10", "Secure Django REST API", "API Django REST sécurisée", ["Django REST", "OAuth2", "OWASP"]],
    ["oc-py11", "OC-PY11", "Testing and debugging a Python web app", "Tests et débogage d’une application web Python", ["Flask", "pytest", "Selenium"]],
    ["oc-py12", "OC-PY12", "Secure Python and SQL back end", "Back-end sécurisé avec Python et SQL", ["Python", "SQL", "Sentry"]],
    ["oc-py13", "OC-PY13", "Modular Django architecture and CI/CD", "Architecture Django modulaire et CI/CD", ["Django", "CI/CD", "GitHub Actions"]]
  ].map(([id, code, enTitle, frTitle, technologies], index) => ({
    id: id as string,
    slug: id as string,
    code: code as string,
    type: "openclassrooms" as const,
    published: false,
    featured: false,
    status: "planned" as const,
    order: index + 6,
    technologies: technologies as string[],
    skills: [],
    content: {
      en: {
        title: enTitle as string,
        summary: "This project page is prepared and will be published after validation.",
        context: "OpenClassrooms Python Developer project.",
        objective: "Complete and validate the project before publication.",
        highlights: []
      },
      fr: {
        title: frTitle as string,
        summary: "Cette page projet est préparée et sera publiée après validation.",
        context: "Projet du parcours Développeur Python OpenClassrooms.",
        objective: "Terminer et valider le projet avant sa publication.",
        highlights: []
      }
    }
  }))
];

export const publishedProjects = projects
  .filter((project) => project.published)
  .sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug && project.published);
}
