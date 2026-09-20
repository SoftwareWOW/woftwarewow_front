import type { Locale } from '@/i18n/config';
import { matchesCaseStudySlug, resolveCaseStudySlug } from '@/lib/case-study/slug';
import { fetchCollection } from '@/lib/strapi/client';
import type { StrapiCaseStudyProject } from '@/lib/strapi/types/case-study';

const IMAGE_WITH_ALT_POPULATE = { populate: { image: true } };

export const CASE_STUDY_POPULATE = {
  thumbnail: true,
  clientImage: IMAGE_WITH_ALT_POPULATE,
  challengeBeforeImage: IMAGE_WITH_ALT_POPULATE,
  challengeAfterImage: IMAGE_WITH_ALT_POPULATE,
  businessGoalsImage: IMAGE_WITH_ALT_POPULATE,
  highlightImages: { populate: { image: true } },
  targetAudience: true,
  testimonial: true,
  successMetrics: true,
  seo: true,
};

export const CASE_STUDY_LIST_POPULATE = {
  thumbnail: true,
};

export async function getCaseStudyProjects(
  locale: Locale,
): Promise<StrapiCaseStudyProject[]> {
  return fetchCollection<StrapiCaseStudyProject>('wowsuperagencyprojects', {
    locale,
    populate: CASE_STUDY_LIST_POPULATE,
    sort: 'order:asc',
  });
}

export async function getCaseStudyBySlug(
  slug: string,
  locale: Locale,
): Promise<StrapiCaseStudyProject | null> {
  const normalizedSlug = slug.trim();

  const direct = await fetchCollection<StrapiCaseStudyProject>('wowsuperagencyprojects', {
    locale,
    populate: CASE_STUDY_POPULATE,
    filters: { slug: { $eq: normalizedSlug } },
  });

  if (direct[0]) return direct[0];

  const all = await fetchCollection<StrapiCaseStudyProject>('wowsuperagencyprojects', {
    locale,
    populate: CASE_STUDY_POPULATE,
    sort: 'order:asc',
  });

  return all.find((project) => matchesCaseStudySlug(project, normalizedSlug)) ?? null;
}

export async function getCaseStudySlugs(locale: Locale): Promise<string[]> {
  const projects = await getCaseStudyProjects(locale);

  return projects
    .map((project) => resolveCaseStudySlug(project))
    .filter((slug): slug is string => Boolean(slug));
}
