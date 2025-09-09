import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { isLocale, type Locale } from '@/lib/locales';

type Option = {
  key: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export default async function Welcome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : 'en';

  const T = {
    en: {
      pageTitle: 'Select the service you want to use',
      options: [
        {
          key: 'mobile',
          title: 'Cloud Mobile',
          subtitle:
            'The Mobile Plan includes everything you need to run the bot on Android, iOS, PC or Mac. The bot is pre-installed and will continue to run even after you go offline.',
          image: '/welcome/mobile.jpg',
          href: `/${locale}/product/rok-mobile`,
        },
        {
          key: 'pc',
          title: 'PC(Emulator)',
          subtitle: 'Use LDPlayer emulator.',
          image: '/welcome/ldplayer.jpg',
          href: `/${locale}/product/rok-pc`,
        },
        {
          key: 'gameclient',
          title: 'Game Client',
          subtitle: 'Use the PC Game version.',
          image: '/welcome/gameclient.jpg',
          href: `/${locale}/product/rok-client`,
        },
      ] as Option[],
    },
    vi: {
      pageTitle: 'Chọn dịch vụ bạn muốn dùng',
      options: [
        {
          key: 'mobile',
          title: 'Cloud Mobile',
          subtitle:
            'Gói Mobile có sẵn mọi thứ để chạy bot trên Android, iOS, PC hoặc Mac. Bot đã được cài sẵn và tiếp tục chạy ngay cả khi bạn offline.',
          image: '/welcome/mobile.jpg',
          href: `/${locale}/product/rok-mobile`,
        },
        {
          key: 'pc',
          title: 'PC(Giả lập)',
          subtitle: 'Dùng giả lập LDPlayer. Cài bot tại máy tính của bạn',
          image: '/welcome/ldplayer.jpg',
          href: `/${locale}/product/rok-pc`,
        },
        {
          key: 'gameclient',
          title: 'PC(Client)',
          subtitle: 'Dùng phiên bản game client PC.',
          image: '/welcome/gameclient.jpg',
          href: `/${locale}/product/rok-client`,
        },
      ] as Option[],
    },
    'pt-BR': {
      pageTitle: 'Selecione o serviço que deseja usar',
      options: [
        {
          key: 'mobile',
          title: 'Cloud Mobile',
          subtitle:
            'O plano Mobile inclui tudo para rodar o bot no Android, iOS, PC ou Mac. O bot vem pré-instalado e continua rodando mesmo offline.',
          image: '/welcome/mobile.jpg',
          href: `/${locale}/product/rok-mobile`,
        },
        {
          key: 'pc',
          title: 'PC(Emulator)',
          subtitle: 'Use o emulador LDPlayer.',
          image: '/welcome/ldplayer.jpg',
          href: `/${locale}/product/rok-pc`,
        },
        {
          key: 'gameclient',
          title: 'Game Client',
          subtitle: 'Use a versão de PC do jogo.',
          image: '/welcome/gameclient.jpg',
          href: `/${locale}/product/rok-client`,
        },
      ] as Option[],
    },
  }[locale];

  return (
    <Section>
      <Container>
        <h1 className="mb-8 text-2xl md:text-3xl font-semibold text-white/90 text-center">
          {T.pageTitle}
        </h1>

        {/* 3 ô ngang */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {T.options.map((op) => (
            <Link
              key={op.key}
              href={op.href}
              className="group flex flex-col rounded-2xl bg-white/[0.03] ring-1 ring-white/10 
                         overflow-hidden transform transition-all duration-300 
                         hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={op.image}
                  alt={op.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  {op.title}
                </h2>
                <p className="mt-2 text-sm text-white/70">{op.subtitle}</p>
                <span className="mt-4 inline-block text-cyan-300 font-medium">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
