import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Home-19 — HeroV19: split headline + dual media + dual CTAs (no circle logo). */
const BusinessGrowthHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-[137px] md:pt-[160px] xl:pt-[180px]"
      aria-labelledby="business-growth-heading"
    >
      {/* Home-19 HeroV19 gradient */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          className="-top-[10%] left-0 scale-50"
        />
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>Business Growth Package</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="business-growth-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              Turn growth
              <br className="hidden lg:block" />
               into a system.
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Bring your marketing, sales and digital growth activities together in one coordinated package designed to
              help your business attract more opportunities, convert more customers and keep improving.
            </p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Get the Growth Package
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                See What&apos;s Included
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        {/* Home-19 HeroV19 dual figures — no circle logo */}
        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 overflow-hidden rounded-radius-sm sm:mt-[78px]">
            <img
              src="/images/wow/nav/cards/Business%20growth%201.png"
              alt="Team working on business growth"
              className="max-sm:w-full rounded-radius-sm"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-sm">
            <img
              src="/images/wow/nav/cards/Accelerate.png"
              alt="Focused workspace for growth planning"
              className="max-sm:w-full rounded-radius-sm"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BusinessGrowthHero
