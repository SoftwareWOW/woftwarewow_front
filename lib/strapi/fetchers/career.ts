import type { Locale } from '@/i18n/config';
import { fetchCollection } from '@/lib/strapi/client';
import type { StrapiCareerJob } from '@/lib/strapi/types/career';

export async function getCareerJobs(locale: Locale): Promise<StrapiCareerJob[]> {
  return fetchCollection<StrapiCareerJob>('superagency-career-jobs', {
    locale,
    sort: 'order:asc',
    populate: false,
  });
}

export async function getCareerJobBySlug(
  slug: string,
  locale: Locale,
): Promise<StrapiCareerJob | null> {
  const normalizedSlug = slug.trim();
  const results = await fetchCollection<StrapiCareerJob>('superagency-career-jobs', {
    locale,
    filters: { slug: { $eq: normalizedSlug } },
    populate: false,
  });

  return results[0] ?? null;
}

export async function getCareerJobSlugs(locale: Locale): Promise<string[]> {
  const jobs = await getCareerJobs(locale);
  return jobs.map((job) => job.slug).filter(Boolean);
}
