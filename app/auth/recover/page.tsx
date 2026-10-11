export default function RecoverPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 md:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Réinitialiser le mot de passe</h1>
        <p className="mt-2 text-sm text-slate-500">Recevez un lien de réinitialisation par email.</p>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Votre email" />
          <button className="w-full rounded-2xl bg-orange-600 px-4 py-3 font-semibold text-white">Envoyer</button>
        </div>
      </div>
    </div>
  );
}
