import type { Locale } from '@/i18n/config';
import type { Metadata } from 'next';
import { getSuperagencyPage } from '@/lib/strapi/fetchers/pages';
import { getSuperagencyTeamMembers } from '@/lib/strapi/fetchers/team-members';
import {
  mapHeroAboutSection,
  mapImageGallery,
  mapPackageOffer,
  mapPageEvents,
  mapPageFaq,
  mapPageHero,
  mapPageImages,
  mapPageProcess,
  mapPageProcessSection,
  mapPageProjects,
  mapPageTeamMembers,
  mapPageTechnologies,
  mapPageTechnologiesSection,
  mapRfqAccordion,
  mapStrapiSeo,
  type CmsFaqItem,
  type CmsFeatureItem,
  type CmsHeroAboutSection,
  type CmsImageGallerySection,
  type CmsPackageOfferSection,
  type CmsPageEventsSection,
  type CmsPageHeroProps,
  type CmsProcessSection,
  type CmsProcessStep,
  type CmsProjectCard,
  type CmsRfqAccordionSection,
  type CmsTeamMember,
  type CmsTechnologiesSection,
} from '@/lib/strapi/mappers/page-sections';
import {
  getComponentForCmsType,
  getPageManifest,
  inferCmsTypeFromSectionValue,
} from '@/lib/strapi/page-registry';
import type {
  StrapiHeroAbout,
  StrapiImageGallery,
  StrapiPageEvents,
  StrapiPageFaq,
  StrapiPageHero,
  StrapiPageImages,
  StrapiPageProcess,
  StrapiPageProjects,
  StrapiPageRfqAccordion,
  StrapiPageSeo,
  StrapiPageTeamMembers,
  StrapiPageTechnologies,
  StrapiPackageOffer,
  StrapiSuperagencyPage,
} from '@/lib/strapi/types/pages';

export type LoadedSuperagencyPage = {
  raw: StrapiSuperagencyPage | null;
  hero: CmsPageHeroProps | null;
  seo: StrapiPageSeo | null;
  technologies: (section?: StrapiPageTechnologies | null) => CmsFeatureItem[] | null;
  technologiesSection: (fieldName: string) => CmsTechnologiesSection | null;
  heroAbout: (fieldName: string) => CmsHeroAboutSection | null;
  process: (section?: StrapiPageProcess | null) => CmsProcessStep[] | null;
  processSection: (fieldName: string) => CmsProcessSection | null;
  packageOffer: (fieldName: string) => CmsPackageOfferSection | null;
  rfqAccordion: (fieldName: string) => CmsRfqAccordionSection | null;
  pageEvents: (fieldName: string) => CmsPageEventsSection | null;
  imageGallery: (fieldName: string) => CmsImageGallerySection | null;
  projects: (section?: StrapiPageProjects | null) => CmsProjectCard[] | null;
  images: (section?: StrapiPageImages | null) => ReturnType<typeof mapPageImages>;
  faq: (section?: StrapiPageFaq | null) => CmsFaqItem[] | null;
  teamMembers: (section?: StrapiPageTeamMembers | null) => CmsTeamMember[] | null;
  field: <T>(name: string) => T | null;
};

export async function loadSuperagencyPage(
  slug: string,
  locale: Locale,
): Promise<LoadedSuperagencyPage> {
  const [raw, globalTeamMembers] = await Promise.all([
    getSuperagencyPage(slug, locale),
    getSuperagencyTeamMembers(locale),
  ]);

  if (process.env.NODE_ENV === 'development') {
    const populatedFields =
      raw ?
        Object.entries(raw)
          .filter(([key, value]) => key !== 'id' && key !== 'documentId' && value != null)
          .map(([key]) => key)
          .join(', ')
      : '';

    console.info(
      `[Strapi] Page "${slug}" (${locale}): ${
        raw ? `loaded (${populatedFields || 'no fields'})` : 'empty — using static fallback'
      }`,
    );
  }

  const field = <T>(name: string) => (raw?.[name] as T | undefined) ?? null;

  return {
    raw,
    hero: mapPageHero(raw?.hero as StrapiPageHero | null | undefined),
    seo: (raw?.seo as StrapiPageSeo | null | undefined) ?? null,
    technologies: (section) => mapPageTechnologies(section),
    technologiesSection: (fieldName) =>
      mapPageTechnologiesSection(field<StrapiPageTechnologies>(fieldName)),
    heroAbout: (fieldName) => mapHeroAboutSection(field<StrapiHeroAbout>(fieldName)),
    process: (section) => mapPageProcess(section),
    processSection: (fieldName) => mapPageProcessSection(field<StrapiPageProcess>(fieldName)),
    packageOffer: (fieldName) => mapPackageOffer(field<StrapiPackageOffer>(fieldName)),
    rfqAccordion: (fieldName) => mapRfqAccordion(field<StrapiPageRfqAccordion>(fieldName)),
    pageEvents: (fieldName) => mapPageEvents(field<StrapiPageEvents>(fieldName)),
    imageGallery: (fieldName) => mapImageGallery(field<StrapiImageGallery>(fieldName)),
    projects: (section) => mapPageProjects(section),
    images: (section) => mapPageImages(section),
    faq: (section) => mapPageFaq(section),
    teamMembers: (section) =>
      mapPageTeamMembers(section) ?? globalTeamMembers,
    field,
  };
}

export function buildSuperagencyPageMetadata(
  cms: LoadedSuperagencyPage,
  fallback: Metadata,
): Metadata {
  return mapStrapiSeo(cms.seo, fallback);
}

export type ResolvedPageSections = Record<string, unknown>;

const PAGE_METADATA_KEYS = new Set([
  'id',
  'documentId',
  'createdAt',
  'updatedAt',
  'publishedAt',
  'locale',
  'hero',
  'seo',
]);

function resolveComponentType(
  fieldName: string,
  value: unknown,
  slug: string,
): string | null {
  const manifestField = getPageManifest(slug)?.fields.find((field) => field.name === fieldName);
  if (manifestField) return manifestField.component;

  const cmsType = inferCmsTypeFromSectionValue(value);
  return cmsType ? getComponentForCmsType(cmsType) : null;
}

function mapSectionByComponent(
  cms: LoadedSuperagencyPage,
  fieldName: string,
  component: string,
): unknown {
  switch (component) {
    case 'sections.page-technologies':
      return cms.technologiesSection(fieldName);
    case 'sections.page-process':
      return cms.processSection(fieldName);
    case 'sections.hero-about':
      return cms.heroAbout(fieldName);
    case 'sections.package-offer':
      return cms.packageOffer(fieldName);
    case 'sections.page-rfq-accordion':
      return cms.rfqAccordion(fieldName);
    case 'sections.page-events':
      return cms.pageEvents(fieldName);
    case 'sections.image-gallery':
      return cms.imageGallery(fieldName);
    case 'sections.page-projects': {
      const projects = cms.projects(cms.field<StrapiPageProjects>(fieldName));
      return projects ? { projects } : null;
    }
    case 'sections.page-images': {
      const images = cms.images(cms.field<StrapiPageImages>(fieldName));
      return images ? { images } : null;
    }
    case 'sections.page-faq': {
      const items = cms.faq(cms.field<StrapiPageFaq>(fieldName));
      return items ? { items } : null;
    }
    case 'sections.page-team-members': {
      const members = cms.teamMembers(cms.field<StrapiPageTeamMembers>(fieldName));
      return members?.length ? { members } : null;
    }
    default:
      return cms.field(fieldName);
  }
}

/** Resolve CMS section props using actual Strapi field names from the loaded page. */
export function resolvePageSections(
  cms: LoadedSuperagencyPage,
  slug: string,
): ResolvedPageSections {
  const sections: ResolvedPageSections = {};
  const raw = cms.raw;
  if (!raw) return sections;

  for (const [fieldName, value] of Object.entries(raw)) {
    if (PAGE_METADATA_KEYS.has(fieldName) || value == null) continue;

    const component = resolveComponentType(fieldName, value, slug);
    if (!component) continue;

    const mapped = mapSectionByComponent(cms, fieldName, component);
    if (mapped != null) {
      sections[fieldName] = mapped;
    }
  }

  return sections;
}
