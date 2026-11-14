import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowDown } from 'lucide-react'

const cardClassName =
  'relative rounded-radius-md border border-secondary/15 bg-background px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/25 dark:bg-background md:pt-12'

const WorkflowSteps = ({
  steps,
  contextLine,
}: {
  steps: readonly string[]
  contextLine?: string
}) => (
  <div className="flex flex-col items-start text-left">
    {contextLine ? (
      <p className="mb-4 text-base font-light text-secondary dark:text-backgroundBody md:text-lg">{contextLine}</p>
    ) : null}
    {steps.map((step, index) => (
      <div key={step} className="w-full">
        <p className="text-base leading-[1.5] text-secondary/70 dark:text-backgroundBody/70 md:text-[17px]">{step}</p>
        {index < steps.length - 1 && (
          <ArrowDown
            aria-hidden
            className="my-3 size-5 opacity-40 text-secondary dark:text-backgroundBody"
            strokeWidth={1.5}
          />
        )}
      </div>
    ))}
  </div>
)

type OperationsUseCaseAdvantageSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  titleSuffix: string
  description: string
  withoutAiLabel: string
  withAiLabel: string
  withoutSteps: readonly string[]
  withSteps: readonly string[]
  contextLine?: string
}

/** Layout copy: intelligence/IntelligenceProblemSection — ArrowDown before/after comparison cards. */
export default function OperationsUseCaseAdvantageSection({
  eyebrow,
  titleBefore,
  titleAccent,
  titleSuffix,
  description,
  withoutAiLabel,
  withAiLabel,
  withoutSteps,
  withSteps,
  contextLine,
}: OperationsUseCaseAdvantageSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-5 md:mb-8">
              {titleBefore}
              {titleAccent ? (
                <>
                  {' '}
                  <InstrumentText>{titleAccent}</InstrumentText>
                </>
              ) : null}
              {titleSuffix ? ` ${titleSuffix}` : null}
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          <div className={cardClassName}>
            <h6 className="mb-8 text-2xl font-light uppercase tracking-[0.04em] text-secondary dark:text-backgroundBody md:mb-10 md:text-3xl">
              {withoutAiLabel}
            </h6>
            <WorkflowSteps steps={withoutSteps} contextLine={contextLine} />
          </div>

          <div className={cardClassName}>
            <h6 className="mb-8 text-2xl font-light uppercase tracking-[0.04em] text-inherit md:mb-10 md:text-3xl">
              {withAiLabel}
            </h6>
            <WorkflowSteps steps={withSteps} contextLine={contextLine} />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}