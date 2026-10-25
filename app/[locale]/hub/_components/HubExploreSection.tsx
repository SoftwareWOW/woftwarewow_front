'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import HubExploreTopicCard from './HubExploreTopicCard'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { HUB_EXPLORE } from './hub-content'

export default function HubExploreSection() {
  const section = HUB_EXPLORE
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section
      id={section.id}
      ref={triggerRef}
      className="scroll-mt-28 service-section relative overflow-x-hidden overflow-y-visible bg-background pb-14 pt-14 transition-colors duration-300 dark:bg-background md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
    >
      <div className="container">
        <RevealWrapper className="reveal-me mb-6 flex flex-col gap-6 md:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
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
      </div>

      <article
        ref={contentRef}
        className="video-section service-wrapper mt-10 flex w-fit flex-col gap-6 overflow-x-hidden overflow-y-visible pl-[5%] pr-[30px] max-md:gap-y-10 max-md:px-5 md:mt-16 md:flex-row md:flex-nowrap md:items-start md:pb-6"
      >
        {section.topics.map((topic) => (
          <HubExploreTopicCard
            key={topic.slug}
            title={topic.title}
            description={topic.description}
            image={topic.coverImage}
            href={topic.href}
          />
        ))}
      </article>
    </section>
  )
}
