import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ReactNode } from 'react'

const solutions = [
  {
    title: 'Legacy System Modernization',
    description:
      'Give aging software new life with improvements to architecture, performance, usability, and maintainability.',
    image: '/images/wow/LandingPageNaveBare/engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc%202.svg',
  },
  {
    title: 'System Integrations',
    description:
      'Connect the applications your business depends on to reduce disconnected workflows and improve information flow.',
    image: '/images/wow/LandingPageNaveBare/digital%20transofrmation%202.svg',
  },
  {
    title: 'API Development & Integration',
    description:
      'Build secure, reliable connections that allow your applications, platforms, and services to communicate.',
    image: '/images/wow/LandingPageNaveBare/SaaS%20Dev%202.svg',
  },
  {
    title: 'Cloud Modernization',
    description:
      'Update and prepare existing applications for modern cloud environments, with scalability and operational needs in mind.',
    image: '/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg',
  },
  {
    title: 'Workflow & Data Integration',
    description:
      'Connect processes and information across systems to reduce manual handoffs and keep operations moving.',
    image: '/images/wow/LandingPageNaveBare/AI%20and%20Automation%202.svg',
  },
]

const RowChrome = ({
  children,
  isLast,
}: {
  children: ReactNode
  isLast: boolean
}) => (
  <div
    className={`group relative overflow-hidden border-x border-t bg-backgroundBody dark:border-dark dark:bg-dark ${isLast ? 'border-b' : ''}`}
  >
    {children}
  </div>
)

const RowBody = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => (
  <>
    <div className="group relative z-10 flex cursor-pointer items-center justify-between px-5 py-10 md:px-10 md:py-[60px]">
      <h3 className="relative z-10 flex flex-col gap-x-32 gap-y-3 text-[25px] font-light leading-[25.2px] md:flex-row md:items-center md:text-4xl md:leading-[1.2] lg:text-[42px] xl:text-5xl">
        <span className="font-light">{title}</span>
        <p className="mt-2 max-w-lg pr-[2px] text-base md:text-xl md:leading-[1.4] md:tracking-[0.4px]">{description}</p>
      </h3>

      <div className="transform transition-transform duration-500 ease-in-out group-hover:rotate-90">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M5 16H27"
            className="stroke-black dark:stroke-white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 7L27 16L18 25"
            className="stroke-black dark:stroke-white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>

    <div className="overflow-hidden px-5 pb-5 pt-4 md:px-10 md:pb-10">
      <figure className="h-0 overflow-hidden rounded-radius-md -translate-y-4 transform opacity-0 transition-all duration-700 ease-in-out group-hover:h-[110px] group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:h-[160px] lg:group-hover:h-[230px]">
        <img
          src={image}
          alt=""
          aria-hidden
          className="block h-full w-full rounded-radius-md object-cover transition-all duration-700 ease-in-out"
        />
      </figure>
    </div>
  </>
)

/** Layout: homepage-04/ServicesV5 — hover-expand service rows. */
const WhatWeDo = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>What We Do</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Better connections. <InstrumentText>Stronger foundations.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-[770px]">
              Your technology should work as one connected ecosystem, not a collection of isolated tools. We modernize
              existing applications, improve system connectivity, and create foundations that support what&apos;s next.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="w-full">
          <div className="overflow-hidden rounded-radius-md">
          {solutions.map((solution, index) => {
            const isLast = index === solutions.length - 1
            const body = <RowBody title={solution.title} description={solution.description} image={solution.image} />

            return (
              <RowChrome key={solution.title} isLast={isLast}>
                {body}
              </RowChrome>
            )
          })}
          </div>
        </RevealWrapper>

        <RevealWrapper className="flex justify-center">
          <ButtonComponentList itemClassName="max-md:w-full">
            <ButtonComponent href="/contact" variant="white" fullWidth>
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhatWeDo
