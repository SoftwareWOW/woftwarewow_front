'use client';

import type { RefObject } from 'react';

import {
  CMS_IMAGE_SIZES,
  StrapiResponsiveImg,
  useFloatingHeroImageSwap,
} from '@/lib/strapi/cms-section-props';
import type { CmsHeroImage } from '@/lib/strapi/cms-image';
import {
  FLOATING_SIX_HERO_FALLBACKS,
  FLOATING_SIX_SLOT_WIDTHS,
} from '@/lib/strapi/floating-six-hero-constants';

type CmsFloatingSixHeroImagesProps = {
  images?: CmsHeroImage[] | null;
  heroButtonRef: RefObject<HTMLDivElement | null>;
  imagesRef: RefObject<Array<HTMLImageElement | null>>;
  fallbacks?: readonly string[];
  slotWidths?: readonly number[];
  imgClassNames?: readonly string[];
};

const SLOT_CLASS =
  [
    'pointer-events-none absolute left-[2%] top-[14%] z-0 hidden md:block lg:left-[6%] lg:top-[16%] xl:left-[10%]',
    'pointer-events-none absolute right-[2%] top-[12%] z-0 hidden md:block lg:right-[6%] lg:top-[14%] xl:right-[10%]',
    'pointer-events-none absolute left-[1%] top-[46%] z-0 hidden lg:block xl:left-[3%]',
    'pointer-events-none absolute right-[1%] top-[38%] z-0 hidden lg:block xl:right-[3%]',
    'pointer-events-none absolute bottom-[6%] left-[8%] z-0 hidden md:block lg:bottom-[8%] lg:left-[14%] xl:left-[18%]',
    'pointer-events-none absolute bottom-[4%] right-[4%] z-0 hidden md:block lg:bottom-[6%] lg:right-[6%] xl:right-[8%]',
  ] as const;

const IMG_CLASS = [
  'h-[110px] w-[85px] rounded-sm object-cover lg:h-[140px] lg:w-[108px] xl:h-[160px] xl:w-[124px]',
  'h-[100px] w-[82px] rounded-sm object-cover lg:h-[128px] lg:w-[105px] xl:h-[148px] xl:w-[120px]',
  'h-[120px] w-[92px] rounded-sm object-cover xl:h-[148px] xl:w-[114px]',
  'h-[150px] w-[110px] rounded-sm object-cover xl:h-[180px] xl:w-[132px]',
  'h-[95px] w-[74px] rounded-sm object-cover lg:h-[120px] lg:w-[92px] xl:h-[136px] xl:w-[105px]',
  'h-[90px] w-[130px] rounded-sm object-cover lg:h-[112px] lg:w-[164px] xl:h-[128px] xl:w-[188px]',
] as const;

export default function CmsFloatingSixHeroImages({
  images,
  heroButtonRef,
  imagesRef,
  fallbacks = FLOATING_SIX_HERO_FALLBACKS,
  slotWidths = FLOATING_SIX_SLOT_WIDTHS,
  imgClassNames = IMG_CLASS,
}: CmsFloatingSixHeroImagesProps) {
  const imagePool = useFloatingHeroImageSwap(
    images ?? undefined,
    fallbacks,
    6,
    heroButtonRef,
    imagesRef,
    slotWidths,
  );

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    if (imagesRef.current) {
      imagesRef.current[index] = el;
    }
  };

  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((index) =>
        imagePool[index]?.src ? (
          <figure key={index} className={SLOT_CLASS[index]}>
            <StrapiResponsiveImg
              ref={setImageRef(index)}
              image={imagePool[index]}
              fallbackSrc={fallbacks[index]}
              alt={imagePool[index]?.alt ?? ''}
              sizes={CMS_IMAGE_SIZES.decorativeThumb}
              displayWidth={slotWidths[index]}
              className={imgClassNames[index]}
            />
          </figure>
        ) : null,
      )}
    </>
  );
}
