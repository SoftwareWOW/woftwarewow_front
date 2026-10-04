import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { MARKETING_PROCESS } from './marketing-content'

export default function MarketingProcessSection() {
  const content = MARKETING_PROCESS

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>{content.title}</h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-10">
          {content.steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text font-black leading-none text-transparent dark:to-[#15151599] text-[clamp(5rem,22vw,11.25rem)]"
              >
                {step.number}
              </span>
              <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/meet" variant="primary">
              {content.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
