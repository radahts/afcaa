import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { i18n, type Locale } from '../../i18n.config';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getDictionary } from '@/lib/dictionary';

const fontNotoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: 'AFCAA 2026 - L\'Oscar Africain de la Franchise',
  description: 'Célébrer l\'excellence dans la franchise africaine et le commerce associé.',
  icons: {
    icon: '/favicon.ico',
  },
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale }
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontNotoSans.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header lang={params.lang} dictionary={dictionary.navigation} />
          <main className="flex-1">{children}</main>
          <Footer lang={params.lang} dictionary={dictionary.footer} />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
