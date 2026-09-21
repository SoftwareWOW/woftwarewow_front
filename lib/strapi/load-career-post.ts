import type { Locale } from '@/i18n/config';
import type { CareerListItem } from '@/lib/career/types';
import { getCareerJobBySlug, getCareerJobs } from '@/lib/strapi/fetchers/career';
import { mapStrapiCareerJobCards, mapStrapiCareerJobDetail } from '@/lib/strapi/mappers/career';
import type { CmsCareerJobCard } from '@/lib/strapi/mappers/page-sections';

export async function loadCareerPostBySlug(
  slug: string,
  locale: Locale,
): Promise<{ post: CareerListItem; relatedJobs: CmsCareerJobCard[] } | null> {
  const cms = await getCareerJobBySlug(slug, locale);
  if (!cms) return null;

  const allJobs = mapStrapiCareerJobCards(await getCareerJobs(locale));
  const relatedJobs = allJobs.filter((job) => job.slug !== slug);

  return {
    post: mapStrapiCareerJobDetail(cms),
    relatedJobs,
  };
}

export async function loadCareerPostSlugs(locale: Locale): Promise<string[]> {
  const jobs = await getCareerJobs(locale);
  return jobs.map((job) => job.slug).filter(Boolean);
}
