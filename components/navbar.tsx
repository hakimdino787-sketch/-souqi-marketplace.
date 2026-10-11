import Link from 'next/link';

export function Navbar() {
  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/products', label: 'Produits' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-600 text-lg font-black text-white">س</div>
          <div>
            <p className="text-lg font-black tracking-tight text-slate-900">Souqi</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">سوقي</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700">Panier</Link>
          <Link href="/auth/login" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Connexion</Link>
        </div>
      </div>
    </header>
  );
}
