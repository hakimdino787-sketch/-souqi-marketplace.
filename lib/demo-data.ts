import type { Category, Product, Review, Store } from '@/lib/types';

export const categories: Category[] = [
  { id: 'fashion', name: 'Mode & Accessoires', slug: 'mode-accessoires', icon: '👗', description: 'Élégance marocaine et pièces uniques.' },
  { id: 'home', name: 'Maison & Décor', slug: 'maison-decor', icon: '🏡', description: 'Objets et textiles pour un intérieur chaleureux.' },
  { id: 'beauty', name: 'Beauté & Bien-être', slug: 'beaute-bien-etre', icon: '✨', description: 'Produits naturels et soins de qualité.' },
  { id: 'food', name: 'Alimentation', slug: 'alimentation', icon: '🥭', description: 'Saveurs, épices et spécialités marocaines.' },
  { id: 'tech', name: 'Technologie', slug: 'technologie', icon: '📱', description: 'Accessoires et gadgets intelligents.' },
  { id: 'craft', name: 'Artisanat', slug: 'artisanat', icon: '🧵', description: 'Pièces manuelles inspirées des arts marocains.' },
  { id: 'kids', name: 'Enfants', slug: 'enfants', icon: '🧸', description: 'Sélection pour la famille et les petits.' },
  { id: 'wellness', name: 'Santé', slug: 'sante', icon: '💊', description: 'Produits pour le bien-être quotidien.' },
];

export const stores: Store[] = [
  { id: 'atlas', name: 'Atlas Market', city: 'Casablanca', rating: 4.8, bio: 'Boutique de mode et artisanat contemporain.', products: 240 },
  { id: 'nour', name: 'Nour Home', city: 'Rabat', rating: 4.9, bio: 'Décoration gourmande et élégance du foyer.', products: 180 },
  { id: 'sahara', name: 'Sahara Beauty', city: 'Marrakech', rating: 4.7, bio: 'Produits naturels inspirés de la beauté marocaine.', products: 155 },
  { id: 'dunes', name: 'Dunes Crafts', city: 'Fès', rating: 4.9, bio: 'Artisanat authentique et pièces uniques.', products: 210 },
];

export const products: Product[] = [
  { id: 'p1', name: 'Tapis berbère artisanal', description: 'Tapis artisanal en laine naturelle, finition élégante et design marocain.', price: 980, category: 'Artisanat', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 12, badge: 'Top vente' },
  { id: 'p2', name: 'Huile d’argan premium', description: 'Huile biologique pour cheveux et peau, connue pour ses bienfaits naturels.', price: 220, category: 'Beauté & Bien-être', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 32, badge: 'Nouveau' },
  { id: 'p3', name: 'Sac en cuir marocain', description: 'Sac élégant avec finition premium inspiré de l’artisanat local.', price: 640, category: 'Mode & Accessoires', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 10, badge: 'Édition' },
  { id: 'p4', name: 'Coussins design', description: 'Ensemble de coussins confortables et décoratifs pour votre salon.', price: 310, category: 'Maison & Décor', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 18, badge: 'Popular' },
  { id: 'p5', name: 'Thé vert marocain', description: 'Boisson traditionnelle enrichie d’arômes naturels et de menthe.', price: 95, category: 'Alimentation', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 50, badge: 'À tester' },
  { id: 'p6', name: 'Enceinte Bluetooth', description: 'Enceinte portable compacte avec son clair et autonomie prolongée.', price: 450, category: 'Technologie', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80', rating: 4.5, stock: 24, badge: 'Promo' },
  { id: 'p7', name: 'Tente berbère décorative', description: 'Pièce d’intérieur inspirée des motifs marocains traditionnels.', price: 1200, category: 'Décoration', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 8, badge: 'Unique' },
  { id: 'p8', name: 'Set de soins visage', description: 'Kit complet pour une routine beauté naturelle et douce.', price: 360, category: 'Beauté & Bien-être', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 26, badge: 'Mieux noté' },
  { id: 'p9', name: 'Plateau en céramique', description: 'Plateau décoratif chic pour servir thé ou desserts.', price: 280, category: 'Maison & Décor', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 19, badge: 'Popular' },
  { id: 'p10', name: 'Écharpe marocaine', description: 'Écharpe légère et colorée, idéale pour toutes les saisons.', price: 180, category: 'Mode & Accessoires', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 42, badge: 'Fête' },
  { id: 'p11', name: 'Poudre de rhassoul', description: 'Produit naturel pour soin de la peau et nettoyage doux.', price: 140, category: 'Beauté & Bien-être', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 30, badge: 'Nouveau' },
  { id: 'p12', name: 'Lanterne en métal', description: 'Lanterne décorative et fonctionnelle pour ambiance intérieure.', price: 330, category: 'Maison & Décor', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 17, badge: 'Chaleureux' },
  { id: 'p13', name: 'Sac de riz local', description: 'Riz de qualité supérieure, cultivé selon les méthodes traditionnelles.', price: 80, category: 'Alimentation', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80', rating: 4.5, stock: 60, badge: 'Staple' },
  { id: 'p14', name: 'Écouteurs sans fil', description: 'Confort et qualité sonore pour les déplacements quotidiens.', price: 390, category: 'Technologie', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80', rating: 4.4, stock: 22, badge: 'Promo' },
  { id: 'p15', name: 'Poupée en tissu', description: 'Jouet doux et coloré pour les enfants de 3 ans et plus.', price: 120, category: 'Enfants', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 35, badge: 'Joyeux' },
  { id: 'p16', name: 'Bouteille isotherme', description: 'Bouteille pratique pour boire de l’eau partout et en toute sécurité.', price: 170, category: 'Santé', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 40, badge: 'Essentiel' },
  { id: 'p17', name: 'Coffret d’épices', description: 'Composition sélectionnée d’épices marocaines de qualité.', price: 260, category: 'Alimentation', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 28, badge: 'Gourmand' },
  { id: 'p18', name: 'Sac de voyage', description: 'Valise légère, pratique et élégante pour les vacances.', price: 740, category: 'Mode & Accessoires', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 12, badge: 'Voyage' },
  { id: 'p19', name: 'Mini lampe LED', description: 'Lampe de bureau aux finitions modernes et design scandinave.', price: 290, category: 'Maison & Décor', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', rating: 4.5, stock: 21, badge: 'Chic' },
  { id: 'p20', name: 'Carte de visite premium', description: 'Pack de cartes de visite premium pour les professionnels.', price: 120, category: 'Technologie', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80', rating: 4.3, stock: 45, badge: 'Business' },
  { id: 'p21', name: 'Bol souvenir marocain', description: 'Pièce artisanale de grande qualité pour les pièces de décoration.', price: 220, category: 'Artisanat', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 14, badge: 'Unique' },
  { id: 'p22', name: 'Mélange de thé aux herbes', description: 'Mélange doux aux saveurs apaisantes et aliment post repas.', price: 110, category: 'Alimentation', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 34, badge: 'Soin' },
  { id: 'p23', name: 'Coffret massage', description: 'Set de massage et encaustique pour relaxation et détente.', price: 460, category: 'Santé', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 20, badge: 'Zen' },
  { id: 'p24', name: 'Poterie artisanale', description: 'Pièces uniques en terre cuite avec motifs traditionnels.', price: 300, category: 'Artisanat', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 16, badge: 'Artisanal' },
];

export const featuredProducts = products.slice(0, 4);
export const latestProducts = products.slice(4, 7);
export const popularStores = stores.slice(0, 4);
export const reviews: Review[] = [
  { id: 'r1', user: 'Salma', rating: 5, comment: 'Produit magnifique, livraison rapide et emballage soigné.', date: '12 juin 2026' },
  { id: 'r2', user: 'Karim', rating: 4, comment: 'Très bonne qualité, qualité de service au rendez-vous.', date: '18 juin 2026' },
  { id: 'r3', user: 'Hajar', rating: 5, comment: 'Je recommande sans hésiter pour les cadeaux artisanaux.', date: '22 juin 2026' },
  { id: 'r4', user: 'Youssef', rating: 4, comment: 'Bonne expérience générale, produit conforme à la description.', date: '27 juin 2026' },
];
