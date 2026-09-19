import type { StrapiMedia } from '@/lib/strapi/client';

export type StrapiCaseStudyAudience = {
  label?: string;
  description?: string;
};

export type StrapiCaseStudyTestimonial = {
  quote?: string;
  author?: string;
};

export type StrapiCaseStudySuccessMetric = {
  value?: string | null;
  descriptions?: string[] | null;
  variant?: 'center' | 'side' | null;
  italic?: boolean | null;
};

export type StrapiCaseStudySeo = {
  title?: string;
  description?: string;
};

export type StrapiCaseStudyProject = {
  documentId: string;
  slug?: string | null;
  title: string;
  description?: string | null;
  thumbnail?: StrapiMedia | null;
  thumbnailPath?: string | null;
  alt?: string | null;
  href?: string | null;
  client?: string | null;
  industry?: string | null;
  tagline?: string | null;
  subtitle?: string | null;
  website?: string | null;
  companySize?: string | null;
  projectDate?: string | null;
  projectDuration?: string | null;
  services?: unknown;
  aboutClient?: unknown;
  challengeParagraphs?: unknown;
  approachIntro?: string | null;
  approachCallout?: string | null;
  approachParagraphs?: unknown;
  businessGoals?: unknown;
  targetAudience?: StrapiCaseStudyAudience[] | null;
  testimonial?: StrapiCaseStudyTestimonial | null;
  successMetrics?: StrapiCaseStudySuccessMetric[] | null;
  seo?: StrapiCaseStudySeo | null;
};
