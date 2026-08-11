import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

const IconFrame = ({ children }: { children: ReactNode }) => (
  <span className="mb-2 inline-flex size-[60px] items-center justify-center bg-backgroundBody dark:bg-dark">
    {children}
  </span>
)

const solutions: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: 'Custom Software',
    description: 'Solutions designed around your specific workflows, requirements and goals.',
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
          <path
            d="M9 10l-2 2 2 2M15 10l2 2-2 2"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Mobile Apps',
    description: 'Useful, intuitive mobile experiences for customers, teams or operations.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="7"
            y="2"
            width="10"
            height="20"
            rx="2"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="18" r="1" className="fill-secondary dark:fill-backgroundBody" />
          <path
            d="M17 9a3 3 0 010 6"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'SaaS Products',
    description: 'Turn a software idea into a scalable digital product.',
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
    title: 'Business Systems & Internal Tools',
    description: 'Make everyday operations easier with purpose-built tools and workflows.',
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
    title: 'System Modernization',
    description: 'Upgrade legacy systems and outdated technology for better performance and scalability.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="3" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path
            d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Integrations & Automation',
    description: 'Connect platforms and reduce repetitive work through smarter workflows.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="9" cy="10" r="3" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <circle cx="16" cy="14" r="3" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path
            d="M11.5 11.5l2 1"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
]

/** Layout: Home-16 ServicesV14 — 6 bordered cards without hover CTA. */
const WhatWeBuild = () => {
  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>What We Build</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 className="mb-3">
            From business tools to
            <InstrumentText> digital products.</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
            Build something new, improve what already exists, or connect the systems your business depends on.
          </p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {solutions.map((item) => (
          <RevealWrapper
            key={item.title}
            className="reveal-me rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            {item.icon}
            <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{item.title}</h5>
            <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default WhatWeBuild
