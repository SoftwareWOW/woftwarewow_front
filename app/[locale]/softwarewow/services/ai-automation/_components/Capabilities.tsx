import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  DrivenCopywritingIcon,
  IndustryKnowledgeIcon,
  PsychologyWritingIcon,
  ScalableSolutionsIcon,
  SeoStrategyIcon,
  DigitalContentIcon,
} from '@/components/homepage-18/Icons'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

type Capability = {
  title: string
  description: string
  icon: ReactNode
}

const topRow: Capability[] = [
  {
    title: 'Custom Business Applications',
    description: 'Purpose-built software for managing internal operations, processes, and business activities.',
    icon: <DrivenCopywritingIcon />,
  },
  {
    title: 'Workflow & Process Automation',
    description: 'Automated approvals, notifications, task routing, and recurring operational processes.',
    icon: <PsychologyWritingIcon />,
  },
  {
    title: 'CRM & ERP Integrations',
    description: 'Connect customer, financial, and operational systems to improve information flow.',
    icon: <ScalableSolutionsIcon />,
  },
]

const bottomRow: Capability[] = [
  {
    title: 'APIs & System Connectivity',
    description: 'Enable applications, platforms, and services to communicate through reliable integrations.',
    icon: <SeoStrategyIcon />,
  },
  {
    title: 'Data & Reporting',
    description: 'Centralize business information and create dashboards that make operational performance easier to understand.',
    icon: <DigitalContentIcon />,
  },
  {
    title: 'AI-Assisted Operations',
    description: 'Introduce intelligent features where they can support teams, reduce manual effort, and improve workflows.',
    icon: <IndustryKnowledgeIcon />,
  },
]

const CapabilityCard = ({ item }: { item: Capability }) => (
  <RevealWrapper className="flex-1 rounded-radius-md border px-[30px] py-20 dark:border-dark">
    <span>{item.icon}</span>
    <h5 className="mb-2.5 mt-5 lg:text-[35px]">{item.title}</h5>
    <p className="text-base leading-[1.6] text-[#808080]">{item.description}</p>
  </RevealWrapper>
)

/** Layout: homepage-17/WhyChooseUsV6 — bordered icon cards in two rows. */
const Capabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="md:w-[60%] md:self-start">
            <RevealWrapper className="mb-2">
              <SectionLabel>Capabilities</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Everything connected. <InstrumentText>Everything working together.</InstrumentText>
              </h2>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-3 max-w-2xl">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">
                We combine custom development, automation, and integration capabilities to create business systems
                that are practical, reliable, and built for everyday use.
              </p>
            </RevealWrapper>
          </div>

          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {topRow.map((item) => (
              <CapabilityCard key={item.title} item={item} />
            ))}
          </RevealWrapper>
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            {bottomRow.map((item) => (
              <CapabilityCard key={item.title} item={item} />
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default Capabilities
