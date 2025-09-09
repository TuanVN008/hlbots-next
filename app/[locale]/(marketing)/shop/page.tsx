import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/locales';

export default async function Shop({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';
  const dict = await getDictionary(locale);

  return (
    <Section>
      <Container>
        <h1 className="mb-6 text-3xl font-extrabold text-white">
          {dict.shop.title}
        </h1>
        <p className="text-white/70 mb-8">{dict.shop.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            href={`/${locale}/shop/rok`}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/products/rok.png" // 👉 thay ảnh ở đây (đặt file vào public/products/rok.jpg)
                alt="Rise of Kingdoms Bot"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width:768px) 33vw, 100vw"
                priority
              />
            </div>
            <div className="p-4 bg-slate-900">
              <h3 className="text-lg font-semibold text-white">
                Rise of Kingdoms Bot
              </h3>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
