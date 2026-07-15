# Portfolio professionnel — Développeur Concepteur Logiciel en Python

Ce dépôt contient le code source de mon portfolio professionnel orienté développement Python.

Le site présente mon positionnement, mes compétences techniques et une sélection de projets réalisés dans le cadre de la formation OpenClassrooms **Développeur d’application Python**, ainsi que de futurs projets personnels autour de Python, de la data, de l’automatisation, des API et du développement web.

🌐 **Portfolio en ligne :**  
[https://fabienhummel.github.io/portfolio-python/](https://fabienhummel.github.io/portfolio-python/)

Version française :  
[https://fabienhummel.github.io/portfolio-python/fr/](https://fabienhummel.github.io/portfolio-python/fr/)

---

## Objectif du portfolio

Ce portfolio a pour objectif de présenter de manière claire et progressive :

- mon évolution vers le métier de Développeur Concepteur Logiciel en Python ;
- les projets techniques réalisés pendant la formation OpenClassrooms ;
- les compétences démontrées par chaque réalisation ;
- ma capacité à analyser un besoin, concevoir une solution, développer, tester, documenter et déployer une application ;
- le lien entre mon expérience précédente en informatique, automatisation, data et IT/OT et mes nouvelles compétences en développement logiciel ;
- mes futurs projets personnels en Python.

Le portfolio ne publie que les projets que je souhaite rendre visibles. Les projets en préparation restent présents dans la configuration mais sont masqués tant qu’ils ne sont pas prêts à être présentés.

---

## Positionnement présenté

Le portfolio met en avant un profil de **Développeur Concepteur Logiciel en Python**, construit à partir d’une expérience préalable en environnement industriel et informatique.

Les principaux axes valorisés sont :

- développement d’applications Python ;
- conception logicielle ;
- programmation orientée objet ;
- traitement et transformation de données ;
- automatisation ;
- développement web ;
- API REST ;
- Django et Django REST Framework ;
- SQL et bases de données relationnelles ;
- tests, débogage et qualité du code ;
- documentation technique ;
- CI/CD et déploiement.

---

## Projets mis en avant

Le portfolio est préparé pour présenter les projets professionnalisants suivants :

| Projet | Thèmes principaux | Statut |
|---|---|---|
| [OC-PY02 — Analyse de marché avec Python](https://fabienhummel.github.io/portfolio-python/fr/projects/oc-py02/) | Python, ETL, web scraping, CSV, Git | Validé |
| [OC-PY03 — Concevoir une application adaptée aux besoins d’un client](https://fabienhummel.github.io/portfolio-python/fr/projects/oc-py03/) | Analyse du besoin, Agile, UML, DDD, Jira | En cours |
| OC-PY04 — Développer un programme logiciel en Python | POO, MVC, PEP 8, design patterns | À venir |
| OC-PY06 — Développer une interface utilisateur web | HTML, CSS, JavaScript, API REST | À venir |
| OC-PY07 — Résoudre des problèmes avec des algorithmes | Python, algorithmique, Big O, optimisation | À venir |
| OC-PY09 — Développer une application web avec Django | Django, MVT, ORM, authentification | À venir |
| OC-PY10 — Créer une API REST sécurisée | Django REST, OAuth2, OWASP, RGPD | À venir |
| OC-PY11 — Tester et déboguer une application web Python | Flask, pytest, Selenium, TDD | À venir |
| OC-PY12 — Développer une architecture back-end sécurisée | Python, SQL, authentification, Sentry | À venir |
| OC-PY13 — Mettre à l’échelle une application Django | Django modulaire, refactoring, CI/CD, déploiement | À venir |

Les projets 1, 5 et 8 du parcours ne sont pas présentés, car ils correspondent principalement au cadrage de la formation, à une évaluation technique et à la préparation de l’après-formation.

---

## Publication progressive des projets

Chaque projet est défini dans :

```text
src/data/projects.ts
```

Sa visibilité est contrôlée par le paramètre :

```ts
published: true,
```

Pour masquer un projet :

```ts
published: false,
```

Son état est géré séparément :

```ts
status: "planned"
status: "in-progress"
status: "validated"
```

Les statuts sont affichés avec un code couleur :

- vert émeraude : projet validé ;
- orange ambré : projet en cours ;
- gris : projet à venir.

---

## Gestion des compétences

Les compétences principales sont définies dans :

```text
src/data/skills.ts
```

Elles peuvent être publiées indépendamment avec :

```ts
published: true,
```

Cette organisation permet de ne présenter que les compétences réellement démontrées par les projets déjà terminés ou suffisamment avancés.

---

## Ajout d’un projet personnel

L’architecture permet d’ajouter ultérieurement un projet personnel en créant un nouvel objet dans `src/data/projects.ts`.

Exemple simplifié :

```ts
{
  id: "personal-project",
  slug: "personal-project",
  code: "PERSO-01",
  type: "personal",
  published: true,
  featured: false,
  status: "validated",
  order: 20,
  technologies: ["Python", "FastAPI", "PostgreSQL"],
  skills: ["python", "api", "sql"],
  githubUrl: "https://github.com/fabienhummel/nom-du-projet",
  content: {
    en: {
      title: "Project title",
      summary: "Project summary",
      context: "Project context",
      objective: "Project objective",
      highlights: []
    },
    fr: {
      title: "Titre du projet",
      summary: "Résumé du projet",
      context: "Contexte du projet",
      objective: "Objectif du projet",
      highlights: []
    }
  }
}
```

La page dédiée et la carte de la page d’accueil sont ensuite générées automatiquement.

---

## Gestion multilingue

Le site prend actuellement en charge :

- l’anglais ;
- le français.

L’anglais est la langue par défaut à la racine :

```text
https://fabienhummel.github.io/portfolio-python/
```

Les versions explicites sont également disponibles :

```text
/en/
/fr/
```

Principes retenus :

- un seul objet de données par projet ;
- les textes anglais et français sont regroupés dans cet objet ;
- les composants et la mise en page ne sont pas dupliqués ;
- la langue du navigateur peut être détectée lors de la première visite ;
- le choix manuel de langue est mémorisé ;
- la barre `EN / FR` permet de changer de langue à tout moment.

Une langue supplémentaire pourra être ajoutée ultérieurement en complétant la configuration et les traductions.

---

## Démarche de présentation

Chaque projet est présenté sous un angle professionnel :

1. contexte du projet ;
2. objectif principal ;
3. technologies utilisées ;
4. compétences mobilisées ;
5. fonctionnalités ou points clés ;
6. lien vers le dépôt GitHub lorsqu’il est public ;
7. statut d’avancement.

L’objectif n’est pas seulement de montrer du code, mais de présenter une démarche complète : comprendre un besoin, concevoir une solution, développer, tester, documenter et améliorer.

---

## Technologies utilisées pour le portfolio

- Astro ;
- TypeScript ;
- HTML ;
- CSS ;
- Git et GitHub ;
- GitHub Actions ;
- GitHub Pages.

Le site est entièrement statique et déployé automatiquement à chaque mise à jour de la branche `main`.

---

## Métadonnées sociales

Le portfolio contient des métadonnées Open Graph et Twitter/X afin d’améliorer la présentation des liens partagés sur LinkedIn et les autres plateformes.

L’image sociale principale est stockée dans :

```text
public/images/social/
```

---

## Installation locale

Cloner le dépôt :

```bash
git clone https://github.com/fabienhummel/portfolio-python.git
cd portfolio-python
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Astro indique l’adresse locale à ouvrir dans le navigateur.

---

## Vérification de la version de production

Construire le site :

```bash
npm run build
```

Prévisualiser la version générée :

```bash
npm run preview
```

Le dossier de production est généré dans :

```text
dist/
```

---

## Structure principale

```text
portfolio-python/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── public/
│   └── images/
│       └── social/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── views/
│   └── i18n.ts
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## Déploiement

Le site est déployé automatiquement avec GitHub Actions.

À chaque push sur `main` :

1. les dépendances sont installées avec `npm ci` ;
2. Astro vérifie et construit le site ;
3. le dossier `dist/` est publié sur GitHub Pages.

🌐 **Site public :**  
[https://fabienhummel.github.io/portfolio-python/](https://fabienhummel.github.io/portfolio-python/)

---

## Auteur

**Fabien Hummel-Knibiely**  
Développeur Concepteur Logiciel en Python, avec une expérience préalable en informatique, automatisation, data et environnements IT/OT.

Portfolio Python :  
[https://fabienhummel.github.io/portfolio-python/](https://fabienhummel.github.io/portfolio-python/)

GitHub :  
[https://github.com/fabienhummel](https://github.com/fabienhummel)
