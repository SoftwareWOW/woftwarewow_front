import type { Locale } from '@/i18n/config';
import { fetchCollection, fetchSingleType } from '@/lib/strapi/client';
import {
  ABOUT_PARTNERS_PAGE_POPULATE,
  ABOUT_WHY_US_PAGE_POPULATE,
  AFFILIATE_PAGE_POPULATE,
  BRANDKIT_PAGE_POPULATE,
  buildDeepPopulateFromPageData,
  buildSafePopulateFromPageData,
  buildSuperagencyPageShallowPopulate,
  HELPSUPPORT_PAGE_POPULATE,
  MEET_PAGE_POPULATE,
  QUOTATION_PAGE_POPULATE,
  THINKTANK_PAGE_POPULATE,
  WHITELABEL_PAGE_POPULATE,
  WHY_SMBS_PAGE_POPULATE,
} from '@/lib/strapi/page-populate';
import { pageApiId } from '@/lib/strapi/page-registry';
import type {
  StrapiFooterResourcePage,
  StrapiLegalPage,
  StrapiSuperagencyPage,
} from '@/lib/strapi/types/pages';

const FOOTER_RESOURCE_POPULATE = '*';

/** Pages with a custom /full route — nested media populate handled server-side. */
async function getSuperagencyPageFull(
  apiId: string,
  locale: Locale,
): Promise<StrapiSuperagencyPage | null> {
  return fetchSingleType<StrapiSuperagencyPage>(`${apiId}/full`, {
    locale,
    populate: false,
  });
}

export async function getSuperagencyPage(
  slug: string,
  locale: Locale,
): Promise<StrapiSuperagencyPage | null> {
  const apiId = pageApiId(slug);

  if (slug === 'career' || slug === 'about-why-smbs' || slug === 'about-strategy-centre') {
    const full = await getSuperagencyPageFull(apiId, locale);
    if (full) return full;
  }

  if (slug === 'about-why-smbs') {
    const explicit = await fetchSingleType<StrapiSuperagencyPage>(apiId, {
      locale,
      populate: WHY_SMBS_PAGE_POPULATE,
      logErrors: false,
    });
    if (explicit) return explicit;
  }

  if (slug === 'about-partners') {
    const explicit = await fetchSingleType<StrapiSuperagencyPage>(apiId, {
      locale,
      populate: ABOUT_PARTNERS_PAGE_POPULATE,
      logErrors: false,
    });
    if (explicit) return explicit;
  }

  if (slug === 'about-why-us') {
    const explicit = await fetchSingleType<StrapiSuperagencyPage>(apiId, {
      locale,
      populate: ABOUT_WHY_US_PAGE_POPULATE,
      logErrors: false,
    });
    if (explicit) return explicit;
  }

  const explicitPopulateBySlug: Partial<
    Record<string, Record<string, unknown>>
  > = {
    meet: MEET_PAGE_POPULATE,
    thinktank: THINKTANK_PAGE_POPULATE,
    quotation: QUOTATION_PAGE_POPULATE,
    whitelabel: WHITELABEL_PAGE_POPULATE,
    affiliate: AFFILIATE_PAGE_POPULATE,
    helpsupport: HELPSUPPORT_PAGE_POPULATE,
    brandkit: BRANDKIT_PAGE_POPULATE,
  };

  const explicitPopulate = explicitPopulateBySlug[slug];
  if (explicitPopulate) {
    const explicit = await fetchSingleType<StrapiSuperagencyPage>(apiId, {
      locale,
      populate: explicitPopulate,
      logErrors: false,
    });
    if (explicit) return explicit;
  }

  const shallow = await fetchSingleType<StrapiSuperagencyPage>(apiId, {
    locale,
    populate: buildSuperagencyPageShallowPopulate(),
  });

  if (!shallow) return null;

  const pageRecord = shallow as unknown as Record<string, unknown>;
  const deepPopulate = buildDeepPopulateFromPageData(pageRecord, slug);

  const deep = await fetchSingleType<StrapiSuperagencyPage>(apiId, {
    locale,
    populate: deepPopulate,
    logErrors: false,
  });

  if (deep) return deep;

  const safePopulate = buildSafePopulateFromPageData(pageRecord, slug);
  const safe = await fetchSingleType<StrapiSuperagencyPage>(apiId, {
    locale,
    populate: safePopulate,
    logErrors: false,
  });

  return safe ?? shallow;
}

export async function getFooterResourcePage(
  pageKey: string,
  locale: Locale,
): Promise<StrapiFooterResourcePage | null> {
  const results = await fetchCollection<StrapiFooterResourcePage>(
    'superagency-footer-resource-pages',
    {
      locale,
      populate: FOOTER_RESOURCE_POPULATE,
      filters: { pageKey: { $eq: pageKey } },
    },
  );

  return results[0] ?? null;
}

export async function getLegalPage(
  pageKey: 'privacy' | 'terms',
  locale: Locale,
): Promise<StrapiLegalPage | null> {
  const results = await fetchCollection<StrapiLegalPage>('superagency-legal-pages', {
    locale,
    populate: '*',
    filters: { pageKey: { $eq: pageKey } },
  });

  return results[0] ?? null;
}
