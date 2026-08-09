import RevealWrapper from '@/components/animation/RevealWrapper'
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

const advantages: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: 'Everything connected',
    description: 'Strategy, technology, marketing and creative working together.',
    icon: <ScalableSolutionsIcon />,
  },
  {
    title: 'Built for growing businesses',
    description: 'Expert capabilities made practical and accessible for growth.',
    icon: <PsychologyWritingIcon />,
  },
  {
    title: 'AI-powered',
    description: 'Modern AI and automation applied where they create real value.',
    icon: <SeoStrategyIcon />,
  },
  {
    title: 'Strategy + execution',
    description: 'We build the plan and help turn it into action.',
    icon: <DrivenCopywritingIcon />,
  },
  {
    title: 'Results focused',
    description: 'Decisions guided by clear goals and measurable outcomes.',
    icon: <IndustryKnowledgeIcon />,
  },
]

/** Layout: Home-17 WhyChooseUsV6 — header split + 3+2 bordered cards. */
const WhatMakesUsDifferent = () => {
  const top = advantages.slice(0, 3)
  const bottom = advantages.slice(3)

  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-16 md:flex-row lg:justify-between">
          <div className="md:w-[60%] md:self-start">
            <RevealWrapper className="reveal-me mb-2">
              <SectionLabel>Differentiators</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2 className="lg:leading-[1.1]">
                What makes us <InstrumentText>different</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>

          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] md:place-self-end md:text-right">
                Expert-level services tailored for small businesses — with clarity, measurable outcomes, and accessible
                guidance under one roof.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList
                className="flex justify-end max-md:justify-center"
                itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto"
              >
                <ButtonComponent href="/contact" variant="secondary">
                  Talk to an Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <article>
          <RevealWrapper className="reveal-me mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {top.map((item) => (
              <div key={item.title} className="flex-1 border px-[30px] py-16 dark:border-dark md:py-20">
                <span>{item.icon}</span>
                <h5 className="mb-2.5 mt-5 lg:text-[28px]">{item.title}</h5>
                <p className="text-base leading-[1.6]">{item.description}</p>
              </div>
            ))}
          </RevealWrapper>

          <RevealWrapper className="reveal-me flex flex-col gap-[30px] md:flex-row">
            {bottom.map((item) => (
              <div key={item.title} className="min-h-[280px] flex-1 border px-[30px] py-16 dark:border-dark md:py-20">
                <span>{item.icon}</span>
                <h5 className="mb-2.5 mt-5 lg:text-[28px]">{item.title}</h5>
                <p className="text-base leading-[1.6]">{item.description}</p>
              </div>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default WhatMakesUsDifferent
