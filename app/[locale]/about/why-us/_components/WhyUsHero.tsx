import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-19 HeroV19 — split headline + media. */
const WhyUsHero = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-[160px] xl:pt-[180px]" aria-labelledby="why-us-heading">
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
            <SectionLabel>Why WOW</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="why-us-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              More than an agency.
              <br className="hidden lg:block" />
              <InstrumentText>Your growth ecosystem.</InstrumentText>
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Strategy, technology, marketing, AI and creative expertise working together to help your business move
              forward.
            </p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Talk to an Expert
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/services" variant="secondary">
                Explore Our Services
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 sm:mt-[78px]">
            <img
              src="/images/hero-img/startup-hero-1.jpg"
              alt="WOW team collaborating on growth strategy"
              className="w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me">
            <img
              src="/images/hero-img/startup-hero-2.jpg"
              alt="Integrated digital delivery across WOW divisions"
              className="w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhyUsHero
