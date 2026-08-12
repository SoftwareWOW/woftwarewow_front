import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowDown } from 'lucide-react'

const beforeSteps = [
  'A customer sends an enquiry',
  'Someone checks the inbox',
  'Information is copied into CRM',
  'Someone decides who should respond',
  'Follow-up is written manually',
  'Team remembers to follow up again',
]

const afterSteps = [
  'A customer sends an enquiry',
  'AI identifies the request',
  'CRM updates automatically',
  'Lead is routed to the right person',
  'Response is prepared or triggered',
  'Follow-up workflow continues automatically',
]

const cardClassName =
  'relative rounded-radius-md border border-secondary/15 bg-secondary/[0.04] px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/25 dark:bg-[#111111] md:pt-12'

const WorkflowSteps = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-col items-start text-left">
    {steps.map((step, index) => (
      <div key={step} className="w-full">
        <p className="text-base leading-[1.5] text-secondary/70 dark:text-backgroundBody/70 md:text-[17px]">
          {step}
        </p>
        {index < steps.length - 1 && (
          <ArrowDown aria-hidden className="my-3 size-5 opacity-40" strokeWidth={1.5} />
        )}
      </div>
    ))}
  </div>
)

/** Layout: Before/After automation workflow — dark comparison cards with left-aligned arrow steps. */
const AutomationInAction = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Automation in action</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-5 max-w-3xl md:mb-8">
              Turn repetitive processes into smarter <InstrumentText>workflows.</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Connect the steps that happen repeatedly so information and actions can move automatically.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          <div className={cardClassName}>
            <h6 className="mb-8 text-2xl font-normal uppercase tracking-[0.04em] text-secondary dark:text-white md:mb-10 md:text-3xl">
              Before
            </h6>
            <WorkflowSteps steps={beforeSteps} />
          </div>

          <div className={cardClassName}>
            <h6 className="mb-8 bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-2xl font-normal uppercase tracking-[0.04em] text-transparent md:mb-10 md:text-3xl">
              After
            </h6>
            <WorkflowSteps steps={afterSteps} />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AutomationInAction
