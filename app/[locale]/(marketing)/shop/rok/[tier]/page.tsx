import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import PricingCards from '@/components/blocks/PricingCards';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

export async function generateStaticParams() {
  const tiers = ['mobile', 'pc', 'client'];
  const locales = ['vi', 'en', 'pt-BR'];
  return tiers.flatMap((tier) => locales.map((locale) => ({ locale, tier })));
}

export default async function RokTier({
  params,
}: {
  params: Promise<{ locale: string; tier: string }>;
}) {
  const { locale: raw, tier } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);

  // Lấy block i18n theo tier; nếu thiếu thì fallback sang en
  const tr = dict.shopRokTier?.[tier] ?? dict.shopRokTier?.['mobile'];

  const plans = (tr.plans as Array<any>).map((p) => ({
    title: p.title,
    price: p.price,
    features: p.features,
    cta: p.cta ?? dict.cta.buyNow,
    href: '#', // TODO: link thanh toán thực tế
  }));

  return (
    <Section>
      <Container>
        <h1 className="mb-2 text-3xl font-extrabold text-white">
          {tr.pageTitle}
        </h1>
        <p className="text-white/70 mb-10">{tr.pageSubtitle}</p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-300 text-center mb-2">
          {tr.gridTitle}
        </h2>
        <p className="text-white/60 text-center mb-8">{tr.gridSub}</p>

        <PricingCards title="" subtitle="" plans={plans} locale={locale} />
      </Container>
    </Section>
  );
}
