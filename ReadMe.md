# Projet REACT

## Architecture du projet

frontend contient le code associé au frontend géré par React.  
backend contient le code associé au backend géré par Node.js.

## Déploiement

### frontend

Lancer le serveur frontend:

> cd {NomDuSite}

> yarn start

### backend

Lancer le serveur backend:

> cd {NomDeLAPI}

## Préparation

Pour créer le projet, i.e. lors du premier lancement, il faut :

Pour le frontend

-   installer le plugin de déploiement Yarn via Homebrew :
    > brew install yarn
-   installer react et créer le projet :
    > npx create-react-app {NomDuSite}
-   ajouter un routage SPA :
    > yarn add react-router-dom
-   ajouter les propriétés reacts :
    > yarn add prop-types
-   ajouter le scopage des composants :
    > yarn add styled-components
-   ajouter le package axios :
    > yarn add axios
-   ajouter le package de persistance de données :
    > yarn add reactjs-localstorage

Pour le backend:

-   Ajouter le plugin express :
    > npm install express

## Remarques

### Commandes sympatoches (sur mac)

Commenter une ligne de code :

> MAJ + CMD + /

Supprimer les éléments après le curseur :

> FN + suppr

Lancer prettier

> npm install prettier -D --save-exact

### CSS

-   Soit on fait appel à la className <=> class = "lmj-banner" en vue.js

-   Soit on définit "à la volée le css associé"
    -> Solution temporaire pour tester PUIS l'insérer dans un fichier séparé pour modularité et ré-utilisation

L'attribut alt d'un composent CSS, permet d'afficher du texte alternatif pour les malvoyants, par exemple.

-   Pour importer un fichier css dans un autre :

    > @import url("./{NomDuFichier}.css");

-   Pour faire des éléments mouvants, il faut utiliser styled components.
    Concrètement il nous permet de faire passer des variables JS dans du css.
    Ce qui permet de faire des animations.
    Point à regarder : - transtion (class css) - hover (au survol)
    NB : les styled-components ne peuvent pas être appliqué aux images, elles doivent les remplacer !

### Vrac

-   Différence entre ' ' et ` ` :
    ' ' servent à définir une string.  
     ` ` servent à défnir une string où on peut intégrer des variables js

Exemple :
const userInfo = 'User info: ' + name + ' ' + surname + ' ' + telephone;

VS

const userInfo = `User info: ${name} ${surname} ${telephone}`;
