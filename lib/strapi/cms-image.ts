import { getStrapiMediaUrl } from '@/lib/strapi/client';

export type CmsImageRef = {
  src: string;
  alt?: string;
};

/** Use CMS media URL when present, otherwise static fallback path. */
export function resolveCmsImage(
  cmsImage?: { image?: { url?: string } | null; alt?: string | null } | null,
  fallback?: { path: string; alt?: string },
): CmsImageRef | undefined {
  const media = cmsImage?.image;
  const cmsUrl = media?.url ? getStrapiMediaUrl({ url: media.url }) : undefined;
  if (cmsUrl) {
    return { src: cmsUrl, alt: cmsImage?.alt ?? fallback?.alt };
  }
  if (fallback?.path) {
    return { src: fallback.path, alt: fallback.alt };
  }
  return undefined;
}

export function resolveCmsImageSrc(
  cmsImage?: { image?: { url?: string } | null } | null,
  fallbackPath?: string,
): string | undefined {
  return resolveCmsImage(cmsImage, fallbackPath ? { path: fallbackPath } : undefined)?.src;
}
