# Portfolio Python

Portfolio professionnel de Fabien Hummel-Knibiely, technicien informatique en évolution vers le développement Python.

Le site est construit avec Astro et préparé pour être publié sur GitHub Pages.

## Principes du projet

- anglais affiché par défaut sans suffixe d’URL ;
- versions explicites disponibles avec `/en/` et `/fr/` ;
- sélection manuelle de la langue dans l’en-tête ;
- détection initiale de la langue du navigateur ;
- un seul objet de données par projet avec ses textes traduits ;
- publication contrôlée avec le paramètre `published` ;
- compétences activables indépendamment avec le même principe ;
- une page d’accueil et une page générée automatiquement par projet publié.

## Projets OpenClassrooms préparés

Les projets OC-PY02, OC-PY03, OC-PY04, OC-PY06, OC-PY07, OC-PY09, OC-PY10, OC-PY11, OC-PY12 et OC-PY13 sont présents dans la configuration.

Seul **OC-PY02** est publié dans cette première version.

Pour publier un projet, modifier dans `src/data/projects.ts` :

```ts
published: true,
```

Pour afficher une compétence, modifier dans `src/data/skills.ts` :

```ts
published: true,
```

## Installation locale

```bash
npm install
npm run dev
```

Astro ouvre généralement le site sur `http://localhost:4321`.

## Vérification de la version de production

```bash
npm run build
npm run preview
```

## Structure principale

```text
src/
├── components/
├── data/
│   ├── projects.ts
│   └── skills.ts
├── layouts/
├── pages/
├── styles/
├── views/
└── i18n.ts
```

La publication GitHub Pages sera ajoutée dans une étape séparée après validation de cette première version.
