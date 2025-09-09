import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

export default async function RefundPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);
  const p = dict.policy.refund;

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold gradient-text">{p.title}</h1>
        <div className="prose prose-invert mt-6 max-w-none">
          <p>{p.body1}</p>
          <ul>
            <li>{p.point1}</li>
            <li>{p.point2}</li>
            <li>{p.point3}</li>
          </ul>
          <p>{p.body2}</p>
        </div>
      </Container>
    </Section>
  );
}
