import type { Locale } from '@/i18n/config';

/** Strapi i18n codes used by the CMS (includes legacy `en` from local dev seeds). */
export type StrapiLocale = Locale | 'en';

export function getStrapiLocaleChain(locale: Locale): StrapiLocale[] {
  if (locale === 'fr-CA') {
    return ['fr-CA', 'en-US', 'en'];
  }

  return ['en-US', 'en'];
}

export function toStrapiLocale(locale: Locale): StrapiLocale {
  return locale;
}
