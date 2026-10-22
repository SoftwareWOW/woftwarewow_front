import type { Locale } from '@/i18n/config';
import { fetchCollection, fetchSingleType } from '@/lib/strapi/client';
import {
  isHomepageCmsEmpty,
  loadSuperagencyHomepageDevFallback,
} from '@/lib/strapi/dev-fallback';
import { getStrapiFetchConcurrency, runInBatches } from '@/lib/strapi/fetch-concurrency';
import { cache } from 'react';
import type {
  StrapiSuperagencyEcosystem,
  StrapiSuperagencyFooter,
  StrapiSuperagencyGrowthCta,
  StrapiSuperagencyHeader,
  StrapiSuperagencyHero,
  StrapiSuperagencyHumanTouch,
  StrapiSuperagencySolutions,
  StrapiSuperagencyStats,
  StrapiSuperagencyDivision,
  StrapiSuperagencyFaq,
  StrapiSuperagencyGrowthArticle,
  StrapiSuperagencyPartnerLogo,
  StrapiSuperagencyProject,
  StrapiSuperagencySolutionCategory,
  StrapiSuperagencyTestimonial,
  SuperagencyHomepageData,
} from '@/lib/strapi/types';

const HUMAN_TOUCH_POPULATE = {
  content: {
    populate: {
      heading: true,
      founder: {
        populate: {
          avatar: true,
        },
      },
      galleryItems: {
        populate: {
          image: true,
        },
      },
    },
  },
};

const HERO_POPULATE = { heroImage: true };
const STATS_POPULATE = { stats: true };
const DIVISION_POPULATE = { featuredImage: true };
/** Scalar-only types: omit populate (Strapi 5 rejects populate keys on plain attributes). */
const NO_RELATIONS_POPULATE = false as const;

const GROWTH_CTA_POPULATE = { content: true };
const ECOSYSTEM_POPULATE = { content: true };

export async function getSuperagencyDivisions(locale: Locale) {
  return fetchCollection<StrapiSuperagencyDivision>('superagency-divisions', {
    locale,
    populate: DIVISION_POPULATE,
    sort: 'order:asc',
    logErrors: false,
  });
}
const PROJECT_POPULATE = { thumbnail: true };
const TESTIMONIAL_POPULATE = { userImg: true, caseStudyMedia: true };
const PARTNER_LOGO_POPULATE = { logo: true, darkLogo: true };

export const getSuperagencyLayout = cache(async function getSuperagencyLayout(locale: Locale) {
  const [header, footer] = await Promise.all([
    fetchSingleType<StrapiSuperagencyHeader>('superagency-header', {
      locale,
      populate: '*',
      logErrors: false,
    }),
    fetchSingleType<StrapiSuperagencyFooter>('superagency-footer', {
      locale,
      populate: '*',
      logErrors: false,
    }),
  ]);

  if (process.env.NODE_ENV === 'development') {
    const empty: string[] = [];
    if (!header) empty.push('header');
    if (!footer) empty.push('footer');
    if (empty.length) {
      console.info(`[Strapi] Layout CMS (${locale}): empty — ${empty.join(', ')}`);
    } else {
      const hasNav = Boolean(header?.navItems?.length);
      const hasFooterColumns = Boolean(footer?.resourceColumns?.length);
      console.info(
        `[Strapi] Layout CMS (${locale}): loaded (navItems=${hasNav ? 'yes' : 'no'}, resourceColumns=${hasFooterColumns ? 'yes' : 'no'})`,
      );
    }
  }

  return { header, footer };
});

export const getSuperagencyHomepage = cache(async function getSuperagencyHomepage(
  locale: Locale,
): Promise<SuperagencyHomepageData> {
  const batchSize = getStrapiFetchConcurrency();
  const [
    hero,
    stats,
    solutions,
    humanTouch,
    growthCta,
    ecosystem,
    divisions,
    projects,
    testimonials,
    faqs,
    solutionCategories,
    growthArticles,
    partnerLogos,
  ] = (await runInBatches(
    [
      () =>
        fetchSingleType<StrapiSuperagencyHero>('superagency-hero', {
          locale,
          populate: HERO_POPULATE,
        }),
      () =>
        fetchSingleType<StrapiSuperagencyStats>('superagency-stats', {
          locale,
          populate: STATS_POPULATE,
        }),
      () =>
        fetchSingleType<StrapiSuperagencySolutions>('superagency-solutions', {
          locale,
          populate: NO_RELATIONS_POPULATE,
        }),
      () =>
        fetchSingleType<StrapiSuperagencyHumanTouch>('superagency-human-touch', {
          locale,
          populate: HUMAN_TOUCH_POPULATE,
        }),
      () =>
        fetchSingleType<StrapiSuperagencyGrowthCta>('superagency-growth-cta', {
          locale,
          populate: GROWTH_CTA_POPULATE,
        }),
      () =>
        fetchSingleType<StrapiSuperagencyEcosystem>('superagency-ecosystem', {
          locale,
          populate: ECOSYSTEM_POPULATE,
        }),
      () => getSuperagencyDivisions(locale),
      () =>
        fetchCollection<StrapiSuperagencyProject>('wowsuperagencyprojects', {
          locale,
          populate: PROJECT_POPULATE,
          sort: 'order:asc',
        }),
      () =>
        fetchCollection<StrapiSuperagencyTestimonial>('wow-super-agency-clients', {
          locale,
          populate: TESTIMONIAL_POPULATE,
          sort: 'order:asc',
        }),
      () =>
        fetchCollection<StrapiSuperagencyFaq>('superagency-faqs', {
          locale,
          populate: NO_RELATIONS_POPULATE,
          sort: 'order:asc',
        }),
      () =>
        fetchCollection<StrapiSuperagencySolutionCategory>('superagency-solution-categories', {
          locale,
          populate: NO_RELATIONS_POPULATE,
          sort: 'order:asc',
        }),
      () =>
        fetchCollection<StrapiSuperagencyGrowthArticle>('superagency-growth-articles', {
          locale,
          populate: { thumbnail: true },
          sort: 'order:asc',
        }),
      () =>
        fetchCollection<StrapiSuperagencyPartnerLogo>('superagency-partner-logos', {
          locale,
          populate: PARTNER_LOGO_POPULATE,
          sort: 'order:asc',
        }),
    ],
    batchSize,
  )) as [
    StrapiSuperagencyHero | null,
    StrapiSuperagencyStats | null,
    StrapiSuperagencySolutions | null,
    StrapiSuperagencyHumanTouch | null,
    StrapiSuperagencyGrowthCta | null,
    StrapiSuperagencyEcosystem | null,
    StrapiSuperagencyDivision[],
    StrapiSuperagencyProject[],
    StrapiSuperagencyTestimonial[],
    StrapiSuperagencyFaq[],
    StrapiSuperagencySolutionCategory[],
    StrapiSuperagencyGrowthArticle[],
    StrapiSuperagencyPartnerLogo[],
  ];

  let data = {
    hero,
    stats,
    solutions,
    humanTouch,
    growthCta,
    ecosystem,
    divisions,
    projects,
    testimonials,
    faqs,
    solutionCategories,
    growthArticles,
    partnerLogos,
  };

  if (process.env.NODE_ENV === 'development') {
    const sections: Record<string, 'ok' | 'empty'> = {
      hero: hero ? 'ok' : 'empty',
      stats: stats ? 'ok' : 'empty',
      solutions: solutions ? 'ok' : 'empty',
      humanTouch: humanTouch ? 'ok' : 'empty',
      growthCta: growthCta ? 'ok' : 'empty',
      ecosystem: ecosystem ? 'ok' : 'empty',
      divisions: divisions.length ? 'ok' : 'empty',
      projects: projects.length ? 'ok' : 'empty',
      testimonials: testimonials.length ? 'ok' : 'empty',
      faqs: faqs.length ? 'ok' : 'empty',
      solutionCategories: solutionCategories.length ? 'ok' : 'empty',
      growthArticles: growthArticles.length ? 'ok' : 'empty',
      partnerLogos: partnerLogos.length ? 'ok' : 'empty',
    };

    const empty = Object.entries(sections)
      .filter(([, status]) => status === 'empty')
      .map(([name]) => name);

    if (empty.length) {
      console.info(
        `[Strapi] Homepage CMS (${locale}): ${empty.length} empty section(s) — ${empty.join(', ')}`,
      );
    } else {
      console.info(`[Strapi] Homepage CMS (${locale}): all sections populated`);
    }
  }

  if (isHomepageCmsEmpty(data)) {
    const fallback = await loadSuperagencyHomepageDevFallback(locale);
    if (fallback) {
      data = { ...data, ...fallback };
    }
  }

  return data;
});
