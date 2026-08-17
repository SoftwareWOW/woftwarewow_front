'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import SkewMarquee from '@/components/shared/SkewMarquee'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import useReveal from '@/hooks/useReveal'

/** Layout: About HeroAbout + SkewMarquee — reveal copy above origin marquee images. */
const RetailEcommerceHero = () => {
  const { revealRef } = useReveal()

  return (
    <section
      className="overflow-hidden pt-[120px] sm:pt-[135px] md:pt-[150px] lg:pt-44 xl:pt-48"
      aria-labelledby="retail-ecommerce-heading"
    >
      <RevealWrapper className="container">
        <div className="mb-4">
          <SectionLabel>Retail & eCommerce</SectionLabel>
        </div>
        <h1 id="retail-ecommerce-heading">Turn More Browsers Into Buyers.</h1>
        <h3 ref={revealRef} className="reveal-text-2 mt-5 max-w-4xl text-[#808080]">
          Retail is no longer just about selling products. We help brands connect commerce, marketing, technology, and
          customer experience to drive stronger growth.
        </h3>
      </RevealWrapper>
      <SkewMarquee className="!pb-0 !pt-0 lg:!pb-0" />
    </section>
  )
}

export default RetailEcommerceHero
