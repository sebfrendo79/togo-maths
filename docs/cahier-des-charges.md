# Togo Maths — Concours de mathématiques CE2

Cahier des charges fonctionnel, basé sur un prototype HTML statique déjà validé (`togo-maths.html`, joint en référence de design). Ce document décrit ce qu'il faut construire en application réelle (backend, comptes, données dynamiques) à partir de ce prototype.

## 1. Objectif

Application de préparation à un concours national de mathématiques pour les élèves de CE2 au Togo. Utilisée par trois publics : **élèves**, **parents** (consultation), **enseignants**. Doit rester ludique, simple, et refléter une identité visuelle togolaise.

## 2. Identité visuelle (déjà définie dans le prototype)

- **Palette** : vert #076A3A, jaune #FFCE00, rouge #D21034 (drapeau togolais), encre #1E2A38, sable #FBF1E0.
- **Typographie** : Baloo 2 (titres, ludique/arrondie) + Nunito (texte courant).
- **Ton** : chaleureux, enfantin côté élève (mascotte animée, couleurs pastel sur les quiz, gros emojis) ; sobre et professionnel côté enseignant.
- **Format** : mobile-first (max ~430px de large), navigation par onglets en bas, bascule de rôle Élève/Enseignant en haut.
- Un filigrane « Prototype, pour illustration » est présent sur la maquette actuelle — à retirer dans la version réelle.

## 3. Comptes et rôles

- **Élève** : accès à son propre parcours, ses points, les classements.
- **Parent** : accès en lecture seule au parcours de son/ses enfant(s) (mêmes écrans que l'élève, sans interaction de jeu).
- **Enseignant** : accès à un dashboard de classe + son propre parcours de concours enseignants.
- Chaque élève est rattaché à une école ; chaque enseignant est rattaché à une école et à une (ou plusieurs) classe(s).

## 4. Fonctionnalités côté élève

### 4.1 Accueil
1. **Compte à rebours en jours uniquement** jusqu'au Grand Concours National (finale à Lomé).
2. **Barre de saison** : la période de classement dure 300 jours avant le concours (J-300 → J-0). Affiche le jour courant de la saison (ex. « Jour 270/300 »).
3. **Exercice du jour** : quiz de ~10 questions à choix multiples, niveau CE2 (numération, addition/soustraction avec retenue, tables de multiplication, heure, fractions simples, géométrie, monnaie). Un nouveau jeu de questions chaque jour. Feedback immédiat (bonne/mauvaise réponse), gain de points, série de jours consécutifs (streak) affichée.
4. **Podium du moment** : aperçu des 3 premiers élèves, avec lien vers le classement complet.
5. **Leçon du jour** (en bas de l'écran) : rappel de cours court (quelques lignes + un exemple concret), change chaque jour, aligné sur le programme CE2.

### 4.2 Classement élèves
- Liste complète, triée par points, cumulés depuis le début de la saison (J-300).
- Chaque ligne : rang, avatar, prénom, école, points. L'élève connecté est mis en évidence.

### 4.3 Classement écoles
- Classement des écoles par somme des points de tous leurs élèves.
- Affichage en barres proportionnelles.

## 5. Fonctionnalités côté enseignant

### 5.1 Dashboard de classe
- Statistiques rapides : nombre d'élèves, % actifs sur 7 jours, nombre d'élèves à relancer.
- Liste élève par élève : progression, série de jours actifs, alerte visuelle si inactif (ex. >3 jours sans exercice).

### 5.2 Défis enseignant (niveau supérieur)
- Un défi quotidien de **pédagogie** : cas pratique d'erreur d'élève à diagnostiquer (QCM + explication après réponse).
- Un défi quotidien de **mathématiques niveau expert** (au-delà du programme CE2), avec explication de la solution.

### 5.3 Concours des enseignants (en parallèle du concours élèves)
- Chrono en jours jusqu'à la finale (même date que le concours élèves, à Lomé).
- Classement national des enseignants.
- **Règle de calcul du score, à afficher clairement à l'enseignant** :
  - **2/3 du score** = performance des élèves de sa classe aux exercices quotidiens (progression, régularité, résultats).
  - **1/3 du score** = résultats de l'enseignant à son propre quiz quotidien (maths niveau expert + pédagogie).
- Objectif : encourager l'enseignant à la fois à faire progresser sa classe et à se former lui-même.

### 5.4 Info du jour — mathématiciens africains
- En bas du dashboard : une carte qui présente chaque jour un fait sur l'histoire des mathématiques en Afrique (ex. os d'Ishango, papyrus de Rhind, savants de Tombouctou, Grace Alele-Williams, AIMS, Ahmed Djebbar). Contenu tournant, à enrichir/gérer côté back-office.

## 6. Modèle de données (pistes)

- `Ecole` : id, nom, ville/région.
- `Utilisateur` : id, rôle (élève/parent/enseignant), nom, école_id, classe_id (si élève/enseignant), lien parent↔enfant.
- `Classe` : id, école_id, enseignant_id, niveau (CE2).
- `Exercice` : id, date, question, choix[], réponse_correcte, niveau.
- `Lecon` : id, date, texte, thème.
- `DefiEnseignant` : id, date, type (pédagogie/maths expert), question, choix[], réponse_correcte, explication.
- `FaitMathAfrique` : id, date/ordre, nom, époque, texte.
- `ResultatExercice` : utilisateur_id, exercice_id, date, réussi (bool), points_gagnés.
- `ResultatDefiEnseignant` : enseignant_id, défi_id, date, réussi (bool).
- `Saison` : date_debut (J-300), date_concours (J-0).
- `ClassementEleve` / `ClassementEcole` / `ClassementEnseignant` : vues calculées à partir des résultats cumulés sur la saison en cours (le classement enseignant combinant 2/3 résultats élèves de sa classe + 1/3 ses propres résultats).

## 7. Ce qui existe déjà (prototype) vs. ce qui reste à construire

**Déjà fait (maquette statique, données fictives, un seul fichier HTML/CSS/JS)** :
- Toutes les maquettes d'écran listées ci-dessus, navigables, avec interactions simulées (quiz cliquable, feedback, etc.).
- Palette, typographie, mise en page mobile.

**Reste à construire (application réelle)** :
- Authentification et gestion des rôles (élève / parent / enseignant), rattachement école/classe.
- Base de données réelle et API pour : utilisateurs, écoles, classes, exercices/leçons/défis quotidiens, résultats, classements.
- Génération/planification automatique du contenu quotidien (exercice, leçon, défi enseignant, fait du jour) — idéalement via un back-office simple pour que l'équipe pédagogique alimente le contenu à l'avance.
- Calcul des classements (élèves, écoles, enseignants avec la pondération 2/3 - 1/3) en temps réel ou par job planifié.
- Vue parent en lecture seule liée au(x) compte(s) enfant(s).
- Notifications (rappel quotidien, relance en cas d'inactivité) — à définir.
- Sécurité et confidentialité des données d'enfants mineurs (conformité à prévoir selon réglementation togolaise/locale).

## 8. Référence de design

Le fichier `togo-maths.html` joint est un prototype front-end autonome (HTML/CSS/JS vanilla, sans dépendance) qui sert de référence visuelle et d'inventaire d'interactions. Il n'est pas destiné à être mis en production tel quel : il faut le reconstruire avec une vraie architecture (frontend + backend + base de données), en réutilisant sa direction artistique et ses écrans comme spécification.
