import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Step = {
  id: string
  title: string
  description: string
}

type AiAssistantsSolutionRowsSectionProps = {
  eyebrow: string
  title: string
  steps: ReadonlyArray<Step>
}

/** Layout copy: Home-19 ElevateBrandV2 (BuiltForMobile / FocusFirstRelease) — centered header, numbered rows. */
export default function AiAssistantsSolutionRowsSection({
  eyebrow,
  title,
  steps,
}: AiAssistantsSolutionRowsSectionProps) {
  return (
    <section id="our-ai-solution" className="scroll-mt-28">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">{title}</h2>
          </TextAppearAnimation>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {steps.map((item) => (
            <RevealWrapper
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                {item.id}
              </span>
              <h3 className="wow-approach-step-title-wide text-nowrap">{item.title}</h3>
              <p className="ml-2.5 self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {item.description}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
