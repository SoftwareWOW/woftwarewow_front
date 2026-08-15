'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const servicesData = [
  {
    id: 1,
    title: 'Leads & Enquiries',
    subtitle: 'Qualify, route and respond automatically.',
    example:
      'Capture inbound leads, score them against your criteria, and route them to the right person with an automatic first response.',
  },
  {
    id: 2,
    title: 'Follow-ups',
    subtitle: 'Trigger the right communication at the right time.',
    example: 'Automate handoffs, approvals and notifications.',
  },
  {
    id: 3,
    title: 'Data & Admin',
    subtitle: 'Move, update and organize information automatically.',
    example:
      'Sync records between tools, clean duplicate data and keep CRM, spreadsheets and forms up to date without manual entry.',
  },
  {
    id: 4,
    title: 'Customer Support',
    subtitle: 'Handle common requests and route complex ones.',
    example:
      'Answer frequent questions automatically, create tickets for edge cases and escalate complex issues to the right teammate.',
  },
  {
    id: 5,
    title: 'Reporting',
    subtitle: 'Collect, summarize and distribute recurring insights.',
    example:
      'Pull metrics from your systems, summarize what changed and send recurring reports to the people who need them.',
  },
  {
    id: 6,
    title: 'Internal Workflows',
    subtitle: 'Automate handoffs, approvals and notifications.',
    example:
      'Connect approvals, task handoffs and status updates so internal processes move forward without constant follow-up.',
  },
]

/** Layout: SolutionToChallenges / StartWithTheWork — accordion closed by default, all 6 visible. */
const StartWithTheRepetitive = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] opacity-60 dark:opacity-40 sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Start with the repetitive</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-5 w-full md:mb-8">Think about what your team does every day.</h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Good automation starts with repetitive, predictable work—not with adding AI everywhere.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="w-full [&>*:not(:last-child)]:mb-6">
          {servicesData.map((service, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={service.id}
                className={`accordion-item relative w-full rounded-radius-sm border bg-backgroundBody px-5 py-0 duration-300 dark:bg-dark ${
                  isActive
                    ? 'open active border-black dark:border-white/10'
                    : 'border-black/10 dark:border-white/10'
                }`}
                data-active={isActive ? true : false}
              >
                <div
                  className={`accordion-header group relative flex w-full cursor-pointer items-start justify-between gap-4 py-[35px] ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleAccordion(index)
                    }
                  }}
                  aria-expanded={isActive}
                >
                  <h3 className="flex min-w-0 flex-1 flex-col gap-y-3 font-outfit text-[25px] font-[500px] leading-[25.2px] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] md:font-medium md:leading-[1.2] lg:text-3xl">
                    <span className="block w-full uppercase">{service.title}</span>
                    <span className="block w-full pr-[2px] text-base font-normal text-[#808080] transition-colors duration-300 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {service.subtitle}
                    </span>
                  </h3>
                  <div
                    className={`flex size-[60px] shrink-0 items-center justify-center rounded-radius-sm bg-primary transition-colors duration-300 group-hover:bg-primary/50 dark:group-hover:bg-[#1F1F1F] md:size-[65px] lg:size-[79px] ${
                      isActive ? 'bg-primary/50 dark:bg-[#1F1F1F]' : ''
                    }`}
                  >
                    <ArrowDown
                      aria-hidden
                      className={`size-10 !stroke-white !text-white transition-transform duration-300 ease-out ${
                        isActive ? 'rotate-180' : ''
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="accordion-body pb-10 duration-300">
                      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-secondary dark:text-backgroundBody">
                        Practical Example:
                      </p>
                      <p className="text-[17px] leading-[1.5] tracking-[0.36px] text-[#555555] dark:text-[#999999]">
                        {service.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default StartWithTheRepetitive
