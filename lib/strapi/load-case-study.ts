import type { Locale } from '@/i18n/config';
import { resolveCaseStudySlug } from '@/lib/case-study/slug';
import type { CaseStudyData } from '@/lib/case-study/types';
import { getCaseStudyBySlug } from '@/lib/strapi/fetchers/case-study';
import {
  mapStrapiCaseStudy,
  mapStrapiCaseStudySeo,
} from '@/lib/strapi/mappers/case-study';
import type { Metadata } from 'next';

export type LoadedCaseStudy = {
  study: CaseStudyData;
  seo: Pick<Metadata, 'title' | 'description'> | null;
};

export async function loadCaseStudyBySlug(
  slug: string,
  locale: Locale,
): Promise<LoadedCaseStudy | null> {
  const project = await getCaseStudyBySlug(slug, locale);

  if (process.env.NODE_ENV === 'development') {
    console.info(
      `[Strapi] Case study "${slug}" (${locale}): ${
        project ? 'loaded from CMS' : 'not found — using markdown fallback'
      }`,
    );
  }

  if (!project) return null;

  const resolvedSlug = resolveCaseStudySlug(project);

  return {
    study: mapStrapiCaseStudy(project, resolvedSlug),
    seo: mapStrapiCaseStudySeo(project),
  };
}
