import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const packageItems = [
  'Strategy & positioning',
  'Brand foundations',
  'Website / digital presence',
  'Launch essentials',
  'Analytics & core setup',
  'Go-live support',
]

const CheckIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody dark:stroke-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

/** Layout: Home-19 HeroV19 split + home-12 Pricing checklist (no WOW sticker). */
const StartupPackage = () => {
  return (
    <section
      className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4"
      aria-labelledby="startup-package-heading"
    >
      <div className="pointer-events-none absolute right-0 top-0 -z-10 blur-[80px] lg:-right-[10%]">
        <img src="/images/hero-gradient-background.png" alt="" aria-hidden className="scale-50 opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="flex flex-col items-center justify-between gap-x-10 gap-y-12 lg:flex-row">
          <div className="w-full md:flex-1">
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>Ready-Made Starting Point</SectionLabel>
            </RevealWrapper>

            <RevealWrapper className="reveal-me">
              <h2
                id="startup-package-heading"
                className="text-4xl font-normal leading-tight tracking-[-2px] sm:text-[48px] md:text-[56px] xl:text-[64px] xl:leading-[1.15]"
              >
                Need the essentials?
                <br />
                <InstrumentText>Start here.</InstrumentText>
              </h2>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-4">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
                Our Startup Launch Package brings together the core foundations needed to take a new business from idea
                to a professional market presence.
              </p>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-8">
              <ul className="space-y-3">
                {packageItems.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-center gap-4 text-[17px] leading-[1.5] text-secondary/80 dark:text-backgroundBody/80"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Start Now
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="secondary">
                  Request a Custom Solution
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper as="figure" className="reveal-me w-full overflow-hidden rounded-radius-md md:flex-1">
            <img
              src="/images/wow/foryou/package.png"
              alt="Startup launch package foundations"
              className="h-auto w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default StartupPackage
