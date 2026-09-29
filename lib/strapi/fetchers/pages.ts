import type { Locale } from '@/i18n/config';
import { fetchCollection, fetchSingleType } from '@/lib/strapi/client';
import {
  ABOUT_PARTNERS_PAGE_POPULATE,
  ABOUT_WHY_US_PAGE_POPULATE,
  AFFILIATE_PAGE_POPULATE,
  BRANDKIT_PAGE_POPULATE,
  CLIENTS_PAGE_POPULATE,
  LOCATIONS_PAGE_POPULATE,
  PARTNERS_PAGE_POPULATE,
  PROFESSIONAL_SERVICES_PAGE_POPULATE,
  RETAIL_AND_ECOMMERCE_PAGE_POPULATE,
  HEALTHCARE_AND_WELLNESS_PAGE_POPULATE,
  BUILD_AND_LAUNCH_PAGE_POPULATE,
  MARKETING_AND_GROWTH_PAGE_POPULATE,
  SOFTWARE_AND_TECHNOLOGY_PAGE_POPULATE,
  SOCIAL_AND_COMMUNITY_PAGE_POPULATE,
  AI_AND_AUTOMATION_PAGE_POPULATE,
  SALES_AND_REVENUE_PAGE_POPULATE,
  BRANDING_AND_CREATIVE_PAGE_POPULATE,
  HOSTING_AND_INFRASTRUCTURE_PAGE_POPULATE,
  LEARNING_AND_EVENTS_PAGE_POPULATE,
  STARTUP_LAUNCH_PAGE_POPULATE,
  DIGITAL_TRANSFORMATION_PAGE_POPULATE,
  AI_AUTOMATION_PACKAGE_PAGE_POPULATE,
  BUSINESS_GROWTH_PAGE_POPULATE,
  BRAND_AUTHORITY_PAGE_POPULATE,
  SAAS_PRODUCT_DEVELOPMENT_PAGE_POPULATE,
  WEBSITE_GROWTH_ENGINE_PAGE_POPULATE,
  SALES_ACCELERATION_PAGE_POPULATE,
  ENTERPRISE_INFRASTRUCTURE_PAGE_POPULATE,
  HOSPITALITY_AND_TOURISM_PAGE_POPULATE,
  FINANCE_AND_REAL_ESTATE_PAGE_POPULATE,
  ORGANIZATIONS_AND_NONPROFITS_PAGE_POPULATE,
  EDUCATION_AND_TRAINING_PAGE_POPULATE,
  TECHNOLOGY_AND_SAAS_PAGE_POPULATE,
  PORTFOLIO_PAGE_POPULATE,
  PORTFOLIO_RECENT_PAGE_POPULATE,
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
    portfolio: PORTFOLIO_PAGE_POPULATE,
    'portfolio-recent': PORTFOLIO_RECENT_PAGE_POPULATE,
    clients: CLIENTS_PAGE_POPULATE,
    partners: PARTNERS_PAGE_POPULATE,
    locations: LOCATIONS_PAGE_POPULATE,
    'professional-services': PROFESSIONAL_SERVICES_PAGE_POPULATE,
    'retail-and-ecommerce': RETAIL_AND_ECOMMERCE_PAGE_POPULATE,
    'healthcare-and-wellness': HEALTHCARE_AND_WELLNESS_PAGE_POPULATE,
    'hospitality-and-tourism': HOSPITALITY_AND_TOURISM_PAGE_POPULATE,
    'finance-and-real-estate': FINANCE_AND_REAL_ESTATE_PAGE_POPULATE,
    'organizations-and-nonprofits': ORGANIZATIONS_AND_NONPROFITS_PAGE_POPULATE,
    'education-and-training': EDUCATION_AND_TRAINING_PAGE_POPULATE,
    'technology-and-saas': TECHNOLOGY_AND_SAAS_PAGE_POPULATE,
    'build-and-launch': BUILD_AND_LAUNCH_PAGE_POPULATE,
    'marketing-and-growth': MARKETING_AND_GROWTH_PAGE_POPULATE,
    'software-and-technology': SOFTWARE_AND_TECHNOLOGY_PAGE_POPULATE,
    'social-and-community': SOCIAL_AND_COMMUNITY_PAGE_POPULATE,
    'ai-and-automation': AI_AND_AUTOMATION_PAGE_POPULATE,
    'sales-and-revenue': SALES_AND_REVENUE_PAGE_POPULATE,
    'branding-and-creative': BRANDING_AND_CREATIVE_PAGE_POPULATE,
    'hosting-and-infrastructure': HOSTING_AND_INFRASTRUCTURE_PAGE_POPULATE,
    'learning-and-events': LEARNING_AND_EVENTS_PAGE_POPULATE,
    'startup-launch': STARTUP_LAUNCH_PAGE_POPULATE,
    'digital-transformation': DIGITAL_TRANSFORMATION_PAGE_POPULATE,
    'ai-automation': AI_AUTOMATION_PACKAGE_PAGE_POPULATE,
    'business-growth': BUSINESS_GROWTH_PAGE_POPULATE,
    'brand-authority': BRAND_AUTHORITY_PAGE_POPULATE,
    'saas-product-development': SAAS_PRODUCT_DEVELOPMENT_PAGE_POPULATE,
    'website-growth-engine': WEBSITE_GROWTH_ENGINE_PAGE_POPULATE,
    'sales-acceleration': SALES_ACCELERATION_PAGE_POPULATE,
    'enterprise-infrastructure': ENTERPRISE_INFRASTRUCTURE_PAGE_POPULATE,
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
