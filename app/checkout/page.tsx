import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
        <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">الطلب الحقيقي غير مفعّل بعد</p>
        <h1 className="mt-5 text-3xl font-black text-slate-900">إتمام الطلب</h1>
        <p className="mt-4 leading-8 text-slate-600">
          واجهة الأداء عند التسليم ما زالت في مرحلة الإعداد. أوقفنا إرسال الطلبات مؤقتاً حتى نربط خدمة آمنة تتحقق من الأسعار والمخزون على الخادم وتحفظ الطلب فعلياً. هذا يمنع إرسال طلبات وهمية أو بمبالغ معدّلة من المتصفح.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/products" className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">العودة إلى المنتجات</Link>
          <Link href="/cart" className="rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700">العودة إلى السلة</Link>
        </div>
      </div>
    </div>
  );
}
