import DownloadGuides from '@/components/blocks/DownloadGuides';
import Section from '@/components/ui/section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

export default async function Downloads({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);

  return (
    <Section>
      <DownloadGuides
        title={dict.downloads.title}
        items={[
          { title: dict.downloads.rok.en, href: '#' },
          { title: dict.downloads.rok.setup, href: '#' },
          { title: dict.downloads.rok.windowsExclusion, href: '#' },
          { title: dict.downloads.rok.update, href: '#' },
          { title: dict.downloads.cod.en, href: '#' },
          { title: dict.downloads.cod.setup, href: '#' },
        ]}
      />
    </Section>
  );
}
