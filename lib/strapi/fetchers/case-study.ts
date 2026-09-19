import type { Locale } from '@/i18n/config';
import { fetchCollection } from '@/lib/strapi/client';
import type { StrapiCaseStudyProject } from '@/lib/strapi/types/case-study';

export const CASE_STUDY_POPULATE = {
  thumbnail: true,
  targetAudience: true,
  testimonial: true,
  successMetrics: true,
  seo: true,
};

export const CASE_STUDY_LIST_POPULATE = {
  thumbnail: true,
};

function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function isUsableSlug(slug?: string | null): slug is string {
  return Boolean(slug && slug !== 'wowsuperagencyproject');
}

function matchesRequestedSlug(project: StrapiCaseStudyProject, slug: string): boolean {
  if (isUsableSlug(project.slug) && project.slug === slug) return true;
  if (project.title && slugifyTitle(project.title) === slug) return true;
  return false;
}

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
  if (isUsableSlug(slug)) {
    const direct = await fetchCollection<StrapiCaseStudyProject>('wowsuperagencyprojects', {
      locale,
      populate: CASE_STUDY_POPULATE,
      filters: { slug: { $eq: slug } },
    });

    if (direct[0]) return direct[0];
  }

  const all = await fetchCollection<StrapiCaseStudyProject>('wowsuperagencyprojects', {
    locale,
    populate: CASE_STUDY_POPULATE,
    sort: 'order:asc',
  });

  const matched = all.find((project) => matchesRequestedSlug(project, slug));
  return matched ?? null;
}

export async function getCaseStudySlugs(locale: Locale): Promise<string[]> {
  const projects = await getCaseStudyProjects(locale);

  return projects
    .map((project) =>
      isUsableSlug(project.slug) ? project.slug : slugifyTitle(project.title),
    )
    .filter((slug): slug is string => Boolean(slug));
}
