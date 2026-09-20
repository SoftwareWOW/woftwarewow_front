import type { Locale } from '@/i18n/config';
import type { BlogCard } from '@/lib/blog/types';
import {
  getBlogPostBySlug,
  getBlogPostFeed,
  getBlogPostSlugs,
} from '@/lib/strapi/fetchers/blog';
import {
  mapStrapiBlogPost,
  mapStrapiBlogPosts,
  mapStrapiBlogPostSeo,
} from '@/lib/strapi/mappers/blog';
import type { StrapiBlogPost } from '@/lib/strapi/types/blog';

export type LoadedBlogPost = {
  post: BlogCard;
  cms: StrapiBlogPost;
  seo: ReturnType<typeof mapStrapiBlogPostSeo>;
};

export async function loadBlogPostBySlug(
  slug: string,
  locale: Locale,
): Promise<LoadedBlogPost | null> {
  const cms = await getBlogPostBySlug(slug, locale);
  if (!cms) return null;

  return {
    post: mapStrapiBlogPost(cms),
    cms,
    seo: mapStrapiBlogPostSeo(cms),
  };
}

export async function loadBlogPostFeed(locale: Locale): Promise<BlogCard[]> {
  const posts = await getBlogPostFeed(locale);
  return mapStrapiBlogPosts(posts);
}

export async function loadBlogPostSlugs(locale: Locale): Promise<string[]> {
  return getBlogPostSlugs(locale);
}
