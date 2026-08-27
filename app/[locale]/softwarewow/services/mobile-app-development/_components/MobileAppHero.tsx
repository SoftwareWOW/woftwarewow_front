'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: packages/saas-product-development/SaasProductHero (Home-24 HeroV24) */
const MobileAppHero = () => {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-[80px] md:pb-16 md:pt-[90px] lg:pb-[88px] xl:pb-[112px] xl:pt-[130px]"
      aria-labelledby="mobile-apps-hero-heading"
    >
      <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          id="hero-gradient"
          className="left-0 top-0"
          role="presentation"
        />
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-8 px-6 md:px-14 xl:flex-row xl:justify-between">
        <div className="flex-1">
          <RevealWrapper className="reveal-me mb-5">
            <SectionLabel>Mobile App Development</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            id="mobile-apps-hero-heading"
            className="reveal-me text-[clamp(2rem,4.571vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em]"
          >
            Mobile experiences built to move with your <InstrumentText>users.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
            We design and develop intuitive, scalable mobile apps that connect your business with customers wherever
            they are.
          </RevealWrapper>

          <RevealWrapper className="mt-7 flex flex-col gap-3 md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/portfolio" variant="secondary">
                View Our Work
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="Mobile app development imagery">
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/nav/cards/Softwaerwow.png"
              alt="SoftwareWOW mobile application interface"
              className="h-auto w-full rounded-radius-md object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/nav/cards/software%26technology.png"
              alt="Mobile product experience"
              className="h-auto w-full rounded-radius-md object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default MobileAppHero
