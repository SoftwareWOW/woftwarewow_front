import type { ImageLoader } from 'next/image';

import {
  getStrapiMediaUrl,
  type StrapiMedia,
  type StrapiMediaFormatKey,
  type StrapiMediaFormatVariant,
  resolveStrapiUploadUrl,
} from '@/lib/strapi/client';

export type CmsImageFormatKey = StrapiMediaFormatKey;

export type CmsImageFormatVariant = StrapiMediaFormatVariant;

export type CmsHeroImage = {
  /** Default URL for non-responsive fallbacks (CSS backgrounds, legacy `cmsImageSrc`). */
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  formats?: Partial<Record<CmsImageFormatKey, CmsImageFormatVariant>>;
  original?: CmsImageFormatVariant;
};

const FORMAT_ORDER: CmsImageFormatKey[] = ['thumbnail', 'small', 'medium', 'large'];

function mapFormatVariant(
  variant?: { url?: string; width?: number; height?: number } | null,
): CmsImageFormatVariant | undefined {
  const path = variant?.url?.trim();
  if (!path) return undefined;

  const url = resolveStrapiUploadUrl(path);
  if (!url) return undefined;

  return {
    url,
    ...(variant?.width != null ? { width: variant.width } : {}),
    ...(variant?.height != null ? { height: variant.height } : {}),
  };
}

function collectVariants(image: Pick<CmsHeroImage, 'formats' | 'original'>): CmsImageFormatVariant[] {
  const variants: CmsImageFormatVariant[] = [];

  for (const key of FORMAT_ORDER) {
    const variant = image.formats?.[key];
    if (variant?.url) variants.push(variant);
  }

  if (image.original?.url) {
    const seen = new Set(variants.map((item) => item.url));
    if (!seen.has(image.original.url)) {
      variants.push(image.original);
    }
  }

  return variants.sort((a, b) => (a.width ?? 0) - (b.width ?? 0));
}

/** Pick the smallest Strapi variant whose width is >= requestedWidth; original only when needed. */
export function pickStrapiUrlForWidth(
  image: Pick<CmsHeroImage, 'formats' | 'original' | 'src'>,
  requestedWidth: number,
): string {
  const safeWidth = Math.max(1, Math.round(requestedWidth));
  const variants = collectVariants(image);

  if (!variants.length) {
    return image.src;
  }

  const withKnownWidth = variants.filter((variant) => (variant.width ?? 0) > 0);
  if (withKnownWidth.length) {
    const sufficient = withKnownWidth.find((variant) => (variant.width ?? 0) >= safeWidth);
    if (sufficient) return sufficient.url;

    return withKnownWidth[withKnownWidth.length - 1]!.url;
  }

  const tierIndex = safeWidth <= 160 ? 0 : safeWidth <= 480 ? 1 : safeWidth <= 960 ? 2 : 3;
  const byTier = FORMAT_ORDER.map((key) => image.formats?.[key]).filter(
    (variant): variant is CmsImageFormatVariant => Boolean(variant?.url),
  );

  if (byTier.length) {
    const index = Math.min(tierIndex, byTier.length - 1);
    return byTier[index]!.url;
  }

  return image.original?.url ?? image.src;
}

export function createStrapiImageLoader(
  image: Pick<CmsHeroImage, 'formats' | 'original' | 'src'>,
): ImageLoader {
  const hasFormats =
    Boolean(image.formats && Object.keys(image.formats).length) || Boolean(image.original?.url);

  if (!hasFormats) {
    return ({ src }) => src;
  }

  return ({ width }) => pickStrapiUrlForWidth(image, width);
}

export function hasResponsiveStrapiFormats(
  image?: Pick<CmsHeroImage, 'formats' | 'original'> | null,
): boolean {
  if (!image) return false;
  if (image.original?.url) return true;
  return Boolean(image.formats && Object.values(image.formats).some((variant) => variant?.url));
}

export function resolveCmsImageAlt(
  image?: Pick<CmsHeroImage, 'alt'> | null,
  wrapperAlt?: string | null,
  mediaAlternativeText?: string | null,
): string {
  const fromWrapper = wrapperAlt?.trim();
  if (fromWrapper) return fromWrapper;

  const fromImage = image?.alt?.trim();
  if (fromImage) return fromImage;

  return mediaAlternativeText?.trim() ?? '';
}

export function resolveCmsImageDimensions(
  image?: Pick<CmsHeroImage, 'width' | 'height' | 'original' | 'formats'> | null,
): { width: number; height: number } | undefined {
  if (image?.width && image?.height) {
    return { width: image.width, height: image.height };
  }

  if (image?.original?.width && image?.original?.height) {
    return { width: image.original.width, height: image.original.height };
  }

  const variants = collectVariants(image ?? {});
  const largest = variants[variants.length - 1];
  if (largest?.width && largest?.height) {
    return { width: largest.width, height: largest.height };
  }

  return undefined;
}

/** Map Strapi media (+ optional wrapper alt) to a CMS image with all format URLs preserved. */
export function mapStrapiMediaToCmsImage(
  media?: StrapiMedia | null,
  wrapperAlt?: string | null,
): CmsHeroImage | undefined {
  if (!media?.url?.trim()) return undefined;

  const formats: Partial<Record<CmsImageFormatKey, CmsImageFormatVariant>> = {};
  for (const key of FORMAT_ORDER) {
    const mapped = mapFormatVariant(media.formats?.[key] ?? undefined);
    if (mapped) formats[key] = mapped;
  }

  const originalPath = media.url.trim();
  const originalUrl = resolveStrapiUploadUrl(originalPath);
  if (!originalUrl) return undefined;

  const original: CmsImageFormatVariant = {
    url: originalUrl,
    ...(media.width != null ? { width: media.width } : {}),
    ...(media.height != null ? { height: media.height } : {}),
  };

  const cmsImage: CmsHeroImage = {
    src: pickStrapiUrlForWidth({ formats, original, src: originalUrl }, 960),
    alt: resolveCmsImageAlt(undefined, wrapperAlt, media.alternativeText),
    ...(media.width != null ? { width: media.width } : {}),
    ...(media.height != null ? { height: media.height } : {}),
    ...(Object.keys(formats).length ? { formats } : {}),
    original,
  };

  return cmsImage;
}

/** Legacy single-URL helper — prefers responsive formats over original. */
export function resolveStrapiMediaSrc(media?: StrapiMedia | null): string | undefined {
  return mapStrapiMediaToCmsImage(media)?.src ?? getStrapiMediaUrl(media ?? undefined);
}

/** Build a width-based `srcSet` from Strapi format variants. */
export function buildStrapiSrcSet(
  image: Pick<CmsHeroImage, 'formats' | 'original' | 'src'>,
): string | undefined {
  const variants = collectVariants(image).filter(
    (variant) => variant.url && (variant.width ?? 0) > 0,
  );
  if (variants.length < 2) return undefined;

  return variants.map((variant) => `${variant.url} ${variant.width}w`).join(', ');
}
