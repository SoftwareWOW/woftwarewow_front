import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { WowNavLink } from '@/components/wow/nav/WowNavLink'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const services = [
  {
    title: 'Business Systems & Automation',
    description: 'Build custom operational platforms and automate everyday processes.',
    href: '/software/business-systems-automation',
  },
  {
    title: 'Custom Software Development',
    description: 'Create software designed around your unique business requirements.',
    href: '/software/custom-software-development',
  },
  {
    title: 'Integrations & Modernization',
    description: 'Connect existing platforms and improve outdated applications.',
    href: '/software/integrations-modernization',
  },
  {
    title: 'Software Support & Improvement',
    description: 'Maintain, optimize, and enhance the software your teams rely on.',
    href: '/software/software-support-improvement',
  },
]

const ArrowButton = () => (
  <div className="flex items-center justify-center overflow-hidden rounded-radius-sm border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
    <span className="translate-x-4 transition-transform duration-[400ms] group-hover:translate-x-20">
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none" aria-hidden>
        <path
          d="M5.11377 16H27.1138"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1138 7L27.1138 16L18.1138 25"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="-translate-x-24 transition-transform duration-[400ms] group-hover:-translate-x-[18px]">
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none" aria-hidden>
        <path
          d="M5.11377 16H27.1138"
          className="stroke-backgroundBody dark:stroke-secondary"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1138 7L27.1138 16L18.1138 25"
          className="stroke-backgroundBody dark:stroke-secondary"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </div>
)

/** Layout: web-applications/WhatWeBuild — linked service cards. */
const ConnectedExpertise = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Connected Expertise</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Everything you need to work <InstrumentText>smarter.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
              This is where your business goals connect to the services SoftwareWOW delivers every day.
            </p>
          </RevealWrapper>
        </div>

        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] md:grid-cols-2">
          {services.map((item) => (
            <RevealWrapper
              key={item.href}
              className="reveal-me group rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
            >
              <WowNavLink href={item.href} className="block">
                <h5 className="mb-2 lg:mb-3">{item.title}</h5>
                <p className="mb-10 text-base leading-relaxed text-[#808080] lg:mb-14">{item.description}</p>
                <ArrowButton />
              </WowNavLink>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedExpertise
