import Link from 'next/link';
import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

export default async function RokHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);

  const t = dict.rokHub;

  const groups = [
    { key: 'mobile', ...t.groups.mobile },
    { key: 'pc', ...t.groups.pc },
    { key: 'client', ...t.groups.client },
  ];

  return (
    <Section>
      <Container>
        <h1 className="mb-3 text-3xl font-extrabold text-white">{t.title}</h1>
        <p className="text-white/70 mb-8">{t.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <Link
              key={g.key}
              href={`/${locale}/shop/rok/${g.key}`}
              className="group relative overflow-hidden rounded-2xl p-[2px] transition hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
              <div className="relative h-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6">
                <div className="text-xl font-semibold text-white">{g.title}</div>
                <p className="mt-2 text-white/70">{g.desc}</p>
                <span className="mt-4 inline-block text-cyan-300">
                  {locale === 'vi' ? 'Xem các gói →' : locale === 'pt-BR' ? 'Ver pacotes →' : 'View plans →'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
