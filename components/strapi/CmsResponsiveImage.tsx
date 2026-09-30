'use client';

import Image, { type ImageProps } from 'next/image';

import { isAllowedNextImageSrc } from '@/lib/strapi/client';
import type { CmsHeroImage } from '@/lib/strapi/cms-image';
import {
  createStrapiImageLoader,
  hasResponsiveStrapiFormats,
  resolveCmsImageDimensions,
} from '@/lib/strapi/strapi-media';

type CmsResponsiveImageProps = {
  image?: CmsHeroImage | null;
  fallbackSrc?: string;
  alt?: string;
  sizes: string;
} & Omit<ImageProps, 'src' | 'alt' | 'loader' | 'sizes'>;

function isLocalAssetSrc(src: string): boolean {
  return src.startsWith('/') && !src.startsWith('//');
}

export default function CmsResponsiveImage({
  image,
  fallbackSrc,
  alt,
  sizes,
  width,
  height,
  fill,
  ...rest
}: CmsResponsiveImageProps) {
  const src = image?.src ?? fallbackSrc;
  if (!src) return null;

  const resolvedAlt = alt ?? image?.alt ?? '';
  const responsive = image ? hasResponsiveStrapiFormats(image) : false;
  const loader = image && responsive ? createStrapiImageLoader(image) : undefined;

  const dimensions = resolveCmsImageDimensions(image ?? undefined);
  const resolvedWidth = width ?? dimensions?.width;
  const resolvedHeight = height ?? dimensions?.height;

  const canUseNextImage =
    isLocalAssetSrc(src) || isAllowedNextImageSrc(src) || Boolean(loader);

  if (!canUseNextImage) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={resolvedAlt} className={rest.className} />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={resolvedAlt}
        width={resolvedWidth}
        height={resolvedHeight}
        className={rest.className}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={resolvedAlt}
        fill
        sizes={sizes}
        loader={loader}
        {...rest}
      />
    );
  }

  if (!resolvedWidth || !resolvedHeight) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={resolvedAlt} className={rest.className} />
    );
  }

  return (
    <Image
      src={src}
      alt={resolvedAlt}
      width={resolvedWidth}
      height={resolvedHeight}
      sizes={sizes}
      loader={loader}
      {...rest}
    />
  );
}
