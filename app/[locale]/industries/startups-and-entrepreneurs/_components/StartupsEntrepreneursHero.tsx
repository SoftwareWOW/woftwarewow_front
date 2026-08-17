import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import AnimatedHeroImage from './AnimatedHeroImage'

/** Layout: Home-06 HeroV6 — centered headline + dual CTAs + scroll-scale image. */
const StartupsEntrepreneursHero = () => {
  return (
    <RevealWrapper as="section" className="relative overflow-hidden">
      <div className="relative overflow-hidden pb-10 pt-28 md:pt-36 lg:pt-[220px]">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="text-center">
            <h1 className="font-semibold">
              Build What&apos;s <InstrumentText>Next.</InstrumentText>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[#808080]">
              From first idea to market-ready business, we bring strategy, brand, technology, marketing, and growth
              together.
            </p>
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
      <AnimatedHeroImage />
    </RevealWrapper>
  )
}

export default StartupsEntrepreneursHero
