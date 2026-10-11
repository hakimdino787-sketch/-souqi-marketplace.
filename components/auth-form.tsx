'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, firebaseReady } from '@/lib/firebase';

type AuthMode = 'login' | 'register' | 'recover';

const messages: Record<string, string> = {
  'auth/invalid-credential': 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
  'auth/email-already-in-use': 'هذا البريد الإلكتروني مسجل من قبل.',
  'auth/invalid-email': 'تحقق من صيغة البريد الإلكتروني.',
  'auth/weak-password': 'كلمة المرور خاصها تكون 6 أحرف على الأقل.',
  'auth/too-many-requests': 'محاولات كثيرة. حاول من بعد شوية.',
  'auth/network-request-failed': 'تعذر الاتصال بالإنترنت. حاول مرة أخرى.',
};

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice('');
    setError('');

    if (!firebaseReady || !auth || !db) {
      setError('Firebase مازال ما تهيّأش. أضف متغيرات NEXT_PUBLIC_FIREBASE_* ثم أعد تشغيل التطبيق.');
      return;
    }

    setBusy(true);
    try {
      if (mode === 'register') {
        const credential = await createUserWithEmailAndPassword(auth, email.trim(), password);
        await updateProfile(credential.user, { displayName: name.trim() });
        await setDoc(doc(db, 'users', credential.user.uid), {
          uid: credential.user.uid,
          displayName: name.trim(),
          email: credential.user.email,
          role: 'customer',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        setNotice('تم إنشاء الحساب بنجاح. يمكنك الآن تصفح سوقي.');
      } else if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        setNotice('تم تسجيل الدخول بنجاح.');
      } else {
        await sendPasswordResetEmail(auth, email.trim());
        setNotice('إذا كان البريد مسجلاً، فسيصلك رابط إعادة تعيين كلمة المرور.');
      }
    } catch (cause) {
      const code = typeof cause === 'object' && cause !== null && 'code' in cause
        ? String((cause as { code: unknown }).code)
        : '';
      setError(messages[code] ?? 'ما نجحاتش العملية. تحقق من البيانات وإعدادات Firebase ثم حاول مرة أخرى.');
    } finally {
      setBusy(false);
    }
  }

  const title = mode === 'login' ? 'تسجيل الدخول' : mode === 'register' ? 'إنشاء حساب جديد' : 'استعادة كلمة المرور';

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {mode === 'register' && (
        <input
          required
          minLength={2}
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          placeholder="الاسم الكامل"
          aria-label="الاسم الكامل"
        />
      )}
      <input
        required
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3"
        placeholder="البريد الإلكتروني"
        aria-label="البريد الإلكتروني"
      />
      {mode !== 'recover' && (
        <input
          required
          minLength={6}
          type="password"
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          placeholder="كلمة المرور (6 أحرف على الأقل)"
          aria-label="كلمة المرور"
        />
      )}
      {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {notice && <p role="status" className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">{notice}</p>}
      <button
        disabled={busy}
        type="submit"
        className="w-full rounded-2xl bg-orange-600 px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? 'جاري التنفيذ...' : title}
      </button>
      <div className="flex flex-wrap justify-between gap-3 text-sm text-slate-500">
        {mode !== 'register' && <Link className="font-semibold text-slate-900" href="/auth/register">إنشاء حساب</Link>}
        {mode !== 'login' && <Link className="font-semibold text-slate-900" href="/auth/login">تسجيل الدخول</Link>}
        {mode !== 'recover' && <Link className="text-orange-600" href="/auth/recover">نسيت كلمة المرور؟</Link>}
      </div>
      {!firebaseReady && <p className="text-xs leading-6 text-amber-700">وضع الإعداد: الواجهات متاحة، لكن التسجيل الحقيقي لن يعمل قبل إعداد Firebase.</p>}
    </form>
  );
}
