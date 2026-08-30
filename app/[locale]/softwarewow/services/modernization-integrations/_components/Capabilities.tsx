'use client'

import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import { useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

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

/** Layout: homepage-03/ServicesV3 — dark accordion capability groups. */
const Capabilities = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row lg:justify-between">
          <div className="flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>Capabilities</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear max-lg:leading-[1.33]">
                Connect the technology behind your <InstrumentText>business.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:justify-self-end md:text-right">
                APIs, third-party platforms, CRM & ERP, cloud, applications, and data — connected without a full rewrite.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {capabilities.map((capability, index) => (
            <div key={capability.id} className="accordion-item overflow-hidden bg-secondary duration-300">
              <div
                className={`accordion-header group relative flex cursor-pointer justify-between px-5 py-[35px] md:px-10 ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="flex flex-col gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-white md:flex-row md:items-center md:font-medium md:leading-[1.2] lg:text-5xl">
                  <span className="text-inherit">{capability.title}</span>
                  <span className="mt-2 pr-[2px] text-base text-[#ffffff99] md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                    {capability.subtitle}
                  </span>
                </h3>
                <div className="accordion-header-iconV3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="active-arrow absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 duration-300 ease-faq-body-transition group-hover:rotate-90 md:size-8"
                    aria-hidden
                  >
                    <path d="M5 16H27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="accordion-body ml-2.5 flex flex-col justify-start gap-x-10 px-10 pb-10 duration-300 sm:pt-6 md:ml-6 md:flex-row lg:gap-x-[73px]">
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {capability.items.slice(0, Math.ceil(capability.items.length / 2)).map((item) => (
                        <li
                          key={item}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-backgroundBody/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {capability.items.slice(Math.ceil(capability.items.length / 2)).map((item) => (
                        <li
                          key={item}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-backgroundBody/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Capabilities
