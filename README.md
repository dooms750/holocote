# HoloCote — mise en ligne et installation sur iPhone

HoloCote est une application web. Pour que la caméra fonctionne, elle doit être en ligne à une adresse en **https://**. Les deux hébergements ci-dessous sont gratuits.

## 1. Mettre l'app en ligne

### Option la plus simple : Netlify Drop (2 minutes, sur ordinateur)

1. Décompresse `holocote.zip`. Tu obtiens un dossier `holocote-app`.
2. Va sur **app.netlify.com/drop**.
3. Fais glisser le dossier `holocote-app` entier dans la page.
4. Netlify affiche une adresse du type `https://xxxx.netlify.app`. C'est ton app.
5. Crée un compte Netlify gratuit quand il te le propose, sinon le site est supprimé au bout d'une heure. Tu peux aussi renommer l'adresse dans *Site configuration › Change site name*.

### Autre option : GitHub Pages

1. Crée un dépôt sur github.com (par exemple `holocote`).
2. Dépose-y tous les fichiers du dossier `holocote-app` (*Add file › Upload files*).
3. Dans *Settings › Pages*, choisis la branche `main` et le dossier `/ (root)`, puis enregistre.
4. Après une minute, l'app est à l'adresse `https://ton-pseudo.github.io/holocote/`.

## 2. L'installer sur l'iPhone

1. Ouvre l'adresse de ton app dans **Safari**.
2. Touche le bouton **Partager**, puis **Sur l'écran d'accueil**, puis **Ajouter**.
3. L'icône HoloCote apparaît sur ton écran d'accueil. L'app s'ouvre en plein écran, sans barre Safari.
4. Au premier scan, touche **Activer la caméra** puis **Autoriser**. Si tu as refusé par erreur : *Réglages › Safari › Caméra › Autoriser*.

## 3. Activer la reconnaissance des cartes en photo (facultatif)

Sans clé, tu peux déjà chercher n'importe quelle carte par son nom et son numéro (ex. `Dracaufeu 4/102`) et voir sa cote. Pour que l'app reconnaisse la carte directement sur la photo :

1. Crée un compte sur **console.anthropic.com**.
2. Ajoute un peu de crédit (*Billing* ; 5 € suffisent pour des centaines de scans en mode Rapide).
3. Dans *API Keys*, crée une clé et copie-la (elle commence par `sk-ant-`).
4. Dans HoloCote, onglet **Réglages**, colle la clé dans **Clé API Claude**.

La clé est enregistrée uniquement dans ton téléphone. Elle n'est pas dans les fichiers du site, donc personne qui visite ton adresse ne peut l'utiliser. Ne la partage pas et ne l'ajoute pas aux fichiers que tu mets en ligne.

**Rapide** utilise le modèle Claude Haiku (moins cher, suffisant pour lire une carte nette). **Précis** utilise Claude Sonnet, utile pour les cartes japonaises, abîmées ou mal éclairées.

## 4. D'où viennent les cotes

- **Cartes, images et extensions** : base ouverte TCGdex (en français, anglais et japonais).
- **Prix** : guide de prix **Cardmarket** (en euros, mis à jour chaque jour) et **TCGplayer** (en dollars), fournis par TCGdex.
- La valeur affichée est la **tendance Cardmarket**, qui correspond à une carte quasi neuve. Pour les autres états, l'app applique une décote : neuve +15 %, excellente −25 %, bonne −45 %, légèrement jouée −60 %, jouée −75 %.
- Le bouton **Actualiser** de l'onglet Collection recharge toutes les cotes et trace l'évolution de la valeur de ta collection.

Vérifie toujours les annonces Cardmarket avant une vente ou un achat important : les cartes gradées (PSA, PCA…) et certaines variantes ne sont pas couvertes par le guide de prix.

## 5. Comparer deux cartes avant un échange

L'onglet **Échange** met deux cartes face à face : la tienne à gauche, celle qu'on te propose à droite. Touche une place vide pour choisir une carte dans ta collection, la scanner ou la chercher par son nom.

- **Valeur** : l'app compare les deux cotes selon l'état de chaque carte et te dit si l'échange est équitable, à ton avantage ou à ton désavantage.
- **Puissance** : points de vie, attaque la plus forte, énergies nécessaires, coût de retraite, faiblesse et stade, côte à côte.
- **Combat simulé** : les deux Pokémon s'affrontent tour par tour (une Énergie par tour, meilleure attaque disponible, faiblesses et résistances comprises). Tu choisis qui attaque en premier. Les effets des attaques et des talents ne sont pas comptés.
- **Valider l'échange** : si ta carte vient de ta collection, elle en sort et la carte reçue y entre. L'échange est noté dans l'historique.

Depuis la fiche d'une carte, le bouton **Comparer en VS** l'envoie directement dans le face-à-face.

## 6. Sauvegarder ta collection

La collection est enregistrée dans Safari, sur ton téléphone. Dans **Réglages › Exporter ma collection**, tu obtiens un fichier de sauvegarde à garder dans Fichiers ou iCloud. **Importer une sauvegarde** la restaure, sur le même téléphone ou un autre.

Si tu supprimes l'app de l'écran d'accueil ou les données de Safari, la collection est effacée : pense à exporter de temps en temps.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète |
| `manifest.webmanifest` | Nom, icône et affichage plein écran |
| `sw.js` | Ouverture hors connexion et cache des images |
| `icons/` | Icônes de l'app |

HoloCote est une application non officielle, non affiliée à The Pokémon Company, Nintendo, Cardmarket ou TCGdex.
