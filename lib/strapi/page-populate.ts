import { getHeroImagesForPage } from '@/lib/strapi/hero-image-manifest';
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

const HERO_IMAGES_POPULATE = {
  images: { populate: { image: true } },
};

function buildHeroPopulate(hero: unknown, slug?: string): Record<string, unknown> {
  const manifestLayout = slug ? getHeroImagesForPage(slug).layout : undefined;
  const needsHeroImages =
    (manifestLayout !== undefined && manifestLayout !== 'none') ||
    (hero && typeof hero === 'object' && 'images' in hero);

  if (needsHeroImages) {
    return { populate: HERO_IMAGES_POPULATE };
  }

  return { populate: '*' };
}

/** Explicit populate for pages that need nested hero + page-images media. */
export const WHY_SMBS_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
  smbGallery: { populate: { images: { populate: { image: true } } } },
};

const PAGE_SECTION_IMAGE_POPULATE = {
  image: { populate: { image: true } },
};

/** Explicit populate for about/partners — hero side images + section media. */
export const ABOUT_PARTNERS_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
  partnerCategories: { populate: PAGE_SECTION_IMAGE_POPULATE },
  mutualGrowth: { populate: PAGE_SECTION_IMAGE_POPULATE },
};

const PAGE_PROCESS_POPULATE = {
  steps: { populate: '*' },
  image: { populate: { image: true } },
};

/** Explicit populate for about/why-us — hero images + process sections with media. */
export const ABOUT_WHY_US_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
  strategyToResults: { populate: PAGE_PROCESS_POPULATE },
  builtAroundBusiness: { populate: PAGE_PROCESS_POPULATE },
};

const FAQ_SECTION_POPULATE = {
  items: { populate: '*' },
};

const PAGE_TECHNOLOGIES_POPULATE = {
  items: { populate: { image: { populate: { image: true } } } },
  image: { populate: { image: true } },
  backgroundImage: { populate: { image: true } },
};

/** Explicit populate for /meet — hero, seo, FAQ items. */
export const MEET_PAGE_POPULATE = {
  hero: { populate: '*' },
  seo: { populate: '*' },
  meetFaq: { populate: FAQ_SECTION_POPULATE },
};

/** Explicit populate for /thinktank — hero, seo, FAQ items. */
export const THINKTANK_PAGE_POPULATE = {
  hero: { populate: '*' },
  seo: { populate: '*' },
  thinktankFaq: { populate: FAQ_SECTION_POPULATE },
};

/** Explicit populate for /quotation — hero + seo. */
export const QUOTATION_PAGE_POPULATE = {
  hero: { populate: '*' },
  seo: { populate: '*' },
};

/** Explicit populate for /whitelabel — hero image, capabilities, how-we-partner. */
export const WHITELABEL_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
  capabilities: { populate: PAGE_TECHNOLOGIES_POPULATE },
  howWePartner: { populate: PAGE_PROCESS_POPULATE },
};

/** Explicit populate for /affiliate — hero images + seo. */
export const AFFILIATE_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
};

/** Explicit populate for /helpsupport — hero + seo. */
export const HELPSUPPORT_PAGE_POPULATE = {
  hero: { populate: '*' },
  seo: { populate: '*' },
};

/** Explicit populate for /brandkit — logos preview images + visual style process. */
export const BRANDKIT_PAGE_POPULATE = {
  hero: { populate: '*' },
  seo: { populate: '*' },
  brandKitLogos: {
    populate: {
      items: { populate: { previewImage: { populate: { image: true } } } },
    },
  },
  brandVisualStyle: { populate: PAGE_PROCESS_POPULATE },
};

const PAGE_PROJECTS_SECTION_POPULATE = {
  filterCategories: true,
  projects: {
    populate: {
      thumbnail: true,
      portfolioCategories: true,
    },
  },
};

/** Explicit populate for /portfolio — featured + explore projects, impact steps. */
export const PORTFOLIO_PAGE_POPULATE = {
  hero: { populate: '*' },
  seo: { populate: '*' },
  featuredWork: { populate: PAGE_PROJECTS_SECTION_POPULATE },
  exploreWork: { populate: PAGE_PROJECTS_SECTION_POPULATE },
  howWeCreateImpact: { populate: PAGE_PROCESS_POPULATE },
};

/** Explicit populate for /portfolio/recent — hero, seo, optional explore section. */
export const PORTFOLIO_RECENT_PAGE_POPULATE = {
  hero: { populate: '*' },
  seo: { populate: '*' },
  exploreWork: { populate: PAGE_PROJECTS_SECTION_POPULATE },
};

/** Explicit populate for /clients — hero gallery + client story projects. */
export const CLIENTS_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
  clientStories: {
    populate: {
      projects: { populate: { thumbnail: true } },
    },
  },
};

/** Explicit populate for /partners — hero, how we partner, why partner section. */
export const PARTNERS_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
  howWePartner: { populate: { steps: true } },
  whyPartnerWithWow: {
    populate: {
      items: true,
      image: { populate: { image: true } },
    },
  },
};

/** Explicit populate for /locations — hero gallery + office locations. */
export const LOCATIONS_PAGE_POPULATE = {
  hero: { populate: HERO_IMAGES_POPULATE },
  seo: { populate: '*' },
  locationsPresence: {
    populate: {
      locations: { populate: '*' },
    },
  },
};

/**
 * Only populate repeatable relations. Strapi v5 rejects populate keys that are
 * absent from a component schema (e.g. backgroundImage on techStack).
 */
const CMS_NESTED_POPULATE: Partial<
  Record<Exclude<CmsSectionType, null | 'hero'>, Record<string, unknown>>
> = {
  'page-technologies': PAGE_TECHNOLOGIES_POPULATE,
  'page-process': PAGE_PROCESS_POPULATE,
  'page-images': {
    images: { populate: { image: true } },
  },
  'image-gallery': {
    images: { populate: { image: true } },
  },
  'page-team-members': {
    featuredMember: { populate: { image: true, socialLinks: true } },
    members: { populate: { image: true, socialLinks: true } },
  },
  'page-rfq-accordion': {
    groups: { populate: '*' },
  },
  'page-projects': {
    filterCategories: true,
    projects: {
      populate: {
        thumbnail: true,
        portfolioCategories: true,
      },
    },
  },
  'page-client-stories': {
    projects: {
      populate: {
        thumbnail: true,
      },
    },
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
  'page-section-image': PAGE_SECTION_IMAGE_POPULATE,
  'page-client-logos': {
    clientLogos: { populate: '*' },
  },
  'page-package-list': {
    items: { populate: { image: { populate: '*' } } },
  },
  'page-portfolio-explorer': {
    filterGroups: { populate: { projects: { populate: '*' } } },
  },
  'faq-list': {
    items: { populate: '*' },
  },
  'brand-kit-logos': {
    items: { populate: { previewImage: { populate: '*' } } },
  },
  'page-career-jobs': {
    jobs: {
      fields: [
        'title',
        'slug',
        'description',
        'tags',
        'department',
        'employment',
        'location',
        'order',
      ],
    },
  },
  'page-career-community': {
    avatars: { populate: { image: true } },
    teamImage: { populate: { image: true } },
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
  slug?: string,
): Record<string, unknown> {
  const populate: Record<string, unknown> = {
    hero: buildHeroPopulate(page.hero, slug),
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
  slug?: string,
): Record<string, unknown> {
  const populate: Record<string, unknown> = {
    hero: buildHeroPopulate(page.hero, slug),
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
