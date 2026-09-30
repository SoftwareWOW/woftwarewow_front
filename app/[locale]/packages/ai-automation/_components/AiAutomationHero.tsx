'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-18 HeroV18 — gradient + split headline/CTAs + right visual. */
const AiAutomationHero = ({
  badgeTitle = 'AI Automation Package',
  title = 'Less manual work.',
  italicTitle = 'More impact.',
  description =
    'Less manual work. More time for what matters — practical AI automation for growing businesses.',
  images,
}: CmsHeroComponentProps) => {
  const heroImage = images?.[0]

  return (
    <section
      className="relative overflow-hidden pb-14 pt-[80px] md:pb-[90px] md:pt-[90px] lg:pb-[110px] lg:pt-[120px]"
      aria-labelledby="ai-automation-package-heading"
    >
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
            <SectionLabel className="mb-4">{badgeTitle}</SectionLabel>
            <h1
              id="ai-automation-package-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              {title}
              <br className="hidden lg:block" />
              {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
            </h1>
            {description ? (
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#808080] md:max-w-[670px] md:text-lg">
                {description}
              </p>
            ) : null}
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

          {heroImage?.src ? (
            <RevealWrapper as="figure" className="reveal-me w-full max-w-md shrink-0 overflow-hidden rounded-radius-sm lg:max-w-lg">
              <img
                src={heroImage.src}
                alt={heroImage.alt ?? ''}
                className="h-auto w-full rounded-radius-sm object-cover"
              />
            </RevealWrapper>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default AiAutomationHero
