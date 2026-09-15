'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-18 HeroV18 — gradient + split headline/CTAs + right visual. */
const AiAutomationHero = ({
  badgeTitle = 'AI & Automation Package',
  title = 'Automate the work that slows you',
  italicTitle = 'down.',
  description =
    'Identify repetitive tasks, build smart workflows, and use AI to save time, reduce errors, and scale operations.',
  images,
}: CmsHeroComponentProps) => {
  const image0 = images?.[0] ?? { src: '/images/wow/nav/cards/AI%20Automation%201.png', alt: 'AI automation' }
  const image1 = images?.[1] ?? { src: '/images/wow/nav/cards/AI%20Automation%202.png', alt: 'Automated workflows' }

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
            <h1
              id="startup-launch-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              {title}
              <br className="hidden lg:block" />
              {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
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

export default AiAutomationHero
