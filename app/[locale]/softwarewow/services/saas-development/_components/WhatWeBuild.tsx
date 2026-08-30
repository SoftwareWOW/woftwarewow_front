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
    title: 'MVP SaaS Products',
    description: 'Launch a focused first version and validate the product.',
    icon: <DrivenCopywritingIcon />,
  },
  {
    title: 'Multi-Tenant Platforms',
    description: 'Build products designed to serve multiple customers securely.',
    icon: <ScalableSolutionsIcon />,
  },
  {
    title: 'Subscription Platforms',
    description: 'Create recurring-use products with billing and account management.',
    icon: <PsychologyWritingIcon />,
  },
]

const bottomRow: Solution[] = [
  {
    title: 'B2B SaaS',
    description: 'Software built around business workflows and customer needs.',
    icon: <SeoStrategyIcon />,
  },
  {
    title: 'SaaS Modernization',
    description: 'Improve existing products for better performance and scale.',
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
            <SectionLabel>What We Build</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3 max-sm:text-[28px]">
              From product idea to
              <br />
              <InstrumentText>scalable platform.</InstrumentText>
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
