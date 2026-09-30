import type { StrapiMedia } from '@/lib/strapi/client';
import {
  mapStrapiMediaToCmsImage,
  resolveCmsImageAlt,
  type CmsHeroImage,
} from '@/lib/strapi/strapi-media';

export type { CmsHeroImage, CmsImageFormatKey, CmsImageFormatVariant } from '@/lib/strapi/strapi-media';

export type CmsImageRef = CmsHeroImage;

/** Use CMS media URL when present, otherwise static fallback path. */
export function resolveCmsImage(
  cmsImage?: { image?: StrapiMedia | null; alt?: string | null } | null,
  fallback?: { path: string; alt?: string },
): CmsImageRef | undefined {
  const media = cmsImage?.image;
  const mapped = media ? mapStrapiMediaToCmsImage(media, cmsImage?.alt) : undefined;
  if (mapped?.src) {
    return mapped;
  }
  if (fallback?.path) {
    return { src: fallback.path, alt: fallback.alt };
  }
  return undefined;
}

export function resolveCmsImageSrc(
  cmsImage?: { image?: StrapiMedia | null; alt?: string | null } | null,
  fallbackPath?: string,
): string | undefined {
  return resolveCmsImage(cmsImage, fallbackPath ? { path: fallbackPath } : undefined)?.src;
}

export { mapStrapiMediaToCmsImage, resolveCmsImageAlt };
