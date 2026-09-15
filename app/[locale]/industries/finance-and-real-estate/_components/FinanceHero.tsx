import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import AnimatedHeroImage from './AnimatedHeroImage'

type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: { src: string; alt?: string }[]
}

/** Layout: Home-06 HeroV6 — centered headline + dual CTAs + scroll-scale image. */
const FinanceHero = ({
  badgeTitle = 'Finance & Real Estate',
  title = 'Build Trust. ',
  italicTitle = 'Create Opportunity.',
  description =
    'We help finance and real estate businesses strengthen their presence, attract better opportunities, and build smarter systems for sustainable growth.',
  images,
}: PageHeroProps) => {
  const heroImage = images?.[0] ?? {
    src: '/images/wow/nav/cards/sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc%201.png',
    alt: 'Finance and real estate growth dashboard',
  }
  return (
    <RevealWrapper as="section" className="relative overflow-hidden">
      <div className="relative overflow-hidden pb-10 pt-28 md:pt-32 lg:pt-[120px]">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="mb-4 flex justify-center">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="text-center">
            <h1 className="font-semibold">
              {title}
              {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
            </h1>
            {description ? (
              <p className="mx-auto mt-5 max-w-3xl text-[#808080]">{description}</p>
            ) : null}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Grow Your Business
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="#solutions" variant="secondary">
                  Explore Solutions
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </RevealWrapper>
        </div>
      </div>
      <AnimatedHeroImage src={heroImage.src} alt={heroImage.alt} />
    </RevealWrapper>
  )
}

export default FinanceHero
