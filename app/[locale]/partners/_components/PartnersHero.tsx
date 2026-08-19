import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-06 HeroV6 — finance-and-real-estate/FinanceHero (minimal, no hero image). */
const PartnersHero = () => {
  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32 lg:pb-28 lg:pt-[120px] xl:pb-[160px] xl:pt-[160px]"
      aria-labelledby="partners-hero-heading"
    >
      <HeroGradientAnimation />
      <div className="container relative z-10">
        <RevealWrapper className="mb-4 flex justify-center md:mb-5">
          <SectionLabel>OUR PARTNERS</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me text-center">
          <h1 id="partners-hero-heading" className="font-semibold">
            Better <InstrumentText>together.</InstrumentText>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[#808080]">
            We collaborate with trusted technology, platform, and industry partners to create stronger solutions for
            growing businesses.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-14">
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
          </div>
        </RevealWrapper>
      </div>
    </RevealWrapper>
  )
}

export default PartnersHero
