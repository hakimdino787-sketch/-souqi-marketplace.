import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Créer un compte</h1>
        <p className="mt-2 text-sm text-slate-500">Rejoignez la communauté Souqi.</p>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Nom complet" />
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" />
          <input type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Mot de passe" />
          <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">S'inscrire</button>
        </div>
        <p className="mt-5 text-sm text-slate-500">
          Déjà inscrit ? <Link href="/auth/login" className="font-semibold text-orange-600">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
