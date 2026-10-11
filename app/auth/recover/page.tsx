import AuthForm from '@/components/auth-form';

export default function RecoverPage() {
  return (
    <div dir="rtl" className="mx-auto max-w-md px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">استعادة كلمة المرور</h1>
        <p className="mt-2 text-sm text-slate-500">غادي نرسلوا رابط الاستعادة إلى بريدك إذا كان مسجلاً.</p>
        <AuthForm mode="recover" />
      </div>
    </div>
  );
}
