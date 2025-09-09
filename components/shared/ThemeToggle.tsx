'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';


export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const isDark = theme !== 'light';
return (
<button
aria-label="Toggle theme"
className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
onClick={() => setTheme(isDark ? 'light' : 'dark')}
>
{isDark ? <Sun size={18} /> : <Moon size={18} />}
</button>
);
}