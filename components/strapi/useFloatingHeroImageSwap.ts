'use client';

import gsap from 'gsap';
import { useEffect, useMemo, type RefObject } from 'react';

import {
  CMS_IMAGE_SIZES,
  applyStrapiResponsiveToImgElement,
} from '@/lib/strapi/cms-section-props';
import type { CmsHeroImage } from '@/lib/strapi/cms-image';

type Translation = { x: string; y: string };

const DEFAULT_TRANSLATIONS: Translation[] = [
  { x: '-50%', y: '-8%' },
  { x: '50%', y: '-8%' },
  { x: '0%', y: '-8%' },
  { x: '0%', y: '-8%' },
  { x: '-50%', y: '-8%' },
  { x: '0%', y: '-8%' },
];

/** Hover shuffle on hero CTA — keeps Strapi `srcSet` when swapping decorative images. */
export function useFloatingHeroImageSwap(
  images: CmsHeroImage[] | undefined,
  fallbacks: readonly string[],
  slotCount: number,
  buttonRef: RefObject<HTMLDivElement | null>,
  imagesRef: RefObject<Array<HTMLImageElement | null>>,
  displayWidths: readonly number[],
  translations: Translation[] = DEFAULT_TRANSLATIONS,
): CmsHeroImage[] {
  const pool = useMemo(
    () =>
      images?.length
        ? images.slice(0, slotCount)
        : fallbacks.slice(0, slotCount).map((src) => ({ src })),
    [images, fallbacks, slotCount],
  );

  useEffect(() => {
    const shufflablePool = [...pool];
    const decorativeImages = (imagesRef.current ?? []).filter(
      (ref): ref is HTMLImageElement => ref !== null,
    );
    if (!decorativeImages.length) return;

    const originalSrcs = decorativeImages.map((img) => img.src);

    const handleMouseEnter = (): void => {
      const shuffled = [...shufflablePool].sort(() => Math.random() - 0.5);

      decorativeImages.forEach((img, index) => {
        const cmsImage = shuffled[index % shuffled.length]!;
        const translation = translations[index % translations.length]!;

        gsap.to(img, {
          duration: 0.7,
          x: translation.x,
          y: translation.y,
          opacity: 0,
          onComplete: () => {
            applyStrapiResponsiveToImgElement(
              img,
              cmsImage,
              CMS_IMAGE_SIZES.decorativeThumb,
              displayWidths[index % displayWidths.length] ?? 124,
            );
            gsap.set(img, { x: translation.x, y: translation.y, opacity: 0, scale: 0 });
            gsap.to(img, { duration: 0.7, opacity: 1, scale: 1 });
          },
        });
      });
    };

    const handleMouseLeave = (): void => {
      decorativeImages.forEach((img, index) => {
        const translation = translations[index % translations.length]!;
        const cmsImage = pool[index] ?? { src: originalSrcs[index] ?? '' };

        gsap.to(img, {
          duration: 0.7,
          x: translation.x,
          y: translation.y,
          opacity: 0,
          onComplete: () => {
            applyStrapiResponsiveToImgElement(
              img,
              cmsImage,
              CMS_IMAGE_SIZES.decorativeThumb,
              displayWidths[index % displayWidths.length] ?? 124,
            );
            gsap.set(img, { x: '0%', y: '0%', opacity: 0, scale: 0 });
            gsap.to(img, { duration: 0.7, opacity: 1, scale: 1 });
          },
        });
      });
    };

    const buttonElement = buttonRef.current;
    if (!buttonElement) return;

    buttonElement.addEventListener('mouseenter', handleMouseEnter);
    buttonElement.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      buttonElement.removeEventListener('mouseenter', handleMouseEnter);
      buttonElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pool, buttonRef, imagesRef, displayWidths, translations]);

  return pool;
}
