'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'

/** Layout: Home-18 HeroV18 — gradient + split headline/CTAs + right visual. */
const AiAutomationHero = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[137px] md:pb-[90px] md:pt-[180px] lg:pb-[110px] lg:pt-[150px]">
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
            <h1 className="mb-6 mt-5 border-y border-secondary/40 py-6 dark:border-backgroundBody/40 sm:mt-10 md:mb-10 lg:py-10 xl:leading-[1.1]">
              Less manual work. More time for what <InstrumentText>matters.</InstrumentText>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:max-w-[670px] md:text-lg">
              We identify repetitive work across your business and build AI-powered automations that save time, connect
              your tools and keep everyday processes moving.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Automate My Business
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="secondary">
                  See What&apos;s Included
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </RevealWrapper>

          <RevealWrapper as="figure" className="reveal-me w-full max-w-md shrink-0 overflow-hidden rounded-radius-sm lg:max-w-lg">
            <img
              src="/images/wow/foryou/branimage.png"
              alt="AI automation for everyday business workflows"
              className="h-auto w-full rounded-radius-sm object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AiAutomationHero
