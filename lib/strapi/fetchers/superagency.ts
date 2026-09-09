import type { Locale } from '@/i18n/config';
import { fetchCollection, fetchSingleType } from '@/lib/strapi/client';
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

const DEEP_POPULATE = '*';
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

export async function getSuperagencyLayout(locale: Locale) {
  const [header, footer] = await Promise.all([
    fetchSingleType<StrapiSuperagencyHeader>('superagency-header', {
      locale,
      populate: DEEP_POPULATE,
    }),
    fetchSingleType<StrapiSuperagencyFooter>('superagency-footer', {
      locale,
      populate: DEEP_POPULATE,
    }),
  ]);

  return { header, footer };
}

export async function getSuperagencyHomepage(locale: Locale): Promise<SuperagencyHomepageData> {
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
  ] = await Promise.all([
    fetchSingleType<StrapiSuperagencyHero>('superagency-hero', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<StrapiSuperagencyStats>('superagency-stats', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<StrapiSuperagencySolutions>('superagency-solutions', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<StrapiSuperagencyHumanTouch>('superagency-human-touch', {
      locale,
      populate: HUMAN_TOUCH_POPULATE,
    }),
    fetchSingleType<StrapiSuperagencyGrowthCta>('superagency-growth-cta', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<StrapiSuperagencyEcosystem>('superagency-ecosystem', { locale, populate: DEEP_POPULATE }),
    fetchCollection<StrapiSuperagencyDivision>('superagency-divisions', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchCollection<StrapiSuperagencyProject>('wowsuperagencyprojects', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchCollection<StrapiSuperagencyTestimonial>('wow-super-agency-clients', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchCollection<StrapiSuperagencyFaq>('superagency-faqs', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchCollection<StrapiSuperagencySolutionCategory>('superagency-solution-categories', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchCollection<StrapiSuperagencyGrowthArticle>('superagency-growth-articles', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchCollection<StrapiSuperagencyPartnerLogo>('superagency-partner-logos', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
  ]);

  const data = {
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

  return data;
}
