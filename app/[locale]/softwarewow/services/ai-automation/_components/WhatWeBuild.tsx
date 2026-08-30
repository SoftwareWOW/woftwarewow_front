import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  AdvertisingCopyIcon,
  ArrowIcon,
  BrandMessagingIcon,
  DigitalContentIcon,
  EmailSalesCopyIcon,
  SeoCopywritingIcon,
} from '@/components/homepage-18/Icons'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import type { ReactNode } from 'react'

type Solution = {
  id: string
  title: string
  description: string
  icon: ReactNode
  href: string
}

const solutions: Solution[] = [
  {
    id: 'ai-assistants',
    title: 'AI Assistants',
    description: 'Smart assistants that support teams and customers.',
    icon: <BrandMessagingIcon />,
    href: '/contact',
  },
  {
    id: 'chatbots',
    title: 'Chatbots',
    description: 'Automated conversations for support, sales, and service.',
    icon: <EmailSalesCopyIcon />,
    href: '/contact',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Reduce repetitive tasks across everyday operations.',
    icon: <SeoCopywritingIcon />,
    href: '/contact',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    description: 'Connect AI capabilities with the tools you already use.',
    icon: <AdvertisingCopyIcon />,
    href: '/contact',
  },
  {
    id: 'data-insights',
    title: 'Data & Insights',
    description: 'Turn business data into clearer, more useful decisions.',
    icon: <DigitalContentIcon />,
    href: '/contact',
  },
]

/** Layout: homepage-18/ServicesV15 — icon cards in a responsive grid. */
const WhatWeBuild = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>What We Build</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mt-3">
                Practical AI. Useful <InstrumentText>automation.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="max-md:w-full md:flex-1">
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {solutions.map((service) => (
          <RevealWrapper
            key={service.id}
            className="reveal-me group rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <Link href={service.href} className="block">
              <span>{service.icon}</span>
              <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{service.title}</h5>
              <p className="mb-20 lg:mb-[106px]">{service.description}</p>
              <div className="flex items-center justify-center overflow-hidden rounded-radius-sm border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
                <ArrowIcon />
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default WhatWeBuild
