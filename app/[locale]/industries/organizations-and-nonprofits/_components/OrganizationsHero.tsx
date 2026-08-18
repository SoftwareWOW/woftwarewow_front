import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const HERO_IMAGE = '/images/wow/nav/cards/pexels-polina-tankilevitch-5386217%201.png'

/** Layout: Home-25 HeroV25 — image left + headline + dual CTAs (static image). */
const OrganizationsHero = () => {
  return (
    <section
      className="video-section relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover object-center pt-[107px] dark:bg-none md:pt-[100px] xl:pt-[120px]"
      aria-labelledby="organizations-hero-heading"
    >
      <div className="hero-video-container mx-auto max-w-[1600px] px-4 pb-14 md:px-[30px] md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="flex flex-col items-center gap-y-10 gap-x-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-20">
          <RevealWrapper className="reveal-me relative w-full lg:w-1/2">
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-md sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] xl:min-h-[620px] 2xl:min-h-[700px]">
              <img
                src={HERO_IMAGE}
                alt="Mission-driven organization working with WOW Superagency"
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={450}
              />
            </figure>
          </RevealWrapper>

          <div className="flex w-full flex-col justify-center lg:w-1/2 lg:py-4">
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>Organizations &amp; Nonprofits</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h1
                id="organizations-hero-heading"
                className="text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.2] tracking-[-0.02em] md:leading-[1.15]"
              >
                Turn Your Mission Into
                <InstrumentText> Momentum.</InstrumentText>
              </h1>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-3 md:mt-4">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] sm:max-w-2xl md:text-lg">
                We help organizations strengthen their presence, reach more people, simplify operations, and build the
                digital systems behind lasting impact.
              </p>
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-10 xl:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Strengthen Your Impact
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="#solutions" variant="secondary">
                  Explore Solutions
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapperV2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrganizationsHero
