'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/container';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { type Dict } from '@/lib/i18n';
import { type Locale } from '@/lib/locales';

export default function Navbar({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.nav;
  const discordUrl = 'https://discord.gg/D5NMbmBEtK';
  const courseUrl = 'https://adbautomation.com/';

  const [open, setOpen] = useState(false);

  // Đóng menu khi bấm ESC
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  // Khoá scroll khi menu mở
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
              aria-label="HLBots – Home"
            >
              <img src="/logos/hlbots.svg" alt="HLBots" className="h-6 w-auto" />
              <span className="gradient-text">HLBots</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link href={`/${locale}`} className="hover:text-white">
                {t.home}
              </Link>
              <Link href={`/${locale}/shop`} className="hover:text-white">
                {t.shop}
              </Link>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Join Discord
              </a>
              <a
                href={courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Code Tool Course
              </a>
            </nav>
          </div>

          {/* Right controls + hamburger */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher current={locale} />
            <ThemeToggle />

            {/* Hamburger (mobile) */}
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 border-t border-white/10 py-3 text-white/90">
            <Link
              href={`/${locale}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-1 py-2 hover:bg-white/5"
            >
              {t.home}
            </Link>
            <Link
              href={`/${locale}/shop`}
              onClick={() => setOpen(false)}
              className="rounded-md px-1 py-2 hover:bg-white/5"
            >
              {t.shop}
            </Link>
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-1 py-2 hover:bg-white/5"
            >
              Join Discord
            </a>
            <a
              href={courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-1 py-2 hover:bg-white/5"
            >
              Code Tool Course
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
