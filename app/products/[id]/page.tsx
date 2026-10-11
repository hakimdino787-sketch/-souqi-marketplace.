import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, reviews } from '@/lib/demo-data';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-8 rounded-2xl bg-amber-50 p-4 text-sm text-amber-700">
        Données de démonstration • Produit de test uniquement
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Image src={product.image} alt={product.name} width={1000} height={800} className="h-[500px] w-full rounded-[2rem] object-cover shadow-soft" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[product.image, product.image, product.image].map((image, index) => (
              <Image key={index} src={image} alt={`${product.name} ${index + 1}`} width={400} height={300} className="h-28 w-full rounded-2xl object-cover" />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">{product.category}</span>
            <span className="text-sm text-slate-500">⭐ {product.rating}</span>
          </div>
          <h1 className="mt-4 text-3xl font-black text-slate-900">{product.name}</h1>
          <p className="mt-2 text-sm text-slate-500">Vendu par {product.store}</p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-4xl font-black text-slate-900">{product.price} MAD</span>
            <span className="text-sm text-slate-500">{product.stock} disponibles</span>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">Ajouter au panier</button>
            <button className="rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700">❤ Favoris</button>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p>• Livraison à Rabat, Casablanca, Marrakech et autres villes.</p>
            <p>• Paiement à la livraison disponible.</p>
            <p>• Garantie et support après vente.</p>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <h2 className="font-bold text-slate-900">Description</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{product.description}</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-black text-slate-900">Avis clients</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reviews.slice(0, 4).map((review) => (
            <div key={review.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{review.user}</p>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
                <span className="text-sm font-bold text-amber-600">⭐ {review.rating}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-black text-slate-900">Produits similaires</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image src={item.image} alt={item.name} width={500} height={300} className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-slate-900">{item.name}</p>
                <p className="mt-2 text-sm text-slate-500">{item.store}</p>
                <p className="mt-3 text-xl font-black text-slate-900">{item.price} MAD</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
