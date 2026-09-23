import type { StrapiMedia } from '@/lib/strapi/client';

export type StrapiImageWithAlt = {
  id?: number;
  image?: StrapiMedia | null;
  alt?: string | null;
};

export type StrapiPageHero = {
  eyebrow?: string | null;
  title: string;
  accentTitle?: string | null;
  suffixTitle?: string | null;
  description?: string | null;
  images?: StrapiImageWithAlt[] | null;
  backgroundImage?: StrapiImageWithAlt | null;
};

export type StrapiHeroAbout = {
  body?: string | null;
  image?: StrapiImageWithAlt | null;
};

export type StrapiFeatureCard = {
  id?: number;
  title: string;
  description?: string | null;
  href?: string | null;
  image?: StrapiImageWithAlt | null;
};

export type StrapiPageTechnologies = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  image?: StrapiImageWithAlt | null;
  backgroundImage?: StrapiImageWithAlt | null;
  items?: StrapiFeatureCard[] | null;
};

export type StrapiProcessStep = {
  id?: number;
  title: string;
  description?: string | null;
  order?: number | null;
};

export type StrapiPageProcess = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  image?: StrapiImageWithAlt | null;
  backgroundImage?: StrapiImageWithAlt | null;
  steps?: StrapiProcessStep[] | null;
};

export type StrapiPageProcessSteps = Omit<StrapiPageProcess, 'image' | 'backgroundImage'>;

export type StrapiPageSectionImage = {
  sectionKey?: string;
  image?: StrapiImageWithAlt | null;
};

export type StrapiRfqGroup = {
  id?: number;
  title: string;
  subtitle?: string | null;
  items?: string[] | null;
};

export type StrapiPageRfqAccordion = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  groups?: StrapiRfqGroup[] | null;
  backgroundImage?: StrapiImageWithAlt | null;
};

export type StrapiPackageOffer = {
  sectionKey?: string;
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  price?: string | null;
  billingNote?: string | null;
  features?: StrapiFeatureCard[] | null;
  image?: StrapiImageWithAlt | null;
  backgroundImage?: StrapiImageWithAlt | null;
  cta?: {
    label?: string | null;
    href?: string | null;
  } | null;
};

export type StrapiEventCard = {
  id?: number;
  date?: string | null;
  title: string;
  location?: string | null;
  href?: string | null;
};

export type StrapiPageEvents = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  events?: StrapiEventCard[] | null;
};

export type StrapiImageWithLink = {
  id?: number;
  image?: StrapiMedia | null;
  alt?: string | null;
  href?: string | null;
};

export type StrapiImageGallery = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  images?: StrapiImageWithLink[] | null;
};

export type StrapiPageProjectItem = {
  documentId?: string;
  slug?: string | null;
  title?: string;
  description?: string | null;
  thumbnail?: StrapiMedia | null;
  thumbnailPath?: string | null;
  alt?: string | null;
  href?: string | null;
  order?: number | null;
  categories?: string[] | null;
  serviceTags?: string[] | null;
  year?: number | null;
  completedAt?: string | null;
};

export type StrapiPageProjects = {
  sectionKey?: string;
  projects?: StrapiPageProjectItem[] | null;
};

export type StrapiPageImageItem = {
  id?: number;
  image?: StrapiMedia | null;
  alt?: string | null;
};

export type StrapiPageImages = {
  sectionKey?: string;
  images?: StrapiPageImageItem[] | null;
};

export type StrapiPageCareerCommunity = {
  sectionKey?: string;
  avatars?: StrapiPageImageItem[] | null;
  teamImage?: StrapiPageImageItem | null;
};

export type StrapiPageFaqItem = {
  id?: number;
  question: string;
  answer: string;
};

export type StrapiPageFaq = {
  sectionKey?: string;
  items?: StrapiPageFaqItem[] | null;
};

export type StrapiPageRfq = {
  sectionKey?: string;
  body?: string | null;
};

export type StrapiSocialLink = {
  platform?: string | null;
  url?: string | null;
};

export type StrapiTeamMember = {
  id?: number;
  documentId?: string;
  memberId?: string;
  name?: string;
  role?: string | null;
  bio?: string | null;
  description?: string | null;
  skills?: string[] | null;
  portfolioTags?: string[] | null;
  socialLinks?: StrapiSocialLink[] | null;
  image?: StrapiMedia | null;
  imagePath?: string | null;
  order?: number | null;
  isActive?: boolean | null;
};

export type StrapiPageTeamMembers = {
  sectionKey?: string;
  featuredMember?: StrapiTeamMember | null;
  members?: StrapiTeamMember[] | null;
};

export type StrapiPagePartner = {
  documentId?: string;
  name?: string;
  description?: string | null;
  logo?: StrapiMedia | null;
  href?: string | null;
  order?: number | null;
};

export type StrapiPagePartners = {
  sectionKey?: string;
  partners?: StrapiPagePartner[] | null;
};

export type StrapiPageClientLogos = {
  sectionKey?: string;
  clientLogos?: Array<{
    documentId?: string;
    clientKey?: string;
    name?: string;
    logo?: StrapiMedia | null;
    logoPath?: string | null;
    darkLogo?: StrapiMedia | null;
    darkLogoPath?: string | null;
    alt?: string | null;
    order?: number | null;
  }> | null;
};

export type StrapiPageOfficeLocations = {
  sectionKey?: string;
  locations?: Array<{
    documentId?: string;
    locationId?: string;
    city?: string | null;
    region?: string | null;
    description?: string | null;
    addressLines?: string[] | null;
    meta?: string | null;
    phone?: string | null;
    phoneHref?: string | null;
    mapQuery?: string | null;
    order?: number | null;
  }> | null;
};

export type StrapiPortfolioFilterGroup = {
  id?: number;
  label: string;
  filterKey?: string | null;
  projects?: StrapiPageProjectItem[] | null;
};

export type StrapiPagePortfolioExplorer = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  filterGroups?: StrapiPortfolioFilterGroup[] | null;
};

export type StrapiPackageCard = {
  id?: number;
  index?: string | null;
  subtitle?: string | null;
  title: string;
  description?: string | null;
  href?: string | null;
  buttonLabel?: string | null;
  image?: StrapiImageWithAlt | null;
};

export type StrapiPagePackageList = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  items?: StrapiPackageCard[] | null;
};

export type StrapiBrandLogoCard = {
  id?: number;
  title: string;
  description?: string | null;
  previewImage?: StrapiImageWithAlt | null;
  svgHref?: string | null;
  pngHref?: string | null;
};

export type StrapiBrandKitLogos = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  items?: StrapiBrandLogoCard[] | null;
};

export type StrapiFaqList = {
  sectionKey?: string;
  eyebrow?: string | null;
  title?: string | null;
  accentTitle?: string | null;
  description?: string | null;
  items?: StrapiPageFaqItem[] | null;
};

export type StrapiPageBlogPosts = {
  sectionKey?: string;
  blogPosts?: Array<{
    documentId?: string;
    title?: string;
    excerpt?: string | null;
    href?: string | null;
    date?: string | null;
    thumbnail?: StrapiMedia | null;
    order?: number | null;
  }> | null;
};

export type StrapiPageCareerJobs = {
  sectionKey?: string;
  jobs?: import('@/lib/strapi/types/career').StrapiCareerJob[] | null;
};

export type StrapiPageSeo = {
  title?: string | null;
  description?: string | null;
  ogImage?: StrapiMedia | null;
};

export type StrapiSuperagencyPage = {
  hero?: StrapiPageHero | null;
  seo?: StrapiPageSeo | null;
  [key: string]: unknown;
};

export type StrapiFooterResourcePage = {
  documentId?: string;
  pageKey: string;
  hero?: StrapiPageHero | null;
  sections?: unknown[] | null;
  seo?: StrapiPageSeo | null;
};

export type StrapiLegalPage = {
  documentId?: string;
  pageKey: 'privacy' | 'terms';
  title?: string | null;
  intro?: string | null;
  body?: string | null;
  lastUpdated?: string | null;
  seo?: StrapiPageSeo | null;
};

export type StrapiNavColumnItem = {
  itemKey?: string;
  label?: string;
  href?: string;
  description?: string;
  type?: 'link' | 'division';
  detailPanelKey?: string;
};

export type StrapiNavColumn = {
  title?: string;
  items?: StrapiNavColumnItem[];
};

export type StrapiNavMenuItem = {
  itemKey?: string;
  label?: string;
  desktopPaddingX?: number;
  desktopPaddingY?: number;
  defaultSelection?: string;
  desktopColumns?: StrapiNavColumn[];
  mobilePages?: unknown;
};

export type StrapiDetailPanel = {
  key?: string;
  title?: string;
  description?: string;
  includes?: string[] | null;
  ctaLabel?: string;
  image?: StrapiMedia | null;
};

export type StrapiFooterLink = {
  itemKey?: string;
  label?: string;
  href?: string;
  iconId?: string;
};

export type StrapiFooterColumn = {
  title?: string;
  links?: StrapiFooterLink[];
};
