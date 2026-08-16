'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'

/** Layout: Home-24 HeroV24 — split headline + dual tall images. */
const SaasProductHero = () => {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-[137px] md:pb-16 md:pt-[160px] lg:pb-[88px] xl:pb-[112px] xl:pt-[220px]"
      aria-labelledby="saas-hero-heading"
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
          <RevealWrapper
            as="h1"
            id="saas-hero-heading"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            Turn your SaaS
            <br className="hidden md:block" />
            idea into
            <br className="hidden md:block" />
            <InstrumentText>real product.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
            From product strategy and UX/UI to development and launch, we bring the pieces together to turn your
            software idea into a product people can actually use.
          </RevealWrapper>

          <RevealWrapper className="mt-7 flex flex-col gap-3 md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Build My SaaS Product
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                See What&apos;s Included
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="SaaS product development imagery">
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-sm">
            <img
              src="/images/wow/nav/cards/SaaS Dev 1.png"
              alt="Team collaborating on a SaaS product"
              className="h-auto w-full rounded-radius-sm object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-sm">
            <img
              src="/images/hero-img/business-hero-2.png"
              alt="Product team reviewing launch readiness"
              className="h-auto w-full rounded-radius-sm object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default SaasProductHero
