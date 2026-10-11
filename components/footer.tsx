import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-xl font-black text-slate-900">Souqi</p>
          <p className="mt-3 text-sm text-slate-500">Marketplace marocain made for modern commerce.</p>
        </div>
        <div>
          <p className="font-bold text-slate-900">Aide</p>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <p><Link href="/faq">FAQ</Link></p>
            <p><Link href="/help">Centre d’aide</Link></p>
            <p><Link href="/returns">Retours</Link></p>
          </div>
        </div>
        <div>
          <p className="font-bold text-slate-900">Entreprise</p>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <p><Link href="/terms">Conditions</Link></p>
            <p><Link href="/privacy">Confidentialité</Link></p>
            <p><Link href="/contact">Contact</Link></p>
          </div>
        </div>
        <div>
          <p className="font-bold text-slate-900">Vendre</p>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <p><Link href="/seller/dashboard">Dashboard vendeur</Link></p>
            <p><Link href="/admin">Administration</Link></p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © 2026 Souqi. Tous droits réservés.
      </div>
    </footer>
  );
}
