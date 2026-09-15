import type { Locale } from '@/i18n/config';
import type { Metadata } from 'next';
import { getSuperagencyPage } from '@/lib/strapi/fetchers/pages';
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
import { getPageManifest } from '@/lib/strapi/page-registry';
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
  const raw = await getSuperagencyPage(slug, locale);

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
    teamMembers: (section) => mapPageTeamMembers(section),
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

/** Resolve all CMS section props for a page slug from the page registry manifest. */
export function resolvePageSections(
  cms: LoadedSuperagencyPage,
  slug: string,
): ResolvedPageSections {
  const manifest = getPageManifest(slug);
  if (!manifest) return {};

  const sections: ResolvedPageSections = {};

  for (const field of manifest.fields) {
    switch (field.component) {
      case 'sections.page-technologies':
        sections[field.name] = cms.technologiesSection(field.name);
        break;
      case 'sections.page-process':
        sections[field.name] = cms.processSection(field.name);
        break;
      case 'sections.hero-about':
        sections[field.name] = cms.heroAbout(field.name);
        break;
      case 'sections.package-offer':
        sections[field.name] = cms.packageOffer(field.name);
        break;
      case 'sections.page-rfq-accordion':
        sections[field.name] = cms.rfqAccordion(field.name);
        break;
      case 'sections.page-events':
        sections[field.name] = cms.pageEvents(field.name);
        break;
      case 'sections.image-gallery':
        sections[field.name] = cms.imageGallery(field.name);
        break;
      case 'sections.page-projects': {
        const projects = cms.projects(
          cms.field<StrapiPageProjects>(field.name),
        );
        sections[field.name] = projects ? { projects } : null;
        break;
      }
      case 'sections.page-images': {
        const images = cms.images(cms.field<StrapiPageImages>(field.name));
        sections[field.name] = images ? { images } : null;
        break;
      }
      case 'sections.page-faq': {
        const items = cms.faq(cms.field<StrapiPageFaq>(field.name));
        sections[field.name] = items ? { items } : null;
        break;
      }
      case 'sections.page-team-members': {
        const members = cms.teamMembers(
          cms.field<StrapiPageTeamMembers>(field.name),
        );
        sections[field.name] = members ? { members } : null;
        break;
      }
      default:
        sections[field.name] = cms.field(field.name);
        break;
    }
  }

  return sections;
}
