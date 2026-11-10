'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import CmsFloatingSixHeroImages from '@/components/strapi/CmsFloatingSixHeroImages'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'
import { useRef } from 'react'

/** Layout: BrandingCreativeHero / Home-04 HeroV11 — centered hero + 6 floating decorative images. */
const WebsiteGrowthHero = ({
  badgeTitle = 'Website Growth Engine Package',
  title = 'A website that drives',
  italicTitle = 'growth.',
  description = 'A website designed to attract and convert.',
  images,
}: CmsHeroComponentProps) => {
  const heroButtonRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pb-16 pt-[130px] md:pb-20 md:pt-[160px] lg:pb-28 xl:pb-[160px] xl:pt-[200px]"
    >
      <HeroGradientAnimation />

      <CmsFloatingSixHeroImages images={images} heroButtonRef={heroButtonRef} imagesRef={imagesRef} />

      <div className="container relative z-10">
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h1
            id="website-growth-heading"
            className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            {title}
            <br className="hidden lg:block" />
            {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
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
                Build Your Website
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/meet" variant="secondary">
                Talk to an Expert
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </RevealWrapper>
  )
}

export default WebsiteGrowthHero
