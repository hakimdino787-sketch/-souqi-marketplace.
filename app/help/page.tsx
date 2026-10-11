export default function HelpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Centre d’aide</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-slate-900">Commande</h2>
          <p className="mt-2 text-sm text-slate-600">Suivez vos achats et gérez le statut de livraison depuis votre compte.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-slate-900">Vente</h2>
          <p className="mt-2 text-sm text-slate-600">Gérez vos produits, catégories et commandes depuis le tableau de bord vendeur.</p>
        </div>
      </div>
    </div>
  );
}
