import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_ENV === 'production'
    ? 'https://souqi-marketplace-scooltools7.vercel.app'
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'سوقي | Souqi',
    template: '%s | سوقي',
  },
  description: 'سوقي منصة مغربية لاكتشاف المنتجات والمتاجر المحلية. نسخة تجريبية؛ الطلبات والدفع الحقيقي غير مفعّلين بعد.',
  keywords: ['سوقي', 'Souqi', 'المغرب', 'التسوق', 'المنتجات المحلية', 'المتاجر المغربية'],
  openGraph: {
    title: 'سوقي | Souqi',
    description: 'اكتشف المنتجات والمتاجر المحلية في المغرب.',
    url: siteUrl,
    siteName: 'سوقي',
    locale: 'ar_MA',
    type: 'website',
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
