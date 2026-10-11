export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Mon profil</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-black text-orange-700">A</div>
            <div>
              <p className="text-xl font-black text-slate-900">Amine Rahal</p>
              <p className="text-sm text-slate-500">amine@demo.ma</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p>Adresse: Rabat</p>
            <p>Ville: Rabat</p>
            <p>Compte: Client</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">Historique des commandes</h2>
          <div className="mt-5 space-y-3">
            {[
              { id: 'SOU-1024', status: 'En cours', total: '640 MAD' },
              { id: 'SOU-0891', status: 'Livrée', total: '890 MAD' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="font-bold text-slate-900">{order.id}</p>
                  <p className="text-sm text-slate-500">{order.status}</p>
                </div>
                <span className="font-bold text-slate-900">{order.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
