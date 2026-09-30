'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import {
  CMS_IMAGE_SIZES,
  StrapiResponsiveImg,
  useFloatingHeroImageSwap,
} from '@/lib/strapi/cms-section-props'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'
import { useRef } from 'react'

const HERO_IMAGES = [
  '/images/wow/nav/cards/digital%20transofrmation%201.png',
  '/images/wow/nav/cards/Intelligent.png',
  '/images/wow/nav/cards/Accelerate.png',
  '/images/wow/nav/cards/software%26technology.png',
  '/images/wow/nav/cards/AI%20Automation%201.png',
  '/images/wow/nav/cards/Website.png',
] as const

type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: CmsHeroImage[]
}

const SLOT_DISPLAY_WIDTHS = [124, 120, 114, 132, 105, 188] as const

/** Layout: BrandingCreativeHero / Home-04 HeroV11 — centered hero + 6 floating decorative images. */
const TechnologyHero = ({
  badgeTitle = 'Digital Transformation Package',
  title = 'Build Products People Keep Using.',
  description =
    'We help technology companies turn ideas into scalable products, stronger brands, smarter growth systems, and better digital experiences.',
  images,
}: PageHeroProps) => {
  const heroButtonRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  const imagePool = useFloatingHeroImageSwap(
    images,
    HERO_IMAGES,
    6,
    heroButtonRef,
    imagesRef,
    SLOT_DISPLAY_WIDTHS,
  )

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imagesRef.current[index] = el
  }

  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pb-16 pt-[130px] md:pb-20 md:pt-[160px] lg:pb-28 xl:pb-[160px] xl:pt-[200px]"
      aria-labelledby="technology-hero-heading"
    >
      <HeroGradientAnimation />

      {[0, 1, 2, 3, 4, 5].map((index) => (
        <figure
          key={index}
          className={
            index === 0
              ? 'pointer-events-none absolute left-[2%] top-[14%] z-0 hidden md:block lg:left-[6%] lg:top-[16%] xl:left-[10%]'
              : index === 1
                ? 'pointer-events-none absolute right-[2%] top-[14%] z-0 hidden md:block lg:right-[6%] lg:top-[16%] xl:right-[10%]'
                : index === 2
                  ? 'pointer-events-none absolute left-[1%] top-[46%] z-0 hidden lg:block xl:left-[3%]'
                  : index === 3
                    ? 'pointer-events-none absolute right-[1%] top-[38%] z-0 hidden lg:block xl:right-[3%]'
                    : index === 4
                      ? 'pointer-events-none absolute bottom-[6%] left-[8%] z-0 hidden md:block lg:bottom-[8%] lg:left-[14%] xl:left-[18%]'
                      : 'pointer-events-none absolute bottom-[4%] right-[4%] z-0 hidden md:block lg:bottom-[6%] lg:right-[6%] xl:right-[8%]'
          }
        >
          <StrapiResponsiveImg
            ref={setImageRef(index)}
            image={imagePool[index]}
            fallbackSrc={HERO_IMAGES[index] ?? undefined}
            sizes={CMS_IMAGE_SIZES.decorativeThumb}
            displayWidth={SLOT_DISPLAY_WIDTHS[index]}
            alt=""
            className={
              index === 0
                ? 'h-[110px] w-[85px] rounded-radius-sm object-contain lg:h-[140px] lg:w-[108px] xl:h-[160px] xl:w-[124px]'
                : index === 1
                  ? 'h-[100px] w-[82px] rounded-radius-sm object-contain lg:h-[128px] lg:w-[105px] xl:h-[148px] xl:w-[120px]'
                  : index === 2
                    ? 'h-[120px] w-[92px] rounded-radius-sm object-contain xl:h-[148px] xl:w-[114px]'
                    : index === 3
                      ? 'h-[150px] w-[110px] rounded-radius-sm object-contain xl:h-[180px] xl:w-[132px]'
                      : index === 4
                        ? 'h-[95px] w-[74px] rounded-radius-sm object-contain lg:h-[120px] lg:w-[92px] xl:h-[136px] xl:w-[105px]'
                        : 'h-[90px] w-[130px] rounded-radius-sm object-contain lg:h-[112px] lg:w-[164px] xl:h-[128px] xl:w-[188px]'
            }
          />
        </figure>
      ))}

      <div className="container relative z-10">
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h1
            id="technology-hero-heading"
            className="mx-auto max-w-[18ch] text-center text-[clamp(2rem,4.571vw,4rem)] font-normal leading-[1.15] tracking-[-0.03em] md:max-w-[16ch]"
          >
            {title}
          </h1>
        </RevealWrapper>
        {description ? (
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-[#808080] md:max-w-2xl md:text-lg">
              {description}
            </p>
          </RevealWrapper>
        ) : null}
        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <div ref={heroButtonRef} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Build Your Product
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="#solutions" variant="secondary">
                Explore Solutions
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </RevealWrapper>
  )
}

export default TechnologyHero
