'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import useReveal from '@/hooks/useReveal'

/** Layout: homepage-07 HeroAbout — word color on scroll, no pin. */
const HospitalityHeroAbout = () => {
  const { revealRef } = useReveal()

  return (
    <RevealWrapper as="section" className="container text-center">
      <SectionLabel className="mb-5">GOOD TO KNOW</SectionLabel>
      <h3 ref={revealRef}>Travel starts long before arrival.</h3>
      <p className="mx-auto mt-6 max-w-3xl text-[#808080]">
        We help hospitality brands create digital experiences that inspire discovery, simplify booking, and keep guests
        coming back.
      </p>
    </RevealWrapper>
  )
}

export default HospitalityHeroAbout
