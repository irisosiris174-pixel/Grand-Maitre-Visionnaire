# Grand Maître Visionnaire

Ce projet est une application React + TypeScript construite avec Vite, Tailwind CSS et Framer Motion, conçue pour offrir une expérience premium et spirituelle.

## Prérequis
- Node.js (v18+ recommandé)
- Clé API Resend (pour le formulaire de contact)

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Configuration de l'environnement :
Créez un fichier `.env` à la racine (ou `.env.local`) et ajoutez-y :
```env
RESEND_API_KEY=votre_cle_api_resend_ici
ADMIN_EMAIL=visionnaire900@gmail.com
FROM_EMAIL=contact@grandmaitrevisionnaire.org
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

## Personnalisation des données
Toutes les données du site (Numéro WhatsApp, textes, services, produits) sont centralisées dans le fichier :
`src/data/config.ts`
Il vous suffit de modifier ce fichier pour mettre à jour le contenu du site sans toucher au code complexe.

## Remplacement des images
Les images se trouvent dans le dossier `public/images/`. 
Remplacez les fichiers existants en conservant les mêmes noms, ou modifiez les chemins d'accès dans `src/data/config.ts`.

## Formulaire de Contact et Vercel
Le projet intègre une Serverless Function Vercel (`api/contact.ts`) pour l'envoi d'e-mails via Resend.
Pour que cela fonctionne en production, il est recommandé de déployer le site sur **Vercel**.
Le formulaire fera alors appel à `/api/contact` automatiquement.

## Déploiement
Le projet est optimisé pour être déployé sur Vercel :
1. Connectez votre dépôt GitHub à Vercel.
2. Vercel détectera automatiquement qu'il s'agit d'un projet Vite.
3. Ajoutez les variables d'environnement dans les paramètres Vercel (`RESEND_API_KEY`, etc.).
4. Déployez !
