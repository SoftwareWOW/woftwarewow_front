'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Image from 'next/image'
import Link from 'next/link'
import { HUB_EXPLORE } from './hub-content'

export default function HubExploreSection() {
  const section = HUB_EXPLORE
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section
      id={section.id}
      ref={triggerRef}
      className="scroll-mt-28 service-section relative overflow-x-hidden overflow-y-visible bg-background transition-colors duration-300 dark:bg-background"
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
        className="service-wrapper mt-10 flex flex-col gap-6 overflow-x-hidden overflow-y-visible max-md:px-5 md:mt-16 md:w-fit md:flex-row md:flex-nowrap md:items-stretch md:pl-[12%] md:pr-10 md:pb-6"
      >
        <div className="grid max-h-[404px] w-[280px] shrink-0 content-between max-md:hidden">
          <p className="text-sm uppercase leading-[1.1] tracking-[3px] text-secondary dark:text-backgroundBody">
            {section.eyebrow}
          </p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={97} height={96} viewBox="0 0 97 96" fill="none" aria-hidden>
              <path
                d="M60.5 48L78.5 66M78.5 66L60.5 84M78.5 66H24.5V12"
                className="stroke-secondary dark:stroke-backgroundBody"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {section.topics.map((topic) => (
          <Link
            key={topic.slug}
            href={topic.href}
            className="group relative flex w-[280px] shrink-0 flex-col overflow-hidden rounded-radius-sm border dark:border-dark sm:w-[300px] md:w-[240px] lg:w-[220px] xl:w-[240px]"
          >
            <figure className="relative aspect-[3/4] w-full overflow-hidden">
              <Image src={topic.coverImage} alt={topic.title} fill sizes="240px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/75" aria-hidden />
            </figure>
            <div className="relative flex flex-1 flex-col p-5 transition-colors duration-500 group-hover:bg-primary">
              <h3 className="text-xl leading-tight transition-colors duration-500 group-hover:text-white md:text-2xl">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#808080] transition-colors duration-500 group-hover:text-white/90">
                {topic.description}
              </p>
            </div>
          </Link>
        ))}
      </article>
    </section>
  )
}
