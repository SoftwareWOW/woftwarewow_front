import { normalizeCaseStudyData } from '@/lib/case-study/normalizeCaseStudyData';
import type { CaseStudyData } from '@/lib/case-study/types';
import { getStrapiMediaUrl } from '@/lib/strapi/client';
import type {
  StrapiCaseStudyProject,
  StrapiCaseStudySeo,
} from '@/lib/strapi/types/case-study';

function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function resolveCaseStudySlug(project: StrapiCaseStudyProject): string {
  if (project.slug && project.slug !== 'wowsuperagencyproject') {
    return project.slug;
  }

  return slugifyTitle(project.title);
}

function resolveThumbnailUrl(project: StrapiCaseStudyProject): string | undefined {
  const fromMedia = getStrapiMediaUrl(project.thumbnail ?? undefined);
  if (fromMedia) return fromMedia;

  const path = project.thumbnailPath?.trim();
  if (!path) return undefined;

  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  return getStrapiMediaUrl({ url: path });
}

export function mapStrapiCaseStudy(
  project: StrapiCaseStudyProject,
  slug: string,
): CaseStudyData {
  return normalizeCaseStudyData(
    {
      title: project.title,
      tagline: project.tagline ?? '',
      subtitle: project.subtitle ?? '',
      website: project.website ?? undefined,
      image: resolveThumbnailUrl(project),
      imageAlt: project.alt ?? project.title,
      companySize: project.companySize ?? '',
      date: project.projectDate ?? '',
      projectDuration: project.projectDuration ?? '',
      services: project.services,
      aboutClient: project.aboutClient,
      challengeParagraphs: project.challengeParagraphs,
      approachIntro: project.approachIntro ?? undefined,
      approachCallout: project.approachCallout ?? '',
      approachParagraphs: project.approachParagraphs,
      businessGoals: project.businessGoals,
      targetAudience: project.targetAudience,
      testimonial: project.testimonial,
      successMetrics: project.successMetrics,
    },
    slug,
  );
}

export function mapStrapiCaseStudySeo(
  project: StrapiCaseStudyProject,
): Pick<StrapiCaseStudySeo, 'title' | 'description'> | null {
  const seo = project.seo;
  if (!seo?.title && !seo?.description) return null;

  return {
    title: seo.title ?? undefined,
    description: seo.description ?? undefined,
  };
}
