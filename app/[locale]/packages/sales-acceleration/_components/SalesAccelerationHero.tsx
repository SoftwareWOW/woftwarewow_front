'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-18 HeroV18 — gradient + split headline/CTAs + right visual. */
const SalesAccelerationHero = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[80px] md:pb-[90px] md:pt-[90px] lg:pb-[110px] lg:pt-[100px]">
      <div
        id="hero-gradient-wrapper"
        className="h-fw-full absolute top-1/2 -z-10 w-full -translate-y-1/2 scale-75 blur-[90px]"
      >
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          id="hero-gradient"
          className="absolute top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <RevealWrapper className="reveal-me w-full min-w-0 flex-1">
            <SectionLabel className="mb-4">Sales Acceleration</SectionLabel>
            <h1 className="mb-6 mt-5 text-[clamp(1.75rem,4.571vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em] sm:mt-10 md:mb-10">
              Turn more opportunities into <InstrumentText>revenue.</InstrumentText>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:max-w-[670px] md:text-lg">
              Build a smarter sales system for generating leads, improving follow-up, and increasing conversion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Accelerate Your Sales
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/meet" variant="secondary">
                  Talk to an Expert
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </RevealWrapper>

          <RevealWrapper as="figure" className="reveal-me w-full max-w-md shrink-0 overflow-hidden rounded-radius-sm lg:max-w-lg">
            <img
              src="/images/wow/nav/cards/Sales Acceleration 1.png"
              alt="Sales acceleration from lead to revenue"
              className="h-auto w-full rounded-radius-sm object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default SalesAccelerationHero
