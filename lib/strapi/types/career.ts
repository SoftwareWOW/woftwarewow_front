import type { StrapiPageSeo } from '@/lib/strapi/types/pages';

export type StrapiCareerSection = {
  intro?: string | null;
  items?: string[] | null;
};

export type StrapiCareerRequirements = {
  requiredItems?: string[] | null;
  niceToHave?: string[] | null;
};

export type StrapiCareerJob = {
  documentId?: string;
  slug: string;
  title: string;
  description?: string | null;
  tags?: unknown;
  department?: string | null;
  employment?: string | null;
  location?: string | null;
  experience?: string | null;
  salary?: string | null;
  posted?: string | null;
  division?: string | null;
  divisionDescription?: string | null;
  industry?: string | null;
  companySize?: string | null;
  companyLocation?: string | null;
  phone?: string | null;
  website?: string | null;
  aboutTheRole?: StrapiCareerSection | null;
  responsibilities?: StrapiCareerSection | null;
  benefits?: StrapiCareerSection | null;
  requirements?: StrapiCareerRequirements | null;
  body?: string | null;
  seo?: StrapiPageSeo | null;
  order?: number | null;
};
