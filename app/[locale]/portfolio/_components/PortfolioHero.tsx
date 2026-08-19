import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: case-study/_components/CaseStudyHero.tsx — adds InstrumentText h1 + #work CTA. */
const PortfolioHero = () => {
  return (
    <section
      className="relative overflow-hidden px-3 pt-28 sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]"
      aria-labelledby="portfolio-hero-heading"
    >
      <RevealWrapper className="container">
        <div className="mb-5 flex items-center justify-center md:mb-6">
          <SectionLabel>OUR PORTFOLIO</SectionLabel>
        </div>
        <h1 id="portfolio-hero-heading" className="text-center">
          Work built to
          <InstrumentText> make an impact.</InstrumentText>
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[#808080] md:mt-7">
          Explore the ideas, experiences, and solutions we&apos;ve created across technology, marketing, design, and
          growth.
        </p>
        <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="#work" variant="primary">
              Explore Our Work
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </RevealWrapper>
    </section>
  )
}

export default PortfolioHero
