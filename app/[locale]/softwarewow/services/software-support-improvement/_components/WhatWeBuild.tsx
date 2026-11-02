import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  DrivenCopywritingIcon,
  IndustryKnowledgeIcon,
  PsychologyWritingIcon,
  ScalableSolutionsIcon,
  SeoStrategyIcon,
} from '@/components/homepage-18/Icons'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
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
    title: 'Software Maintenance',
    description: 'Keep your applications up to date with ongoing fixes, technical updates, and routine maintenance.',
    icon: <DrivenCopywritingIcon />,
  },
  {
    title: 'Bug Fixes & Troubleshooting',
    description: 'Identify and resolve software issues that affect functionality, reliability, and user experience.',
    icon: <ScalableSolutionsIcon />,
  },
  {
    title: 'Performance Optimization',
    description: 'Improve application speed, responsiveness, and efficiency by addressing technical bottlenecks.',
    icon: <PsychologyWritingIcon />,
  },
]

const bottomRow: Solution[] = [
  {
    title: 'Security & Updates',
    description:
      'Maintain dependencies, address identified vulnerabilities, and strengthen application security over time.',
    icon: <SeoStrategyIcon />,
  },
  {
    title: 'Features & Enhancements',
    description: 'Extend existing software with new functionality, improved workflows, and better user experiences.',
    icon: <IndustryKnowledgeIcon />,
  },
]

/** Layout: homepage-14/WhyChooseUsV3 — 3+2 bordered icon cards. */
const WhatWeBuild = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>What We Do</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3 max-sm:text-[28px]">
              Keep it running.
              <br />
              <InstrumentText>Keep it improving.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-[770px] text-base leading-relaxed text-[#808080]">
              From everyday maintenance to meaningful product enhancements, we help you protect your software investment
              and keep your applications performing as your business evolves.
            </p>
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
        <RevealWrapper className="mt-8 flex justify-center md:mt-16">
          <ButtonComponentList itemClassName="mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="white">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhatWeBuild
