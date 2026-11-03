import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: homepage-24/HeroV24 */
const ManageMyBusinessHero = () => {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-[137px] md:pb-16 md:pt-[160px] lg:pb-[88px] xl:pb-[112px] xl:pt-[220px]"
      aria-labelledby="manage-my-business-hero-heading"
    >
      <div className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img src="/images/hero-gradient-background.png" alt="" className="left-0 top-0" role="presentation" />
      </div>
      <RevealWrapper className="reveal-me mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-8 px-6 md:px-14 xl:flex-row xl:justify-between">
        <div className="flex-1">
          <SectionLabel className="mb-5">Manage My Business</SectionLabel>
          <RevealWrapper
            as="h1"
            id="manage-my-business-hero-heading"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            Run your business. <br className="hidden md:block" />
            Not your <InstrumentText>software.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl">
            Bring your operations, people, and everyday workflows together. We create connected business systems that
            simplify how you work, give you clearer visibility, and help your business move forward.
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
        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="Business platform interfaces">
          <figure className="overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/LandingPageNaveBare/SaaS Dev 2.svg"
              alt="Business operations dashboard with tasks, customers, and performance"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
          <figure className="overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/LandingPageNaveBare/Business growth.svg"
              alt="Team activity and business insights"
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

export default ManageMyBusinessHero
