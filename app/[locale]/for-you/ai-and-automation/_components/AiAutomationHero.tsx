'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimationV2 from '@/components/shared/HeroGradientAnimationV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import {
  CMS_IMAGE_SIZES,
  StrapiResponsiveImg,
  useFloatingHeroImageSwap,
  type CmsHeroComponentProps,
} from '@/lib/strapi/cms-section-props'
import { useRef } from 'react'

const SLOT_DISPLAY_WIDTHS = [124, 120, 188] as const
const SLOT_FALLBACKS = [
  '/images/wow/nav/cards/AI%20Automation%201.png',
  '/images/wow/nav/cards/Intelligent.png',
  '/images/wow/nav/cards/software%26technology.png',
] as const

/** Layout: Branding-style floating hero images (3 slots) + centered copy + dual CTAs. */
const AiAutomationHero = ({
  badgeTitle = 'AI & Automation',
  title = 'Work smarter with',
  italicTitle = 'AI.',
  description =
    'Use AI and automation to remove repetitive work, improve efficiency, and create smarter business systems.',
  images,
}: CmsHeroComponentProps) => {
  const heroButtonRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  const imagePool = useFloatingHeroImageSwap(
    images,
    SLOT_FALLBACKS,
    3,
    heroButtonRef,
    imagesRef,
    SLOT_DISPLAY_WIDTHS,
    [
      { x: '-50%', y: '-8%' },
      { x: '50%', y: '-8%' },
      { x: '0%', y: '-8%' },
    ],
  )

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imagesRef.current[index] = el
  }

  return (
    <section
      className="relative overflow-hidden pb-16 pt-[120px] sm:pt-[135px] md:pb-20 md:pt-[150px] lg:pb-28 lg:pt-44 xl:pb-[160px] xl:pt-[200px]"
      aria-labelledby="ai-automation-heading"
    >
      {imagePool[0]?.src ? (
        <figure className="pointer-events-none absolute left-[2%] top-[14%] z-0 hidden md:block lg:left-[6%] lg:top-[16%] xl:left-[10%]">
          <StrapiResponsiveImg
            ref={setImageRef(0)}
            image={imagePool[0]}
            fallbackSrc={SLOT_FALLBACKS[0]}
            alt={imagePool[0].alt ?? ''}
            sizes={CMS_IMAGE_SIZES.decorativeThumb}
            displayWidth={SLOT_DISPLAY_WIDTHS[0]}
            className="h-[110px] w-[85px] rounded-sm object-contain lg:h-[140px] lg:w-[108px] xl:h-[160px] xl:w-[124px]"
          />
        </figure>
      ) : null}
      {imagePool[1]?.src ? (
        <figure className="pointer-events-none absolute right-[2%] top-[12%] z-0 hidden md:block lg:right-[6%] lg:top-[14%] xl:right-[10%]">
          <StrapiResponsiveImg
            ref={setImageRef(1)}
            image={imagePool[1]}
            fallbackSrc={SLOT_FALLBACKS[1]}
            alt={imagePool[1].alt ?? ''}
            sizes={CMS_IMAGE_SIZES.decorativeThumb}
            displayWidth={SLOT_DISPLAY_WIDTHS[1]}
            className="h-[100px] w-[82px] rounded-sm object-contain lg:h-[128px] lg:w-[105px] xl:h-[148px] xl:w-[120px]"
          />
        </figure>
      ) : null}
      {imagePool[2]?.src ? (
        <figure className="pointer-events-none absolute bottom-[4%] right-[4%] z-0 hidden md:block lg:bottom-[6%] lg:right-[6%] xl:right-[8%]">
          <StrapiResponsiveImg
            ref={setImageRef(2)}
            image={imagePool[2]}
            fallbackSrc={SLOT_FALLBACKS[2]}
            alt={imagePool[2].alt ?? ''}
            sizes={CMS_IMAGE_SIZES.decorativeThumb}
            displayWidth={SLOT_DISPLAY_WIDTHS[2]}
            className="h-[90px] w-[130px] rounded-sm object-contain lg:h-[112px] lg:w-[164px] xl:h-[128px] xl:w-[188px]"
          />
        </figure>
      ) : null}

      <div className="container relative z-10">
        <HeroGradientAnimationV2 />
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me text-center">
          <h1
            id="ai-automation-heading"
            className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            {title}
            <br className="hidden lg:block" />
            {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
          </h1>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-relaxed text-[#808080] md:text-lg">
            {description}
          </p>
        </RevealWrapper>
        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <div
            ref={heroButtonRef}
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Explore AI Opportunities
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                See What We Automate
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AiAutomationHero
