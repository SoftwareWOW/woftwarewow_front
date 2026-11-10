'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import SkewMarquee from '@/components/shared/SkewMarquee'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: { src: string; alt?: string }[]
  marqueeImages?: { src: string; alt?: string }[] | null
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaHref?: string
}

/** Layout: Home-07 HeroV7 — heading + origin SkewMarquee. */
const RetailEcommerceHero = ({
  badgeTitle = 'Retail & eCommerce',
  title = 'Turn More Browsers Into Buyers.',
  italicTitle,
  description =
    'Build better shopping experiences, reach more customers, and connect the technology, marketing, and systems behind sustainable eCommerce growth.',
  marqueeImages,
  primaryCtaLabel = 'Grow Your Online Sales',
  secondaryCtaLabel = 'Explore Our Solutions',
  primaryCtaHref = '/contact',
  secondaryCtaHref = '/contact',
}: PageHeroProps) => {
  return (
    <section className="relative" aria-labelledby="retail-ecommerce-heading">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>

      <div className="container pt-[30px] md:pt-[40px] xl:pt-[50px]">
        <RevealWrapper>
          <div className="mb-4">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </div>
          <h1 id="retail-ecommerce-heading">
            {title}
            {italicTitle ? (
              <>
                <br />
                <InstrumentText>{italicTitle}</InstrumentText>
              </>
            ) : null}
          </h1>
          {description ? (
            <p className="mt-10 max-w-[770px] text-[#808080]">{description}</p>
          ) : null}
          <RevealWrapper className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={primaryCtaHref} variant="primary">
                {primaryCtaLabel}
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={secondaryCtaHref} variant="secondary">
                {secondaryCtaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </RevealWrapper>
      </div>

      <SkewMarquee images={marqueeImages} />
    </section>
  )
}

export default RetailEcommerceHero
