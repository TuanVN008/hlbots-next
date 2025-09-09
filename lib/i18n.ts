// lib/i18n.ts
import 'server-only';
import type { Locale } from './locales';

// Nạp từ /messages/*.json (đúng đường dẫn bạn đang dùng)
const dictionaries = {
  en: () => import('@/messages/en.json').then(m => m.default),
  vi: () => import('@/messages/vi.json').then(m => m.default),
  'pt-BR': () => import('@/messages/pt-BR.json').then(m => m.default),
} as const;

// Dùng Record<string, any> để tránh lỗi thiếu key giữa các bản dịch
export type Dict = Record<string, any>;

export async function getDictionary(locale: Locale): Promise<Dict> {
  const loader =
    dictionaries[locale as keyof typeof dictionaries] ?? dictionaries.en;
  return loader();
}
