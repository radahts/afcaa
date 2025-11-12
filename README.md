# AFCAA 2026 - Plateforme Officielle

Ceci est l'application Next.js pour l'événement AFCAA 2026.

## Déploiement

Cette application est conçue pour être déployée sur **Firebase App Hosting**. Le déploiement est automatisé via l'intégration avec GitHub.

### Comment déployer :

1.  **Créez un dépôt GitHub** : Si ce n'est pas déjà fait, créez un nouveau dépôt (privé ou public) sur votre compte GitHub.

2.  **Poussez le code vers GitHub** :
    *   Initialisez un dépôt Git dans votre projet :
        ```bash
        git init
        git add .
        git commit -m "Premier commit"
        ```
    *   Liez votre projet local à votre dépôt GitHub distant :
        ```bash
        git remote add origin https://github.com/VOTRE_NOM/NOM_DU_DEPOT.git
        ```
    *   Poussez votre code :
        ```bash
        git push -u origin main
        ```

3.  **Connectez Firebase à GitHub** :
    *   Allez sur la [console Firebase](https://console.firebase.google.com/).
    *   Sélectionnez votre projet (ou créez-en un nouveau).
    *   Dans le menu de gauche, allez dans **App Hosting**.
    *   Suivez les instructions pour connecter votre dépôt GitHub. Firebase vous guidera pour sélectionner le dépôt que vous venez de créer.

4.  **Déploiement automatique** : Une fois connecté, Firebase déploiera automatiquement votre application. Chaque fois que vous pousserez des modifications sur la branche `main` de votre dépôt, une nouvelle version sera automatiquement construite et déployée.

Votre site sera alors disponible sur une URL fournie par Firebase. L'utilisation de cPanel n'est pas recommandée car cela nécessiterait une reconfiguration complexe de votre application et du serveur.