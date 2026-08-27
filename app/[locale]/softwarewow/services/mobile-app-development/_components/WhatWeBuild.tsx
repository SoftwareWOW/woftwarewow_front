import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import type { ReactNode } from 'react'

type Solution = {
  title: string
  description: string
  icon: ReactNode
}

const sliceOne: Solution[] = [
  {
    title: 'iOS Apps',
    description: 'Purpose-built experiences for Apple devices.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2c1.5 0 2.5 1 3 2.5C16.5 5 17 6 16.5 7.5c-.3.8-1 1.5-2 1.5h-.5c.5 2.5 2 4.5 4 6-.5 1.5-1.5 3-3 4-1 .5-2 .5-3 .5s-2 0-3-.5c-1.5-1-2.5-2.5-3-4 2-1.5 3.5-3.5 4-6H9.5c-1 0-1.7-.7-2-1.5C7 6 7.5 5 8.5 4.5 9 3 10 2 12 2z"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Android Apps',
    description: 'Reliable applications for the Android ecosystem.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="7"
          y="4"
          width="10"
          height="16"
          rx="2"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="17" r="1" className="fill-secondary dark:fill-backgroundBody" />
      </svg>
    ),
  },
  {
    title: 'Cross-Platform Apps',
    description: 'One product experience across iOS and Android.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="8" height="14" rx="1.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        <rect x="13" y="5" width="8" height="14" rx="1.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        <path d="M11 12h2" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const sliceTwo: Solution[] = [
  {
    title: 'Customer Apps',
    description: 'Mobile experiences that connect customers with your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        <path
          d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Business Apps',
    description: 'Mobile tools that simplify work for teams in the field or office.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({ service }: { service: Solution }) => (
  <RevealWrapper className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span>{service.icon}</span>
        <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
        <p>{service.description}</p>
      </div>
      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span className="inline-flex [&_circle]:fill-backgroundBody [&_circle]:stroke-backgroundBody [&_path]:stroke-backgroundBody [&_rect]:stroke-backgroundBody dark:[&_circle]:fill-secondary dark:[&_circle]:stroke-secondary dark:[&_path]:stroke-secondary dark:[&_rect]:stroke-secondary">
          {service.icon}
        </span>
        <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
          {service.title}
        </h5>
        <p className="mb-10 text-backgroundBody dark:text-secondary">{service.description}</p>
        <Link href="/contact" className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
          <div className="rv-button-top flex items-center gap-2">
            <span className="text-nowrap">Start a Project</span>
          </div>
          <div className="rv-button-bottom flex items-center">
            <span className="text-nowrap">Start a Project</span>
          </div>
        </Link>
      </div>
    </div>
  </RevealWrapper>
)

/** Layout: for-you/ai-and-automation/AiCapabilities (Home-13 ServicesV12) */
const WhatWeBuild = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>What We Build</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear lg:leading-[1.20]">
              Apps built for <InstrumentText>real-world</InstrumentText> use.
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-[770px] text-[#808080]">
              From customer experiences to business tools, we build mobile applications around your users and goals.
            </p>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {sliceOne.map((service) => (
          <FlipCard key={service.title} service={service} />
        ))}
      </div>

      <div
        className={`${gridRowClass} max-lg:mt-5 max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}
      >
        {sliceTwo.map((service) => (
          <FlipCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}

export default WhatWeBuild
