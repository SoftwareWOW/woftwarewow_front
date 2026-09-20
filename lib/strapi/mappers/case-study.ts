import { normalizeCaseStudyData } from '@/lib/case-study/normalizeCaseStudyData';
import { resolveCaseStudySlug } from '@/lib/case-study/slug';
import type {
  CaseStudyData,
  CaseStudyHighlight,
  CaseStudyImage,
} from '@/lib/case-study/types';
import { getStrapiMediaUrl, type StrapiMedia } from '@/lib/strapi/client';
import type {
  StrapiCaseStudyHighlight,
  StrapiCaseStudyProject,
  StrapiCaseStudySeo,
} from '@/lib/strapi/types/case-study';
import type { StrapiImageWithAlt } from '@/lib/strapi/types/pages';

export type CaseStudyListItem = {
  slug: string;
  category: string;
  title: string;
  year: number;
  image: string;
  alt: string;
};

export { resolveCaseStudySlug };

function resolveMediaUrl(
  media?: StrapiMedia | null,
  path?: string | null,
): string | undefined {
  const fromMedia = getStrapiMediaUrl(media ?? undefined);
  if (fromMedia) return fromMedia;

  const trimmed = path?.trim();
  if (!trimmed) return undefined;

  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;

  return getStrapiMediaUrl({ url: trimmed });
}

function mapImageWithAlt(
  component?: StrapiImageWithAlt | null,
  fallbackAlt?: string,
): CaseStudyImage | undefined {
  const src = resolveMediaUrl(component?.image ?? undefined);
  if (!src) return undefined;

  return {
    src,
    alt: component?.alt?.trim() || fallbackAlt,
  };
}

function mapHighlights(
  highlights?: StrapiCaseStudyHighlight[] | null,
): CaseStudyHighlight[] | undefined {
  if (!highlights?.length) return undefined;

  const mapped: CaseStudyHighlight[] = [];

  for (const item of highlights) {
    const src = resolveMediaUrl(item.image ?? undefined);
    if (!src) continue;

    mapped.push({
      image: src,
      alt: item.alt?.trim() || undefined,
      quote: item.quote?.trim() || undefined,
      author: item.author?.trim() || undefined,
      href: item.href?.trim() || undefined,
    });
  }

  return mapped.length ? mapped : undefined;
}

export function mapStrapiCaseStudy(
  project: StrapiCaseStudyProject,
  slug: string,
): CaseStudyData {
  const base = normalizeCaseStudyData(
    {
      title: project.title,
      tagline: project.tagline ?? '',
      subtitle: project.subtitle ?? '',
      website: project.website ?? undefined,
      image: resolveMediaUrl(project.thumbnail ?? undefined, project.thumbnailPath),
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

  return {
    ...base,
    clientImage: mapImageWithAlt(project.clientImage, project.title),
    challengeBeforeImage: mapImageWithAlt(project.challengeBeforeImage, 'Before'),
    challengeAfterImage: mapImageWithAlt(project.challengeAfterImage, 'After'),
    businessGoalsImage: mapImageWithAlt(project.businessGoalsImage, project.title),
    highlights: mapHighlights(project.highlightImages),
  };
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
}

export function mapStrapiCaseStudyListItems(
  projects: StrapiCaseStudyProject[],
): CaseStudyListItem[] {
  return projects.map((project) => {
    const slug = resolveCaseStudySlug(project);
    const categories = asStringArray(project.categories);

    return {
      slug,
      category: categories[0] ?? 'Case Study',
      title: project.title,
      year: Number(project.year) || new Date().getFullYear(),
      image: resolveMediaUrl(project.thumbnail ?? undefined, project.thumbnailPath) ?? '',
      alt: project.alt ?? project.title,
    };
  });
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
