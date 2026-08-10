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
  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary sm:size-6 dark:bg-backgroundBody">
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
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
          <div className="w-full min-w-0 flex-1 lg:max-w-[720px]">
            <RevealWrapper className="reveal-me mb-3 sm:mb-4">
              <SectionLabel>Ready-Made Starting Point</SectionLabel>
            </RevealWrapper>

            <RevealWrapper className="reveal-me">
              <h2
                id="startup-package-heading"
                className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-normal leading-[1.15] tracking-[-0.03em]"
              >
                Need the essentials?
                <br />
                <InstrumentText>Start here.</InstrumentText>
              </h2>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-3 sm:mt-4">
              <p className="max-w-xl text-sm leading-relaxed text-[#808080] sm:text-base md:text-lg">
                Our Startup Launch Package brings together the core foundations needed to take a new business from idea
                to a professional market presence.
              </p>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-6 sm:mt-8">
              <ul className="space-y-2.5 sm:space-y-3">
                {packageItems.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-start gap-3 text-sm leading-[1.5] text-secondary/80 sm:items-center sm:gap-4 sm:text-base md:text-[17px] dark:text-backgroundBody/80"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <ButtonComponentList className="flex w-full sm:w-auto" itemClassName="block w-full sm:w-auto">
                <ButtonComponent href="/contact" variant="primary" fullWidth>
                  Start Now
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex w-full sm:w-auto" itemClassName="block w-full sm:w-auto">
                <ButtonComponent href="/contact" variant="secondary" fullWidth>
                  Request a Custom Solution
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper
            as="figure"
            className="w-full max-w-[250px] shrink-0 sm:max-w-[280px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px]"
          >
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
