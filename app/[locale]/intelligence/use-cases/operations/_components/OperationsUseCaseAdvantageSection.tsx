import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import { ArrowDown } from 'lucide-react'

const WorkflowSteps = ({
  steps,
  muted,
}: {
  steps: readonly string[]
  muted?: boolean
}) => (
  <ul className="flex flex-col gap-4 md:gap-5">
    {steps.map((step) => (
      <li key={step} className="flex list-none items-start gap-3 text-left md:gap-4">
        <ArrowDown
          aria-hidden
          className="mt-1 size-5 shrink-0 text-secondary/45 dark:text-backgroundBody/45"
          strokeWidth={1.5}
        />
        <p
          className={`min-w-0 flex-1 text-base leading-[1.5] md:text-[17px] ${
            muted
              ? 'text-secondary/55 dark:text-backgroundBody/55'
              : 'text-secondary/80 dark:text-backgroundBody/85'
          }`}
        >
          {step}
        </p>
      </li>
    ))}
  </ul>
)

type OperationsUseCaseAdvantageSectionProps = {
  eyebrow: string
  title: string
  description: string
  manualTitle: string
  connectedTitle: string
  beforeSublabel?: string
  afterSublabel?: string
  manualSteps: readonly string[]
  connectedSteps: readonly string[]
}

/** Layout copy: intelligent-automation IntelligentAutomationImpactSection. */
export default function OperationsUseCaseAdvantageSection({
  eyebrow,
  title,
  description,
  manualTitle,
  connectedTitle,
  beforeSublabel,
  afterSublabel,
  manualSteps,
  connectedSteps,
}: OperationsUseCaseAdvantageSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-5 md:mb-8">{title}</h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-12 md:mt-20 lg:mt-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-0">
            <div className="flex h-full min-h-0 flex-col lg:border-r lg:border-[#e5e5e5] lg:pr-10 xl:pr-16 dark:lg:border-white/15">
              <h3 className="text-4xl font-light uppercase leading-[1.15] tracking-[-0.02em] text-secondary dark:text-backgroundBody md:text-5xl lg:text-[56px]">
                {manualTitle}
              </h3>
              {beforeSublabel ? (
                <p className="mt-3 text-base text-secondary dark:text-backgroundBody md:text-lg">{beforeSublabel}</p>
              ) : null}
              <div className="mt-10 flex flex-1 flex-col md:mt-12">
                <WorkflowSteps steps={manualSteps} muted />
              </div>
            </div>

            <div className="flex h-full min-h-0 flex-col lg:pl-10 xl:pl-16">
              <h3 className="text-4xl font-light uppercase leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
                <WowText className="text-[1em] font-light uppercase leading-[inherit] tracking-[-0.02em]">
                  {connectedTitle}
                </WowText>
              </h3>
              {afterSublabel ? (
                <p className="mt-3 text-base text-secondary dark:text-backgroundBody md:text-lg">{afterSublabel}</p>
              ) : null}
              <div className="mt-10 flex flex-1 flex-col md:mt-12">
                <WorkflowSteps steps={connectedSteps} />
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}