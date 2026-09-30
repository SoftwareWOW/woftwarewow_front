'use client';

import CmsAnimatedHeroBanner from '@/components/strapi/CmsAnimatedHeroBanner';
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections';

type AnimatedHeroImageProps = {
  image?: CmsHeroImage | null;
  src?: string;
  alt?: string;
};

const FALLBACK_SRC = '/images/wow/nav/cards/Startup%20laiunch%201.png';

/** Layout: Home-06 AnimatedHeroImage — scroll-scale banner. */
export default function AnimatedHeroImage({
  image,
  src,
  alt = 'Founders building a startup with WOW Superagency',
}: AnimatedHeroImageProps) {
  const resolvedImage =
    image?.src ? image : src ? { src, alt } : undefined;

  return (
    <CmsAnimatedHeroBanner
      image={resolvedImage}
      fallbackSrc={FALLBACK_SRC}
      alt={alt}
    />
  );
}
