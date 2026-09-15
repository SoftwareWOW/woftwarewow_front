import type { Metadata } from 'next';
import type {
  StrapiLinkedPageFaqListSection,
  StrapiLinkedPageSection,
} from '@/lib/strapi/linked-page-types';
import type { StrapiFooterResourcePage } from '@/lib/strapi/types/pages';
import {
  mapPageHero,
  mapStrapiSeo,
  type CmsFaqItem,
  type CmsPageHeroProps,
} from '@/lib/strapi/mappers/page-sections';

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

export function mapFooterResourceFaqItems(
  page: StrapiFooterResourcePage | null,
): CmsFaqItem[] | null {
  const section = (page?.sections as StrapiLinkedPageSection[] | undefined)?.find(
    (s): s is StrapiLinkedPageFaqListSection => s.__component === 'sections.faq-list',
  );
  if (!section?.items?.length) return null;

  return section.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
}

export function mapFooterResourceHeroForCaseStudy(
  page: StrapiFooterResourcePage | null,
): CmsPageHeroProps | null {
  const hero = mapPageHero(page?.hero ?? null);
  if (!hero) return null;

  return {
    badgeTitle: hero.badgeTitle ?? 'Case Studies',
    title: hero.title ?? 'Real Projects.',
    italicTitle: hero.italicTitle ?? 'Real Partnerships.',
    description:
      hero.description ??
      "Explore how we've helped businesses solve challenges through technology, websites, branding, marketing, AI, and digital innovation.",
  };
}
