# 🌦️ Météo Glass

Dashboard météo personnel au design « glassmorphism », connecté à une station **Ecowitt** et enrichi par **Open-Meteo**. Application web monopage installable (PWA), pensée pour l'iPhone.

**➡️ [Ouvrir l'application](https://k2m6ywdgrf-commits.github.io/projet-meteo/)**

## Fonctionnalités

- **Temps réel** : température (min/max du jour, ressenti), humidité et point de rosée, vent (palette dédiée, boussole rose des vents, libellés qualitatifs), précipitations avec comparatifs N−1, baromètre à zones, UV et rayonnement solaire, qualité de l'air (indice européen, PM2.5/PM10), phase lunaire dessinée.
- **Soleil & Ambiance** : arc solaire 24 h avec aube et crépuscule civils, durée du jour et delta vs la veille, transitions de ciel calées sur le crépuscule civil, et 8 ambiances animées (nuit étoilée avec lune en vraie phase et étoiles filantes, couvert, brouillard, neige, orage avec éclairs, pluie, arc-en-ciel…).
- **Prévisions Open-Meteo** : courbe de température 24 h avec icônes et probabilité de pluie, colonnes thermiques sur 6 jours.
- **Historique** : modales avec graphiques 7 à 30 jours (température, humidité, vent avec rose des vents, pluie, pression, UV).
- **Alertes personnalisables** : gel, vent fort, tempête, UV — avec durée d'exposition.
- **Divers** : décorations et dates de saisons astronomiques (algorithme de Meeus), réorganisation des cartes, mode hors-ligne (service worker), rendu net sur écrans Retina.

## Configuration

1. Ouvrir l'onglet **⚙ Réglages**.
2. Renseigner les identifiants **Ecowitt** (Application Key, API Key, adresse MAC de la station).
3. Ajouter la **localisation GPS** (ou géolocalisation automatique) pour le soleil, les prévisions et la qualité de l'air.
4. Ajuster les seuils d'alertes et l'intervalle d'actualisation si besoin.

Les identifiants restent dans le navigateur (localStorage) — aucun serveur tiers.

## Technique

Monopage `index.html` sans framework (Chart.js pour les graphiques), service worker pour la coquille hors-ligne, déployé via GitHub Pages.
