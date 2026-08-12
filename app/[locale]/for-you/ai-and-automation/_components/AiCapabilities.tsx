import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import type { ReactNode } from 'react'

type AiService = {
  title: string
  description: string
  icon: ReactNode
}

const sliceOne: AiService[] = [
  {
    title: 'AI Chatbots',
    description: 'Assist customers and internal teams with intelligent, context-aware responses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M8 14h24v14H8V14ZM12 18v6h16v-6H12ZM20 4l4 6H16l4-6ZM6 32l4-4h20l4 4H6Z"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
  },
  {
    title: 'Process Automation',
    description: 'Remove repetitive manual steps from everyday operations and handoffs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M6 20h8v8H6v-8ZM26 6h8v8h-8V6ZM26 26h8v8h-8v-8ZM14 14h12v12H14V14Z"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics',
    description: 'Surface patterns and forecasts that help teams act before problems grow.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M6 30h28M10 26l6-8 6 4 8-12"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const sliceTwo: AiService[] = [
  {
    title: 'Custom AI Models',
    description: 'Build models tuned to your data, workflows and business rules.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="6" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="2" />
        <path
          d="M20 6v4M20 30v4M6 20h4M30 20h4M10 10l3 3M27 27l3 3M10 30l3-3M27 13l3-3"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Workflow Integration',
    description: 'Connect AI into the tools your team already uses every day.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M8 16h10v8H8v-8ZM22 8h10v8H22V8ZM22 24h10v8H22v-8Z"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Intelligent Reporting',
    description: 'Turn scattered data into dashboards and insights people can act on.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M8 32V18h6v14M18 32V8h6v24M28 32V22h6v10"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
  },
]

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({ service }: { service: AiService }) => (
  <RevealWrapper className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span>{service.icon}</span>
        <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
        <p>{service.description}</p>
      </div>
      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span className="inline-flex [&_circle]:stroke-backgroundBody [&_path]:fill-backgroundBody dark:[&_circle]:stroke-secondary dark:[&_path]:fill-secondary [&_path]:dark:stroke-secondary">
          {service.icon}
        </span>
        <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
          {service.title}
        </h5>
        <p className="mb-10 text-backgroundBody dark:text-secondary">{service.description}</p>
        <Link href="/contact" className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
          <div className="rv-button-top flex items-center gap-2">
            <span className="text-nowrap">Learn More</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none" aria-hidden>
                <path
                  d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                  className="stroke-backgroundBody dark:stroke-secondary"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="rv-button-bottom flex items-center">
            <span className="text-nowrap">Learn More</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none" aria-hidden>
                <path
                  d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </div>
  </RevealWrapper>
)

/** Layout: Home-13 ServicesV12 — split header + hover-flip service cards (3+3 grid). */
const AiCapabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>AI Capabilities</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.20]">
                Practical AI. Built for <InstrumentText>real work.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] md:place-self-end md:text-right">
                Smart tools that sharpen decisions, reduce manual work, and help teams move faster with confidence.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center">
                <ButtonComponent href="/contact" variant="white">
                  Explore AI Services
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
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

export default AiCapabilities
