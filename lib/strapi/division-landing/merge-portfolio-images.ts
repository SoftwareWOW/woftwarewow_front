import { resolveCaseStudySlug } from '@/lib/case-study/slug';

type StaticPortfolioProject = {
  href: string;
  image: string;
  title?: string;
  [key: string]: unknown;
};

type MappedProject = {
  href: string;
  thumbnail: string;
};

function slugFromHref(href: string): string | null {
  const match = href.match(/\/case-study\/([^/?#]+)/i);
  return match?.[1] ?? null;
}

/**
 * Overlays Superagency project thumbnails onto static portfolio rows (images only).
 */
export function mergePortfolioProjectImages<T extends StaticPortfolioProject>(
  projects: readonly T[],
  mappedProjects: MappedProject[] | null | undefined,
): T[] {
  if (!mappedProjects?.length) return [...projects];

  const thumbBySlug = new Map<string, string>();
  for (const project of mappedProjects) {
    const slug = slugFromHref(project.href);
    if (slug && project.thumbnail) {
      thumbBySlug.set(slug, project.thumbnail);
    }
  }

  return projects.map((row) => {
    const slug = slugFromHref(row.href);
    if (!slug) return row;
    const thumbnail = thumbBySlug.get(slug);
    if (!thumbnail) return row;
    return { ...row, image: thumbnail };
  });
}

/** Build thumb map from raw Strapi projects (when not using mapStrapiProjects). */
export function thumbnailsByCaseStudySlug(
  projects: { slug?: string | null; thumbnail?: unknown; thumbnailPath?: string | null }[],
  getUrl: (project: (typeof projects)[number]) => string | undefined,
): Map<string, string> {
  const map = new Map<string, string>();
  for (const project of projects) {
    const slug = project.slug?.trim() || resolveCaseStudySlug(project as Parameters<typeof resolveCaseStudySlug>[0]);
    const url = getUrl(project);
    if (slug && url) map.set(slug, url);
  }
  return map;
}