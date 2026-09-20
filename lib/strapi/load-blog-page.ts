import type { Locale } from '@/i18n/config';
import type {
  BlogCard,
  BlogCaseStudyCarouselItem,
  BlogCategoryTab,
  BlogPageHeroData,
} from '@/lib/blog/types';
import {
  getBlogCategories,
  getBlogPage,
  getBlogPostFeed,
  getCaseStudyProjectFeed,
} from '@/lib/strapi/fetchers/blog';
import {
  mapStrapiBlogCategories,
  mapStrapiBlogPageHero,
  mapStrapiBlogPosts,
  mapStrapiProjectFeedItems,
} from '@/lib/strapi/mappers/blog';
import type { StrapiBlogPage } from '@/lib/strapi/types/blog';
import { mapStrapiSeo } from '@/lib/strapi/mappers/page-sections';
import type { Metadata } from 'next';

export type LoadedBlogPage = {
  cms: StrapiBlogPage | null;
  hero: BlogPageHeroData | null;
  posts: BlogCard[];
  categories: BlogCategoryTab[];
  caseStudies: BlogCaseStudyCarouselItem[];
};

export async function loadBlogPageData(locale: Locale): Promise<LoadedBlogPage> {
  const [cms, posts, categories, projects] = await Promise.all([
    getBlogPage(locale),
    getBlogPostFeed(locale),
    getBlogCategories(locale),
    getCaseStudyProjectFeed(locale, 20),
  ]);

  const mappedPosts = mapStrapiBlogPosts(posts);
  const mappedCategories = mapStrapiBlogCategories(categories);
  const mappedCaseStudies = mapStrapiProjectFeedItems(projects);
  const hero = mapStrapiBlogPageHero(cms);

  if (process.env.NODE_ENV === 'development') {
    console.info(
      `[Strapi] Blog page (${locale}): hero=${hero ? 'yes' : 'no'}, posts=${mappedPosts.length}, categories=${mappedCategories.length}, caseStudies=${mappedCaseStudies.length}`,
    );
  }

  return {
    cms,
    hero,
    posts: mappedPosts,
    categories: mappedCategories,
    caseStudies: mappedCaseStudies,
  };
}

export function buildBlogPageMetadata(
  cms: StrapiBlogPage | null,
  fallback: Metadata,
): Metadata {
  return mapStrapiSeo(cms?.seo ?? null, fallback);
}
