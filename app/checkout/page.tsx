export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Paiement et livraison</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div>
            <h2 className="text-xl font-black text-slate-900">Informations client</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Prénom" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Nom" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Téléphone" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Email" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-900">Adresse de livraison</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Adresse exacte" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Ville" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Code postal" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-900">Méthode de paiement</h2>
            <div className="mt-4 grid gap-3">
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                <input type="radio" name="payment" defaultChecked />
                <span>Paiement à la livraison</span>
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                <input type="radio" name="payment" />
                <span>Carte bancaire (à venir)</span>
              </label>
            </div>
          </div>

          <button className="w-full rounded-2xl bg-orange-600 px-4 py-3 font-semibold text-white">Confirmer la commande</button>
        </form>

        <aside className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-soft">
          <h2 className="text-xl font-black">Votre commande</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Huile d’argan premium</span><span>420 MAD</span></div>
            <div className="flex items-center justify-between"><span>Sac artisanal</span><span>640 MAD</span></div>
            <div className="flex items-center justify-between"><span>Livraison</span><span>35 MAD</span></div>
          </div>
          <div className="mt-6 border-t border-slate-700 pt-4">
            <div className="flex items-center justify-between text-lg font-black"><span>Total</span><span>1095 MAD</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
