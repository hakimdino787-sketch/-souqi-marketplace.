export default function AdminDashboardPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        وضع العرض التجريبي: الأرقام والعناصر أدناه أمثلة ثابتة وليست إحصائيات حقيقية. هذه الصفحة ليست بعد محمية بصلاحيات إدارة فعلية، فلا تستعملها لإدارة بيانات حقيقية.
      </div>
      <h1 className="mt-6 text-3xl font-black text-slate-900">لوحة الإدارة — عرض تجريبي</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {[
          { label: 'مستخدمون تجريبيون', value: '3,420' },
          { label: 'متاجر تجريبية', value: '124' },
          { label: 'منتجات تجريبية', value: '7,980' },
          { label: 'طلبات تجريبية', value: '1,680' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-black text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">أمثلة على المراجعة</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-3">منتج تجريبي: سجادة أمازيغية — للمراجعة</li>
            <li className="rounded-2xl bg-slate-50 p-3">بلاغ تجريبي: محتوى يحتاج إلى مراجعة</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">سجل تجريبي</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-3">متجر تجريبي: Atlas Market</li>
            <li className="rounded-2xl bg-slate-50 p-3">تم فحص 3 منتجات تجريبية</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
