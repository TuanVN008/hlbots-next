'use client';

import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  name: string;
  bank: string;
  account: string;
  imgSrc: string;
  note?: string; // nội dung chuyển khoản gợi ý (nếu cần)
};

export default function QrModal({
  open,
  onClose,
  name,
  bank,
  account,
  imgSrc,
  note,
}: Props) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-slate-900 ring-1 ring-white/10 p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md bg-white/5 px-2 py-1 text-white/70 hover:bg-white/10"
          aria-label="Đóng"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-white">
          Quét mã để thanh toán
        </h3>
        <p className="text-white/60 mt-1">
          Ngân hàng <span className="text-white">{bank}</span> – STK{' '}
          <span className="text-white">{account}</span>
        </p>
        <p className="text-white/60">Chủ tài khoản: <span className="text-white">{name}</span></p>
        <div className="mt-4 relative aspect-square w-full overflow-hidden rounded-xl ring-1 ring-white/10 bg-slate-800">
          <Image
            src={imgSrc}
            alt={`QR ${bank} - ${account}`}
            fill
            className="object-contain"
            sizes="(min-width:768px) 360px, 100vw"
            priority
          />
        </div>

        {note && (
          <p className="mt-3 text-sm text-white/70">
            Nội dung CK gợi ý: <span className="text-white">{note}</span>
          </p>
        )}

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => {
              navigator.clipboard?.writeText(account);
            }}
            className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
          >
            Copy STK
          </button>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(name);
            }}
            className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
          >
            Copy tên
          </button>
        </div>
      </div>
    </div>
  );
}
