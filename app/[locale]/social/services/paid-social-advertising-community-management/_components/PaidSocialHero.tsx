'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import type { CmsHeroImage } from '@/lib/strapi/cms-image'
import { CMS_IMAGE_SIZES, CmsResponsiveImage, type CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'
import Marquee from 'react-fast-marquee'

type CtaLink = { label: string; href: string }

type PaidSocialHeroProps = CmsHeroComponentProps & {
  primaryCta?: CtaLink
  secondaryCta?: CtaLink
  marqueeText?: string
  headingId?: string
}

/** Layout: Home-15 HeroV15 (EducationHero) — text-appear headline, marquee, stacked media. */
const PaidSocialHero = ({
  title,
  italicTitle,
  description,
  images,
  primaryCta = { label: 'LAUNCH MY CAMPAIGN', href: '/meet' },
  secondaryCta = { label: 'EXPLORE OUR WORK', href: '/portfolio' },
  marqueeText = 'Turn Attention Into Lasting Engagement',
  headingId = 'paid-social-advertising-community-management-hero-heading',
}: PaidSocialHeroProps) => {
  const heroImages: CmsHeroImage[] = images?.length ? images.slice(0, 2) : []

  if (!title && !italicTitle && heroImages.length === 0) {
    return null
  }

  return (
    <RevealWrapper
      as="section"
      className="relative overflow-x-hidden pb-10 pt-[40px] sm:pt-[40px] md:pb-14 md:pt-[50px] lg:pt-14 xl:pb-16 xl:pt-16"
      aria-labelledby={headingId}
    >
      <div className="relative">
        <div className="mx-auto flex max-w-[1600px] flex-col items-stretch justify-between gap-y-10 px-4 md:px-[30px] lg:flex-row lg:items-center lg:gap-x-12 xl:gap-x-16">
          <div className="flex w-full min-w-0 flex-col lg:max-w-[50%] xl:max-w-[610px]">
            <div className="relative mb-3">
              <HeroGradientAnimation />
              {(title || italicTitle) && (
                <TextAppearAnimation>
                  <h1
                    id={headingId}
                    className="text-appear text-[clamp(2rem,4.8vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.02em]"
                  >
                    {title}
                    {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
                  </h1>
                </TextAppearAnimation>
              )}
            </div>

            {description ? (
              <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
                {description}
              </RevealWrapper>
            ) : null}

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-10">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </ButtonComponent>
              </ButtonComponentList>
              {secondaryCta ? (
                <ButtonComponentList className="flex" itemClassName="block">
                  <ButtonComponent href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </ButtonComponent>
                </ButtonComponentList>
              ) : null}
            </RevealWrapperV2>

            {marqueeText ? (
              <div className="relative mt-8 w-full xl:mt-12">
                <div className="absolute left-0 top-0 z-40 h-full w-[5%] bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark-gradient" />
                <div className="marquee-container">
                  <Marquee>
                    <h2 className="text-stroke text-nowrap py-4 pr-3 font-instrument italic lg:py-6">{marqueeText}</h2>
                  </Marquee>
                </div>
              </div>
            ) : null}
          </div>

          {heroImages.length > 0 ? (
            <div className="flex w-full min-w-0 flex-col gap-4 lg:w-[42%] xl:w-[46%]">
              {heroImages.map((image, index) => (
                <RevealWrapper as="figure" key={image.src ?? index} className="w-full overflow-hidden rounded-radius-md">
                  <CmsResponsiveImage
                    image={image}
                    alt={image.alt ?? 'Paid social advertising and community management'}
                    sizes={CMS_IMAGE_SIZES.halfGrid}
                    width={image.width ?? 665}
                    height={image.height ?? 440}
                    className="h-auto w-full object-cover sm:max-h-[280px] lg:max-h-[320px] xl:max-h-[380px]"
                    priority={index === 0}
                  />
                </RevealWrapper>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </RevealWrapper>
  )
}

export default PaidSocialHero
