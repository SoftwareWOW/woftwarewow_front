import type {
  CmsFeatureItem,
  CmsGalleryImage,
  CmsHeroImage,
  CmsPageHeroProps,
  CmsProcessSection,
  CmsProcessStep,
  CmsTechnologiesSection,
} from '@/lib/strapi/mappers/page-sections';

/** Optional CMS image overrides for section components. */
export type CmsImageProps = {
  image?: CmsHeroImage | null;
  backgroundImage?: CmsHeroImage | null;
};

/** Optional CMS gallery images for carousel/grid sections. */
export type CmsGalleryProps = {
  images?: CmsGalleryImage[] | null;
};

/** Hero sections: copy from CMS + resolved hero images and background. */
export type CmsHeroComponentProps = CmsPageHeroProps & {
  images?: CmsHeroImage[];
  backgroundImage?: CmsHeroImage;
};

export function cmsImageSrc(cms?: CmsHeroImage | null, fallback?: string): string | undefined {
  return cms?.src ?? fallback;
}

/** Merge CMS feature items onto static defaults by index (title, description, card image). */
export function mergeFeatureItems<T extends { title: string; description?: string; image?: string }>(
  defaults: T[],
  cmsItems?: CmsFeatureItem[] | null,
): T[] {
  if (!cmsItems?.length) return defaults;

  return defaults.map((item, index) => {
    const cms = cmsItems[index];
    if (!cms) return item;

    return {
      ...item,
      title: cms.title || item.title,
      description: cms.description ?? item.description,
      ...(item.image !== undefined || cms.image?.src
        ? { image: cms.image?.src ?? item.image }
        : {}),
    };
  });
}

/** Merge CMS gallery images onto static defaults by index. */
export function mergeGalleryItems<
  T extends { image: string; link?: string; alt?: string; id?: number },
>(defaults: T[], cmsImages?: CmsGalleryImage[] | null): T[] {
  if (!cmsImages?.length) return defaults;

  return defaults.map((item, index) => {
    const cms = cmsImages[index];
    if (!cms?.src) return item;

    return {
      ...item,
      image: cms.src,
      link: cms.href ?? item.link,
      alt: cms.alt ?? item.alt,
    };
  });
}

/** Merge CMS process steps onto static defaults by index. */
export function mergeProcessSteps<T extends { title: string; description?: string }>(
  defaults: T[],
  cmsSteps?: CmsProcessStep[] | null,
): T[] {
  if (!cmsSteps?.length) return defaults;

  return defaults.map((item, index) => {
    const cms = cmsSteps[index];
    if (!cms) return item;

    return {
      ...item,
      title: cms.title || item.title,
      description: cms.description ?? item.description,
    };
  });
}

/** Merge CMS RFQ accordion groups onto static defaults by index. */
export function mergeRfqGroups<
  T extends { id?: number; title: string; subtitle?: string; items: string[] },
>(defaults: T[], cmsGroups?: { title: string; subtitle?: string; items: string[] }[] | null): T[] {
  if (!cmsGroups?.length) return defaults;

  return defaults.map((item, index) => {
    const cms = cmsGroups[index];
    if (!cms) return item;

    return {
      ...item,
      title: cms.title || item.title,
      subtitle: cms.subtitle ?? item.subtitle,
      items: cms.items?.length ? cms.items : item.items,
    };
  });
}

/** Pick CMS section header fields when present, otherwise use defaults. */
export function mergeSectionHeader<
  T extends {
    eyebrow?: string;
    title?: string;
    accentTitle?: string;
    description?: string;
  },
>(defaults: T, cms?: Partial<CmsTechnologiesSection | CmsProcessSection> | null): T {
  if (!cms) return defaults;

  return {
    ...defaults,
    ...(cms.eyebrow ? { eyebrow: cms.eyebrow } : {}),
    ...(cms.title ? { title: cms.title } : {}),
    ...(cms.accentTitle ? { accentTitle: cms.accentTitle } : {}),
    ...(cms.description ? { description: cms.description } : {}),
  };
}
