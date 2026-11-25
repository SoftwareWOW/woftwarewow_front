import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Step = {
  number: string
  title: string
  description: string
}

type VpsHostingResourcesSectionProps = {
  eyebrow: string
  title: string
  description?: string
  steps: ReadonlyArray<Step>
}

/** Copy of BiPredictiveProcessSection — centered header + 3×2 faded-number resource grid. */
export default function VpsHostingResourcesSection({
  eyebrow,
  title,
  description,
  steps,
}: VpsHostingResourcesSectionProps) {
  return (
    <section id="whats-included" className="scroll-mt-24 bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="text-[clamp(1.75rem,4vw,4rem)] font-light leading-[1.2]">{title}</h2>
          </RevealWrapper>
          {description ? (
            <TextAppearAnimation>
              <p className="text-appear mx-auto mt-4 max-w-2xl text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-relaxed text-[#808080]">
                {description}
              </p>
            </TextAppearAnimation>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-10">
          {steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none font-black leading-none text-secondary/15 dark:text-backgroundBody/10 text-[clamp(5rem,22vw,11.25rem)]"
              >
                {step.number}
              </span>
              <h5 className="relative z-10 mb-3 text-center text-[clamp(1.1rem,2vw,1.5rem)] sm:mb-5">{step.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-[clamp(0.875rem,1.4vw,1rem)] leading-relaxed text-[#808080]">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
