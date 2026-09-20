import type { Locale } from '@/i18n/config';
import {
  fetchCollection,
  fetchSingleType,
  strapiFetch,
  type StrapiCollectionResponse,
  type StrapiResponse,
} from '@/lib/strapi/client';
import type {
  StrapiBlogCategory,
  StrapiBlogPage,
  StrapiBlogPost,
  StrapiProjectFeedItem,
} from '@/lib/strapi/types/blog';

const BLOG_PAGE_POPULATE = {
  hero: {
    populate: {
      image: true,
      post: {
        populate: {
          thumbnail: true,
          featureImage: true,
          author: { populate: { avatar: true } },
          category: true,
        },
      },
    },
  },
  seo: true,
};

type FeedResponse<T> = { data: T[] };
type SlugResponse<T> = { data: T };

export async function getBlogPage(locale: Locale): Promise<StrapiBlogPage | null> {
  return fetchSingleType<StrapiBlogPage>('superagency-page-blog', {
    locale,
    populate: BLOG_PAGE_POPULATE,
  });
}

export async function getBlogCategories(locale: Locale): Promise<StrapiBlogCategory[]> {
  return fetchCollection<StrapiBlogCategory>('superagency-blog-categories', {
    locale,
    sort: 'order:asc',
    populate: false,
  });
}

export async function getBlogPostFeed(locale: Locale): Promise<StrapiBlogPost[]> {
  const result = await strapiFetch<FeedResponse<StrapiBlogPost>>(
    'superagency-blog-posts/feed',
    { locale, populate: false },
  );

  return result?.data ?? [];
}

export async function getBlogPostBySlug(
  slug: string,
  locale: Locale,
): Promise<StrapiBlogPost | null> {
  const normalizedSlug = slug.trim();
  const result = await strapiFetch<SlugResponse<StrapiBlogPost>>(
    `superagency-blog-posts/slug/${encodeURIComponent(normalizedSlug)}`,
    { locale, populate: false },
  );

  return result?.data ?? null;
}

export async function getBlogPostSlugs(locale: Locale): Promise<string[]> {
  const posts = await getBlogPostFeed(locale);
  return posts.map((post) => post.slug).filter(Boolean);
}

function dedupeProjectFeedItems(
  projects: StrapiProjectFeedItem[],
  limit = 20,
): StrapiProjectFeedItem[] {
  const seen = new Set<string>();
  const unique: StrapiProjectFeedItem[] = [];

  for (const project of projects) {
    const key = project.documentId?.trim() || project.slug?.trim() || project.title.trim();
    if (!key || seen.has(key)) continue;

    seen.add(key);
    unique.push(project);
    if (unique.length >= limit) break;
  }

  return unique;
}

export async function getCaseStudyProjectFeed(
  locale: Locale,
  limit = 20,
): Promise<StrapiProjectFeedItem[]> {
  const result = await strapiFetch<FeedResponse<StrapiProjectFeedItem>>(
    'wowsuperagencyprojects/feed',
    { locale, populate: false },
  );

  return dedupeProjectFeedItems(result?.data ?? [], limit);
}

/** Standard collection fallback if custom feed route is unavailable. */
export async function getBlogPostFeedFallback(locale: Locale): Promise<StrapiBlogPost[]> {
  const result = await strapiFetch<StrapiCollectionResponse<StrapiBlogPost>>(
    'superagency-blog-posts',
    {
      locale,
      populate: {
        author: { populate: { avatar: true } },
        category: true,
        thumbnail: true,
        featureImage: true,
        seo: true,
      },
      sort: 'releaseDate:desc',
    },
  );

  return result?.data ?? [];
}
