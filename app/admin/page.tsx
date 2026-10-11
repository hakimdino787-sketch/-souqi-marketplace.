export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Administration</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {[
          { label: 'Utilisateurs', value: '3,420' },
          { label: 'Boutiques', value: '124' },
          { label: 'Produits', value: '7,980' },
          { label: 'Commandes', value: '1,680' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-black text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">Modération</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-3">Produit signalé: Tapis berbère – en attente</li>
            <li className="rounded-2xl bg-slate-50 p-3">Signalement utilisateur: contenu suspect</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">Audit</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-3">Vendeur vérifié: Boutique Atlas</li>
            <li className="rounded-2xl bg-slate-50 p-3">Modération du catalogue: 3 produits contrôlés</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
