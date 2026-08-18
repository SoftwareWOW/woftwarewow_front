import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import WowText from '@/components/wow/shared/WowText'

/** Layout: Home-14 HeroV14 — full-bleed video hero + dual CTAs. */
const HospitalityHero = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen" aria-labelledby="hospitality-hero-heading">
      <video className="absolute left-0 top-0 z-[-1] h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src="/video/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-0 bg-black/35" aria-hidden />

      <RevealWrapper className="container absolute left-1/3 top-2/3 z-10 -translate-x-1/3 -translate-y-2/3 lg:top-1/2 lg:-translate-y-1/2">
        <h1 id="hospitality-hero-heading" className="mb-3 text-backgroundBody max-md:leading-none">
          Turn Great Experiences Into{' '}
          <span
            className="mx-2 inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#6B66D6] align-middle md:mx-3 md:size-12"
            aria-hidden
          >
            <WowText className="text-[10px] font-bold md:text-xs">WOW!</WowText>
          </span>
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
