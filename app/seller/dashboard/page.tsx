export default function SellerDashboardPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        هذه لوحة تجريبية: المبيعات والطلبات والمنتجات أدناه أمثلة ثابتة وليست بيانات حقيقية. يلزم ربط Firebase وحماية المسارات قبل استعمالها مع بائعين حقيقيين.
      </div>
      <h1 className="mt-6 text-3xl font-black text-slate-900">لوحة البائع — عرض تجريبي</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          { label: 'مبيعات تجريبية', value: '12 500 MAD' },
          { label: 'طلبات تجريبية', value: '48' },
          { label: 'تقييم تجريبي', value: '4.8 / 5' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-black text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">منتجات تجريبية</h2>
          <ul className="mt-5 space-y-3">
            <li className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span>وشاح مغربي (مثال)</span><span className="font-bold text-emerald-600">منشور تجريبياً</span></li>
            <li className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span>وعاء خزفي (مثال)</span><span className="font-bold text-amber-600">مخزون تجريبي</span></li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">طلبات تجريبية</h2>
          <ul className="mt-5 space-y-3">
            <li className="flex justify-between rounded-2xl bg-slate-50 p-3"><span>طلب #DEMO-4021</span><span>قيد التحضير (مثال)</span></li>
            <li className="flex justify-between rounded-2xl bg-slate-50 p-3"><span>طلب #DEMO-4014</span><span>تم التسليم (مثال)</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
