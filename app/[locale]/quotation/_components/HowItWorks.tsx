import RevealWrapper from '@/components/animation/RevealWrapper'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const DEFAULT_STEPS = [
  {
    number: '1',
    title: 'Review',
    description: 'Our team looks at your goals, requirements, timeline, and project scope.',
  },
  {
    number: '2',
    title: 'Connect',
    description: "If we need more context, we'll schedule a short conversation with you.",
  },
  {
    number: '3',
    title: 'Proposal',
    description: 'We prepare the recommended scope, approach, and quotation.',
  },
]

type Step = {
  number: string
  title: string
  description: string
}

const StepItem = ({ step }: { step: Step }) => (
  <RevealWrapper className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
    <span
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text text-[clamp(5rem,22vw,11.25rem)] font-black leading-none text-transparent dark:to-[#15151599]"
    >
      {step.number}
    </span>
    <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
    <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">{step.description}</p>
  </RevealWrapper>
)

/** Layout: industries/education-and-training/HowItWorks — faded background numbers, 3-column grid. */
type HowItWorksProps = Partial<CmsProcessSection>

const HowItWorks = ({ title = 'Simple From Here.', steps }: HowItWorksProps = {}) => {
  const header = mergeSectionHeader({ title }, { title })
  const mergedSteps = mergeProcessSteps(DEFAULT_STEPS, steps).map((step, i) => ({
    ...DEFAULT_STEPS[i],
    title: step.title,
    description: step.description ?? DEFAULT_STEPS[i].description,
  }))

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto">{header.title}</h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
          {mergedSteps.map((step) => (
            <StepItem key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
