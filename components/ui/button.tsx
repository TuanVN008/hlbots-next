import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';


export default function Button(
{ className, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) {
return (
<button
className={cn(
'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium',
'bg-brand-500 hover:bg-brand-400 text-slate-900 transition',
'shadow-lg shadow-cyan-500/20',
className
)}
{...props}
/>
);
}