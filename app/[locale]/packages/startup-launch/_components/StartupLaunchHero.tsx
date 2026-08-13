import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Home-19 — HeroV19: split headline + dual media + single CTA (no circle logo). */
const StartupLaunchHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-[137px] md:pt-[160px] xl:pt-[180px]"
      aria-labelledby="startup-launch-heading"
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
            <SectionLabel>Startup Launch Package</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="startup-launch-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              Everything you need
              <br className="hidden lg:block" />
              to <InstrumentText>launch.</InstrumentText>
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Turn your idea into a launch-ready business with the essential brand, digital, marketing, and technology
              foundations in one package.
            </p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Start Your Launch
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        {/* Home-19 HeroV19 dual figures */}
        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 sm:mt-[78px]">
            <img
              src="/images/wow/nav/cards/Startup%20laiunch%201.png"
              alt="Startup launch foundations and collaboration"
              className="max-sm:w-full"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me">
            <img
              src="/images/wow/nav/cards/build%26lanch.png"
              alt="Building and launching a new business"
              className="max-sm:w-full"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default StartupLaunchHero
