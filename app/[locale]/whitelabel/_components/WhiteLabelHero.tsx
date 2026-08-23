import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'

const HERO_IMAGE = '/images/wow/nav/cards/pexels-polina-tankilevitch-5386217%201.png'

/** Layout: organizations OrganizationsHero — image left + headline + dual CTAs. */
const WhiteLabelHero = () => {
  return (
    <section
      className="video-section relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover object-center pt-[107px] dark:bg-none md:pt-[100px] xl:pt-[120px]"
      aria-labelledby="whitelabel-hero-heading"
    >
      <div className="hero-video-container mx-auto max-w-[1600px] px-4 pb-14 md:px-[30px] md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="flex flex-col items-center gap-x-12 gap-y-10 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-20">
          <RevealWrapper className="reveal-me group relative w-full lg:w-1/2">
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-md sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] xl:min-h-[620px] 2xl:min-h-[700px]">
              <img
                src={HERO_IMAGE}
                alt="White-label partnership with WOW Superagency"
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={450}
              />
              <div className="absolute bottom-10 left-11 z-10 xl:bottom-10" id="play-icon">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary/50 pl-0.5 bg-blend-lighten transition-all duration-300 ease-in-out group-hover:scale-110 dark:bg-backgroundBody/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={16}
                    viewBox="0 0 15 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.6848 7.50412L1.99138 1.08687C1.89294 1.03237 1.78009 1.00244 1.66446 1.00014C1.54883 0.997848 1.43461 1.02328 1.33359 1.07381C1.23256 1.12434 1.14839 1.19815 1.08975 1.28761C1.03111 1.37707 1.00013 1.47895 1 1.58274V14.4173C1.00013 14.521 1.03111 14.6229 1.08975 14.7124C1.14839 14.8019 1.23256 14.8757 1.33359 14.9262C1.43461 14.9767 1.54883 15.0022 1.66446 14.9999C1.78009 14.9976 1.89294 14.9676 1.99138 14.9131L13.6848 8.49588C13.7808 8.44492 13.8604 8.37239 13.9157 8.28544C13.9709 8.19849 14 8.10011 14 8C14 7.89989 13.9709 7.80152 13.9157 7.71456C13.8604 7.62761 13.7808 7.55508 13.6848 7.50412V7.50412Z"
                      className="stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </figure>
          </RevealWrapper>

          <div className="flex w-full flex-col justify-center lg:w-1/2 lg:py-4">
            <RevealWrapper className="reveal-me">
              <h1
                id="whitelabel-hero-heading"
                className="text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.2] tracking-[-0.02em] md:leading-[1.15]"
              >
                Your Brand. Our <InstrumentText>Expertise.</InstrumentText>
              </h1>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-3 md:mt-4">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] sm:max-w-2xl md:text-lg">
                Expand what you can offer with a trusted team behind the scenes—across technology, design, marketing,
                AI, and more.
              </p>
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-10 xl:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/partners" variant="primary">
                  BECOME A WHITE-LABEL PARTNER
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="secondary">
                  TALK TO OUR TEAM
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapperV2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhiteLabelHero
