# Projet étudiant 7

## Créez une application web de location immobilière avec React

**Obectif** : refonte totale d'un site pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end

**Technologies utilisées**
* nodeJS, React (CRA, React Router), Sass, pas de librairie React externe

**Tâches réalisées**
* Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma

**Contraintes techniques**

Découpage en composants modulaires et réutilisables

* Un composant par fichier
* Structure logique des différents fichiers
* Utilisation des props entre les composants
* Utilisation du state dans les composants quand c'est nécessaire
* Gestion des événements
* Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible
* Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement
* Il existe une page par route
* La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées
* La logique du routeur est réunie dans un seul fichier


**Backend**

Le dossier back permet de faire tourner l'api contenant les données des produits.

**Installation**

Il suffit de se positionner dans le dossier backend avec un terminal et de saisir la commande `yarn` et `yarn start`

**Compétences évaluées pour ce projet**
* Configurer la navigation entre les pages de l'application avec React Router
* Initialiser une application avec Create React App
* Développer des éléments de l'interface d'un site web grâce à des composants React
