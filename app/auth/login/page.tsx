import AuthForm from '@/components/auth-form';

export default function LoginPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-md px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">تسجيل الدخول</h1>
        <p className="mt-2 text-sm text-slate-500">دخل لحسابك فـ سوقي.</p>
        <AuthForm mode="login" />
      </div>
    </div>
  );
}
