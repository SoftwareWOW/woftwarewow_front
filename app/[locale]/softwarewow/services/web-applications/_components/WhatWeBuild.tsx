import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Link } from '@/i18n/navigation'
import type { ReactNode } from 'react'

const IconFrame = ({ children }: { children: ReactNode }) => (
  <span className="mb-2 inline-flex size-[60px] items-center justify-center bg-backgroundBody dark:bg-dark">
    {children}
  </span>
)

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

type Solution = {
  title: string
  description: string
  icon: ReactNode
  href?: string
}

const solutions: Solution[] = [
  {
    title: 'Business Platforms',
    description: 'Custom systems for managing teams, workflows, and operations.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <rect x="14" y="3" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <rect x="3" y="14" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <rect x="14" y="14" width="7" height="7" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Customer Portals',
    description: 'Secure digital experiences for customers, members, and partners.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path
            d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'SaaS Applications',
    description: 'Scalable web products built for recurring-use business models.',
    href: '/softwarewow/services/saas-development',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 16a4 4 0 010-8 5.5 5.5 0 0110.7 1.5A3.5 3.5 0 0117 16H7z"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Dashboards & Tools',
    description: 'Interfaces that turn business data into useful actions.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 19V10M10 19V5M16 19v-7M22 19H2"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Internal Applications',
    description: 'Tools that simplify processes and reduce manual work.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="4"
            width="18"
            height="14"
            rx="1.5"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
          />
          <path d="M8 21h8M12 18v3" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        </svg>
      </IconFrame>
    ),
  },
]

/** Layout: for-you/software-and-technology/WhatWeBuild (Home-16 ServicesV14) — commit b5ae9d5 */
const WhatWeBuild = () => {
  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>What We Build</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 className="mb-3">
            From idea to working <InstrumentText>application.</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
            Purpose-built web applications designed around your users, workflows, and business requirements.
          </p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {solutions.map((item) =>
          item.href ? (
            <RevealWrapper
              key={item.title}
              className="reveal-me group rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
            >
              <Link href={item.href} className="block">
                {item.icon}
                <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{item.title}</h5>
                <p className="mb-10 text-base leading-relaxed text-[#808080] lg:mb-14">{item.description}</p>
                <ArrowButton />
              </Link>
            </RevealWrapper>
          ) : (
            <RevealWrapper
              key={item.title}
              className="reveal-me rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
            >
              {item.icon}
              <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{item.title}</h5>
              <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
            </RevealWrapper>
          ),
        )}
      </div>
    </section>
  )
}

export default WhatWeBuild
