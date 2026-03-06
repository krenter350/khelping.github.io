import { getRequestConfig } from 'next-intl/server';

export const locales = ['th', 'ko'] as const;
export const defaultLocale = 'th' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
