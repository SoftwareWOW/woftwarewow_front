import type { Locale } from '@/i18n/config';
import type { Metadata } from 'next';
import { getSuperagencyPage } from '@/lib/strapi/fetchers/pages';
import {
  mapPageFaq,
  mapPageHero,
  mapPageImages,
  mapPageProcess,
  mapPageProjects,
  mapPageTeamMembers,
  mapPageTechnologies,
  mapStrapiSeo,
  type CmsFaqItem,
  type CmsFeatureItem,
  type CmsPageHeroProps,
  type CmsProcessStep,
  type CmsProjectCard,
  type CmsTeamMember,
} from '@/lib/strapi/mappers/page-sections';
import type {
  StrapiPageFaq,
  StrapiPageHero,
  StrapiPageImages,
  StrapiPageProcess,
  StrapiPageProjects,
  StrapiPageSeo,
  StrapiPageTeamMembers,
  StrapiPageTechnologies,
  StrapiSuperagencyPage,
} from '@/lib/strapi/types/pages';

export type LoadedSuperagencyPage = {
  raw: StrapiSuperagencyPage | null;
  hero: CmsPageHeroProps | null;
  seo: StrapiPageSeo | null;
  technologies: (section?: StrapiPageTechnologies | null) => CmsFeatureItem[] | null;
  process: (section?: StrapiPageProcess | null) => CmsProcessStep[] | null;
  projects: (section?: StrapiPageProjects | null) => CmsProjectCard[] | null;
  images: (section?: StrapiPageImages | null) => ReturnType<typeof mapPageImages>;
  faq: (section?: StrapiPageFaq | null) => CmsFaqItem[] | null;
  teamMembers: (section?: StrapiPageTeamMembers | null) => CmsTeamMember[] | null;
  field: <T>(name: string) => T | null;
};

export async function loadSuperagencyPage(
  slug: string,
  locale: Locale,
): Promise<LoadedSuperagencyPage> {
  const raw = await getSuperagencyPage(slug, locale);

  if (process.env.NODE_ENV === 'development') {
    const populatedFields =
      raw ?
        Object.entries(raw)
          .filter(([key, value]) => key !== 'id' && key !== 'documentId' && value != null)
          .map(([key]) => key)
          .join(', ')
      : '';

    console.info(
      `[Strapi] Page "${slug}" (${locale}): ${
        raw ? `loaded (${populatedFields || 'no fields'})` : 'empty — using static fallback'
      }`,
    );
  }

  return {
    raw,
    hero: mapPageHero(raw?.hero as StrapiPageHero | null | undefined),
    seo: (raw?.seo as StrapiPageSeo | null | undefined) ?? null,
    technologies: (section) => mapPageTechnologies(section),
    process: (section) => mapPageProcess(section),
    projects: (section) => mapPageProjects(section),
    images: (section) => mapPageImages(section),
    faq: (section) => mapPageFaq(section),
    teamMembers: (section) => mapPageTeamMembers(section),
    field: <T>(name: string) => (raw?.[name] as T | undefined) ?? null,
  };
}

export function buildSuperagencyPageMetadata(
  cms: LoadedSuperagencyPage,
  fallback: Metadata,
): Metadata {
  return mapStrapiSeo(cms.seo, fallback);
}
