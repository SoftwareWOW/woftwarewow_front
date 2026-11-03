import RevealWrapper from '@/components/animation/RevealWrapper'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import HeroGradientAnimationV2 from '@/components/shared/HeroGradientAnimationV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const heroSlides = [
  { id: '1', img: '/images/wow/LandingPageNaveBare/Client%20Portal%202.svg' },
  {
    id: '2',
    img: '/images/wow/LandingPageNaveBare/friends-looking-at-their-mobile-phone-on-winter-da-2026-01-07-00-16-22-utc%202.svg',
  },
  { id: '3', img: '/images/wow/LandingPageNaveBare/Help%20and%20support.svg' },
]

/** Layout: homepage-20/HeroV20 */
const ServeMyCustomersHero = () => {
  return (
    <section
      className="relative overflow-x-clip px-3 pt-10 sm:pt-10 md:px-4 lg:pt-[50px] xl:pt-[60px]"
      aria-labelledby="serve-my-customers-hero-heading"
    >
      <HeroGradientAnimationV2 />
      <RevealWrapper className="container text-center">
        <RevealWrapper className="reveal-me mb-5 flex justify-center">
          <SectionLabel>Serve My Customers</SectionLabel>
        </RevealWrapper>
        <h1
          id="serve-my-customers-hero-heading"
          className="text-[clamp(1.85rem,8vw,4.5rem)] font-light leading-[1.05] tracking-tight"
        >
          Make every customer <br className="hidden md:block" />
          interaction
          <CtaImageSlider slides={heroSlides} />
          <InstrumentText>count.</InstrumentText>
        </h1>
        <p className="mx-auto mt-3 text-center text-[#808080] md:max-w-[670px]">
          Build connected digital experiences that make it easier for customers to discover, connect, and engage with
          your business.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-14">
          <ButtonComponentList className="flex justify-center" itemClassName="block w-full md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="primary">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
          <ButtonComponentList className="flex justify-center" itemClassName="block w-full md:inline-block md:w-auto">
            <ButtonComponent href="/software#solutions" variant="secondary">
              Explore Solutions
            </ButtonComponent>
          </ButtonComponentList>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default ServeMyCustomersHero
