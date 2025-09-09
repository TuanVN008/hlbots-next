import type { PropsWithChildren } from 'react';


export default function Section({ children }: PropsWithChildren) {
return <section className="py-16 sm:py-20">{children}</section>;
}