import Link from 'next/link';
import Container from '@/components/ui/container';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { type Dict } from '@/lib/i18n';
import { type Locale } from '@/lib/locales';

export default function Navbar({ dict, locale }: { dict: Dict; locale: Locale }) {
  const t = dict.nav;
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-slate-950/70">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 font-bold">
              <img src="/logos/hlbots.svg" alt="HLBots" className="h-6 w-auto" />
              <span className="gradient-text">HLBots</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link href={`/${locale}`} className="hover:text-white">{t.home}</Link>
              <Link href={`/${locale}/shop`} className="hover:text-white">{t.shop}</Link>
              <a
                href="https://discord.gg/D5NMbmBEtK"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Join Discord
              </a>
            </nav>
          </div>

          {/* Language + Theme toggle */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher current={locale} />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
