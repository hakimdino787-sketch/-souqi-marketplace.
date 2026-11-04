'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient, supabaseReady } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!supabaseReady) {
      setError('إعداد Supabase غير مكتمل.');
      setLoading(false);
      return;
    }
    const supabase = createClient();
    supabase.auth.getUser().then(({ data, error: authError }) => {
      if (authError || !data.user) {
        router.replace('/auth/login');
        return;
      }
      setUser(data.user);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) router.replace('/auth/login');
      else setUser(session.user);
    });
    return () => listener.subscription.unsubscribe();
  }, [router]);

  async function signOut() {
    const { error: signOutError } = await createClient().auth.signOut();
    if (signOutError) setError('تعذر تسجيل الخروج. حاول مرة أخرى.');
    else router.replace('/');
  }

  if (loading) return <div className="mx-auto max-w-4xl px-4 py-16 text-center">جاري تحميل الحساب...</div>;

  return (
    <div dir="rtl" className="mx-auto max-w-4xl px-4 py-10 md:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">حسابي في سوقي</h1>
        {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-xl font-bold text-slate-900">{user?.user_metadata?.full_name || 'مستخدم سوقي'}</p>
            <p className="mt-1 text-sm text-slate-500">{user?.email}</p>
            <p className="mt-3 text-xs text-slate-400">معرّف الحساب: {user?.id}</p>
          </div>
          <button onClick={signOut} className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white">تسجيل الخروج</button>
        </div>
        <div className="mt-8 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-800">
          سجل الطلبات والبائعين سيظهر هنا بعد تفعيل عمليات الشراء وإضافة منتجات حقيقية. لا توجد طلبات تجريبية معروضة كأنها طلبات فعلية.
        </div>
      </div>
    </div>
  );
}
