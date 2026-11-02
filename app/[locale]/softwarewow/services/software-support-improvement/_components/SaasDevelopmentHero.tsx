'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import AnimatedSaasHeroImage from './AnimatedSaasHeroImage'

/** Layout: homepage-06/HeroV6 — centered hero + scroll-scale product image + dual CTAs. */
const SaasDevelopmentHero = () => {
  return (
    <RevealWrapper as="section" className="relative overflow-hidden" aria-labelledby="software-support-hero-heading">
      <div className="relative overflow-hidden pb-12 pt-6 sm:pb-28 sm:pt-8 md:pt-10 lg:pb-[120px] lg:pt-12">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="text-center">
            <SectionLabel className="mb-5">Software Support &amp; Improvement</SectionLabel>
            <h1 id="software-support-hero-heading" className="font-light">
              Great software deserves to
              <br />
              <InstrumentText>keep getting better.</InstrumentText>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#808080] md:mt-8 md:text-lg">
              Your software doesn&apos;t stop evolving after launch. We help you maintain, optimize, and improve the
              applications your business relies on—keeping them reliable, secure, and ready for what&apos;s next.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-14">
              <ButtonComponentList className="flex justify-center" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary" size="sm">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex justify-center" itemClassName="block">
                <ButtonComponent href="/portfolio" variant="secondary" size="sm">
                  View Our Work
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </RevealWrapper>
        </div>
      </div>
      <AnimatedSaasHeroImage />
    </RevealWrapper>
  )
}

export default SaasDevelopmentHero
