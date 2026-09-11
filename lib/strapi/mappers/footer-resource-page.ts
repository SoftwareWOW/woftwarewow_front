import type { Metadata } from 'next';
import type { StrapiLinkedPageSection } from '@/lib/strapi/linked-page-types';
import type { StrapiFooterResourcePage } from '@/lib/strapi/types/pages';
import { mapPageHero, mapStrapiSeo } from '@/lib/strapi/mappers/page-sections';

export function mapFooterResourcePageMetadata(
  page: StrapiFooterResourcePage | null,
  fallback: Metadata,
): Metadata {
  return mapStrapiSeo(page?.seo ?? null, fallback);
}

export function mapFooterResourcePageHero(page: StrapiFooterResourcePage | null) {
  return mapPageHero(page?.hero ?? null);
}

export function mapFooterResourcePageSections(page: StrapiFooterResourcePage | null) {
  if (!page?.sections?.length) return null;
  return page.sections as StrapiLinkedPageSection[];
}
