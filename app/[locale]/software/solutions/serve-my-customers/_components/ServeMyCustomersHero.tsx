import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: homepage-24/HeroV24 */
const ServeMyCustomersHero = () => {
  return (
    <section
      className="relative overflow-x-clip px-3 pt-10 sm:pt-10 md:px-4 lg:pt-[50px] xl:pt-[60px]"
      aria-labelledby="serve-my-customers-hero-heading"
    >
      <div className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img src="/images/hero-gradient-background.png" alt="" className="left-0 top-0" role="presentation" />
      </div>
      <RevealWrapper className="reveal-me mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-8 px-6 md:px-14 xl:flex-row xl:justify-between">
        <div className="flex-1">
          <SectionLabel className="mb-5">Serve My Customers</SectionLabel>
          <RevealWrapper
            as="h1"
            id="serve-my-customers-hero-heading"
            className="reveal-me text-[clamp(1.85rem,8vw,4.5rem)] font-light leading-[1.05] tracking-tight"
          >
            Make every customer <br className="hidden md:block" />
            interaction <InstrumentText>count.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
            Build connected digital experiences that make it easier for customers to discover, connect, and engage
            with your business.
          </RevealWrapper>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
              <ButtonComponent href="/software#solutions" variant="secondary">
                Explore Solutions
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="Customer-facing interfaces">
          <figure className="overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/LandingPageNaveBare/Client Portal 2.svg"
              alt="Customer portal interface"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
          <figure className="overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/LandingPageNaveBare/friends-looking-at-their-mobile-phone-on-winter-da-2026-01-07-00-16-22-utc 2.svg"
              alt="Customers using a mobile app"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default ServeMyCustomersHero
