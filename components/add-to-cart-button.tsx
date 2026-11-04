'use client';

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { useCart } from '@/components/cart-provider';

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      disabled={product.stock < 1}
      onClick={() => {
        addItem(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1800);
      }}
      className="rounded-2xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      {product.stock < 1 ? 'نفد المخزون التجريبي' : added ? 'تمت الإضافة ✓' : 'أضف إلى السلة'}
    </button>
  );
}
