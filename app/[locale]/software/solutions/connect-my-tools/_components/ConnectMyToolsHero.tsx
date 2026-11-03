import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: homepage-17/HeroV17 */
const ConnectMyToolsHero = () => {
  return (
    <section
      className="relative overflow-x-clip px-3 pt-10 sm:pt-10 md:px-4 lg:pt-[50px] xl:pt-[60px]"
      aria-labelledby="connect-my-tools-hero-heading"
    >
      <HeroGradientAnimation />
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Connect My Tools</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            id="connect-my-tools-hero-heading"
            className="reveal-me text-[clamp(1.85rem,8vw,4.5rem)] font-light leading-[1.05] tracking-tight"
          >
            Your tools. <InstrumentText>Working together.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mx-auto mt-3 max-w-xl text-[#808080] lg:max-w-[750px]">
            Connect the platforms your business relies on. We make it easier to share data, automate workflows, and keep
            everything in sync.
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
              <ButtonComponent href="/software/solutions" variant="secondary">
                Explore Solutions
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
        <RevealWrapper as="figure" className="reveal-me mx-auto mt-10 max-w-5xl overflow-hidden rounded-radius-md md:mt-16">
          <img
            src="/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg"
            alt="A business dashboard bringing connected applications together"
            className="aspect-[16/9] h-full w-full object-cover"
          />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ConnectMyToolsHero
