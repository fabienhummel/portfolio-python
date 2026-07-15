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
    status: "in-progress",
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
  ...[
    ["oc-py04", "OC-PY04", "Object-oriented Python application", "Application Python orientée objet", ["Python", "MVC", "PEP 8"]],
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
    order: index + 4,
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
