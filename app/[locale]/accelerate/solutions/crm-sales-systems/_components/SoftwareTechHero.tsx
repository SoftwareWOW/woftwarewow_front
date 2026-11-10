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

const SLOT_DISPLAY_WIDTHS = [124, 120, 105, 188] as const
const SLOT_FALLBACKS = [
  '/images/wow/LandingPageNaveBare/engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc%202.svg',
  '/images/wow/LandingPageNaveBare/Intelligence%202.svg',
  '/images/wow/LandingPageNaveBare/Accelerate%202.svg',
  '/images/wow/LandingPageNaveBare/Website%201%202.svg',
] as const

const SLOT_CLASS_NAMES = [
  'pointer-events-none absolute left-[2%] top-[14%] z-0 hidden md:block lg:left-[6%] lg:top-[16%] xl:left-[10%]',
  'pointer-events-none absolute right-[2%] top-[12%] z-0 hidden md:block lg:right-[6%] lg:top-[14%] xl:right-[10%]',
  'pointer-events-none absolute bottom-[6%] left-[8%] z-0 hidden md:block lg:bottom-[8%] lg:left-[14%] xl:left-[18%]',
  'pointer-events-none absolute bottom-[4%] right-[4%] z-0 hidden md:block lg:bottom-[6%] lg:right-[6%] xl:right-[8%]',
] as const

const SLOT_IMG_CLASS_NAMES = [
  'h-[110px] w-[85px] rounded-sm object-cover lg:h-[140px] lg:w-[108px] xl:h-[160px] xl:w-[124px]',
  'h-[100px] w-[82px] rounded-sm object-cover lg:h-[128px] lg:w-[105px] xl:h-[148px] xl:w-[120px]',
  'h-[95px] w-[74px] rounded-sm object-cover lg:h-[120px] lg:w-[92px] xl:h-[136px] xl:w-[105px]',
  'h-[90px] w-[130px] rounded-sm object-cover lg:h-[112px] lg:w-[164px] xl:h-[128px] xl:w-[188px]',
] as const

/** Layout: Branding-style floating hero images (3 slots) + Home-12 centered copy. */
const SoftwareTechHero = ({
  badgeTitle = 'Software & Technology',
  title = 'Technology built for your',
  italicTitle = 'business.',
  description =
    'Design and build software, apps, and digital products that solve real problems and support long-term growth.',
  images,
  primaryCtaLabel = 'Talk to a Technology Expert',
  primaryCtaHref = '/contact',
}: CmsHeroComponentProps & {
  primaryCtaLabel?: string
  primaryCtaHref?: string
}) => {
  const heroButtonRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  const imagePool = useFloatingHeroImageSwap(
    images,
    SLOT_FALLBACKS,
    4,
    heroButtonRef,
    imagesRef,
    SLOT_DISPLAY_WIDTHS,
    [
      { x: '-50%', y: '-8%' },
      { x: '50%', y: '-8%' },
      { x: '-50%', y: '8%' },
      { x: '50%', y: '8%' },
    ],
  )

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imagesRef.current[index] = el
  }

  return (
    <section
      className="relative overflow-hidden pb-16 pt-[40px] sm:pt-[45px] md:pb-20 md:pt-[50px] lg:pb-28 lg:pt-14 xl:pb-[160px] xl:pt-[60px]"
      aria-labelledby="software-tech-heading"
    >
      {[0, 1, 2, 3].map((index) =>
        imagePool[index]?.src ? (
          <figure key={index} className={SLOT_CLASS_NAMES[index]}>
            <StrapiResponsiveImg
              ref={setImageRef(index)}
              image={imagePool[index]}
              fallbackSrc={SLOT_FALLBACKS[index]}
              alt={imagePool[index]?.alt ?? ''}
              sizes={CMS_IMAGE_SIZES.decorativeThumb}
              displayWidth={SLOT_DISPLAY_WIDTHS[index]}
              className={SLOT_IMG_CLASS_NAMES[index]}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : undefined}
            />
          </figure>
        ) : null,
      )}

      <div className="container relative z-10">
        <HeroGradientAnimationV2 />
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me text-center">
          <h1
            id="software-tech-heading"
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
          <div ref={heroButtonRef}>
            <ButtonComponentList>
              <ButtonComponent href={primaryCtaHref} variant="primary">
                {primaryCtaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SoftwareTechHero
