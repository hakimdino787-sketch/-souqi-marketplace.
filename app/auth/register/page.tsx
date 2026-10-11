import AuthForm from '@/components/auth-form';

export default function RegisterPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-md px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">إنشاء حساب</h1>
        <p className="mt-2 text-sm text-slate-500">مرحبا بك فمجتمع سوقي.</p>
        <AuthForm mode="register" />
      </div>
    </div>
  );
}
