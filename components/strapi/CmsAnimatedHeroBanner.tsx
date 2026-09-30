'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

import { CMS_IMAGE_SIZES, StrapiResponsiveImg } from '@/lib/strapi/cms-section-props';
import type { CmsHeroImage } from '@/lib/strapi/cms-image';

type CmsAnimatedHeroBannerProps = {
  image?: CmsHeroImage | null;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
};

/** Home-06 scroll-scale hero banner with responsive Strapi image. */
export default function CmsAnimatedHeroBanner({
  image,
  fallbackSrc,
  alt,
  className = 'mx-auto w-[97%] rounded-radius-md object-cover sm:w-full',
}: CmsAnimatedHeroBannerProps) {
  const imageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const target = imageRef.current;
      if (!target) return;

      const tween = gsap.to(target, {
        scale: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: target,
          start: 'top 70%',
          end: 'top 0%',
          scrub: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: imageRef },
  );

  return (
    <figure className="mx-auto w-[97%] overflow-hidden rounded-radius-md sm:w-full" ref={imageRef}>
      <StrapiResponsiveImg
        image={image}
        fallbackSrc={fallbackSrc}
        alt={alt}
        sizes={CMS_IMAGE_SIZES.heroBanner}
        displayWidth={1200}
        className={className}
      />
    </figure>
  );
}
