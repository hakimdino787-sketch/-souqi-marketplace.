import type { Category, Product, Review, Store } from '@/lib/types';

export const categories: Category[] = [
  { id: 'fashion', name: 'الأزياء والإكسسوارات', slug: 'mode-accessoires', icon: '👗', description: 'أناقة مغربية وقطع مميزة.' },
  { id: 'home', name: 'المنزل والديكور', slug: 'maison-decor', icon: '🏡', description: 'أغراض ومنسوجات تمنح المنزل دفئاً وجمالاً.' },
  { id: 'beauty', name: 'الجمال والعناية', slug: 'beaute-bien-etre', icon: '✨', description: 'منتجات طبيعية للعناية والجمال.' },
  { id: 'food', name: 'المواد الغذائية', slug: 'alimentation', icon: '🥭', description: 'نكهات وتوابل ومأكولات مغربية.' },
  { id: 'tech', name: 'التكنولوجيا', slug: 'technologie', icon: '📱', description: 'إكسسوارات وأجهزة ذكية.' },
  { id: 'craft', name: 'الصناعة التقليدية', slug: 'artisanat', icon: '🧵', description: 'منتجات يدوية مستوحاة من الفنون المغربية.' },
  { id: 'kids', name: 'الأطفال', slug: 'enfants', icon: '🧸', description: 'اختيارات للعائلة والأطفال.' },
  { id: 'wellness', name: 'الصحة والعناية اليومية', slug: 'sante', icon: '💊', description: 'منتجات للعناية اليومية.' },
];

export const stores: Store[] = [
  { id: 'atlas', name: 'Atlas Market', city: 'Casablanca', rating: 4.8, bio: 'متجر للأزياء والصناعة التقليدية المعاصرة.', products: 240 },
  { id: 'nour', name: 'Nour Home', city: 'Rabat', rating: 4.9, bio: 'منتجات ديكور ولمسات أنيقة للمنزل.', products: 180 },
  { id: 'sahara', name: 'Sahara Beauty', city: 'Marrakech', rating: 4.7, bio: 'منتجات طبيعية مستوحاة من الجمال المغربي.', products: 155 },
  { id: 'dunes', name: 'Dunes Crafts', city: 'Fès', rating: 4.9, bio: 'الصناعة التقليدية authentique et pièces uniques.', products: 210 },
];

export const products: Product[] = [
  { id: 'p1', name: 'سجادة أمازيغية يدوية', description: 'سجادة صوفية يدوية بتشطيب أنيق وتصميم مستوحى من التراث المغربي.', price: 980, category: 'الصناعة التقليدية', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 12, badge: 'الأكثر مبيعاً' },
  { id: 'p2', name: 'زيت أركان ممتاز', description: 'زيت أركان طبيعي للعناية بالشعر والبشرة.', price: 220, category: 'الجمال والعناية', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 32, badge: 'جديد' },
  { id: 'p3', name: 'حقيبة جلد مغربية', description: 'حقيبة أنيقة بلمسات مستوحاة من الصناعة التقليدية المحلية.', price: 640, category: 'الأزياء والإكسسوارات', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 10, badge: 'إصدار مميز' },
  { id: 'p4', name: 'وسائد ديكور', description: 'مجموعة وسائد مريحة لتزيين غرفة الجلوس.', price: 310, category: 'المنزل والديكور', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 18, badge: 'شائع' },
  { id: 'p5', name: 'شاي أخضر مغربي', description: 'شاي مغربي تقليدي بنكهات طبيعية والنعناع.', price: 95, category: 'المواد الغذائية', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 50, badge: 'يستحق التجربة' },
  { id: 'p6', name: 'مكبر صوت بلوتوث', description: 'مكبر صوت محمول بحجم صغير وصوت واضح.', price: 450, category: 'التكنولوجيا', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80', rating: 4.5, stock: 24, badge: 'عرض' },
  { id: 'p7', name: 'خيمة أمازيغية للديكور', description: 'قطعة ديكور مستوحاة من الزخارف المغربية التقليدية.', price: 1200, category: 'Décoration', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 8, badge: 'فريد' },
  { id: 'p8', name: 'مجموعة العناية بالوجه', description: 'مجموعة متكاملة لروتين عناية لطيف وطبيعي.', price: 360, category: 'الجمال والعناية', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 26, badge: 'الأعلى تقييماً' },
  { id: 'p9', name: 'صينية خزفية', description: 'صينية أنيقة لتقديم الشاي أو الحلويات.', price: 280, category: 'المنزل والديكور', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 19, badge: 'شائع' },
  { id: 'p10', name: 'وشاح مغربي', description: 'وشاح خفيف وملون مناسب لمختلف الفصول.', price: 180, category: 'الأزياء والإكسسوارات', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 42, badge: 'مناسبات' },
  { id: 'p11', name: 'مسحوق الغاسول', description: 'منتج طبيعي للعناية بالبشرة والتنظيف اللطيف.', price: 140, category: 'الجمال والعناية', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 30, badge: 'جديد' },
  { id: 'p12', name: 'فانوس معدني', description: 'فانوس للديكور وإضفاء أجواء دافئة داخل المنزل.', price: 330, category: 'المنزل والديكور', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 17, badge: 'دافئ' },
  { id: 'p13', name: 'كيس أرز محلي', description: 'أرز بجودة جيدة للاستخدام اليومي.', price: 80, category: 'المواد الغذائية', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80', rating: 4.5, stock: 60, badge: 'أساسي' },
  { id: 'p14', name: 'سماعات لاسلكية', description: 'سماعات مريحة للاستماع أثناء التنقل.', price: 390, category: 'التكنولوجيا', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80', rating: 4.4, stock: 22, badge: 'عرض' },
  { id: 'p15', name: 'دمية قماشية', description: 'لعبة قماشية ناعمة وملونة للأطفال من عمر ثلاث سنوات.', price: 120, category: 'الأطفال', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 35, badge: 'مرح' },
  { id: 'p16', name: 'قارورة حرارية', description: 'قارورة عملية للحفاظ على المشروبات أثناء التنقل.', price: 170, category: 'الصحة والعناية اليومية', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80', rating: 4.6, stock: 40, badge: 'أساسي' },
  { id: 'p17', name: 'علبة توابل مغربية', description: 'تشكيلة من التوابل المغربية.', price: 260, category: 'المواد الغذائية', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 28, badge: 'لذيذ' },
  { id: 'p18', name: 'حقيبة سفر', description: 'حقيبة سفر خفيفة وعملية وأنيقة.', price: 740, category: 'الأزياء والإكسسوارات', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 12, badge: 'للسفر' },
  { id: 'p19', name: 'مصباح LED صغير', description: 'مصباح مكتبي بتصميم عصري.', price: 290, category: 'المنزل والديكور', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', rating: 4.5, stock: 21, badge: 'Chic' },
  { id: 'p20', name: 'Carte de visite premium', description: 'Pack de cartes de visite premium pour les professionnels.', price: 120, category: 'التكنولوجيا', store: 'Nour Home', image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80', rating: 4.3, stock: 45, badge: 'Business' },
  { id: 'p21', name: 'Bol souvenir marocain', description: 'Pièce artisanale de grande qualité pour les pièces de décoration.', price: 220, category: 'الصناعة التقليدية', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 14, badge: 'فريد' },
  { id: 'p22', name: 'Mélange de thé aux herbes', description: 'Mélange doux aux saveurs apaisantes et aliment post repas.', price: 110, category: 'المواد الغذائية', store: 'Atlas Market', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80', rating: 4.7, stock: 34, badge: 'Soin' },
  { id: 'p23', name: 'Coffret massage', description: 'Set de massage et encaustique pour relaxation et détente.', price: 460, category: 'الصحة والعناية اليومية', store: 'Sahara Beauty', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80', rating: 4.8, stock: 20, badge: 'Zen' },
  { id: 'p24', name: 'Poterie artisanale', description: 'Pièces uniques en terre cuite avec motifs traditionnels.', price: 300, category: 'الصناعة التقليدية', store: 'Dunes Crafts', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80', rating: 4.9, stock: 16, badge: 'Artisanal' },
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
