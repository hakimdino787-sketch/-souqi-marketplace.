export default function SellerDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Tableau de bord vendeur</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          { label: 'Ventes du mois', value: '12 500 MAD' },
          { label: 'Commandes', value: '48' },
          { label: 'Avis', value: '4.8 / 5' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-black text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">Produits</h2>
          <ul className="mt-5 space-y-3">
            <li className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
              <span>Écharpe marocaine</span>
              <span className="font-bold text-emerald-600">Publié</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
              <span>Bol en céramique</span>
              <span className="font-bold text-amber-600">En stock</span>
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">Commandes récentes</h2>
          <ul className="mt-5 space-y-3">
            <li className="flex justify-between rounded-2xl bg-slate-50 p-3">
              <span>Commande #4021</span>
              <span>En préparation</span>
            </li>
            <li className="flex justify-between rounded-2xl bg-slate-50 p-3">
              <span>Commande #4014</span>
              <span>Livrée</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
