'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import SkewMarquee from '@/components/shared/SkewMarquee'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: { src: string; alt?: string }[]
}

/** Layout: Home-07 HeroV7 — heading + origin SkewMarquee. */
const RetailEcommerceHero = ({
  badgeTitle = 'Retail & eCommerce',
  title = 'Turn More Browsers Into Buyers.',
  description =
    'Build better shopping experiences, reach more customers, and connect the technology, marketing, and systems behind sustainable eCommerce growth.',
}: PageHeroProps) => {
  return (
    <section className="relative" aria-labelledby="retail-ecommerce-heading">
      <div className="absolute left-[12%] top-40 -z-10 h-2/6 w-2/6 blur-[35px] md:blur-[60px]">
        <HeroGradientAnimation />
      </div>

      <div className="container pt-[120px] sm:pt-[135px] md:pt-[150px] lg:pt-44 xl:pt-48">
        <RevealWrapper>
          <div className="mb-4">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </div>
          <h1 id="retail-ecommerce-heading">{title}</h1>
          {description ? (
            <p className="mt-10 max-w-[770px] text-[#808080]">{description}</p>
          ) : null}
        </RevealWrapper>
      </div>

      <SkewMarquee />
    </section>
  )
}

export default RetailEcommerceHero
