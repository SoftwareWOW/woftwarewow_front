import { resolveCaseStudySlug } from '@/lib/case-study/slug';
import { getStrapiMediaUrl, type StrapiMedia } from '@/lib/strapi/client';
import type {
  StrapiSuperagencyDivision,
  StrapiSuperagencyEcosystem,
  StrapiSuperagencyGrowthArticle,
  StrapiSuperagencyHero,
  StrapiSuperagencyHumanTouch,
  StrapiSuperagencyPartnerLogo,
  StrapiSuperagencyProject,
  StrapiSuperagencySolutions,
  StrapiSuperagencyStats,
  StrapiSuperagencyTestimonial,
  SuperagencyHomepageData,
} from '@/lib/strapi/types';
import type { Dictionary } from '@/i18n/types';

export function mapStrapiHeroCopy(hero: StrapiSuperagencyHero | null) {
  if (!hero) return null;

  const source = hero.content ?? hero;
  if (!source.headline && !source.lead && !source.description) return null;

  return {
    headline: source.headline,
    lead: source.lead,
    body: source.description,
    ctaPrimary: source.ctaPrimary,
    ctaSecondary: source.ctaSecondary,
    heroImage: getStrapiMediaUrl(source.heroImage ?? undefined) ?? '/images/wow/hero-banner.jpg',
  };
}

export function mapStrapiStats(stats: StrapiSuperagencyStats | null) {
  if (!stats?.stats?.length) return null;
  return {
    intro: stats.intro,
    stats: stats.stats.map((stat) => ({
      value: stat.value,
      label: stat.label,
      suffix: stat.suffix ?? '',
      description: stat.description ?? '',
    })),
  };
}

export function mapStrapiDivisions(divisions: StrapiSuperagencyDivision[]) {
  if (!divisions.length) return null;

  return divisions
    .filter((d) => d.isActive !== false)
    .map((division, index) => ({
      id: index + 1,
      title: division.name,
      description: division.shortDescription ?? '',
      bgImage: division.featuredImagePath ?? getStrapiMediaUrl(division.featuredImage ?? undefined) ?? '',
      href: division.ctaLink ?? '/',
    }));
}

const WOW_PROJECT_IMAGE_WIDTH = 1330;
const WOW_PROJECT_IMAGE_HEIGHT = 445;

export function mapStrapiProjects(projects: StrapiSuperagencyProject[]) {
  if (!projects.length) return null;

  return projects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description ?? '',
    thumbnail: project.thumbnailPath ?? getStrapiMediaUrl(project.thumbnail ?? undefined) ?? '',
    alt: project.alt ?? project.title,
    href: `/case-study/${resolveCaseStudySlug(project)}`,
    thumbnailWidth: WOW_PROJECT_IMAGE_WIDTH,
    thumbnailHeight: WOW_PROJECT_IMAGE_HEIGHT,
  }));
}

export function mapStrapiTestimonials(
  testimonials: StrapiSuperagencyTestimonial[],
  fallback: Dictionary['superAgencyClient'],
): Dictionary['superAgencyClient'] {
  if (!testimonials.length) return fallback;

  return {
    ...fallback,
    reviews: testimonials.map((item, index) => ({
      id: index + 1,
      tags: item.tags ?? '',
      title: item.title ?? '',
      userName: item.userName?.trim() ?? '',
      position: item.position?.trim() ?? '',
    })),
  };
}

function isStrapiMediaPath(path?: string | null) {
  const value = path?.trim() ?? '';
  if (!value) return false;

  if (
    value.startsWith('/images/') ||
    value.startsWith('/case-study/') ||
    value.startsWith('/public/')
  ) {
    return false;
  }

  return (
    value.startsWith('http://') ||
    value.startsWith('https://') ||
    value.startsWith('/uploads/') ||
    /\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(value)
  );
}

export function mapStrapiTestimonialExtras(testimonials: StrapiSuperagencyTestimonial[]) {
  const clientImages: Record<string, string> = {};
  const reviewCaseStudies: Record<
    number,
    { href: string; mediaSrc: string; mediaAlt: string }
  > = {};

  testimonials.forEach((item, index) => {
    const id = index + 1;
    const userName = item.userName?.trim();
    const avatar =
      getStrapiMediaUrl(item.userImg ?? undefined) ??
      (isStrapiMediaPath(item.userImgPath) ? getStrapiMediaUrl({ url: item.userImgPath!.trim() }) : undefined);

    if (userName && avatar) {
      clientImages[userName] = avatar;
    }

    const mediaSrc =
      getStrapiMediaUrl(item.caseStudyMedia ?? undefined) ??
      (isStrapiMediaPath(item.caseStudyMediaPath)
        ? getStrapiMediaUrl({ url: item.caseStudyMediaPath!.trim() })
        : undefined);

    if (item.caseStudyHref || mediaSrc) {
      reviewCaseStudies[id] = {
        href: item.caseStudyHref?.trim() || '/case-study',
        mediaSrc: mediaSrc ?? '',
        mediaAlt: item.caseStudyMediaAlt?.trim() || userName || '',
      };
    }
  });

  return { clientImages, reviewCaseStudies };
}

export function mapStrapiFaqs(faqs: SuperagencyHomepageData['faqs']) {
  if (!faqs.length) return null;
  return faqs.map((faq, index) => ({
    id: index + 1,
    question: faq.question,
    answer: faq.answer,
  }));
}

export function mapStrapiSolutionCategories(categories: SuperagencyHomepageData['solutionCategories']) {
  if (!categories.length) return null;
  return categories.map((cat, index) => ({
    id: index + 1,
    title: cat.title,
    subtitle: cat.subtitle ?? '',
    items: Array.isArray(cat.items) ? cat.items : [],
  }));
}

export function mapStrapiSolutionsSection(solutions: StrapiSuperagencySolutions | null) {
  if (!solutions) return null;
  return {
    sectionLabel: solutions.sectionLabel,
    heading: solutions.heading,
    description: solutions.description,
    initialVisibleCount: solutions.initialVisibleCount,
    viewAllLabel: solutions.viewAllLabel,
    contactLabel: solutions.contactLabel,
  };
}

export function mapStrapiGrowthArticles(articles: StrapiSuperagencyGrowthArticle[]) {
  if (!articles.length) return null;
  return articles.map((article, index) => ({
    id: index + 1,
    date: article.date ?? '',
    title: article.title,
    description: article.description ?? '',
    thumbnail: article.thumbnailPath ?? getStrapiMediaUrl(article.thumbnail ?? undefined) ?? '',
    href: article.href ?? '/blog',
  }));
}

export function mapStrapiPartnerLogos(logos: StrapiSuperagencyPartnerLogo[]) {
  if (!logos.length) return null;
  return logos.map((logo, index) => ({
    id: index + 1,
    logo: logo.logoPath ?? getStrapiMediaUrl(logo.logo ?? undefined) ?? '',
    darkLogo: logo.darkLogoPath ?? getStrapiMediaUrl(logo.darkLogo ?? undefined) ?? '',
    alt: logo.alt ?? 'Company Logo',
  }));
}

function mapStrapiGalleryImage(image?: StrapiMedia | null) {
  const src = getStrapiMediaUrl(image);
  return src
    ? {
        src,
        alt: image?.alternativeText ?? undefined,
        width: image?.width,
        height: image?.height,
      }
    : undefined;
}

export function mapStrapiHumanTouch(humanTouch: StrapiSuperagencyHumanTouch | null) {
  const content = humanTouch?.content;
  if (!content) return null;

  const galleryByPosition = new Map<
    string,
    NonNullable<ReturnType<typeof mapStrapiGalleryImage>>
  >();

  (content.galleryItems ?? []).forEach((item) => {
    const mappedImage = mapStrapiGalleryImage(item.image);
    if (item.position && mappedImage) {
      galleryByPosition.set(item.position, mappedImage);
    }
  });

  const galleryPositions = ['leftTop', 'leftBottom', 'rightTop', 'rightBottom'];
  const galleryItems = galleryPositions.map((position) => galleryByPosition.get(position));

  return {
    sectionLabel: content.heading?.label,
    title: content.heading?.title,
    founder: content.founder
      ? {
          name: content.founder.name,
          role: content.founder.role,
          tagline: content.founder.tagline,
          avatar: getStrapiMediaUrl(content.founder.avatar ?? undefined),
        }
      : undefined,
    galleryItems: galleryItems.some(Boolean) ? galleryItems : undefined,
  };
}

export function mapStrapiEcosystem(
  ecosystem: StrapiSuperagencyEcosystem | null,
  fallback: Dictionary['ecosystem'],
): Dictionary['ecosystem'] {
  const content = ecosystem?.content;
  if (!content) return fallback;

  return {
    heading: {
      part1: content.headingPart1 ?? fallback.heading.part1,
      highlight: content.headingHighlight ?? fallback.heading.highlight,
      part2: content.headingPart2 ?? fallback.heading.part2,
    },
    description: content.description ?? fallback.description,
    nodes: (content.nodes as Dictionary['ecosystem']['nodes']) ?? fallback.nodes,
    ctas: (content.ctas as Dictionary['ecosystem']['ctas']) ?? fallback.ctas,
  };
}

export function mapStrapiGrowthCta(growthCta: SuperagencyHomepageData['growthCta']) {
  const content = growthCta?.content;
  if (!content) return null;
  return {
    accentText: content.accentText,
    mainText: content.mainText,
    ariaLabel: content.ariaLabel,
  };
}
