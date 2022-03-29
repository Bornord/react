# Projet REACT

## Architecture du projet
frontend contient le code associé au frontend géré par React. 
backend contient le code associé au backend géré par Node.js. 

## Déploiement

### frontend
Lancer le serveur frontend:  
> cd <NomDuSite>
> yarn start

### backend

## Préparation
Pour créer le projet, i.e. lors du premier lancement, il faut : 
- installer Yarn via Homebrew : 
    brew install yarn 
- npx create-react-app <NomDuSite>


## Remarques

### Commandes sympatoches (sur mac)
Commenter une ligne de code :  
> MAJ + CMD + /

Supprimer les éléments après le curseur : 
> FN + suppr

### CSS
- Soit on fait appel à la className <=> class = "lmj-banner" en vue.js

- Soit on définit "à la volée le css associé"
-> Solution temporaire pour tester PUIS l'insérer dans un fichier séparé pour modularité et ré-utilisation

L'attribut alt d'un composent CSS, permet d'afficher du texte alternatif pour les malvoyants, par exemple.  