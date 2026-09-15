import type { Locale } from '@/i18n/config';
import { fetchCollection, fetchSingleType } from '@/lib/strapi/client';
import { buildSuperagencyPagePopulate } from '@/lib/strapi/page-populate';
import { pageApiId } from '@/lib/strapi/page-registry';
import type {
  StrapiFooterResourcePage,
  StrapiLegalPage,
  StrapiSuperagencyPage,
} from '@/lib/strapi/types/pages';

const FOOTER_RESOURCE_POPULATE = '*';

export async function getSuperagencyPage(
  slug: string,
  locale: Locale,
): Promise<StrapiSuperagencyPage | null> {
  return fetchSingleType<StrapiSuperagencyPage>(pageApiId(slug), {
    locale,
    populate: buildSuperagencyPagePopulate(slug),
  });
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
