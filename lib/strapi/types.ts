import type { StrapiMedia } from '@/lib/strapi/client';
import type {
  StrapiDetailPanel,
  StrapiFooterColumn,
  StrapiNavMenuItem,
} from '@/lib/strapi/types/pages';

export type StrapiHeroContent = {
  headline?: string;
  lead?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  heroImage?: StrapiMedia | null;
};

export type StrapiSuperagencyHero = StrapiHeroContent & {
  content?: StrapiHeroContent | null;
};

export type StrapiStat = {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
};

export type StrapiSuperagencyStats = {
  intro?: string;
  stats?: StrapiStat[];
};

export type StrapiSuperagencySolutions = {
  sectionLabel?: string;
  heading?: string;
  description?: string;
  initialVisibleCount?: number;
  viewAllLabel?: string;
  contactLabel?: string;
};

export type StrapiSuperagencyDivision = {
  documentId: string;
  name: string;
  divisionId: string;
  shortDescription?: string;
  featuredImage?: StrapiMedia | null;
  featuredImagePath?: string;
  ctaLink?: string;
  order?: number;
  isActive?: boolean;
};

export type StrapiSuperagencyProject = {
  documentId: string;
  slug?: string | null;
  title: string;
  description?: string;
  thumbnail?: StrapiMedia | null;
  thumbnailPath?: string;
  alt?: string;
  href?: string;
  order?: number;
};

export type StrapiSuperagencyTestimonial = {
  documentId: string;
  tags?: string;
  title?: string;
  userName?: string;
  position?: string;
  userImg?: StrapiMedia | null;
  userImgPath?: string;
  caseStudyHref?: string;
  caseStudyMedia?: StrapiMedia | null;
  caseStudyMediaPath?: string;
  caseStudyMediaAlt?: string;
  order?: number;
};

export type StrapiSuperagencyFaq = {
  documentId: string;
  question: string;
  answer: string;
  order?: number;
};

export type StrapiSuperagencySolutionCategory = {
  documentId: string;
  title: string;
  subtitle?: string;
  items?: string[];
  order?: number;
};

export type StrapiSuperagencyGrowthArticle = {
  documentId: string;
  date?: string;
  title: string;
  description?: string;
  thumbnail?: StrapiMedia | null;
  thumbnailPath?: string;
  href?: string;
  order?: number;
};

export type StrapiSuperagencyPartnerLogo = {
  documentId: string;
  logo?: StrapiMedia | null;
  logoPath?: string;
  darkLogo?: StrapiMedia | null;
  darkLogoPath?: string;
  alt?: string;
  order?: number;
};

export type StrapiSuperagencyHumanTouch = {
  content?: {
    heading?: { label?: string; title?: string };
    founder?: { name?: string; role?: string; tagline?: string; avatar?: StrapiMedia | null };
    galleryItems?: {
      position?: 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
      image?: StrapiMedia | null;
    }[] | null;
  } | null;
};

export type StrapiSuperagencyGrowthCta = {
  content?: { accentText?: string; mainText?: string; ariaLabel?: string } | null;
};

export type StrapiSuperagencyEcosystem = {
  sectionLabel?: string;
  content?: {
    headingPart1?: string;
    headingHighlight?: string;
    headingPart2?: string;
    description?: string;
    nodes?: Record<string, { prefix?: string; label?: string }>;
    ctas?: Record<string, string>;
  } | null;
};

export type StrapiSuperagencyHeader = {
  logoAlt?: string;
  logoAltDark?: string;
  openMenu?: string;
  closeMenu?: string;
  menu?: string;
  scheduleMeeting?: string;
  navItems?: StrapiNavMenuItem[];
  detailPanels?: StrapiDetailPanel[];
  primaryCta?: { label?: string; href?: string };
};

export type StrapiSuperagencyFooter = {
  description?: string;
  companyHeading?: string;
  address?: { line1?: string; line2?: string };
  socialLinks?: { platform?: string; url?: string }[];
  footerTabs?: unknown;
  resourceColumns?: StrapiFooterColumn[];
  copyright?: string;
};

export type SuperagencyHomepageData = {
  hero: StrapiSuperagencyHero | null;
  stats: StrapiSuperagencyStats | null;
  solutions: StrapiSuperagencySolutions | null;
  humanTouch: StrapiSuperagencyHumanTouch | null;
  growthCta: StrapiSuperagencyGrowthCta | null;
  ecosystem: StrapiSuperagencyEcosystem | null;
  divisions: StrapiSuperagencyDivision[];
  projects: StrapiSuperagencyProject[];
  testimonials: StrapiSuperagencyTestimonial[];
  faqs: StrapiSuperagencyFaq[];
  solutionCategories: StrapiSuperagencySolutionCategory[];
  growthArticles: StrapiSuperagencyGrowthArticle[];
  partnerLogos: StrapiSuperagencyPartnerLogo[];
};

export type StrapiSoftwareWowHero = {
  headline?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
};

export type StrapiSoftwareWowService = {
  documentId: string;
  slug: string;
  title: string;
  description?: string;
  features?: string[];
  order?: number;
};

export type StrapiSoftwareWowIndustry = {
  documentId: string;
  slug: string;
  title: string;
  description?: string;
  icon?: string;
  order?: number;
};

export type StrapiDivisionHeader = {
  logoAlt?: string;
  tagline?: string;
  phone?: string;
  phoneHref?: string;
  navItems?: { id: string; label: string; href: string }[];
  navigation?: unknown;
  cta?: { label?: string; href?: string };
};

export type StrapiDivisionFooter = {
  address?: { line1?: string; line2?: string };
  footerSections?: { title: string; links: { id?: string; label: string; href: string }[] }[];
  copyright?: string;
};

export type SoftwareWowHomepageData = {
  hero: StrapiSoftwareWowHero | null;
  whyChooseUs: {
    sectionLabel?: string;
    heading?: string;
    features?: { title: string; description?: string }[];
  } | null;
  process: {
    sectionLabel?: string;
    heading?: string;
    steps?: { title: string; description?: string; order?: number }[];
  } | null;
  techStack: { sectionLabel?: string; heading?: string; description?: string } | null;
  rfq: {
    sectionLabel?: string;
    heading?: string;
    faqs?: { question: string; answer: string }[];
  } | null;
  growthCta: StrapiSuperagencyGrowthCta | null;
  services: StrapiSoftwareWowService[];
  industries: StrapiSoftwareWowIndustry[];
  header: StrapiDivisionHeader | null;
  footer: StrapiDivisionFooter | null;
};

export type DivisionChromeData = {
  header: StrapiDivisionHeader | null;
  footer: StrapiDivisionFooter | null;
  hero: StrapiSoftwareWowHero | null;
};
