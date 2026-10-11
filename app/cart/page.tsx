import Link from 'next/link';

export default function CartPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
        <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">نسخة تجريبية</p>
        <h1 className="mt-5 text-3xl font-black text-slate-900">سلة المشتريات</h1>
        <p className="mt-4 leading-8 text-slate-600">
          السلة وحفظ المنتجات بين الصفحات ما زالا قيد التطوير. حذفنا العناصر الوهمية حتى لا تظهر لك كأنها طلبات حقيقية.
          يمكنك استكشاف كتالوج المنتجات، لكن إتمام الطلب والدفع غير متاحين حالياً.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/products" className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">تصفح المنتجات التجريبية</Link>
          <Link href="/" className="rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700">العودة للرئيسية</Link>
        </div>
      </div>
    </div>
  );
}
