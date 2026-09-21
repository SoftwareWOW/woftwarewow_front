import type { CareerListItem } from '@/lib/career/types';
import type { CmsCareerJobCard } from '@/lib/strapi/mappers/page-sections';
import type { StrapiCareerJob } from '@/lib/strapi/types/career';
import type { StrapiPageCareerJobs } from '@/lib/strapi/types/pages';

const INVALID_JOB_SLUGS = new Set(['superagency-career-job']);

function normalizeTags(tags: unknown): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return tags.map(String).map((tag) => tag.trim()).filter(Boolean);
  }
  if (typeof tags === 'string') {
    try {
      const parsed = JSON.parse(tags) as unknown;
      if (Array.isArray(parsed)) {
        return parsed.map(String).map((tag) => tag.trim()).filter(Boolean);
      }
    } catch {
      // fall through
    }
    return tags.split(',').map((tag) => tag.trim()).filter(Boolean);
  }
  return [];
}

function isValidCareerJob(job: StrapiCareerJob): boolean {
  const slug = job.slug?.trim();
  if (!slug || INVALID_JOB_SLUGS.has(slug)) return false;
  return Boolean(job.title?.trim());
}

export function mapStrapiCareerJobCard(job: StrapiCareerJob): CmsCareerJobCard {
  return {
    slug: job.slug,
    title: job.title,
    description: job.description?.trim() ?? '',
    tags: normalizeTags(job.tags),
    department: job.department?.trim() ?? undefined,
    employment: job.employment?.trim() ?? undefined,
    location: job.location?.trim() ?? undefined,
    order: job.order ?? undefined,
  };
}

export function mapStrapiCareerJobCards(jobs: StrapiCareerJob[]): CmsCareerJobCard[] {
  const seen = new Set<string>();
  const items: CmsCareerJobCard[] = [];

  for (const job of jobs) {
    if (!isValidCareerJob(job)) continue;
    const key = job.documentId?.trim() || job.slug.trim();
    if (seen.has(key)) continue;
    seen.add(key);
    items.push(mapStrapiCareerJobCard(job));
  }

  return items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function mapStrapiPageCareerJobs(
  section?: StrapiPageCareerJobs | null,
): CmsCareerJobCard[] {
  if (!section?.jobs?.length) return [];
  return mapStrapiCareerJobCards(section.jobs);
}

export function mapStrapiCareerJobDetail(job: StrapiCareerJob): CareerListItem {
  return {
    slug: job.slug,
    title: job.title,
    description: job.description?.trim() ?? '',
    tags: normalizeTags(job.tags),
    department: job.department?.trim() ?? undefined,
    employment: job.employment?.trim() ?? undefined,
    location: job.location?.trim() ?? undefined,
    experience: job.experience?.trim() ?? undefined,
    salary: job.salary?.trim() ?? undefined,
    posted: job.posted?.trim() ?? undefined,
    division: job.division?.trim() ?? undefined,
    divisionDescription: job.divisionDescription?.trim() ?? undefined,
    industry: job.industry?.trim() ?? undefined,
    companySize: job.companySize?.trim() ?? undefined,
    companyLocation: job.companyLocation?.trim() ?? undefined,
    phone: job.phone?.trim() ?? undefined,
    website: job.website?.trim() ?? undefined,
    content: job.body?.trim() ?? '',
  };
}
