import Hero from '@/components/blocks/Hero';
import ProductGrid from '@/components/blocks/ProductGrid';
//import FeatureMatrix from '@/components/blocks/FeatureMatrix';
//import Faq from '@/components/blocks/Faq';
import Section from '@/components/ui/section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
        cta={dict.cta.getStarted}
        href={`/${locale}/downloads`}
      />
      <Section>
        <ProductGrid
          title={dict.home.products.title}
          subtitle={dict.home.products.subtitle}
          items={[
            {
              key: 'rok',
              title: 'Rise of Kingdoms Bot',
              status: 'available',
              description: dict.home.products.rok,
              href: `/${locale}/welcome`,
              image: '/products/rok.png',
            },
            {
              key: 'cod',
              title: 'Call of Dragons Bot',
              status: 'coming',
              description: dict.home.products.cod,
              href: '#',
              image: '/products/cod.png',
            },
            {
              key: 'eoc',
              title: 'Era of Conquest Bot',
              status: 'coming',
              description: dict.home.products.eoc,
              href: '#',
              image: '/products/eoc.png',
            },
            {
              key: 'warpath',
              title: 'Warpath Bot',
              status: 'coming',
              description: dict.home.products.warpath,
              href: '#',
              image: '/products/warpath.png',
            },
          ]}
        />
      </Section>
      
    </>
  );
}
