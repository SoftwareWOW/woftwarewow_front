'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-24 HeroV24 — split headline + dual tall images. */
const SaasProductHero = ({
  badgeTitle = 'SaaS Product Development Package',
  title = 'From idea to scalable',
  italicTitle = 'product.',
  description = 'Build and launch scalable SaaS products.',
  images,
}: CmsHeroComponentProps) => {
  const image0 = images?.[0]
  const image1 = images?.[1]

  return (
    <section
      className="relative overflow-hidden pb-14 pt-[80px] md:pb-16 md:pt-[90px] lg:pb-[88px] xl:pb-[112px] xl:pt-[130px]"
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
          {badgeTitle ? (
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>{badgeTitle}</SectionLabel>
            </RevealWrapper>
          ) : null}
          <RevealWrapper
            as="h1"
            id="saas-hero-heading"
            className="reveal-me text-[clamp(2rem,4.571vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em]"
          >
            {title}
            <br className="hidden md:block" />
            {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
          </RevealWrapper>
          {description ? (
            <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
              {description}
            </RevealWrapper>
          ) : null}

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
        {image0?.src || image1?.src ? (
          <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="SaaS product development imagery">
            {image0?.src ? (
              <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
                <img
                  src={image0.src}
                  alt={image0.alt ?? ''}
                  className="h-auto w-full rounded-radius-md object-cover md:h-[540px] md:w-[410px]"
                  width={410}
                  height={540}
                />
              </RevealWrapper>
            ) : null}
            {image1?.src ? (
              <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
                <img
                  src={image1.src}
                  alt={image1.alt ?? ''}
                  className="h-auto w-full rounded-radius-md object-cover md:h-[540px] md:w-[410px]"
                  width={410}
                  height={540}
                />
              </RevealWrapper>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default SaasProductHero
