'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';

export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
  cta: string;   // giữ type để không lỗi ở nơi gọi, nhưng không dùng
  href: string;  // giữ type để không lỗi ở nơi gọi, nhưng không dùng
}) {
  return (
    <div className="relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero/bg.jpg"
          alt="bg"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-950" />
      </div>

      <Container>
        <div className="py-16 sm:py-20 md:py-24 text-center">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mx-auto
              max-w-[22ch]
              font-extrabold
              tracking-tight
              gradient-text
              leading-[1.1]
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            {title}
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="
              mt-4 mx-auto
              text-white/80
              max-w-2xl
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
            "
          >
            {subtitle}
          </motion.p>

          {/* CTA (để trống theo yêu cầu) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8"
          />
        </div>
      </Container>
    </div>
  );
}
