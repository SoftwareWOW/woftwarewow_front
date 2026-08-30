import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import { ReactNode } from 'react'

const solutions = [
  {
    title: 'Legacy Modernization',
    description: 'Upgrade aging applications and technology for better performance and maintainability.',
    image: '/images/wow/nav/cards/software&technology.png',
  },
  {
    title: 'System Integrations',
    description: 'Connect business applications so information moves where it needs to.',
    image: '/images/wow/nav/cards/digital%20transofrmation%201.png',
  },
  {
    title: 'API Development',
    description: 'Build secure APIs that allow applications, services, and data to work together.',
    image: '/images/wow/nav/cards/SaaS%20Dev%201.png',
  },
  {
    title: 'Cloud Modernization',
    description: 'Prepare and migrate applications for modern cloud environments.',
    image: '/images/wow/nav/cards/sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc%201.png',
  },
  {
    title: 'Workflow Integration',
    description: 'Connect systems and automate handoffs across business processes.',
    image: '/images/wow/nav/cards/AI%20and%20Automation%201.png',
    href: '/softwarewow/services/ai-automation',
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
      <h3 className="relative z-10 flex flex-col gap-x-32 gap-y-3 text-[25px] font-normal leading-[25.2px] md:flex-row md:items-center md:text-4xl md:leading-[1.2] lg:text-[42px] xl:text-5xl">
        <span className="font-medium">{title}</span>
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

    <div className="overflow-hidden">
      <figure className="h-0 -translate-y-4 transform opacity-0 transition-all duration-700 ease-in-out group-hover:h-[110px] group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:h-[160px] lg:group-hover:h-[230px]">
        <img
          src={image}
          alt=""
          aria-hidden
          className="block h-full w-full rounded-radius-sm object-cover px-5 pb-5 pt-4 transition-all duration-700 ease-in-out md:px-10 md:pb-10"
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
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>What We Do</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Make your existing technology work <InstrumentText>better.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-2xl">
              From aging applications to disconnected platforms, we help businesses improve the systems they depend on
              without starting from zero.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px]">
          <div className="overflow-hidden rounded-radius-md">
          {solutions.map((solution, index) => {
            const isLast = index === solutions.length - 1
            const body = <RowBody title={solution.title} description={solution.description} image={solution.image} />

            if (solution.href) {
              return (
                <Link href={solution.href} key={solution.title} className="block">
                  <RowChrome isLast={isLast}>{body}</RowChrome>
                </Link>
              )
            }

            return (
              <RowChrome key={solution.title} isLast={isLast}>
                {body}
              </RowChrome>
            )
          })}
          </div>
        </RevealWrapper>

        <RevealWrapper className="mt-14 flex justify-center">
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
