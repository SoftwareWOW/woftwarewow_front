import type { Locale } from '@/i18n/config';
import { getFooterResourcePage } from '@/lib/strapi/fetchers/pages';
import {
  mapFooterResourcePageHero,
  mapFooterResourcePageMetadata,
} from '@/lib/strapi/mappers/footer-resource-page';
import type { Metadata } from 'next';

export async function loadFooterResourcePage(pageKey: string, locale: Locale) {
  const raw = await getFooterResourcePage(pageKey, locale);

  if (process.env.NODE_ENV === 'development') {
    console.info(
      `[Strapi] Footer resource "${pageKey}" (${locale}): ${raw ? 'loaded' : 'empty — using static fallback'}`,
    );
  }

  return {
    raw,
    hero: mapFooterResourcePageHero(raw),
    sections: raw?.sections ?? null,
  };
}

export async function buildFooterResourceMetadata(
  pageKey: string,
  locale: Locale,
  fallback: Metadata,
): Promise<Metadata> {
  const raw = await getFooterResourcePage(pageKey, locale);
  return mapFooterResourcePageMetadata(raw, fallback);
}
