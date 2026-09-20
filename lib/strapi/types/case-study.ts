import type { StrapiMedia } from '@/lib/strapi/client';
import type { StrapiImageWithAlt } from '@/lib/strapi/types/pages';

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

export type StrapiCaseStudyHighlight = {
  alt?: string | null;
  quote?: string | null;
  author?: string | null;
  href?: string | null;
  image?: StrapiMedia | null;
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
  year?: string | null;
  categories?: string[] | null;
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
  clientImage?: StrapiImageWithAlt | null;
  challengeBeforeImage?: StrapiImageWithAlt | null;
  challengeAfterImage?: StrapiImageWithAlt | null;
  businessGoalsImage?: StrapiImageWithAlt | null;
  highlightImages?: StrapiCaseStudyHighlight[] | null;
};
