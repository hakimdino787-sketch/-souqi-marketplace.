import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, reviews } from '@/lib/demo-data';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <div dir="rtl" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
        منتج تجريبي — الاسم والسعر والمخزون والتقييمات أمثلة فقط وليست عرض بيع حقيقياً.
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Image src={product.image} alt={product.name} width={1000} height={800} className="h-[500px] w-full rounded-[2rem] object-cover shadow-soft" />
          <p className="mt-3 text-xs text-slate-500">صورة توضيحية للمنتج.</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">{product.category}</span>
            <span className="text-sm text-slate-500">⭐ {product.rating} (تجريبي)</span>
          </div>
          <h1 className="mt-4 text-3xl font-black text-slate-900">{product.name}</h1>
          <p className="mt-2 text-sm text-slate-500">المتجر: {product.store}</p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-4xl font-black text-slate-900">{product.price} درهم</span>
            <span className="text-sm text-slate-500">مخزون تجريبي: {product.stock}</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button disabled className="cursor-not-allowed rounded-2xl bg-slate-300 px-5 py-3 font-semibold text-slate-600" title="هذه الميزة غير متاحة في النسخة التجريبية">إضافة إلى السلة — قريباً</button>
            <button disabled className="cursor-not-allowed rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-400" title="هذه الميزة غير متاحة في النسخة التجريبية">♡ المفضلة — قريباً</button>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500">لا يمكن شراء هذا المنتج حالياً. سنفعّل الطلبات بعد إكمال التحقق من الأسعار والمخزون وتأمين معالجة الطلبات.</p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <h2 className="font-bold text-slate-900">وصف المنتج</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{product.description}</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-black text-slate-900">تقييمات تجريبية</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">هذه التعليقات أمثلة للعرض فقط، وليست آراء مشترين حقيقيين.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reviews.slice(0, 4).map((review) => (
            <div key={review.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-900">{review.user}</p>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
                <span className="text-sm font-bold text-amber-600">⭐ {review.rating}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black text-slate-900">منتجات مشابهة</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image src={item.image} alt={item.name} width={500} height={300} className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-slate-900">{item.name}</p>
                <p className="mt-2 text-sm text-slate-500">{item.store}</p>
                <p className="mt-3 text-xl font-black text-slate-900">{item.price} درهم</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
