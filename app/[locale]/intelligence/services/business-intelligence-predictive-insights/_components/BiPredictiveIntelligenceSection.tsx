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

type Capability = {
  title: string
  description: string
}

const ICON_POOL: ReactNode[] = [
  <DrivenCopywritingIcon key="0" />,
  <ScalableSolutionsIcon key="1" />,
  <PsychologyWritingIcon key="2" />,
  <SeoStrategyIcon key="3" />,
  <IndustryKnowledgeIcon key="4" />,
]

const cardClassName =
  'group flex-1 border px-[30px] py-10 transition-colors duration-300 ease-in-out hover:bg-backgroundBody dark:border-dark dark:hover:bg-secondary'

type BiPredictiveIntelligenceSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  capabilities: ReadonlyArray<Capability>
  sectionId?: string
}

/** Layout copy: homepage-15/WhyChooseUsV4 (softwarewow WhatWeBuild) — 3+2 grid, white invert on hover. */
export default function BiPredictiveIntelligenceSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  capabilities,
  sectionId,
}: BiPredictiveIntelligenceSectionProps) {
  const topRow = capabilities.slice(0, 3)
  const bottomRow = capabilities.slice(3, 5)

  return (
    <section
      id={sectionId}
      className="scroll-mt-24 relative overflow-hidden"
    >
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              {titleBefore}
              <InstrumentText>{titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-[770px] text-[#808080]">{description}</p>
          </TextAppearAnimation>
        </div>

        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {topRow.map((item, index) => (
              <div key={item.title} className={cardClassName}>
                <span className="inline-flex transition-colors duration-300 [&_path]:fill-secondary [&_path]:dark:fill-backgroundBody dark:group-hover:[&_path]:fill-backgroundBody group-hover:[&_path]:fill-secondary">
                  {ICON_POOL[index] ?? ICON_POOL[0]}
                </span>
                <h5 className="mb-2.5 mt-5 transition-colors duration-300 group-hover:text-secondary dark:group-hover:text-backgroundBody">
                  {item.title}
                </h5>
                <p className="text-[#808080] transition-colors duration-300 group-hover:text-secondary/70 dark:group-hover:text-backgroundBody/70">
                  {item.description}
                </p>
              </div>
            ))}
          </RevealWrapper>
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            {bottomRow.map((item, index) => (
              <div key={item.title} className={`${cardClassName} min-h-[322px] py-20`}>
                <span className="inline-flex transition-colors duration-300 [&_path]:fill-secondary [&_path]:dark:fill-backgroundBody dark:group-hover:[&_path]:fill-backgroundBody group-hover:[&_path]:fill-secondary">
                  {ICON_POOL[index + 3] ?? ICON_POOL[0]}
                </span>
                <h5 className="mb-2.5 mt-5 transition-colors duration-300 group-hover:text-secondary dark:group-hover:text-backgroundBody">
                  {item.title}
                </h5>
                <p className="text-[#808080] transition-colors duration-300 group-hover:text-secondary/70 dark:group-hover:text-backgroundBody/70">
                  {item.description}
                </p>
              </div>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}
