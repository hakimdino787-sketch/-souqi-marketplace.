import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://souqi.ma'),
  title: {
    default: 'Souqi | سوقي',
    template: '%s | Souqi',
  },
  description: 'Marketplace marocain moderne pour achats en ligne et vente locale.',
  keywords: ['Souqi', 'Maroc', 'marketplace', 'achat', 'vente', 'MAD'],
  openGraph: {
    title: 'Souqi | سوقي',
    description: 'Marketplace marocain moderne pour achats en ligne et vente locale.',
    url: 'https://souqi.ma',
    siteName: 'Souqi',
    locale: 'fr_MA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://souqi.ma',
    languages: {
      ar: 'https://souqi.ma/ar',
      fr: 'https://souqi.ma/fr',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-stone-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
