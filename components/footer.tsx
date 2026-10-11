import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-xl font-black text-slate-900">سوقي</p>
          <p className="mt-3 text-sm leading-7 text-slate-500">منصة مغربية لاكتشاف المنتجات والمتاجر المحلية. الموقع حالياً نسخة تجريبية.</p>
        </div>
        <div>
          <p className="font-bold text-slate-900">المساعدة</p>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <p><Link href="/faq">الأسئلة الشائعة</Link></p>
            <p><Link href="/help">مركز المساعدة</Link></p>
            <p><Link href="/returns">سياسة الإرجاع</Link></p>
          </div>
        </div>
        <div>
          <p className="font-bold text-slate-900">المعلومات القانونية</p>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <p><Link href="/terms">الشروط والأحكام</Link></p>
            <p><Link href="/privacy">سياسة الخصوصية</Link></p>
            <p><Link href="/contact">اتصل بنا</Link></p>
          </div>
        </div>
        <div>
          <p className="font-bold text-slate-900">البائعون والإدارة</p>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <p><Link href="/seller/dashboard">لوحة البائع التجريبية</Link></p>
            <p><Link href="/admin">لوحة الإدارة التجريبية</Link></p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © 2026 سوقي — جميع الحقوق محفوظة. لا تستقبل المنصة طلبات حقيقية حالياً.
      </div>
    </footer>
  );
}
