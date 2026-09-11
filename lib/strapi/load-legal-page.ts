import type { Locale } from '@/i18n/config';
import { getLegalPage } from '@/lib/strapi/fetchers/pages';
import { mapStrapiSeo } from '@/lib/strapi/mappers/page-sections';
import type { Metadata } from 'next';

export async function loadLegalPage(pageKey: 'privacy' | 'terms', locale: Locale) {
  const raw = await getLegalPage(pageKey, locale);

  if (process.env.NODE_ENV === 'development') {
    console.info(
      `[Strapi] Legal page "${pageKey}" (${locale}): ${raw ? 'loaded' : 'empty — using static fallback'}`,
    );
  }

  return raw;
}

export async function buildLegalPageMetadata(
  pageKey: 'privacy' | 'terms',
  locale: Locale,
  fallback: Metadata,
): Promise<Metadata> {
  const raw = await getLegalPage(pageKey, locale);
  return mapStrapiSeo(raw?.seo ?? null, fallback);
}
