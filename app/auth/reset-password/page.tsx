'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { createClient, supabaseReady } from '@/lib/supabase';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    setError('');
    try {
      if (!supabaseReady) throw new Error('إعداد Supabase غير مكتمل.');
      const { error: updateError } = await createClient().auth.updateUser({ password });
      if (updateError) throw updateError;
      setMessage('تم تغيير كلمة المرور بنجاح. يمكنك تسجيل الدخول الآن.');
      window.setTimeout(() => router.replace('/auth/login'), 1200);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'تعذر تغيير كلمة المرور. افتح رابط الاستعادة من بريدك الإلكتروني مرة أخرى.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div dir="rtl" className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={submit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-black">تعيين كلمة مرور جديدة</h1>
        <input required minLength={6} type="password" autoComplete="new-password" value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="كلمة المرور الجديدة" />
        {message && <p role="status" className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">{message}</p>}
        {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <button disabled={busy} className="w-full rounded-2xl bg-orange-600 px-4 py-3 font-semibold text-white disabled:opacity-60">
          {busy ? 'جاري الحفظ...' : 'حفظ كلمة المرور'}
        </button>
      </form>
    </div>
  );
}
