import {
  getCmsTypeForSectionKey,
  getStrapiSectionKeyConfig,
  type CmsSectionType,
} from '@/lib/strapi/page-registry';

const PAGE_METADATA_KEYS = new Set([
  'id',
  'documentId',
  'createdAt',
  'updatedAt',
  'publishedAt',
  'locale',
]);

/**
 * Only populate repeatable relations. Strapi v5 rejects populate keys that are
 * absent from a component schema (e.g. backgroundImage on techStack).
 */
const CMS_NESTED_POPULATE: Partial<
  Record<Exclude<CmsSectionType, null | 'hero'>, Record<string, unknown>>
> = {
  'page-technologies': {
    items: { populate: '*' },
  },
  'page-process': {
    steps: { populate: '*' },
  },
  'page-images': {
    images: { populate: '*' },
  },
  'image-gallery': {
    images: { populate: '*' },
  },
  'page-team-members': {
    featuredMember: { populate: { image: true } },
    members: { populate: { image: true } },
  },
  'page-rfq-accordion': {
    groups: { populate: '*' },
  },
  'page-projects': {
    projects: { populate: '*' },
  },
  'page-faq': {
    items: { populate: '*' },
  },
  'page-events': {
    events: { populate: '*' },
  },
  'package-offer': {
    features: { populate: '*' },
  },
  'page-partners': {
    partners: { populate: '*' },
  },
  'page-client-logos': {
    logos: { populate: '*' },
  },
  'page-package-list': {
    packages: { populate: '*' },
  },
  'page-career-jobs': {
    jobs: { populate: '*' },
  },
  'page-office-locations': {
    locations: { populate: '*' },
  },
  'page-blog-posts': {
    posts: { populate: '*' },
  },
  'page-stats-banner': {
    stats: { populate: '*' },
  },
  'page-rfq': {
    fields: { populate: '*' },
  },
};

function buildSectionPopulate(sectionValue: unknown): Record<string, unknown> {
  if (!sectionValue || typeof sectionValue !== 'object') return { populate: '*' };

  const section = sectionValue as Record<string, unknown>;
  const sectionKey =
    typeof section.sectionKey === 'string' ? section.sectionKey : undefined;

  if (sectionKey) {
    const strapiConfig = getStrapiSectionKeyConfig(sectionKey);
    if (strapiConfig) return { populate: strapiConfig.populate };

    const cmsType = getCmsTypeForSectionKey(sectionKey);
    if (cmsType) {
      const nested = CMS_NESTED_POPULATE[cmsType];
      if (nested) return { populate: nested };
    }
  }

  if ('body' in section) return { populate: '*' };

  return { populate: '*' };
}

/** Build a deep populate query from a shallow Strapi page payload (populate=*). */
export function buildDeepPopulateFromPageData(
  page: Record<string, unknown>,
): Record<string, unknown> {
  const populate: Record<string, unknown> = {
    hero: { populate: '*' },
    seo: { populate: '*' },
  };

  for (const [fieldName, value] of Object.entries(page)) {
    if (PAGE_METADATA_KEYS.has(fieldName) || fieldName === 'hero' || fieldName === 'seo') {
      continue;
    }

    if (value != null) {
      populate[fieldName] = buildSectionPopulate(value);
    }
  }

  return populate;
}

/**
 * Safe fallback when a targeted deep populate fails validation.
 * Uses populate=* per section — always accepted by Strapi.
 */
export function buildSafePopulateFromPageData(
  page: Record<string, unknown>,
): Record<string, unknown> {
  const populate: Record<string, unknown> = {
    hero: { populate: '*' },
    seo: { populate: '*' },
  };

  for (const [fieldName, value] of Object.entries(page)) {
    if (PAGE_METADATA_KEYS.has(fieldName) || fieldName === 'hero' || fieldName === 'seo') {
      continue;
    }

    if (value != null) {
      populate[fieldName] = { populate: '*' };
    }
  }

  return populate;
}

/** Shallow populate used for the first pass that discovers section field names. */
export function buildSuperagencyPageShallowPopulate(): string {
  return '*';
}
