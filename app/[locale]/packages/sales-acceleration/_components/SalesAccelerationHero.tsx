'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-18 HeroV18 — gradient + split headline/CTAs + right visual. */
const SalesAccelerationHero = ({
  badgeTitle = 'Sales Acceleration Package',
  title = 'Turn leads into',
  italicTitle = 'revenue.',
  description =
    'Build stronger sales systems, better follow-up, and clearer conversion paths that help your business close more deals.',
  images,
}: CmsHeroComponentProps) => {
  const image0 = images?.[0] ?? { src: '/images/wow/nav/cards/Sales%20Acceleration%201.png', alt: 'Sales acceleration' }
  const image1 = images?.[1] ?? { src: '/images/wow/nav/cards/Sales%20Acceleration%202.png', alt: 'Sales growth' }

  return (
    <section className="relative overflow-hidden pb-14 pt-[90px] md:pb-[90px] md:pt-[100px] lg:pb-[110px] lg:pt-[120px]">
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
            <h1
              id="startup-launch-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              {title}
              <br className="hidden lg:block" />
              {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
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
              src={image0.src}
              alt={image0.alt ?? ''}
              className="h-auto w-full rounded-radius-sm object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default SalesAccelerationHero
