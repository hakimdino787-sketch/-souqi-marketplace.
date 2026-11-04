import type { Product } from '@/lib/types';

type Related<T> = T | T[] | null | undefined;
type ProductRow = {
  id: string; name: string; description: string; price_mad: number | string;
  stock: number; image_url: string | null; status: string;
  stores?: Related<{ name: string; city: string; status: string }>;
  categories?: Related<{ name: string; slug: string }>;
  reviews?: { rating: number }[];
};

function first<T>(value: Related<T>): T | null {
  return Array.isArray(value) ? value[0] ?? null : value ?? null;
}

export function toProduct(row: ProductRow): Product {
  const store = first(row.stores);
  const category = first(row.categories);
  const ratings = row.reviews ?? [];
  const rating = ratings.length ? ratings.reduce((sum, item) => sum + item.rating, 0) / ratings.length : 0;
  return {
    id: row.id,
    name: row.name,
    description: row.description ?? '',
    price: Number(row.price_mad),
    category: category?.name ?? 'منتجات متنوعة',
    store: store?.name ?? 'متجر سوقي',
    image: row.image_url || '/placeholder-product.svg',
    rating,
    stock: row.stock,
    badge: row.status === 'active' ? 'متاح' : 'قيد المراجعة',
  };
}
