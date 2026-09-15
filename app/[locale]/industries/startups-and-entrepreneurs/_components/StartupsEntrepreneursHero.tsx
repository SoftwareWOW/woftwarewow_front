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
const StartupsEntrepreneursHero = ({
  badgeTitle = 'Startups & Entrepreneurs',
  title = "Build What's ",
  italicTitle = 'Next.',
  description =
    'From first idea to market-ready business, we bring strategy, brand, technology, marketing, and growth together.',
  images,
}: PageHeroProps) => {
  const heroImage = images?.[0] ?? {
    src: '/images/wow/nav/cards/Startup%20laiunch%201.png',
    alt: 'Founders building a startup with WOW Superagency',
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
            <div className="mt-10 flex flex-col items-center justify-center gap-3 md:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Start Your Project
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/packages/startup-launch" variant="secondary">
                  Explore Startup Solutions
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

export default StartupsEntrepreneursHero
