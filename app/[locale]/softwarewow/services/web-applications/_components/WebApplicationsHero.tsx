'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: packages/ai-automation/AiAutomationHero (Home-18 HeroV18) — commit fb75787 */
const WebApplicationsHero = () => {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-[80px] md:pb-[90px] md:pt-[90px] lg:pb-[110px] lg:pt-[100px]"
      aria-labelledby="web-apps-hero-heading"
    >
      <div
        id="hero-gradient-wrapper"
        className="h-fw-full absolute top-1/2 -z-10 w-full -translate-y-1/2 scale-75 blur-[90px]"
        aria-hidden
      >
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          id="hero-gradient"
          className="absolute top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <RevealWrapper className="reveal-me w-full min-w-0 flex-1">
            <SectionLabel className="mb-5">Web Application Development</SectionLabel>
            <h1
              id="web-apps-hero-heading"
              className="mb-6 mt-5 text-[clamp(1.75rem,4.571vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em] sm:mt-10 md:mb-10"
            >
              Web applications built around your <InstrumentText>business.</InstrumentText>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:max-w-[670px] md:text-lg">
              We design and develop secure, scalable web applications that simplify operations, serve customers, and
              support growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-14">
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
            </div>
          </RevealWrapper>

          <RevealWrapper
            as="figure"
            className="reveal-me w-full max-w-md shrink-0 overflow-hidden rounded-radius-sm lg:max-w-lg"
          >
            <img
              src="/images/wow/nav/cards/Softwaerwow.png"
              alt="SoftwareWOW web application interface"
              className="h-auto w-full rounded-radius-sm object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WebApplicationsHero
