'use client';

import CmsAnimatedHeroBanner from '@/components/strapi/CmsAnimatedHeroBanner';
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections';

type AnimatedHeroImageProps = {
  image?: CmsHeroImage | null;
  src?: string;
  alt?: string;
};

const FALLBACK_SRC =
  '/images/wow/nav/cards/sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc%201.png';

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
