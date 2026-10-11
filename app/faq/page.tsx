export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">FAQ</h1>
      <div className="mt-8 space-y-4">
        {[
          ['Comment commander ?', 'Sélectionnez un produit, ajoutez-le au panier et confirmez votre commande.'],
          ['Paiement disponible ?', 'Le paiement à la livraison est supporté dans cette version MVP.'],
          ['Livraison ?', 'La livraison est disponible dans les principales villes du Maroc.'],
        ].map(([question, answer]) => (
          <div key={question} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">{question}</h2>
            <p className="mt-2 text-sm text-slate-600">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
