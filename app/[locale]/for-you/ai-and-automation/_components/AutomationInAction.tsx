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
  'relative rounded-radius-md border border-secondary/15 px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/25 md:pt-16'

const WorkflowSteps = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-col items-center text-center">
    {steps.map((step, index) => (
      <div key={step} className="w-full">
        <p className="text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70">{step}</p>
        {index < steps.length - 1 && (
          <ArrowDown aria-hidden className="mx-auto my-3 size-5 opacity-40" strokeWidth={1.5} />
        )}
      </div>
    ))}
  </div>
)

/** Layout: Why SMBs TheGap — two bordered comparison columns with arrow workflow steps. */
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

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-x-10 gap-y-10 md:mt-16 lg:grid-cols-2">
          <div className={cardClassName}>
            <h6 className="mb-8 text-sm font-normal uppercase tracking-[0.08em] max-md:text-base">Before</h6>
            <WorkflowSteps steps={beforeSteps} />
          </div>

          <div className={cardClassName}>
            <h6 className="mb-8 bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-sm font-normal uppercase tracking-[0.08em] text-transparent max-md:text-base">
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
