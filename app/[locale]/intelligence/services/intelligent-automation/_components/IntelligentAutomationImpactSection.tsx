import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
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

type IntelligentAutomationImpactSectionProps = {
  eyebrow: string
  title: string
  description: string
  manualTitle: string
  connectedTitle: string
  beforeSublabel: string
  afterSublabel: string
  manualSteps: readonly string[]
  connectedSteps: readonly string[]
}

/** Layout: split columns with vertical divider — Figma THE IMPACT OF AUTOMATION. */
export default function IntelligentAutomationImpactSection({
  eyebrow,
  title,
  description,
  manualTitle,
  connectedTitle,
  beforeSublabel,
  afterSublabel,
  manualSteps,
  connectedSteps,
}: IntelligentAutomationImpactSectionProps) {
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
              <h3 className="text-4xl font-light leading-[1.15] tracking-[-0.02em] text-secondary dark:text-backgroundBody md:text-5xl lg:text-[56px]">
                {manualTitle}
              </h3>
              <p className="mt-3 text-base text-secondary dark:text-backgroundBody md:text-lg">{beforeSublabel}</p>
              <div className="mt-10 flex flex-1 flex-col md:mt-12">
                <WorkflowSteps steps={manualSteps} muted />
              </div>
            </div>

            <div className="flex h-full min-h-0 flex-col lg:pl-10 xl:pl-16">
              <h3 className="bg-gradient-to-r from-[#615CCE] to-[#FF9191] bg-clip-text text-4xl font-light leading-[1.15] tracking-[-0.02em] text-transparent md:text-5xl lg:text-[56px]">
                {connectedTitle}
              </h3>
              <p className="mt-3 text-base text-secondary dark:text-backgroundBody md:text-lg">{afterSublabel}</p>
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
