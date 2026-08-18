import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-25 HeroV25 — image left + headline + dual CTAs (static image). */
const OrganizationsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover object-center pt-[107px] dark:bg-none md:pt-[100px] xl:pt-[120px]">
      <div className="hero-video-container mx-auto max-w-[1600px] px-4 md:px-[30px]">
        <div className="flex flex-col items-center gap-x-20 gap-y-14 lg:flex-row lg:items-stretch">
          <RevealWrapper className="reveal-me relative w-full lg:flex lg:w-1/2 lg:flex-col">
            <div className="hero-video relative h-full min-h-[280px] flex-1 overflow-hidden rounded-radius-md lg:min-h-0">
              <img
                src="/images/wow/nav/cards/pexels-polina-tankilevitch-5386217%201.png"
                alt="Mission-driven organization working with WOW Superagency"
                className="h-full w-full object-cover"
                width={800}
                height={450}
              />
            </div>
          </RevealWrapper>

          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>Organizations &amp; Nonprofits</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h1 className="text-[42px] font-normal leading-[1.3] md:text-[47px] md:leading-[1.2] lg:text-[54px] lg:leading-[1.24] xl:text-[64px]">
                Turn Your Mission Into
                <InstrumentText> Momentum.</InstrumentText>
              </h1>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-3">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
                We help organizations strengthen their presence, reach more people, simplify operations, and build the
                digital systems behind lasting impact.
              </p>
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
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
