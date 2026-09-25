# 🌿 JAINVIA — Pure Jain Masalas & Seasonings

> **Warm Editorial + Clean Minimalism D2C E-Commerce Platform**  
> 100% Pure Jain • Strictly No Onion • No Garlic • Handcrafted in Small Batches

---

## 🎨 Brand & Design System
- **Background**: `#FDFBF7` (Warm Organic Linen)
- **Main Text**: `#2D2A26` (Deep Charcoal Espresso)
- **Primary Accent**: `#4A5D4E` (Sage Olive Green)
- **Small Accent**: `#C87A53` (Warm Terracotta Spice)
- **Typography**: Playfair Display & Cormorant Garamond (Serif Headings) + Plus Jakarta Sans & Inter (Clean Body)
- **UX**: Editorial layout, 4-image interactive product galleries, weight selectors (100g, 200g, 500g), slide-over Cart Drawer, Wishlist, instant live Search modal, guest checkout with UPI / COD, and confetti order celebration.

---

## 🛍️ 9 Signature Products Included
1. **Royal Garam Masala** (`/product/garam-masala`) — Stone-ground whole spices blend
2. **Royal Chai Masala** (`/product/chai-masala`) — Aromatic green cardamom, ginger & cinnamon
3. **Mumbai Pav Bhaji Masala** (`/product/pav-bhaji-masala`) — Authentic street flavour, 100% Jain
4. **Pure Sun-Dried Tomato Powder** (`/product/tomato-powder`) — 100% natural farm ripe tomatoes
5. **Tangy Tomato Seasoning Powder** (`/product/tangy-tomato-powder`) — Chatpata sprinkle for snacks & pasta
6. **Pani Puri & Chaat Masala** (`/product/pani-puri-masala`) — Mint, cumin & black salt digestive blend
7. **Natural Dry Lemon Powder** (`/product/dry-lemon-powder`) — Pure citrus zest & sun-dried pulp
8. **Magic Noodle & Pasta Masala** (`/product/maggie-masala`) — All-purpose kid-friendly tastemaker
9. **Amritsari Punjabi Masala** (`/product/punjabi-masala`) — Rich gravy & shahi paneer blend

---

## 🚀 Quick Start Guide

### 1. Start Frontend Development Server
```bash
npm run dev
```
Open the local development URL in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Start Backend REST API & Production Server
```bash
npm run server
```
Runs the backend API server and serves the production build.

---

## 📁 Project Architecture
```
jainvia3/
├── src/
│   ├── components/
│   │   ├── cart/         # CartDrawer with dynamic delivery meter & steppers
│   │   ├── home/         # Hero, WhyJainvia, HowToUse, Story, Testimonials, Instagram, Newsletter
│   │   ├── layout/       # Navbar, MobileNav (bottom bar), Footer
│   │   ├── product/      # ProductCard with hover zoom, weight switch, wishlist heart
│   │   └── search/       # Instant live SearchModal with query autocomplete
│   ├── context/          # CartContext, WishlistContext, SearchContext (LocalStorage synced)
│   ├── data/             # Complete 9-product catalog with 4-image sets, specs, recipes
│   ├── pages/            # HomePage, ShopPage, ProductDetailPage, CartPage, WishlistPage, CheckoutPage, OrderConfirmationPage, AboutPage, ContactPage
│   ├── App.jsx           # Global router & providers
│   ├── index.css         # Warm Editorial design system tokens & animations
│   └── main.jsx          # Entry point
├── server/
│   └── index.js          # Express API server with /api/products, /api/orders, /api/newsletter
├── package.json
├── tailwind.config.js
└── vite.config.js
```
