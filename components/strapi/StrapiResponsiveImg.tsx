'use client';

import { forwardRef } from 'react';

import type { CmsHeroImage } from '@/lib/strapi/cms-image';
import { buildStrapiSrcSet, pickStrapiUrlForWidth } from '@/lib/strapi/strapi-media';

export type StrapiResponsiveImgProps = {
  image?: CmsHeroImage | null;
  fallbackSrc?: string;
  alt?: string;
  sizes: string;
  /** Used to pick the default `src` when `srcSet` is present. */
  displayWidth?: number;
  className?: string;
};

function resolveImage(
  image?: CmsHeroImage | null,
  fallbackSrc?: string,
): CmsHeroImage | undefined {
  if (image?.src) return image;
  if (fallbackSrc) return { src: fallbackSrc };
  return undefined;
}

/** Native `<img>` with Strapi `srcSet` — supports refs (GSAP / hover swap). */
const StrapiResponsiveImg = forwardRef<HTMLImageElement, StrapiResponsiveImgProps>(
  function StrapiResponsiveImg(
    { image, fallbackSrc, alt, sizes, displayWidth = 640, className },
    ref,
  ) {
    const resolved = resolveImage(image, fallbackSrc);
    if (!resolved?.src) return null;

    const src = pickStrapiUrlForWidth(resolved, displayWidth);
    const srcSet = buildStrapiSrcSet(resolved);

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={src}
        {...(srcSet ? { srcSet, sizes } : {})}
        alt={alt ?? resolved.alt ?? ''}
        className={className}
      />
    );
  },
);

export default StrapiResponsiveImg;

/** Apply responsive Strapi URLs after scripts change `img.src` (e.g. hero shuffle). */
export function applyStrapiResponsiveToImgElement(
  element: HTMLImageElement,
  image: CmsHeroImage,
  sizes: string,
  displayWidth = 640,
): void {
  element.src = pickStrapiUrlForWidth(image, displayWidth);
  const srcSet = buildStrapiSrcSet(image);
  if (srcSet) {
    element.srcset = srcSet;
    element.sizes = sizes;
  } else {
    element.removeAttribute('srcset');
    element.removeAttribute('sizes');
  }
}
