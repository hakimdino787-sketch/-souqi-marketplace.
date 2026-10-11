import Link from 'next/link';
import Image from 'next/image';
import { categories, featuredProducts, popularStores, latestProducts } from '@/lib/demo-data';

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              <span>🔥</span>
              Nouveautés au Maroc
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Achetez mieux, vivez plus local.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Souqi vous connecte aux meilleurs produits, artisans et boutiques de qualité avec une expérience moderne et sécurisée.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
                <span className="text-xl">🔎</span>
                <input
                  aria-label="Rechercher un produit"
                  className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  placeholder="Rechercher un produit, boutique ou catégorie"
                />
              </div>
              <Link href="/products" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Explorer
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              {['Livraison rapide', 'Paiement à la livraison', 'Produits vérifiés'].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-orange-200 bg-white p-4 shadow-soft">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-orange-100 to-amber-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Promotion du jour</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-900">-30% sur les essentiels</h2>
                </div>
                <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">MAD</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {featuredProducts.slice(0, 2).map((product) => (
                  <div key={product.id} className="rounded-2xl bg-white p-3 shadow-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="h-32 w-full rounded-xl object-cover"
                    />
                    <p className="mt-3 text-sm font-semibold text-slate-900">{product.name}</p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="font-bold text-orange-600">{product.price} MAD</span>
                      <span className="text-slate-500">{product.rating}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">Catégories populaires</h2>
          <Link href="/products" className="text-sm font-semibold text-orange-600">Voir tout</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.slug}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">Produits vedettes</h2>
          <Link href="/products" className="text-sm font-semibold text-orange-600">Découvrir</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Image src={product.image} alt={product.name} width={600} height={400} className="h-52 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                    {product.badge}
                  </span>
                  <span className="text-xs text-slate-500">⭐ {product.rating}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{product.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{product.store}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-900">{product.price} MAD</p>
                    <p className="text-xs text-slate-500">{product.stock} en stock</p>
                  </div>
                  <Link href={`/products/${product.id}`} className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                    Voir
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black">Dernières offres</h2>
            <Link href="/products" className="text-sm font-semibold text-orange-300">Tout voir</Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {latestProducts.map((product) => (
              <div key={product.id} className="rounded-3xl border border-slate-700 bg-slate-800 p-4">
                <Image src={product.image} alt={product.name} width={600} height={300} className="h-44 w-full rounded-2xl object-cover" />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold">{product.name}</p>
                    <p className="text-sm text-slate-400">{product.store}</p>
                  </div>
                  <span className="text-xl font-black text-orange-300">{product.price} MAD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">Boutiques populaires</h2>
          <Link href="/stores" className="text-sm font-semibold text-orange-600">Explorer</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {popularStores.map((store) => (
            <div key={store.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl font-black text-orange-700">
                  {store.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{store.name}</p>
                  <p className="text-sm text-slate-500">{store.city}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{store.bio}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>⭐ {store.rating}</span>
                <span>{store.products} produits</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
