import type { StrapiMedia } from '@/lib/strapi/client';
import type { StrapiSuperagencyProject } from '@/lib/strapi/types';

export type StrapiImageWithAlt = {
  id?: number;
  image?: StrapiMedia | null;
  alt?: string | null;
};

export type StrapiLandingServiceCard = {
  id?: number;
  title?: string | null;
  description?: string | null;
  href?: string | null;
  slug?: string | null;
  number?: string | null;
  image?: StrapiImageWithAlt | null;
};

export type StrapiLandingRepeatableSection = {
  items?: StrapiLandingServiceCard[] | null;
};

export type StrapiPortfolioFilterGroup = {
  id?: number;
  label?: string | null;
  filterKey?: string | null;
  projects?: StrapiSuperagencyProject[] | null;
};

export type StrapiLandingWorkCard = {
  id?: number;
  title?: string | null;
  description?: string | null;
  bullets?: string | null;
  href?: string | null;
  image?: StrapiImageWithAlt | null;
};

export type StrapiLandingWorkFilterGroup = {
  id?: number;
  label?: string | null;
  filterKey?: string | null;
  cards?: StrapiLandingWorkCard[] | null;
};

export type StrapiLandingWorkSection = {
  filterGroups?: (StrapiPortfolioFilterGroup | StrapiLandingWorkFilterGroup)[] | null;
};

export type StrapiPageProjectLinks = {
  id?: number;
  sectionKey?: string | null;
  projects?: StrapiSuperagencyProject[] | null;
};

/** Landing page CMS payload — section attributes are division-specific components. */
export type StrapiDivisionLandingPage = Record<string, unknown> & {
  id?: number;
  documentId?: string;
  portfolio?: StrapiPageProjectLinks | null;
};

export type DivisionImageMap = Record<string, readonly string[]>;

export type CmsLandingCard = {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  alt?: string;
  slug?: string;
  number?: string;
};

export type CmsLandingClientReview = {
  reviewText: string;
  authorName: string;
  authorRole?: string;
  authorImage?: string;
  rating: number;
};

export type CmsLandingWorkFilter = {
  label: string;
  slug: string;
};

export type CmsLandingWorkProject = {
  id: number;
  title: string;
  description: string;
  bullets?: string;
  image: string;
  alt: string;
  href: string;
  category: string;
  year?: string;
  industryLabel?: string;
};

export type CmsLandingWorkExplorer = {
  filters: CmsLandingWorkFilter[];
  cards: CmsLandingWorkProject[];
};

export type DivisionLandingContentMap = Record<string, CmsLandingCard[] | CmsLandingClientReview[] | CmsLandingWorkExplorer>;