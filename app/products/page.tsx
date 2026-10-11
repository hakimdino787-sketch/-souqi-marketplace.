import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/demo-data';

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-orange-900 p-8 text-white">
        <h1 className="text-3xl font-black">Découvrir nos produits</h1>
        <p className="mt-2 text-slate-200">Des milliers d’articles locaux et premium à portée de main.</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span>🔎</span>
          <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Recherche rapide" />
        </div>
        <div className="flex gap-3">
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <option>Trier par</option>
            <option>Prix: bas à haut</option>
            <option>Prix: haut à bas</option>
            <option>Commentaires</option>
          </select>
          <button className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white">Filtrer</button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image src={product.image} alt={product.name} width={600} height={420} className="h-52 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{product.category}</span>
                <span>⭐ {product.rating}</span>
              </div>
              <h2 className="mt-2 text-lg font-bold text-slate-900">{product.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{product.store}</p>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xl font-black text-slate-900">{product.price} MAD</p>
                  <p className="text-xs text-emerald-600">{product.stock} en stock</p>
                </div>
                <Link href={`/products/${product.id}`} className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                  Voir
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3">
        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">Précédent</button>
        <span className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">1</span>
        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">Suivant</button>
      </div>
    </div>
  );
}
