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
            <div
              key={capability.id}
              className={`faq-body-transition overflow-hidden rounded-radius-md border bg-backgroundBody duration-[400ms] dark:bg-dark ${
                activeIndex === index ? 'pb-10' : 'pb-0'
              }`}
              style={{
                borderColor: activeIndex === index ? 'black' : 'transparent',
              }}
            >
              <div
                className={`relative cursor-pointer py-5 max-md:px-5 md:px-10 md:py-[35px] ${
                  activeIndex === index ? 'open active' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="flex flex-col gap-x-10 gap-y-3 text-xl font-normal max-lg:pr-[33px] sm:text-[23px] sm:font-medium md:text-[25px] md:leading-[25.2px] md:tracking-wide">
                  <span className="text-inherit">{capability.title}</span>
                  <span className="mt-2 pr-[2px] text-base text-black/70 dark:text-backgroundBody/70 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                    {capability.subtitle}
                  </span>
                </h3>
                <div
                  className={`accordion-header-icon transition-transform duration-[400ms] ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-[400ms] ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-2.5 flex flex-col justify-start gap-x-10 px-5 pb-2 duration-300 sm:pt-2 md:ml-6 md:flex-row md:px-10 lg:gap-x-[73px]">
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {capability.items.slice(0, Math.ceil(capability.items.length / 2)).map((item) => (
                        <li
                          key={item}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {capability.items.slice(Math.ceil(capability.items.length / 2)).map((item) => (
                        <li
                          key={item}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70"
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
