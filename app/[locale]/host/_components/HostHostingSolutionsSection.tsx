'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import ServicesV10Card from '@/components/homepage-11/ServicesV10Card'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { HOST_HOSTING_SOLUTIONS } from './host-content'

export default function HostHostingSolutionsSection() {
  const section = HOST_HOSTING_SOLUTIONS
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section ref={triggerRef} className="service-section relative overflow-x-hidden overflow-y-visible">
      <div className="container">
        <RevealWrapper className="reveal-me mb-6 flex flex-col gap-6 md:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <SectionLabel className="mb-4">{section.eyebrow}</SectionLabel>
            <h2>{section.title}</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#808080] lg:max-w-[470px] lg:text-right">
            {section.description}
          </p>
        </RevealWrapper>
      </div>

      <article
        ref={contentRef}
        className="video-section service-wrapper mt-10 flex w-fit flex-col gap-6 overflow-x-hidden overflow-y-visible pl-[5%] pr-[30px] max-md:gap-y-10 max-md:px-5 md:mt-16 md:flex-row md:flex-nowrap md:items-start md:pb-6 md:pl-[20%] md:pr-10"
      >
        <div className="grid max-h-[404px] w-[332px] shrink-0 content-between max-md:hidden">
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

        {section.services.map((service) => (
          <ServicesV10Card
            key={service.slug}
            title={service.title}
            description={service.description}
            image={service.coverImage}
            href={service.href}
          />
        ))}
      </article>
    </section>
  )
}
