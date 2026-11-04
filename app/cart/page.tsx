'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/cart-provider';

const money = (value: number) => new Intl.NumberFormat('ar-MA', { maximumFractionDigits: 2 }).format(value);

export default function CartPage() {
  const { items, subtotal, hydrated, setQuantity, removeItem, clearCart } = useCart();

  if (!hydrated) return <div dir="rtl" className="mx-auto max-w-4xl px-4 py-16 text-center text-slate-500">جاري تحميل السلة...</div>;

  return (
    <div dir="rtl" className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        السلة محفوظة على هذا الجهاز. السعر والمخزون النهائيان يعاد التحقق منهما عند تأكيد الطلب.
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-black text-slate-900">سلة المشتريات</h1>
        {items.length > 0 && <button onClick={clearCart} className="text-sm font-semibold text-red-600 hover:underline">إفراغ السلة</button>}
      </div>
      {items.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-5xl" aria-hidden="true">🛒</p>
          <h2 className="mt-4 text-xl font-bold text-slate-900">السلة فارغة</h2>
          <p className="mt-2 text-sm text-slate-500">اختَر المنتجات التي أعجبتك وأضفها إلى السلة.</p>
          <Link href="/products" className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white">تصفح المنتجات</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {items.map((item) => (
              <article key={item.id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
                <Image src={item.image} alt={item.name} width={120} height={100} className="h-24 w-full rounded-2xl object-cover sm:w-28" />
                <div className="min-w-0 flex-1">
                  <h2 className="font-bold text-slate-900">{item.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{item.store}</p>
                  <p className="mt-2 font-black text-slate-900">{money(item.price)} درهم</p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="sr-only" htmlFor={`qty-${item.id}`}>الكمية</label>
                  <input id={`qty-${item.id}`} type="number" min={1} max={item.stock} value={item.quantity}
                    onChange={(event) => setQuantity(item.id, Number(event.target.value))}
                    className="w-20 rounded-xl border border-slate-200 px-3 py-2 text-center" />
                  <button onClick={() => removeItem(item.id)} className="rounded-xl px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">حذف</button>
                </div>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-black text-slate-900">ملخص السلة</h2>
            <div className="mt-5 flex justify-between text-sm text-slate-600"><span>عدد القطع</span><span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span></div>
            <div className="mt-3 flex justify-between text-sm text-slate-600"><span>المجموع التجريبي</span><span className="font-bold">{money(subtotal)} درهم</span></div>
            <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-800">الأداء عند الاستلام. يتم احتساب السعر النهائي والتحقق من المخزون داخل قاعدة البيانات.</p>
            <Link href="/checkout" className="mt-4 block w-full rounded-xl bg-orange-600 px-4 py-3 text-center font-semibold text-white">إتمام الطلب</Link>
            <Link href="/products" className="mt-3 block text-center text-sm font-semibold text-orange-700">متابعة التسوق</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
