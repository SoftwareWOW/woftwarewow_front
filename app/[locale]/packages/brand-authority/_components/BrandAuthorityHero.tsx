import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Home-19 — HeroV19: split headline + dual media + dual CTAs. */
const BrandAuthorityHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-[137px] md:pt-[160px] xl:pt-[180px]"
      aria-labelledby="brand-authority-heading"
    >
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img src="/images/hero-gradient-background.png" alt="" aria-hidden className="-top-[10%] left-0 scale-50" />
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>Brand Authority Package</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="brand-authority-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              Turn expertise into
              <br className="hidden lg:block" /> <InstrumentText>authority.</InstrumentText>
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Build a credible, recognizable brand that strengthens trust, visibility, and influence.
            </p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Build Your Authority
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/meet" variant="secondary">
                Talk to an Expert
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 overflow-hidden rounded-radius-sm sm:mt-[78px]">
            <img
              src="/images/wow/nav/cards/social media start 1.png"
              alt="Building a recognizable brand presence"
              className="rounded-radius-sm max-sm:w-full"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-sm">
            <img
              src="/images/wow/nav/cards/Branding & Creative 1.png"
              alt="Brand identity and creative direction"
              className="rounded-radius-sm max-sm:w-full"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BrandAuthorityHero
