'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart-provider';

export function CartNavLink() {
  const { itemCount } = useCart();
  return (
    <Link href="/cart" className="relative rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700">
      السلة
      {itemCount > 0 && (
        <span aria-label={`${itemCount} عناصر في السلة`} className="mr-2 inline-flex min-w-5 items-center justify-center rounded-full bg-orange-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
