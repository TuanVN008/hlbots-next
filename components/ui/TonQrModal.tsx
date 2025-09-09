'use client';

import { useState } from 'react';

export default function TonQrModal({
  open,
  onClose,
  address,
  locale = 'en',
}: {
  open: boolean;
  onClose: () => void;
  address: string;
  locale?: 'en' | 'pt-BR' | 'vi' | string;
}) {
  if (!open) return null;

  const webTelegramUrl = 'https://web.telegram.org/';

  const copyLbl =
    locale === 'pt-BR' ? 'Copiar endereço' : locale === 'vi' ? 'Sao chép địa chỉ' : 'Copy address';
  const openLbl =
    locale === 'pt-BR'
      ? 'Abrir no Telegram Wallet'
      : locale === 'vi'
      ? 'Mở trong Telegram Wallet'
      : 'Open in Telegram Wallet';
  const titleLbl =
    locale === 'pt-BR'
      ? 'Pague com Telegram Wallet - Rede TON'
      : locale === 'vi'
      ? 'Thanh toán bằng TON'
      : 'Pay with Telegram Wallet - TON Network';
  const noteLbl =
    locale === 'pt-BR'
      ? 'Escaneie o QR no Telegram Wallet ou clique em abrir.'
      : locale === 'vi'
      ? 'Quét mã bằng Telegram Wallet hoặc bấm Mở.'
      : 'Scan this QR in Telegram Wallet or click Open.';

  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      {/* dialog */}
      <div className="relative w-[92vw] max-w-md rounded-2xl bg-slate-900 ring-1 ring-white/10 p-5">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-1 text-white/70 hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h3 className="text-lg font-semibold text-white">{titleLbl}</h3>
        <p className="mt-1 text-sm text-white/60">{noteLbl}</p>

        <div className="mt-4 rounded-xl bg-slate-800 ring-1 ring-white/10 p-3 flex items-center justify-center">
          {/* Ảnh QR tĩnh trong /public/payments/qr-ton.jpg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/payments/qr-ton.jpg" alt="TON QR" className="h-64 w-64 object-contain" />
        </div>

        <div className="mt-4 break-all rounded-xl bg-slate-800 ring-1 ring-white/10 p-3 text-white/80 text-xs">
          {address}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={copy}
            className="inline-flex items-center justify-center rounded-xl bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-600"
          >
            {copied ? '✓' : '📋'} {copyLbl}
          </button>
          <a
            href={webTelegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400"
          >
            {openLbl}
          </a>
        </div>
      </div>
    </div>
  );
}
