import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Step = {
  number: string
  title: string
  description: string
}

type ManagementProcessSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  steps: ReadonlyArray<Step>
}

/** Layout: wowmarketing BuildCommunity (WoWProces numbers) — no bottom CTA. */
export default function ManagementProcessSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  steps,
}: ManagementProcessSectionProps) {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>
              {titleBefore}
              <InstrumentText>{titleAccent}</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 xl:grid-cols-3">
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
              <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
