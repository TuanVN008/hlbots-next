import { cn } from '@/lib/utils';
import type { PropsWithChildren, HTMLAttributes } from 'react';


export function Card(
{ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>
) {
return <div className={cn('card', className)} {...props} />;
}