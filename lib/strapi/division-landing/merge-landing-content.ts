import type { CmsLandingCard, CmsLandingClientReview } from '@/lib/strapi/types/division-landing';

type WithImage = { image: string; alt?: string };

export function mergeLandingCards<T extends CmsLandingCard>(
  staticItems: readonly T[],
  cmsItems: CmsLandingCard[] | undefined,
): T[] {
  if (!cmsItems?.length) return [...staticItems];

  return cmsItems.map((cms, index) => {
    const base = staticItems[index];
    return {
      ...(base ?? {}),
      ...(cms as T),
      title: cms.title || base?.title || '',
      description: cms.description ?? base?.description ?? '',
      image: cms.image || base?.image || '',
      alt: cms.alt ?? base?.alt,
      href: cms.href ?? base?.href,
      slug: cms.slug ?? base?.slug,
      number: cms.number ?? base?.number,
    } as T;
  });
}

export function mergeIndustrySlides<
  T extends { title: string; description: string; image: string; href: string },
>(staticSlides: readonly T[], cmsItems: CmsLandingCard[] | undefined): T[] {
  if (!cmsItems?.length) return [...staticSlides];

  return cmsItems.map((cms, index) => {
    const base = staticSlides[index];
    return {
      ...(base ?? staticSlides[0]),
      title: cms.title || base?.title || '',
      description: cms.description ?? base?.description ?? '',
      image: cms.image || base?.image || '',
      href: cms.href ?? base?.href ?? '/meet',
    } as T;
  });
}

export function mergeClientReviews<T extends CmsLandingClientReview>(
  staticClients: readonly T[],
  cmsClients: CmsLandingClientReview[] | undefined,
): T[] {
  if (!cmsClients?.length) return [...staticClients];

  return cmsClients.map((cms, index) => {
    const base = staticClients[index];
    return {
      ...(base ?? {}),
      id: (base as { id?: number })?.id ?? index + 1,
      reviewText: cms.reviewText || base?.reviewText || '',
      authorName: cms.authorName || base?.authorName || '',
      authorRole: cms.authorRole ?? base?.authorRole ?? '',
      authorImage: cms.authorImage || base?.authorImage || '',
      rating: cms.rating ?? base?.rating ?? 5,
    } as T;
  });
}

/** Hub explore topics use slug + coverImage field name in static content. */
export function mergeExploreTopics<
  T extends { slug: string; title: string; description: string; coverImage: string; href: string },
>(staticTopics: readonly T[], cmsItems: CmsLandingCard[] | undefined): T[] {
  if (!cmsItems?.length) return [...staticTopics];

  return cmsItems.map((cms, index) => {
    const base = staticTopics[index];
    const image = cms.image || base?.coverImage || '';
    return {
      ...(base ?? staticTopics[0]),
      slug: cms.slug || base?.slug || `topic-${index + 1}`,
      title: cms.title || base?.title || '',
      description: cms.description ?? base?.description ?? '',
      coverImage: image,
      href: cms.href ?? base?.href ?? '/meet',
    } as T;
  });
}

export function mergeHostingOfferings<
  T extends { slug: string; title: string; number: string; description: string; coverImage: string; href: string },
>(staticItems: readonly T[], cmsItems: CmsLandingCard[] | undefined): T[] {
  if (!cmsItems?.length) return [...staticItems];

  return cmsItems.map((cms, index) => {
    const base = staticItems[index];
    return {
      ...(base ?? staticItems[0]),
      slug: cms.slug || base?.slug || `offering-${index + 1}`,
      number: cms.number || base?.number || String(index + 1).padStart(2, '0'),
      title: cms.title || base?.title || '',
      description: cms.description ?? base?.description ?? '',
      coverImage: cms.image || base?.coverImage || '',
      href: cms.href ?? base?.href ?? '/meet',
    } as T;
  });
}

export function mergeServiceItemsWithAlt<T extends WithImage & Record<string, unknown>>(
  staticItems: readonly T[],
  cmsItems: CmsLandingCard[] | undefined,
): T[] {
  if (!cmsItems?.length) return [...staticItems];

  return cmsItems.map((cms, index) => {
    const base = staticItems[index];
    return {
      ...(base ?? staticItems[0]),
      title: cms.title || (base as { title?: string })?.title || '',
      description: cms.description ?? (base as { description?: string })?.description ?? '',
      image: cms.image || base?.image || '',
      alt: cms.alt ?? (base as { alt?: string })?.alt,
      href: cms.href ?? (base as { href?: string })?.href,
    } as T;
  });
}