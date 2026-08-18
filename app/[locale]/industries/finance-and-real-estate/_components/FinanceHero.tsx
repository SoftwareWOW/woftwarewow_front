import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import AnimatedHeroImage from './AnimatedHeroImage'

/** Layout: Home-06 HeroV6 — centered headline + dual CTAs + scroll-scale image. */
const FinanceHero = () => {
  return (
    <RevealWrapper as="section" className="relative overflow-hidden">
      <div className="relative overflow-hidden pb-10 pt-28 md:pt-32 lg:pt-[120px]">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="mb-4 flex justify-center">
            <SectionLabel>Finance & Real Estate</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="text-center">
            <h1 className="font-semibold">
              Build Trust. <InstrumentText>Create Opportunity.</InstrumentText>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[#808080]">
              We help finance and real estate businesses strengthen their presence, attract better opportunities, and
              build smarter systems for sustainable growth.
            </p>
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
      <AnimatedHeroImage />
    </RevealWrapper>
  )
}

export default FinanceHero
