'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: { src: string; alt?: string }[]
}

/** Layout: healthcare-and-wellness/HealthcareHero — split headline + dual tall images. */
const PartnersHero = ({
  badgeTitle = 'OUR PARTNERS',
  title = 'Better ',
  italicTitle = 'together.',
  description =
    'We collaborate with trusted technology, platform, and industry partners to create stronger solutions for growing businesses.',
  images,
}: PageHeroProps) => {
  const image0 = images?.[0] ?? {
    src: '/images/wow/nav/cards/software%26technology.png',
    alt: 'Technology partners collaborating',
  }
  const image1 = images?.[1] ?? {
    src: '/images/wow/nav/cards/Accelerate.png',
    alt: 'Growth and partnership collaboration',
  }

  return (
    <section className="pt-[120px] sm:pt-[135px] md:pt-[150px] lg:pt-44 xl:pt-48" aria-labelledby="partners-hero-heading">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-8 px-6 md:px-14 xl:flex-row xl:justify-between">
        <div className="flex-1">
          <RevealWrapper className="reveal-me mb-4 md:mb-5">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            id="partners-hero-heading"
            className="reveal-me text-[clamp(2rem,4.571vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em]"
          >
            {title}
            {italicTitle ? <InstrumentText variant="solid">{italicTitle}</InstrumentText> : null}
          </RevealWrapper>
          {description ? (
            <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
              {description}
            </RevealWrapper>
          ) : null}

          <RevealWrapper className="mt-7 flex flex-col gap-3 md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Become a Partner
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="#partner-network" variant="secondary">
                Explore Our Ecosystem
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="Partner ecosystem imagery">
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
            <img
              src={image0.src}
              alt={image0.alt ?? 'Technology partners collaborating'}
              className="h-auto w-full rounded-radius-md object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
            <img
              src={image1.src}
              alt={image1.alt ?? 'Growth and partnership collaboration'}
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

export default PartnersHero
