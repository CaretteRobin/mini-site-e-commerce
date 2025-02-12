# 🛒 Shopping Cart Application

Ce projet est une **application de panier d'achat** simple, développée en **HTML, CSS et JavaScript Vanilla**.  
Elle permet aux utilisateurs de **chercher des produits**, les **ajouter à un panier**, et **gérer leur panier** avec persistance des données via `localStorage`.  

---

## 🚀 Fonctionnalités  

✅ **Affichage des produits** avec images, descriptions et prix  
✅ **Recherche des produits** par référence ou description  
✅ **Ajout des produits au panier** en un clic  
✅ **Consultation du panier** avec quantité totale et prix total  
✅ **Vider le panier** pour supprimer tous les articles  
✅ **Sauvegarde du panier** dans `localStorage` pour une persistance des données  

---

## 💂️ Technologies utilisées  

- **HTML5** → Structure de l'application  
- **CSS3** → Mise en page et stylisation  
- **JavaScript Vanilla** → Gestion du panier, recherche et interaction utilisateur  
- **localStorage** → Stockage des données du panier pour persistance  

---

## 🛆 Installation  

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/your-username/shopping-cart.git
   cd shopping-cart
   ```
2. **Ouvrir `index.html` dans un navigateur** pour tester l'application  

---

## 📌 Utilisation  

🔎 **Rechercher un produit** via la barre de recherche  
🛍️ **Ajouter un produit au panier** en cliquant sur "Ajouter au panier"  
🛒 **Voir le panier** dans la section "Mon panier"  
🗑️ **Vider le panier** en cliquant sur "Vider le panier"  

---

## 💽 Structure du projet  

```
shopping-cart/
├── css/
│   └── cart.css                # Styles de l'application
├── images/                      # Images des produits
├── modules/
│   ├── app.js                   # Initialisation et gestion des interactions
│   ├── cart.js                  # Gestion du panier et localStorage
│   ├── main.js                  # Lancement de l'application
│   ├── products.js               # Définition des produits et fonction de recherche
│   └── ui.js                    # Affichage des produits et du panier dans le DOM
├── index.html                    # Structure principale de l'application
├── package.json                  # Dépendances du projet
└── .gitignore                    # Fichiers à ignorer par Git
```
