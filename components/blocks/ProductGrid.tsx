'use client';

import Container from '@/components/ui/container';
import SectionHeader from '@/components/shared/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export type ProductItem = {
  key: string;
  title: string;
  status: 'available' | 'coming';
  description: string;
  href: string;
  image: string;
  notifyHref?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductGrid({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: ProductItem[];
}) {
  const router = useRouter();

  return (
    <Container>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <div
            key={p.key}
            role="link"
            tabIndex={0}
            aria-label={`${p.title} – open`}
            onClick={() => router.push(p.href)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                router.push(p.href);
              }
            }}
            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-[2px] transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* animated gradient border */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* card body */}
            <div className="relative flex h-full flex-col rounded-2xl bg-slate-900">
              {/* image */}
              <div className="flex items-center justify-center p-6 pb-0">
                <div className="relative h-24 w-24">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="96px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    priority={p.key === 'rok'}
                  />
                </div>
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col px-6 pt-4 pb-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <span
                    className={cn(
                      'ml-auto inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1',
                      p.status === 'available'
                        ? 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/20'
                        : 'bg-cyan-400/10 text-cyan-300 ring-cyan-400/20'
                    )}
                  >
                    {p.status === 'available' ? 'Available' : 'Coming soon'}
                  </span>
                </div>

                <p className="mt-2 line-clamp-2 text-sm text-white/70">
                  {p.description}
                </p>

                {/* secondary action – allowed (không còn nested <a>) */}
                {p.status === 'coming' && (
                  <div className="mt-4">
                    <Link
                      href={p.notifyHref ?? '#notify'}
                      className="text-xs text-white/60 transition hover:text-white"
                      onClick={(e) => e.stopPropagation()} // không kích hoạt click card
                    >
                      Notify me
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
