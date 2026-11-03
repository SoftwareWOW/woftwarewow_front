'use client'

import SectionLabel from '@/components/wow/shared/SectionLabel'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

const buildItems = [
  {
    number: '01',
    title: 'CRM & Customer Platforms',
    description:
      'Organize leads, customer information, relationships, and sales activities in one connected experience.',
    image: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
    alt: 'CRM and customer platform interface',
  },
  {
    number: '02',
    title: 'Operations Management Systems',
    description: 'Coordinate tasks, teams, approvals, and everyday business processes more effectively.',
    image: '/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg',
    alt: 'Operations management dashboard',
  },
  {
    number: '03',
    title: 'Workflow Automation',
    description: 'Connect actions and information across your tools to reduce repetitive manual work.',
    image: '/images/wow/LandingPageNaveBare/AI and Automation 2.svg',
    alt: 'Workflow automation builder interface',
  },
  {
    number: '04',
    title: 'Reporting & Business Dashboards',
    description: 'Bring important operational information into clearer, more useful views.',
    image: '/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg',
    alt: 'Business intelligence dashboard',
  },
  {
    number: '05',
    title: 'System Integrations',
    description: 'Connect existing applications and business platforms without unnecessary replacement.',
    image: '/images/wow/LandingPageNaveBare/digital transofrmation 2.svg',
    alt: 'System integration connections',
  },
]

/** Layout: homepage-22/OurServices */
const WhatWeCanBuild = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section
      ref={triggerRef}
      className="service-section relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
    >
      <div className="container">
        <SectionLabel className="mb-3">What We Can Build</SectionLabel>
        <h2>
          The right systems for the way you <InstrumentText>work.</InstrumentText>
        </h2>
        <p className="mt-3 max-w-[770px]">
          Every business operates differently. We design and develop solutions that fit your processes, priorities, and
          existing technology.
        </p>
      </div>
      <article
        ref={contentRef}
        className="service-wrapper reveal-me mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10"
      >
        <div className="grid max-h-[404px] w-[332px] content-between">
          <p className="text-sm uppercase leading-[1.1] tracking-[3px] text-secondary dark:text-backgroundBody">
            Solutions shaped around your operations
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
        {buildItems.map((item) => (
          <div
            key={item.number}
            className="group rounded-radius-md border p-5 dark:border-dark md:w-[740px] md:p-[30px] lg:w-[890px]"
          >
            <div className="flex flex-col items-start gap-y-7 md:flex-row md:gap-x-12">
              <figure className="overflow-hidden rounded-radius-sm max-md:w-full md:w-[270px] md:shrink-0">
                <img src={item.image} alt={item.alt} className="aspect-square h-auto w-full object-cover" />
              </figure>
              <p className="text-base lg:text-lg">{item.description}</p>
            </div>
            <div className="flex items-end justify-between sm:mt-2">
              <h4 className="text-[25px] lg:text-[46px] lg:leading-[1.1] lg:tracking-[-1.44px]">{item.title}</h4>
              <span className="text-5xl font-normal leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:tracking-[-2.88px]">
                {item.number}
              </span>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default WhatWeCanBuild
