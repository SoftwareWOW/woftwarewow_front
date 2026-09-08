import type { Locale } from '@/i18n/config';
import { fetchCollection, fetchSingleType } from '@/lib/strapi/client';
import type { DivisionChromeData, SoftwareWowHomepageData, StrapiDivisionFooter, StrapiDivisionHeader, StrapiSoftwareWowHero } from '@/lib/strapi/types';

const DEEP_POPULATE = '*';

export async function getSoftwareWowHomepage(locale: Locale): Promise<SoftwareWowHomepageData> {
  const [
    hero,
    whyChooseUs,
    process,
    techStack,
    rfq,
    growthCta,
    services,
    industries,
    header,
    footer,
  ] = await Promise.all([
    fetchSingleType<StrapiSoftwareWowHero>('softwarewow-hero', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<SoftwareWowHomepageData['whyChooseUs']>('softwarewow-why-choose-us', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<SoftwareWowHomepageData['process']>('softwarewow-process', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<SoftwareWowHomepageData['techStack']>('softwarewow-tech-stack', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<SoftwareWowHomepageData['rfq']>('softwarewow-rfq', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<SoftwareWowHomepageData['growthCta']>('softwarewow-growth-cta', { locale, populate: DEEP_POPULATE }),
    fetchCollection<SoftwareWowHomepageData['services'][number]>('softwarewow-services', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchCollection<SoftwareWowHomepageData['industries'][number]>('softwarewow-industries', { locale, populate: DEEP_POPULATE, sort: 'order:asc' }),
    fetchSingleType<StrapiDivisionHeader>('softwarewow-header', { locale, populate: DEEP_POPULATE }),
    fetchSingleType<StrapiDivisionFooter>('softwarewow-footer', { locale, populate: DEEP_POPULATE }),
  ]);

  return {
    hero,
    whyChooseUs,
    process,
    techStack,
    rfq,
    growthCta,
    services,
    industries,
    header,
    footer,
  };
}

const DIVISION_API_SLUGS: Record<string, string> = {
  wowMarketing: 'wowmarketing',
  wowDesign: 'wowdesign',
  wowIntelligence: 'wowintelligence',
  wowSocial: 'wowsocial',
  wowAccelerate: 'wowaccelerate',
  wowWebsites: 'wowwebsites',
  wowImpact: 'wowimpact',
  wowHost: 'wowhost',
  wowHub: 'wowhub',
  wowEvents: 'wowevents',
};

export async function getDivisionChrome(
  divisionId: string,
  locale: Locale,
): Promise<DivisionChromeData | null> {
  const slug = DIVISION_API_SLUGS[divisionId] ?? divisionId.replace(/([A-Z])/g, (m) => m.toLowerCase());

  const [header, footer, hero] = await Promise.all([
    fetchSingleType<StrapiDivisionHeader>(`${slug}-header`, { locale, populate: DEEP_POPULATE }),
    fetchSingleType<StrapiDivisionFooter>(`${slug}-footer`, { locale, populate: DEEP_POPULATE }),
    fetchSingleType<StrapiSoftwareWowHero>(`${slug}-hero`, { locale, populate: DEEP_POPULATE }),
  ]);

  if (!header && !footer && !hero) return null;

  return { header, footer, hero };
}

export async function getSoftwareWowChrome(locale: Locale): Promise<DivisionChromeData | null> {
  const data = await getSoftwareWowHomepage(locale);
  return {
    header: data.header,
    footer: data.footer,
    hero: data.hero,
  };
}
