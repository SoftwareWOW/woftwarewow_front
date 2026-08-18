import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'

/** Layout: Home-14 HeroV14 — full-bleed video hero + dual CTAs. */
const HospitalityHero = () => {
  return (
    <section
      className="relative flex min-h-[80vh] w-full items-end overflow-hidden lg:min-h-screen lg:items-center"
      aria-labelledby="hospitality-hero-heading"
    >
      <video className="absolute inset-0 z-0 h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src="/video/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />

      <RevealWrapper className="container relative z-10 w-full pb-10 pt-[120px] sm:pb-12 sm:pt-[135px] md:pb-14 md:pt-[150px] lg:py-0">
        <h1 id="hospitality-hero-heading" className="mb-3 max-w-4xl text-backgroundBody max-md:leading-none">
          Turn Great Experiences Into{' '}
          <InstrumentText variant="solid" className="text-backgroundBody dark:text-backgroundBody">
            Growth.
          </InstrumentText>
        </h1>
        <p className="max-w-3xl text-backgroundBody/70">
          We help hospitality and tourism brands attract more guests, strengthen their digital presence, and create
          smoother experiences from discovery to return.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-14">
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
    </section>
  )
}

export default HospitalityHero
