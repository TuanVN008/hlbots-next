import type { ReactNode } from 'react';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
