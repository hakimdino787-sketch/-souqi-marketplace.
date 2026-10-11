import Link from 'next/link';

export default function CartPage() {
  const items = [
    { name: 'Sac en cuir artisanal', price: 640, qty: 1 },
    { name: 'Huile d’argan premium', price: 210, qty: 2 },
    { name: 'Coussin décoratif', price: 180, qty: 1 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 900 ? 0 : 35;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-black text-slate-900">Panier</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div>
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">Prix unitaire: {item.price} MAD</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="h-8 w-8 rounded-full border border-slate-200">-</button>
                <span className="w-6 text-center font-semibold">{item.qty}</span>
                <button className="h-8 w-8 rounded-full border border-slate-200">+</button>
                <span className="min-w-20 text-right font-bold text-slate-900">{item.price * item.qty} MAD</span>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-black text-slate-900">Résumé</h2>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>Sous-total</span><span>{subtotal} MAD</span></div>
            <div className="flex justify-between"><span>Livraison</span><span>{shipping} MAD</span></div>
            <div className="flex justify-between"><span>Taxe</span><span>0 MAD</span></div>
          </div>
          <div className="mt-6 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between text-lg font-black text-slate-900">
              <span>Total</span>
              <span>{total} MAD</span>
            </div>
            <Link href="/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-orange-600 px-4 py-3 font-semibold text-white">
              Passer au paiement
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
