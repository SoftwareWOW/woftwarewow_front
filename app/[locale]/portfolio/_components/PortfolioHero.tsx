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

/** Layout: case-study/_components/CaseStudyHero.tsx — adds InstrumentText h1 + #work CTA. */
const PortfolioHero = ({
  badgeTitle = 'OUR PORTFOLIO',
  title = 'Work built to',
  italicTitle = 'make an impact.',
  description =
    "Explore the ideas, experiences, and solutions we've created across technology, marketing, design, and growth.",
}: PageHeroProps) => {
  return (
    <section
      className="relative overflow-hidden px-3 pt-28 sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]"
      aria-labelledby="portfolio-hero-heading"
    >
      <RevealWrapper className="container">
        <div className="mb-5 flex items-center justify-center md:mb-6">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </div>
        <h1 id="portfolio-hero-heading" className="text-center">
          {title}
          {italicTitle ? <InstrumentText> {italicTitle}</InstrumentText> : null}
        </h1>
        {description ? (
          <p className="mx-auto mt-3 max-w-3xl text-center text-[#808080] md:mt-7">{description}</p>
        ) : null}
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
