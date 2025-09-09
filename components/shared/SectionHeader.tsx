export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
return (
<div className="mb-8 text-center">
<h2 className="text-3xl sm:text-4xl font-bold gradient-text">{title}</h2>
{subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
</div>
);
}