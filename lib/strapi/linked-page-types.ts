import type { StrapiMedia } from '@/lib/strapi/client';

export type StrapiLinkedPageMedia = StrapiMedia & {
  id?: number;
  documentId?: string;
  name?: string;
  caption?: string | null;
  mime?: string;
};

export type StrapiLinkedPageImage = {
  id: number;
  image: StrapiLinkedPageMedia | null;
  alt?: string | null;
};

export type StrapiLinkedPageHero = {
  id: number;
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  image?: StrapiLinkedPageImage | null;
};

export type StrapiLinkedPageSeo = {
  id: number;
  title?: string | null;
  description?: string | null;
  ogImage?: StrapiLinkedPageMedia | null;
};

export type StrapiLinkedPageFeatureCard = {
  id: number;
  title: string;
  description?: string | null;
};

export type StrapiLinkedPageProcessStep = {
  id: number;
  title: string;
  description?: string | null;
  order?: number | null;
};

export type StrapiLinkedPageFaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type StrapiLinkedPageProfile = {
  id: number;
  name: string;
  role?: string | null;
  tagline?: string | null;
  avatar?: StrapiLinkedPageMedia | null;
};

type StrapiLinkedPageSectionBase = {
  id: number;
  sectionKey: string;
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
};

export type StrapiLinkedPageNarrativeSection = StrapiLinkedPageSectionBase & {
  __component: 'sections.narrative';
  body?: string | null;
  items?: StrapiLinkedPageFeatureCard[] | null;
  image?: StrapiLinkedPageImage | null;
  profile?: StrapiLinkedPageProfile | null;
};

export type StrapiLinkedPageFeatureListSection = StrapiLinkedPageSectionBase & {
  __component: 'sections.feature-list';
  features?: StrapiLinkedPageFeatureCard[] | null;
};

export type StrapiLinkedPageProcessListSection = StrapiLinkedPageSectionBase & {
  __component: 'sections.process-list';
  steps?: StrapiLinkedPageProcessStep[] | null;
};

export type StrapiLinkedPageImageGallerySection = StrapiLinkedPageSectionBase & {
  __component: 'sections.image-gallery';
  images?: StrapiLinkedPageImage[] | null;
};

export type StrapiLinkedPageFaqListSection = StrapiLinkedPageSectionBase & {
  __component: 'sections.faq-list';
  items?: StrapiLinkedPageFaqItem[] | null;
};

export type StrapiLinkedPageRecommendedContentSection =
  StrapiLinkedPageSectionBase & {
    __component: 'sections.recommended-content';
    recommendedContentKey: string;
  };

export type StrapiLinkedPageCtaContent = {
  id: number;
  accentText?: string | null;
  mainText?: string | null;
  ariaLabel?: string | null;
};

export type StrapiLinkedPagePackageOfferSection =
  StrapiLinkedPageSectionBase & {
    __component: 'sections.package-offer';
    title: string;
    price?: string | null;
    billingNote?: string | null;
    features?: StrapiLinkedPageFeatureCard[] | null;
    cta?: StrapiLinkedPageCtaContent | null;
  };

export type StrapiLinkedPageCtaSection = StrapiLinkedPageCtaContent & {
  __component: 'sections.cta';
};

export type StrapiLinkedPageSection =
  | StrapiLinkedPageNarrativeSection
  | StrapiLinkedPageFeatureListSection
  | StrapiLinkedPageProcessListSection
  | StrapiLinkedPageImageGallerySection
  | StrapiLinkedPageFaqListSection
  | StrapiLinkedPageRecommendedContentSection
  | StrapiLinkedPagePackageOfferSection
  | StrapiLinkedPageCtaSection;

export type StrapiLinkedPage = {
  id: number;
  documentId: string;
  slug?: string;
  pageKey?: string;
  hero: StrapiLinkedPageHero;
  sections?: StrapiLinkedPageSection[] | null;
  seo?: StrapiLinkedPageSeo | null;
  locale: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string | null;
};

export type LinkedPageMedia = {
  url: string;
  alt: string | null;
  width: number | null;
  height: number | null;
};

export type LinkedPageHero = {
  eyebrow: string | null;
  title: string;
  description: string | null;
  imageUrl: string | null;
  image: LinkedPageMedia | null;
};

export type LinkedPageSeo = {
  title: string | null;
  description: string | null;
  ogImageUrl: string | null;
  ogImage: LinkedPageMedia | null;
};

export type LinkedPageFeatureCard = {
  title: string;
  description: string | null;
};

export type LinkedPageProcessStep = {
  title: string;
  description: string | null;
  order: number | null;
};

export type LinkedPageFaqItem = {
  question: string;
  answer: string;
};

export type LinkedPageProfile = {
  name: string;
  role: string | null;
  tagline: string | null;
  avatar: LinkedPageMedia | null;
};

type LinkedPageSectionBase<
  TComponent extends StrapiLinkedPageSection['__component'],
> = {
  component: TComponent;
  key: string;
  order: number;
};

export type LinkedPageNarrativeSection = LinkedPageSectionBase<
  'sections.narrative'
> & {
  eyebrow: string | null;
  title: string | null;
  body: string | null;
  items: LinkedPageFeatureCard[];
  image: LinkedPageMedia | null;
  profile: LinkedPageProfile | null;
};

export type LinkedPageFeatureListSection = LinkedPageSectionBase<
  'sections.feature-list'
> & {
  eyebrow: string | null;
  title: string | null;
  description: string | null;
  features: LinkedPageFeatureCard[];
};

export type LinkedPageProcessListSection = LinkedPageSectionBase<
  'sections.process-list'
> & {
  eyebrow: string | null;
  title: string | null;
  description: string | null;
  steps: LinkedPageProcessStep[];
};

export type LinkedPageImageGallerySection = LinkedPageSectionBase<
  'sections.image-gallery'
> & {
  eyebrow: string | null;
  title: string | null;
  description: string | null;
  images: LinkedPageMedia[];
};

export type LinkedPageFaqListSection = LinkedPageSectionBase<
  'sections.faq-list'
> & {
  eyebrow: string | null;
  title: string | null;
  description: string | null;
  items: LinkedPageFaqItem[];
};

export type LinkedPageRecommendedContentSection = LinkedPageSectionBase<
  'sections.recommended-content'
> & {
  eyebrow: string | null;
  title: string | null;
  description: string | null;
  recommendedContentKey: string;
};

export type LinkedPageCta = {
  accentText: string | null;
  mainText: string | null;
  ariaLabel: string | null;
};

export type LinkedPagePackageOfferSection = LinkedPageSectionBase<
  'sections.package-offer'
> & {
  eyebrow: string | null;
  title: string;
  description: string | null;
  price: string | null;
  billingNote: string | null;
  features: LinkedPageFeatureCard[];
  cta: LinkedPageCta | null;
};

export type LinkedPageCtaSection = LinkedPageSectionBase<'sections.cta'> &
  LinkedPageCta;

export type LinkedPageSection =
  | LinkedPageNarrativeSection
  | LinkedPageFeatureListSection
  | LinkedPageProcessListSection
  | LinkedPageImageGallerySection
  | LinkedPageFaqListSection
  | LinkedPageRecommendedContentSection
  | LinkedPagePackageOfferSection
  | LinkedPageCtaSection;

export type LinkedPageViewModel = {
  id: number;
  documentId: string;
  slug: string | null;
  pageKey: string | null;
  locale: string;
  hero: LinkedPageHero;
  seo: LinkedPageSeo | null;
  sections: LinkedPageSection[];
  sectionsByKey: Record<string, LinkedPageSection>;
};
