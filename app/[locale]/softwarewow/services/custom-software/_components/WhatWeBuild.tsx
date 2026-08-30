import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  DrivenCopywritingIcon,
  IndustryKnowledgeIcon,
  PsychologyWritingIcon,
  ScalableSolutionsIcon,
  SeoStrategyIcon,
} from '@/components/homepage-18/Icons'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

type Solution = {
  title: string
  description: string
  icon: ReactNode
}

const topRow: Solution[] = [
  {
    title: 'Business Systems',
    description: 'Custom platforms for managing operations, teams, and workflows.',
    icon: <DrivenCopywritingIcon />,
  },
  {
    title: 'Customer Platforms',
    description: 'Digital systems that improve how customers interact with your business.',
    icon: <ScalableSolutionsIcon />,
  },
  {
    title: 'Internal Tools',
    description: 'Software that simplifies repetitive processes and everyday work.',
    icon: <PsychologyWritingIcon />,
  },
]

const bottomRow: Solution[] = [
  {
    title: 'Integrated Applications',
    description: 'Connect software, data, and third-party systems into one workflow.',
    icon: <SeoStrategyIcon />,
  },
  {
    title: 'Legacy Modernization',
    description: 'Upgrade outdated systems for better performance and flexibility.',
    icon: <IndustryKnowledgeIcon />,
  },
]

/** Layout: homepage-15/WhyChooseUsV4 — 3+2 bordered icon cards. */
const WhatWeBuild = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>What We Build</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Built for the way your
              <br className="hidden md:block" />
              <InstrumentText> business works.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {topRow.map((item) => (
              <div key={item.title} className="flex-1 border px-[30px] py-10 dark:border-dark">
                <span>{item.icon}</span>
                <h5 className="mb-2.5 mt-5">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </RevealWrapper>
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            {bottomRow.map((item) => (
              <RevealWrapper key={item.title} className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
                <span>{item.icon}</span>
                <h5 className="mb-2.5 mt-5">{item.title}</h5>
                <p>{item.description}</p>
              </RevealWrapper>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default WhatWeBuild
