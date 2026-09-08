import { getStrapiMediaUrl } from '@/lib/strapi/client';
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

export function mapStrapiProjects(projects: StrapiSuperagencyProject[]) {
  if (!projects.length) return null;

  return projects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description ?? '',
    thumbnail: project.thumbnailPath ?? getStrapiMediaUrl(project.thumbnail ?? undefined) ?? '',
    alt: project.alt ?? project.title,
    href: project.href ?? '/case-study',
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
      userName: item.userName ?? '',
      position: item.position ?? '',
    })),
  };
}

export function mapStrapiTestimonialExtras(testimonials: StrapiSuperagencyTestimonial[]) {
  const clientImages: Record<string, string> = {};
  const reviewCaseStudies: Record<
    number,
    { href: string; mediaSrc: string; mediaAlt: string }
  > = {};

  testimonials.forEach((item, index) => {
    const id = index + 1;
    if (item.userName) {
      const img = item.userImgPath ?? getStrapiMediaUrl(item.userImg ?? undefined);
      if (img) clientImages[item.userName] = img;
    }
    if (item.caseStudyHref) {
      reviewCaseStudies[id] = {
        href: item.caseStudyHref,
        mediaSrc: item.caseStudyMediaPath ?? getStrapiMediaUrl(item.caseStudyMedia ?? undefined) ?? '',
        mediaAlt: item.caseStudyMediaAlt ?? '',
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

export function mapStrapiHumanTouch(humanTouch: StrapiSuperagencyHumanTouch | null) {
  const content = humanTouch?.content;
  if (!content) return null;

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
