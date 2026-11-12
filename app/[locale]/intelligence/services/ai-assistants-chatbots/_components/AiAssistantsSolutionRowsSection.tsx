import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Step = {
  id: number
  title: string
  description: string
}

type AiAssistantsSolutionRowsSectionProps = {
  eyebrow: string
  title: string
  description?: string
  footerLine?: string
  steps: ReadonlyArray<Step>
}

/** Layout copy: WOW Social SocialApproachSection (social landing §7). */
export default function AiAssistantsSolutionRowsSection({
  eyebrow,
  title,
  description,
  footerLine,
  steps,
}: AiAssistantsSolutionRowsSectionProps) {
  return (
    <section id="our-ai-solution" className="scroll-mt-28">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-12 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>{title}</h2>
            </RevealWrapper>
          </div>
          {description ? (
            <div className="w-full md:w-80 lg:w-96">
              <RevealWrapper className="reveal-me">
                <p className="max-w-lg text-base leading-relaxed text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                  {description}
                </p>
              </RevealWrapper>
            </div>
          ) : null}
        </div>

        <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:dark:border-dark">
          {steps.map((item) => (
            <div
              key={item.id}
              className="group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-[1.01] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <InstrumentText
                variant="solid"
                className="w-8 text-xl leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody"
              >
                0 {item.id}
              </InstrumentText>
              <h3 className="wow-approach-step-title">{item.title}</h3>
              <p className="ml-2.5 self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {footerLine ? (
          <RevealWrapper className="reveal-me mt-10 text-center md:mt-14">
            <p className="mx-auto max-w-2xl text-base text-[#808080] md:text-lg">{footerLine}</p>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}
