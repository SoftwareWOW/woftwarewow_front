'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 3

const capabilities = [
  {
    id: 1,
    title: 'API Development & Integration',
    subtitle: 'Connect applications and services through purpose-built APIs.',
    items: [
      'Secure API design',
      'Application-to-application connections',
      'Services and data working together',
      'Documented, maintainable endpoints',
    ],
  },
  {
    id: 2,
    title: 'Third-Party Integrations',
    subtitle: 'Connect external platforms and services with your software.',
    items: [
      'External platform connections',
      'Service-to-service data flow',
      'Reliable handoffs between tools',
      'Fewer isolated systems',
    ],
  },
  {
    id: 3,
    title: 'CRM & ERP Integrations',
    subtitle: 'Improve the flow of information across core business systems.',
    items: [
      'Core business system connections',
      'Customer and operations data in sync',
      'Fewer manual transfers',
      'Clearer information across teams',
    ],
  },
  {
    id: 4,
    title: 'Cloud Modernization',
    subtitle: 'Move or adapt applications for modern infrastructure.',
    items: [
      'Prepare applications for the cloud',
      'Migrate existing systems',
      'Adapt architecture for modern hosting',
      'Improve reliability and scale',
    ],
  },
  {
    id: 5,
    title: 'Application Modernization',
    subtitle: 'Improve existing software architecture, interfaces, and maintainability.',
    items: [
      'Upgrade aging application architecture',
      'Improve interfaces and usability',
      'Make systems easier to maintain',
      'Preserve what still creates value',
    ],
  },
  {
    id: 6,
    title: 'Data Integration',
    subtitle: 'Connect information across systems and reduce isolated data.',
    items: [
      'Connect information across platforms',
      'Reduce isolated data stores',
      'Smoother reporting and operations',
      'A foundation for future capabilities',
    ],
  },
]

/** Layout: wow/LandascapComponets/SolutionToChallench — accordion + See More. */
const Capabilities = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleCapabilities = showAll ? capabilities : capabilities.slice(0, INITIAL_VISIBLE_COUNT)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleToggleShowAll = () => {
    if (showAll && activeIndex !== null && activeIndex >= INITIAL_VISIBLE_COUNT) {
      setActiveIndex(null)
    }
    setShowAll((prev) => !prev)
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
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row lg:justify-between">
          <div className="flex-1">
            <RevealWrapper>
              <SectionLabel className="mb-5">Capabilities</SectionLabel>
            </RevealWrapper>
            <h2 className="text-appear max-lg:leading-[1.33] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              Connect the technology behind your <InstrumentText className="lg:text-[65px]">business.</InstrumentText>
            </h2>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <p className="text-appear max-w-lg text-[#808080] transition-colors duration-300 dark:text-[#808080] md:justify-self-end md:text-right">
              APIs, third-party platforms, CRM & ERP, cloud, applications, and data — connected without a full rewrite.
            </p>
            <RevealWrapper className="mt-6 flex justify-end md:mt-8">
              <ButtonComponentList>
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="w-full [&>*:not(:last-child)]:mb-6">
          {visibleCapabilities.map((capability, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={capability.id}
                className={`accordion-item relative w-full rounded-radius-sm border bg-backgroundBody px-5 py-0 duration-300 dark:bg-dark ${
                  isActive ? 'open active border-black dark:border-white/10' : 'border-black/10 dark:border-white/10'
                }`}
                data-active={isActive ? true : false}
              >
                <div
                  className={`accordion-header group relative flex cursor-pointer justify-between py-[35px] ${
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
                  <h3 className="flex flex-col gap-x-10 gap-y-3 font-outfit text-[25px] font-[500px] leading-[25.2px] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] md:flex-row md:items-center md:font-medium md:leading-[1.2] lg:text-3xl">
                    <span>{capability.title}</span>
                    <span className="mt-2 pr-[2px] text-base font-normal text-[#808080] transition-colors duration-300 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {capability.subtitle}
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
                    <div className="accordion-body flex flex-col justify-start gap-x-10 pb-10 duration-300 md:flex-row lg:gap-x-[73px]">
                      <ul className="[&>*:not(:last-child)]:mb-1">
                        {capability.items.slice(0, Math.ceil(capability.items.length / 2)).map((item) => (
                          <li
                            key={item}
                            className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-[#555555] transition-colors duration-300 dark:text-[#999999]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="[&>*:not(:last-child)]:mb-1">
                        {capability.items.slice(Math.ceil(capability.items.length / 2)).map((item) => (
                          <li
                            key={item}
                            className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-[#555555] transition-colors duration-300 dark:text-[#999999]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </RevealWrapper>

        <RevealWrapper className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:mt-14">
          {capabilities.length > INITIAL_VISIBLE_COUNT && (
            <ButtonComponentList>
              <ButtonComponent type="button" variant="white" onClick={handleToggleShowAll} ariaExpanded={showAll}>
                {showAll ? 'See Less' : 'See More'}
              </ButtonComponent>
            </ButtonComponentList>
          )}
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="secondary">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Capabilities
