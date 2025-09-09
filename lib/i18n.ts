import 'server-only';
import type { Locale } from './locales';


const dictionaries = {
en: () => import('@/messages/en.json').then(m => m.default),
vi: () => import('@/messages/vi.json').then(m => m.default),
'pt-BR': () => import('@/messages/pt-BR.json').then(m => m.default)
};


export type Dict = Awaited<ReturnType<(typeof dictionaries)['en']>>;


export async function getDictionary(locale: Locale): Promise<Dict> {
const loader = dictionaries[locale] ?? dictionaries.en;
return loader();
}