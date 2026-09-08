import type { Locale } from '@/i18n/config';

export type StrapiLocale = 'en' | 'fr';

const STRAPI_LOCALE_BY_FRONTEND: Record<Locale, StrapiLocale> = {
  'en-US': 'en',
  'fr-CA': 'fr',
};

export function toStrapiLocale(locale: Locale): StrapiLocale {
  return STRAPI_LOCALE_BY_FRONTEND[locale];
}

export function getStrapiFallbackLocale(strapiLocale: StrapiLocale): StrapiLocale | null {
  return strapiLocale === 'en' ? null : 'en';
}
