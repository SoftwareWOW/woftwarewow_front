import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: homepage-09/HeroV9 */
const LaunchDigitalProductHero = () => {
  return (
    <section
      className="relative overflow-x-clip px-3 pt-10 sm:pt-10 md:px-4 lg:pt-[50px] xl:pt-[60px]"
      aria-labelledby="launch-digital-product-hero-heading"
    >
      <div className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img src="/images/hero-gradient-background.png" alt="" className="left-0 top-0" role="presentation" />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 md:px-14">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full flex-1">
            <RevealWrapper className="reveal-me">
              <SectionLabel className="mb-5">Launch a Digital Product</SectionLabel>
            </RevealWrapper>
            <RevealWrapper
              as="h1"
              id="launch-digital-product-hero-heading"
              className="reveal-me text-[clamp(1.85rem,8vw,4.5rem)] font-light leading-[1.05] tracking-tight"
            >
              From big idea <br className="hidden md:block" />
              to <InstrumentText>real product.</InstrumentText>
            </RevealWrapper>
            <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
              Turn your vision into a digital product people can use. We bring strategy, design, and development
              together to help you launch with confidence.
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 pb-10 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-14 lg:pb-16">
              <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
                <ButtonComponent href="/contact" variant="primary">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
                <ButtonComponent href="/portfolio" variant="secondary">
                  Explore Our Work
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>

            <RevealWrapper as="figure" className="reveal-me w-full overflow-hidden rounded-radius-md">
              <img
                src="/images/wow/LandingPageNaveBare/Startup%20laiunch%202.svg"
                alt="Digital product launch concept"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </RevealWrapper>
          </div>
          <div className="w-full flex-1">
            <RevealWrapper as="figure" className="reveal-me mb-8 overflow-hidden rounded-radius-md">
              <img
                src="/images/wow/LandingPageNaveBare/SaaS%20Dev%202.svg"
                alt="SaaS product dashboard"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </RevealWrapper>
            <div className="grid grid-cols-2 gap-8">
              <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
                <img
                  src="/images/wow/LandingPageNaveBare/Website%201%202.svg"
                  alt="Web application interface"
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              </RevealWrapper>
              <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
                <img
                  src="/images/wow/LandingPageNaveBare/friends-looking-at-their-mobile-phone-on-winter-da-2026-01-07-00-16-22-utc%202.svg"
                  alt="People using a mobile app"
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              </RevealWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LaunchDigitalProductHero
