import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);
  const c = dict.contact;

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold gradient-text">{c.title}</h1>
        <p className="mt-2 text-white/80">{c.subtitle}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {c.channels.map((ch: any) => (
            <a key={ch.label} href={ch.href} className="card p-5 hover:bg-white/10">
              <div className="font-semibold">{ch.label}</div>
              <p className="text-sm text-white/70">{ch.desc}</p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
