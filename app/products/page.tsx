'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { categories, products } from '@/lib/demo-data';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('featured');

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    const result = products.filter((product) => {
      const matchesSearch = !query || [product.name, product.description, product.store, product.category]
        .some((value) => value.toLocaleLowerCase().includes(query));
      const matchesCategory = category === 'all' || product.category === category;
      return matchesSearch && matchesCategory;
    });

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [search, category, sort]);

  return (
    <div dir="rtl" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        المنتجات والأسعار والمخزون المعروضة أمثلة تجريبية وليست عروض بيع مؤكدة.
      </div>
      <div className="mb-8 rounded-3xl bg-gradient-to-l from-slate-900 via-slate-800 to-orange-900 p-8 text-white">
        <h1 className="text-3xl font-black">اكتشف المنتجات</h1>
        <p className="mt-2 leading-7 text-slate-200">تصفح عيّنة من المنتجات المحلية وابحث بالاسم أو المتجر أو الفئة.</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <label className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span aria-hidden="true">🔎</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            placeholder="ابحث عن منتج أو متجر..."
            aria-label="البحث في المنتجات"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <span>الفئة</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
              <option value="all">جميع الفئات</option>
              {Array.from(new Set(products.map((product) => product.category))).map((name) => (
                <option key={name} value={name}>{categories.find((item) => item.name === name)?.name ?? name}</option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <span>الترتيب</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
              <option value="featured">المقترحة</option>
              <option value="price-asc">السعر: من الأقل للأعلى</option>
              <option value="price-desc">السعر: من الأعلى للأقل</option>
              <option value="rating">الأعلى تقييماً</option>
            </select>
          </label>
        </div>
      </div>

      <p className="mb-5 text-sm text-slate-500">عدد النتائج: {visibleProducts.length}</p>
      {visibleProducts.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-lg font-bold text-slate-900">ما لقيناش منتجات مطابقة</p>
          <p className="mt-2 text-sm text-slate-500">جرّب كلمة بحث أخرى أو اختر جميع الفئات.</p>
          <button onClick={() => { setSearch(''); setCategory('all'); setSort('featured'); }} className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">إعادة ضبط البحث</button>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image src={product.image} alt={product.name} width={600} height={420} className="h-52 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span>{categories.find((item) => item.name === product.category)?.name ?? product.category}</span>
                  <span>⭐ {product.rating}</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-slate-900">{product.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{product.store}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-900">{product.price} درهم</p>
                    <p className="text-xs text-emerald-600">مخزون تجريبي: {product.stock}</p>
                  </div>
                  <Link href={`/products/${product.id}`} className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">التفاصيل</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
