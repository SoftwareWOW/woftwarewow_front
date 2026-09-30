'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import CmsFloatingSixHeroImages from '@/components/strapi/CmsFloatingSixHeroImages'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { type CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'
import { useRef } from 'react'

const HERO_IMAGES = [
  '/images/wow/Hero/project/case-study/ccg.png',
  '/images/wow/Hero/project/case-study/davinci.png',
  '/images/wow/Hero/project/case-study/InityInc.png',
  '/images/wow/Hero/project/case-study/yodoner.png',
  '/images/wow/Hero/project/case-study/smartek.png',
  '/images/wow/Hero/project/case-study/creshendo.png',
] as const

const CLIENTS_IMG_CLASS = [
  'h-[110px] w-[85px] rounded-radius-sm object-cover lg:h-[140px] lg:w-[108px] xl:h-[160px] xl:w-[124px]',
  'h-[100px] w-[82px] rounded-radius-sm object-cover lg:h-[128px] lg:w-[105px] xl:h-[148px] xl:w-[120px]',
  'h-[120px] w-[92px] rounded-radius-sm object-cover shadow-sm xl:h-[148px] xl:w-[114px]',
  'h-[150px] w-[110px] rounded-radius-sm object-cover shadow-sm xl:h-[180px] xl:w-[132px]',
  'h-[95px] w-[74px] rounded-radius-sm object-cover shadow-sm lg:h-[120px] lg:w-[92px] xl:h-[136px] xl:w-[105px]',
  'h-[90px] w-[130px] rounded-radius-sm object-cover shadow-sm lg:h-[112px] lg:w-[164px] xl:h-[128px] xl:w-[188px]',
] as const

/** Layout: industries/technology-and-saas/TechnologyHero — centered hero + 6 floating decorative images. */
const ClientsHero = ({
  badgeTitle = 'OUR CLIENTS',
  title = 'Great work starts with great partnerships.',
  description =
    'We work with ambitious businesses to solve meaningful challenges and create stronger foundations for growth.',
  images,
}: CmsHeroComponentProps) => {
  const heroButtonRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pb-16 pt-[130px] md:pb-20 md:pt-[160px] lg:pb-28 xl:pb-[160px] xl:pt-[200px]"
      aria-labelledby="clients-hero-heading"
    >
      <HeroGradientAnimation />

      <CmsFloatingSixHeroImages
        images={images}
        heroButtonRef={heroButtonRef}
        imagesRef={imagesRef}
        fallbacks={HERO_IMAGES}
        imgClassNames={CLIENTS_IMG_CLASS}
      />

      <div className="container relative z-10">
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h1
            id="clients-hero-heading"
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
              <ButtonComponent href="#clients" variant="primary">
                Explore Our Clients
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </RevealWrapper>
  )
}

export default ClientsHero
