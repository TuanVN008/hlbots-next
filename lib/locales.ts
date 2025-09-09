export const locales = ['en', 'vi', 'pt-BR'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';


export function isLocale(x: string | undefined): x is Locale {
return !!x && locales.includes(x as Locale);
}