import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-19 HeroV19 — split headline + dual media (no circle logo), container width. */
const HostingInfraHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-[160px] xl:pt-[180px]"
      aria-labelledby="hosting-infra-heading"
    >
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          className="-top-[10%] left-0 scale-50"
        />
      </div>

      <div className="container flex flex-col justify-between gap-x-5 gap-y-10 lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>Hosting &amp; Infrastructure</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="hosting-infra-heading"
              className="text-[clamp(2rem,4.571vw,5rem)] font-normal leading-[1.15] tracking-[-0.03em]"
            >
              Keep your
              <br className="hidden lg:block" />
              business online
              <br className="hidden lg:block" />
              and <InstrumentText>ready.</InstrumentText>
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Reliable hosting, domains, business email and infrastructure designed to keep your digital operations
              fast, secure and accessible.
            </p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Find Your Hosting Solution
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                Explore Infrastructure
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 sm:mt-[78px]">
            <img
              src="/images/hero-img/startup-hero-1.jpg"
              alt="Team collaborating in a modern workspace"
              className="max-sm:w-full"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me">
            <img
              src="/images/hero-img/startup-hero-2.jpg"
              alt="Focused workspace for digital infrastructure"
              className="max-sm:w-full"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default HostingInfraHero
