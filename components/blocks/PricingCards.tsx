'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Button from '@/components/ui/button';
import Container from '@/components/ui/container';
import SectionHeader from '@/components/shared/SectionHeader';
import QrModal from '@/components/ui/QrModal';

export type Pricing = {
  title: string;
  price: string;
  periodicity?: string;          // e.g. "/tháng", "/mo"
  features: string[];
  cta: string;
  href?: string;                 // optional: vi sẽ không dùng href mà mở QR
};

export default function PricingCards({
  title,
  subtitle,
  plans,
  locale,                       // <-- truyền thêm locale
}: {
  title: string;
  subtitle?: string;
  plans: Pricing[];
  locale: string;               // 'vi' | 'en' | 'pt-BR'
}) {
  const [openQR, setOpenQR] = useState(false);

  return (
    <Container>
      {/* Modal QR (chỉ dùng khi locale = vi) */}
      <QrModal
        open={openQR}
        onClose={() => setOpenQR(false)}
        name="Trần Thế Tuấn"
        bank="Vietcombank"
        account="0491000124453"
        imgSrc="/payments/qr-vcb-0491000124453.jpg"
        note = "Tên gói - SĐT Zalo"
      />

      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <div key={p.title} className="relative rounded-2xl p-[2px]">
            {/* viền gradient động nhẹ */}
            <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-600 opacity-40 blur-lg pointer-events-none" />
            <Card className="relative z-[1] p-6 bg-slate-900/70 ring-1 ring-white/10 rounded-2xl">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <div className="text-3xl font-extrabold gradient-text">
                  {p.price}{' '}
                  {p.periodicity && (
                    <span className="text-base font-semibold text-white/60 align-middle">
                      {p.periodicity}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-300">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {locale === 'vi' ? (
                  <Button
                    onClick={() => setOpenQR(true)}
                    className="w-full"
                    aria-label={p.cta}
                  >
                    {p.cta}
                  </Button>
                ) : p.href ? (
                  <Link href={p.href} className="block">
                    <Button className="w-full" aria-label={p.cta}>
                      {p.cta}
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full opacity-60 cursor-not-allowed">
                    {p.cta}
                  </Button>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
