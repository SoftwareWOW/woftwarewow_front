import type { Locale } from '@/i18n/config';
import type { DivisionId } from '@/i18n/division-paths';
import { mergePortfolioProjectImages } from '@/lib/strapi/division-landing/merge-portfolio-images';
import { getDivisionLandingPage } from '@/lib/strapi/fetchers/division-landing';
import {
  mapDivisionLandingContent,
  mapDivisionLandingImages,
} from '@/lib/strapi/mappers/division-landing';
import { mapStrapiProjects } from '@/lib/strapi/mappers/superagency';
import type { StrapiSuperagencyProject } from '@/lib/strapi/types';
import type { DivisionImageMap } from '@/lib/strapi/types/division-landing';

export async function loadDivisionImageMap(
  divisionId: DivisionId,
  locale: Locale,
): Promise<DivisionImageMap> {
  const landing = await getDivisionLandingPage(divisionId, locale);
  return mapDivisionLandingImages(landing, divisionId);
}

export async function loadDivisionLandingBundles(divisionId: DivisionId, locale: Locale) {
  const landing = await getDivisionLandingPage(divisionId, locale);
  return {
    landing,
    imageMap: mapDivisionLandingImages(landing, divisionId),
    content: mapDivisionLandingContent(landing, divisionId),
  };
}

export function mergeDivisionPortfolioImages<T extends { href: string; image: string }>(
  staticProjects: readonly T[],
  cmsProjects: StrapiSuperagencyProject[] | null | undefined,
): T[] {
  return mergePortfolioProjectImages(staticProjects, mapStrapiProjects(cmsProjects ?? []));
}