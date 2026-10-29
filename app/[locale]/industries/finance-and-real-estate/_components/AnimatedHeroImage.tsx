'use client';

import CmsAnimatedHeroBanner from '@/components/strapi/CmsAnimatedHeroBanner';
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections';

type AnimatedHeroImageProps = {
  image?: CmsHeroImage | null;
  src?: string;
  alt?: string;
};

const FALLBACK_SRC =
  '/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg';

/** Layout: Home-06 AnimatedHeroImage — scroll-scale banner. */
export default function AnimatedHeroImage({
  image,
  src,
  alt = 'Finance and real estate growth dashboard',
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
