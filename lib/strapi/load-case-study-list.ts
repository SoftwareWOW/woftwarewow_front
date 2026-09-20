import type { Locale } from '@/i18n/config';
import { getCaseStudyProjects } from '@/lib/strapi/fetchers/case-study';
import {
  mapStrapiCaseStudyListItems,
  type CaseStudyListItem,
} from '@/lib/strapi/mappers/case-study';

export async function loadCaseStudyList(locale: Locale): Promise<CaseStudyListItem[]> {
  const projects = await getCaseStudyProjects(locale);

  if (process.env.NODE_ENV === 'development') {
    console.info(
      `[Strapi] Case study list (${locale}): ${
        projects.length ?
          `${projects.length} project(s)`
        : 'empty — using static fallback'
      }`,
    );
  }

  if (!projects.length) return [];

  return mapStrapiCaseStudyListItems(projects);
}
