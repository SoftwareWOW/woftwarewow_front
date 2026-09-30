import { getStrapiMediaUrl, type StrapiMedia } from '@/lib/strapi/client';
import { mapStrapiMediaToCmsImage, type CmsHeroImage } from '@/lib/strapi/strapi-media';

/** Strapi media with all responsive formats preserved. */
export function resolveBlogPostCmsImage(media?: StrapiMedia | null): CmsHeroImage | undefined {
  return mapStrapiMediaToCmsImage(media ?? undefined);
}

/** Only Strapi-uploaded media — no static fallbacks. */
export function resolveBlogPostImage(media?: StrapiMedia | null): string | undefined {
  return mapStrapiMediaToCmsImage(media ?? undefined)?.src ?? getStrapiMediaUrl(media ?? undefined);
}

export function normalizeBlogBody(body?: string | null): string {
  if (!body?.trim()) return '';
  return body.replace(/\r\n/g, '\n');
}
