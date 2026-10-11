import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Connexion</h1>
        <p className="mt-2 text-sm text-slate-500">Accédez à votre compte Souqi.</p>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" />
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Mot de passe" />
          <button className="w-full rounded-2xl bg-orange-600 px-4 py-3 font-semibold text-white">Se connecter</button>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <Link href="/auth/register" className="font-semibold text-slate-900">Créer un compte</Link>
          <Link href="/auth/recover" className="text-orange-600">Mot de passe oublié ?</Link>
        </div>
      </div>
    </div>
  );
}
