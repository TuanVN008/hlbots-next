import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import PricingCards from '@/components/blocks/PricingCards';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

// --- Khai báo union type an toàn cho tier ---
const TIERS = ['mobile', 'pc', 'client'] as const;
type Tier = typeof TIERS[number];

// Tạo static params cho SSG
export async function generateStaticParams() {
  const locales = ['vi', 'en', 'pt-BR'] as const;
  return TIERS.flatMap((tier) =>
    locales.map((locale) => ({ locale, tier }))
  );
}

// Kiểu tối thiểu cho block i18n shopRokTier
type TierBlock = {
  pageTitle: string;
  pageSubtitle: string;
  gridTitle: string;
  gridSub: string;
  plans: { title: string; price: string; features: string[]; cta?: string; href?: string }[];
};

export default async function RokTier({
  params,
}: {
  params: Promise<{ locale: string; tier: string }>;
}) {
  const { locale: raw, tier } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';

  const dict = await getDictionary(locale);

  // Ép kiểu "lỏng" cho shopRokTier theo union Tier
  const shopRokTier = (dict as any)?.shopRokTier as Record<Tier, TierBlock> | undefined;

  // Xác thực tier và tạo key an toàn
  const key: Tier = (TIERS as readonly string[]).includes(tier) ? (tier as Tier) : 'mobile';

  // Lấy khối theo tier; fallback sang 'mobile' nếu thiếu
  const tr: TierBlock =
    shopRokTier?.[key] ??
    shopRokTier?.['mobile'] ?? {
      pageTitle: 'Rise of Kingdoms',
      pageSubtitle: '',
      gridTitle: 'Plans',
      gridSub: '',
      plans: [],
    };

  // Map dữ liệu thẻ giá; mặc định dùng dict.cta.buyNow nếu item không có cta riêng
  const plans = (tr.plans ?? []).map((p) => ({
    title: p.title,
    price: p.price,
    features: p.features ?? [],
    cta: p.cta ?? dict.cta?.buyNow ?? 'Buy now',
    href: p.href ?? '#',
  }));

  return (
    <Section>
      <Container>
        <h1 className="mb-2 text-3xl font-extrabold text-white">{tr.pageTitle}</h1>
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
