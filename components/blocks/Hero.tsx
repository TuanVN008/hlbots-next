'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import Container from '@/components/ui/container';


export default function Hero({ title, subtitle, cta, href }: {
title: string; subtitle: string; cta: string; href: string;
}) {
return (
<div className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<img src="/hero/bg.jpg" alt="bg" className="h-full w-full object-cover opacity-30" />
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-950" />
</div>
<Container>
<div className="py-24 sm:py-28 text-center">
<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl sm:text-6xl font-extrabold tracking-tight gradient-text"
>
{title}
</motion.h1>
<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.15, duration: 0.6 }}
className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
>
{subtitle}
</motion.p>
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3, duration: 0.6 }}
className="mt-8"
>
<a href={href}><Button className="text-base px-6 py-3">{cta}</Button></a>
</motion.div>
</div>
</Container>
</div>
);
}