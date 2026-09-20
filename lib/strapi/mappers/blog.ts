import type {
  BlogCard,
  BlogCaseStudyCarouselItem,
  BlogCategoryTab,
  BlogPageHeroData,
} from '@/lib/blog/types';
import {
  normalizeBlogBodyImages,
  pickBlogCardFallback,
  resolveBlogPostImage,
} from '@/lib/blog/images';
import { resolveCaseStudySlug } from '@/lib/case-study/slug';
import { getStrapiMediaUrl, type StrapiMedia } from '@/lib/strapi/client';
import type {
  StrapiBlogCategory,
  StrapiBlogPage,
  StrapiBlogPost,
  StrapiProjectFeedItem,
} from '@/lib/strapi/types/blog';

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

export function normalizeBlogBody(body?: string | null, slug = ''): string {
  if (!body?.trim()) return '';

  return normalizeBlogBodyImages(body, slug);
}

function normalizeTags(tags?: unknown): string[] {
  if (!tags) return [];

  if (Array.isArray(tags)) {
    return tags.map(String).map((tag) => tag.trim()).filter(Boolean);
  }

  if (typeof tags === 'string') {
    const trimmed = tags.trim();
    if (!trimmed) return [];

    try {
      const parsed = JSON.parse(trimmed) as unknown;
      if (Array.isArray(parsed)) {
        return parsed.map(String).map((tag) => tag.trim()).filter(Boolean);
      }
    } catch {
      // fall through to comma-separated parsing
    }

    return trimmed.split(',').map((tag) => tag.trim()).filter(Boolean);
  }

  return [];
}

function formatBlogDate(post: StrapiBlogPost): string {
  const raw = post.displayDate?.trim() || post.releaseDate?.trim();
  if (!raw) return '';

  const parsed = Date.parse(raw);
  if (Number.isNaN(parsed)) return raw.toUpperCase();

  return new Date(parsed)
    .toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .toUpperCase();
}

function formatProjectDate(project: StrapiProjectFeedItem): string {
  const raw =
    project.projectDate?.trim() ||
    project.completedAt?.trim() ||
    project.year?.trim();

  if (!raw) return '';

  const parsed = Date.parse(raw);
  if (Number.isNaN(parsed)) return raw.toUpperCase();

  return new Date(parsed)
    .toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .toUpperCase();
}

export function mapStrapiBlogPost(post: StrapiBlogPost): BlogCard {
  const authorName = post.author?.name?.trim();
  const authorAvatar = resolveMediaUrl(
    post.author?.avatar ?? undefined,
    post.author?.avatarPath,
  );

  return {
    slug: post.slug,
    title: post.title,
    description: post.description?.trim() ?? '',
    date: formatBlogDate(post),
    content: normalizeBlogBody(post.body, post.slug),
    thumbnail: resolveBlogPostImage(
      post.thumbnail,
      post.thumbnailPath,
      post.slug,
      'thumbnail',
    ),
    featureImage: resolveBlogPostImage(
      post.featureImage,
      post.featureImagePath,
      post.slug,
      'feature',
    ),
    tags: normalizeTags(post.tags),
    categorySlug: post.category?.slug,
    categoryLabel: post.category?.label,
    author:
      authorName ?
        {
          name: authorName,
          avatar: authorAvatar ?? '/images/wow/Hero/career/team/Avatar wrap-3.png',
        }
      : undefined,
  };
}

export function mapStrapiBlogPosts(posts: StrapiBlogPost[]): BlogCard[] {
  const seen = new Set<string>();
  const items: BlogCard[] = [];

  for (const post of posts) {
    const key = post.documentId?.trim() || post.slug?.trim();
    if (!key || seen.has(key)) continue;

    seen.add(key);
    items.push(mapStrapiBlogPost(post));
  }

  return items;
}

export function mapStrapiBlogCategories(
  categories: StrapiBlogCategory[],
): BlogCategoryTab[] {
  return categories.map((category) => ({
    label: category.label,
    slug: category.slug,
  }));
}

export function mapStrapiBlogPageHero(page: StrapiBlogPage | null): BlogPageHeroData | null {
  const hero = page?.hero;
  if (!hero) return null;

  const title = hero.title?.trim() || hero.post?.title?.trim();
  const description = hero.description?.trim() || hero.post?.description?.trim();
  const image = resolveMediaUrl(hero.image ?? undefined);

  if (!title && !description && !image && !hero.post?.slug) return null;

  return {
    slug: hero.post?.slug?.trim() ?? '',
    title: title ?? '',
    description: description ?? '',
    tags: normalizeTags(hero.tags),
    image,
    date: hero.post ? formatBlogDate(hero.post) : undefined,
  };
}

export function mapStrapiProjectFeedItems(
  projects: StrapiProjectFeedItem[],
): BlogCaseStudyCarouselItem[] {
  const seen = new Set<string>();
  const items: BlogCaseStudyCarouselItem[] = [];

  for (const project of projects) {
    const slug = resolveCaseStudySlug(project);
    const id = project.documentId?.trim() || slug;
    if (seen.has(id)) continue;

    seen.add(id);
    items.push({
      id,
      slug,
      title: project.title,
      description: project.description?.trim() ?? '',
      date: formatProjectDate(project),
      thumbnail:
        resolveMediaUrl(project.thumbnail ?? undefined, project.thumbnailPath) ??
        pickBlogCardFallback(slug),
    });

    if (items.length >= 20) break;
  }

  return items;
}

export function mapStrapiBlogPostSeo(post: StrapiBlogPost | null) {
  const seo = post?.seo;
  if (!seo?.title && !seo?.description) return null;

  return {
    title: seo.title ?? undefined,
    description: seo.description ?? undefined,
  };
}
