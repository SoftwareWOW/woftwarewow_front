import type { Locale } from '@/i18n/config';

export type StrapiLocale = Locale;

const STRAPI_LOCALE_BY_FRONTEND: Record<Locale, StrapiLocale> = {
  'en-US': 'en-US',
  'fr-CA': 'fr-CA',
};

export function toStrapiLocale(locale: Locale): StrapiLocale {
  return STRAPI_LOCALE_BY_FRONTEND[locale];
}

export function getStrapiFallbackLocale(strapiLocale: StrapiLocale): StrapiLocale | null {
  return strapiLocale === 'en-US' ? null : 'en-US';
}
