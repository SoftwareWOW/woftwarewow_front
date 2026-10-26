'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import HubExploreTopicCard from './HubExploreTopicCard'
import { HUB_EXPLORE, HUB_SECTION_INNER, HUB_SECTION_SHELL } from './hub-content'

export default function HubExploreSection() {
  const section = HUB_EXPLORE

  return (
    <section id={section.id} className={`scroll-mt-28 ${HUB_SECTION_SHELL}`}>
      <div className={HUB_SECTION_INNER}>
        <RevealWrapper className="reveal-me flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <SectionLabel className="mb-4">{section.eyebrow}</SectionLabel>
            <TextAppearAnimation>
              <h2 className="text-appear">
                {section.titleBefore}
                <InstrumentText>{section.titleAccent}</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#808080] lg:max-w-[470px] lg:text-right">
            {section.description}
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {section.topics.map((topic) => (
            <HubExploreTopicCard
              key={topic.slug}
              title={topic.title}
              description={topic.description}
              image={topic.coverImage}
              href={topic.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
