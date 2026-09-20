import type { StrapiMedia } from '@/lib/strapi/client';
import type { StrapiPageSeo } from '@/lib/strapi/types/pages';

export type StrapiBlogCategory = {
  documentId: string;
  label: string;
  slug: string;
  order?: number;
};

export type StrapiBlogAuthor = {
  name?: string;
  role?: string;
  avatar?: StrapiMedia | null;
  avatarPath?: string | null;
};

export type StrapiBlogBodyImage = {
  id?: number;
  image?: StrapiMedia | null;
  alt?: string | null;
};

export type StrapiBlogPost = {
  documentId: string;
  slug: string;
  title: string;
  description?: string | null;
  displayDate?: string | null;
  releaseDate?: string | null;
  tags?: unknown;
  body?: string | null;
  thumbnail?: StrapiMedia | null;
  thumbnailPath?: string | null;
  featureImage?: StrapiMedia | null;
  featureImagePath?: string | null;
  bodyImages?: StrapiBlogBodyImage[] | null;
  category?: StrapiBlogCategory | null;
  author?: StrapiBlogAuthor | null;
  seo?: StrapiPageSeo | null;
  order?: number | null;
};

export type StrapiBlogPageHero = {
  image?: StrapiMedia | null;
  title?: string;
  description?: string | null;
  tags?: unknown;
  post?: StrapiBlogPost | null;
};

export type StrapiBlogPage = {
  hero?: StrapiBlogPageHero | null;
  seo?: StrapiPageSeo | null;
};

export type StrapiProjectFeedItem = {
  documentId: string;
  slug?: string | null;
  title: string;
  description?: string | null;
  projectDate?: string | null;
  completedAt?: string | null;
  year?: string | null;
  thumbnail?: StrapiMedia | null;
  thumbnailPath?: string | null;
  alt?: string | null;
};
