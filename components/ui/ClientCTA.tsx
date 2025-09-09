'use client';

import { useState } from 'react';
import Link from 'next/link';
import TonQrModal from '@/components/ui/TonQrModal';

export default function ClientCTA({
  locale,
  ctaText,
  shopHref,
  downloadUrl,
}: {
  locale: string;
  ctaText: string;
  shopHref: string;
  downloadUrl?: string;
}) {
  const [openTon, setOpenTon] = useState(false);
  const useTon = locale === 'en' || locale === 'pt-BR'; // en/pt-BR bật modal TON

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {useTon ? (
          <button
            onClick={() => setOpenTon(true)}
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            aria-label={ctaText}
          >
            {ctaText}
          </button>
        ) : (
          <Link
            href={shopHref}
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            aria-label={ctaText}
          >
            {ctaText}
          </Link>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:bg-purple-400"
            download
          >
            ⬇️ {locale === 'en' ? 'Download Bot' : locale === 'pt-BR' ? 'Baixar Bot' : 'Tải Bot'}
          </a>
        )}
      </div>

      {useTon && (
        <TonQrModal
          open={openTon}
          onClose={() => setOpenTon(false)}
          address="UQBaExiJ9OzNdc27AB2rSU1QSllJFBWQaguN_Ln_tHIJXfVq"
          locale={locale}
        />
      )}
    </>
  );
}
