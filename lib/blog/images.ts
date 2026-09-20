import { getStrapiMediaUrl, type StrapiMedia } from '@/lib/strapi/client';

/** Only Strapi-uploaded media — no static fallbacks. */
export function resolveBlogPostImage(media?: StrapiMedia | null): string | undefined {
  return getStrapiMediaUrl(media ?? undefined);
}

export function normalizeBlogBody(body?: string | null): string {
  if (!body?.trim()) return '';
  return body.replace(/\r\n/g, '\n');
}
