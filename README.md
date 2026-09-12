# Togo Maths

Application de préparation au concours national de mathématiques **CE2** au Togo, pour trois
publics : **élèves** (parcours quotidien, points, classements), **parents** (consultation en
lecture seule) et **enseignants** (suivi de classe, défis pédagogiques, concours enseignants).

Le prototype d'origine (`reference/togo-maths-prototype.html`, un fichier HTML/CSS/JS autonome)
a été reconstruit ici en projet **Vite + React 18 + TypeScript + Tailwind**, découpé en modules.
La direction artistique et les écrans sont repris à l'identique ; le cahier des charges complet
est dans `docs/cahier-des-charges.md`.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:5174
```

```bash
npm run typecheck  # TypeScript strict
npm run build      # typecheck + bundle de production
npm run preview    # sert le bundle de production
```

## Structure

```
src/
  main.tsx               point d'entrée
  App.tsx                format téléphone, bandeau kenté, routage des vues
  index.css              polices, bandeau kenté, classes .card / .cta / .pill
  types.ts               types métier
  data/
    exercises.ts         7 séries de 10 questions CE2 (une par jour, en rotation)
    lessons.ts           leçons du jour
    teacherChallenges.ts défis enseignant : pédagogie + maths expert, avec explication
    africanMathFacts.ts  info du jour sur l'histoire des maths en Afrique
    demo.ts              écoles, élèves, classe, enseignants (tient lieu de base de données)
  lib/
    season.ts            date du concours, compte à rebours, jour de saison, contenu du jour
    rankings.ts          classements élèves / écoles / enseignants (pondération 2/3 – 1/3)
    storage.ts           progression de l'élève sur son appareil
  store/                 rôle courant, vue courante, contenu du jour, réponses au quiz
  components/            en-tête et bascule de rôle, navigation, exercice, cartes, classement
  screens/               accueil élève, classements, dashboard, défis, concours enseignants
docs/                    cahier des charges
reference/               le prototype HTML d'origine
```

## Règles du produit

| Règle | Valeur |
| --- | --- |
| Date de la finale (Lomé) | `CONTEST_DATE` dans `src/lib/season.ts` — **un seul endroit à changer** |
| Saison de classement | 300 jours avant le concours (J-300 → J-0) |
| Exercice du jour | 10 questions à choix multiples, niveau CE2 |
| Points | 10 par bonne réponse |
| Série (streak) | +1 le jour où l'exercice est terminé, remise à zéro après un jour manqué |
| Alerte « à relancer » | plus de 3 jours sans exercice |
| Score enseignant | **2/3** performance de sa classe + **1/3** ses propres défis quotidiens |

Identité visuelle : vert `#076A3A`, jaune `#FFCE00`, rouge `#D21034` (drapeau togolais), encre
`#1E2A38`, sable `#FBF1E0`. Baloo 2 pour les titres, Nunito pour le texte. Format mobile-first
(430 px), bandeau kenté, navigation par onglets en bas, bascule de rôle en haut.

## Ce qui change par rapport au prototype

- **Filigrane « prototype » retiré**, comme demandé au § 2 du cahier des charges.
- **Compte à rebours réel** : le prototype affichait « maintenant + 30 jours » et ne se mettait
  jamais à jour. Il découle maintenant d'une date de concours unique, et « Jour N/300 » et la
  barre de saison en découlent aussi, au lieu d'être écrits en dur à 270/300 et 90 %.
- **Un nouvel exercice chaque jour** : 7 séries de 10 questions tournent selon le jour, comme
  les leçons, les défis enseignants et l'info du jour. Le prototype rejouait la même série.
- **Une erreur de correction est réparée** : le prototype donnait « 37 » comme bonne réponse à
  92 − 45 (c'est 47). La bonne réponse est désormais écrite en toutes lettres plutôt que par un
  numéro de rang, et un contrôle vérifie que chaque réponse figure bien parmi les choix.
- **Progression conservée** : points du jour, série et total de saison survivent au
  rechargement (sur l'appareil de l'élève).
- **Rôle parent** ajouté, prévu au § 3 du cahier des charges et absent du prototype : mêmes
  écrans que l'élève, sans possibilité de répondre à sa place.
- **Statistiques calculées** : le dashboard comptait « 24 élèves, 88 %, 3 à relancer » en dur
  face à une liste de 6 élèves. Tout est maintenant dérivé de la liste réelle.
- **Score enseignant calculé** à partir des deux composantes, avec le détail du calcul affiché.

## Limites connues / prochaines étapes

Tout ce que le § 7 du cahier des charges liste comme « reste à construire » demande un backend
et n'est donc pas encore là :

- **Pas de comptes** : la bascule Élève / Parent / Enseignant est une démonstration, pas une
  authentification. Aucun rattachement réel école / classe / parent-enfant.
- **Données de démonstration** : élèves, écoles, classe et enseignants vivent dans `src/data/`.
  Les classements sont donc figés, à l'exception des points gagnés sur cet appareil.
- **Progression locale** : la série et les points de l'élève vivent dans le `localStorage` du
  navigateur, ils ne le suivent pas d'un appareil à l'autre.
- **Contenu quotidien limité à 7 jours** : au-delà, les séries recommencent. Il faut le
  back-office prévu pour que l'équipe pédagogique alimente l'année.
- **Défis enseignants non enregistrés** : la réponse du jour n'est pas conservée.
- **Notifications** (rappel quotidien, relance d'inactivité) : à définir, puis à implémenter.
- **Données d'enfants mineurs** : la conformité à la réglementation locale est à traiter avant
  toute mise en ligne — elle conditionne l'authentification et l'hébergement.
