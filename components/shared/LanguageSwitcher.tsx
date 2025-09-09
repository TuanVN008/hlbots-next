'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/lib/locales';

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = React.useCallback((next: Locale) => {
    if (!pathname) return;
    // pathname luôn dạng "/en", "/en/shop", ...
    const segments = pathname.split('/').filter(Boolean); // ["en", "shop"?]
    // đảm bảo có slot locale ở đầu (middleware đã redirect / -> /en)
    if (segments.length === 0) {
      router.push('/' + next);
      return;
    }
    segments[0] = next; // thay locale
    const target = '/' + segments.join('/');
    router.push(target);
  }, [pathname, router]);

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
        value={current}
        onChange={(e) => switchLocale(e.target.value as Locale)}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </label>
  );
}
