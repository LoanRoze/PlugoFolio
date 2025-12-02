# PlugoFolio — Vue 3 + Tailwind

Refonte complète du portfolio en architecture Vue.js classique (Vite) avec Tailwind CSS, sans CDN. Les données conservent la même structure JSON qu'à l'origine.

## Fonctionnalités
- **Routage** : `/` (accueil), `/projects` (liste), `/projects/:id` (détail) avec Vue Router.
- **Composants réutilisables** : en-tête, hero, liste & carte de projets, formulaire de contact (validation client), formulaire d'ajout avec mise à jour en temps réel, pied de page.
- **Données réactives** : chargées depuis `src/assets/data/projects.json` et `src/assets/data/skills.json`, partagées via un composable léger.
- **Style** : Tailwind CSS configuré localement (pas de CDN), design proche de la version précédente.

## Prérequis
- Node.js 18+

## Installation & lancement
```bash
npm install
npm run dev      # démarre le serveur Vite
# ou
npm run build    # build de production
npm run preview  # prévisualisation du build
```

## Structure principale
- `src/main.js` : point d'entrée Vue.
- `src/App.vue` : layout global (Header/Footer + RouterView).
- `src/router/index.js` : configuration du router.
- `src/composables/usePortfolioData.js` : état réactif partagé pour projets/compétences.
- `src/components/` : composants UI (Header, Hero, ProjectList/Card, formulaires, etc.).
- `src/views/` : pages `Home`, `Projects`, `ProjectDetail`.
- `src/assets/data/` : JSON d'origine pour les projets et compétences.

## Notes
- Le formulaire de contact valide les champs côté client et affiche un message de confirmation simulé.
- L'ajout d'un projet met à jour la grille immédiatement (réactivité Vue).
