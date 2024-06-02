# Rick and Morty Application

## Description

Cette application utilise l'API Rick and Morty pour afficher une liste de personnages de la série. Les fonctionnalités incluent la pagination, la recherche par nom de personnage, le filtrage par état (Vivant ou Mort), et une page de détail pour chaque personnage. L'application est conçue pour être entièrement responsive et ne nécessite pas de rechargement de page pour la navigation entre la liste et les détails des personnages (SPA - Single Page Application). Le thème choisi pour cette application est **Minimaliste**, offrant une interface minimal et simple.

## Fonctionnalités

### Page d'Accueil (Index)

- **Logo** : Cliquer sur le logo renvoie à la page d'accueil.
- **Liste des Personnages** : Affichage paginé de tous les personnages.
- **Boutons de Filtrage** : Filtrage des personnages par état (tous,Vivant, Mort).
- **Recherche Textuelle** : Recherche par nom de personnage.
- **Informations sur les Personnages** : Affichage du nom, de l'image et du statut (Vivant ou Mort) des personnages.

### Page de Détail du Personnage

- **Bouton de Retour** : Retour à la page d'accueil.
- **Informations sur le Personnage** : Affichage de l'image, du nom, et d'autres informations pertinentes sur le personnage.

## Contraintes Techniques

- **Routage Côté Front** : Utilisation de JavaScript pour naviguer sans rechargement de page.
- **URLs de Détail** : L'URL de la page de détail permet de rendre les informations du personnage correspondant (par exemple, `/character/1`).
- **Responsivité** : Le site est entièrement responsive.

## Technologies Utilisées

- **Frontend** : HTML, CSS, JavaScript (React JS - React Router)
- **API** : [Rick and Morty API](https://rickandmortyapi.com/documentation/)
- **Déploiement** : Node.js, Docker

## Instructions de Déploiement

### Prérequis

- Node.js installé
- Docker installé (optionnel)

### Lancement via Node.js

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/adelbrx/Rick-Morty.git
   cd Rick-Morty/
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez l'application :

   ```bash
   npm start
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

### Lancement via Docker

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/adelbrx/Rick-Morty.git
   cd Rick-Morty/
   ```

2. Construisez l'image Docker :

   ```bash
   sudo docker build -t rick-and-morty .
   ```

3. Lancez un conteneur :

   ```bash
   sudo docker run -p 3000:3000 rick-and-morty
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Accessibilité en Ligne

L'application est déployée en ligne, vous pouvez y accéder via l'URL suivante : [https://adel-bereksi-test-rickandmorty.netlify.app/]

## Auteur

Adel Bereksi

## Remerciements

- Merci à l'équipe de la [Rick and Morty API](https://rickandmortyapi.com/) pour l'API incroyable.
- Merci à [Inkscape](https://inkscape.org/fr/) et [Gimp](https://www.gimp.org/downloads/) pour les logiciels de création graphique gratuits.
