export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center md:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">404</p>
      <h1 className="mt-4 text-4xl font-black text-slate-900">Page introuvable</h1>
      <p className="mt-3 text-slate-600">La page demandée n’existe pas ou a été déplacée.</p>
      <a href="/" className="mt-8 inline-flex rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Retour à l’accueil</a>
    </div>
  );
}
