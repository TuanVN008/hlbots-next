import Container from '@/components/ui/container';
import SectionHeader from '@/components/shared/SectionHeader';


export default function DownloadGuides({ title, items }: {
title: string;
items: { title: string; href: string; description?: string }[];
}) {
return (
<Container>
<SectionHeader title={title} />
<div className="grid gap-4 md:grid-cols-2">
{items.map((it) => (
<a key={it.title} href={it.href} className="card p-5 hover:bg-white/10">
<div className="font-semibold">{it.title}</div>
{it.description && <p className="mt-1 text-sm text-white/70">{it.description}</p>}
</a>
))}
</div>
</Container>
);
}