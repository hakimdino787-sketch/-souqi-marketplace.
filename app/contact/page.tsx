export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Contactez-nous</h1>
      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Nom" />
          <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" />
        </div>
        <textarea className="mt-4 min-h-36 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Votre message" />
        <button className="mt-5 rounded-2xl bg-orange-600 px-5 py-3 font-semibold text-white">Envoyer</button>
      </div>
    </div>
  );
}
