'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import type { ReactNode } from 'react'

addCollection(logos)

type CapabilityCard = {
  title: string
  description: string
  icon: ReactNode
}

const iconFrontend = (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="4" width="18" height="14" rx="1.5" className="stroke-current" strokeWidth="1.5" />
    <path d="M8 21h8M12 18v3" className="stroke-current" strokeWidth="1.5" />
    <path d="M9 10l-2 2 2 2M15 10l2 2-2 2" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const iconBackend = (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" aria-hidden>
    <ellipse cx="12" cy="6" rx="7" ry="3" className="stroke-current" strokeWidth="1.5" />
    <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" className="stroke-current" strokeWidth="1.5" />
    <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" className="stroke-current" strokeWidth="1.5" />
  </svg>
)

const iconDatabase = (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" aria-hidden>
    <ellipse cx="12" cy="5" rx="8" ry="3" className="stroke-current" strokeWidth="1.5" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" className="stroke-current" strokeWidth="1.5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" className="stroke-current" strokeWidth="1.5" />
  </svg>
)

const iconIntegrations = (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="9" cy="10" r="3" className="stroke-current" strokeWidth="1.5" />
    <circle cx="16" cy="14" r="3" className="stroke-current" strokeWidth="1.5" />
    <path d="M11.5 11.5l2 1" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const iconCloud = (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M7 16a4 4 0 010-8 5.5 5.5 0 0110.7 1.5A3.5 3.5 0 0117 16H7z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const iconAi = (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="3" className="stroke-current" strokeWidth="1.5" />
    <path
      d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const topRowCards: CapabilityCard[] = [
  {
    title: 'Frontend',
    description: 'Modern, responsive application interfaces',
    icon: iconFrontend,
  },
  {
    title: 'Backend',
    description: 'Reliable application logic and APIs',
    icon: iconBackend,
  },
  {
    title: 'Databases',
    description: 'Structured and scalable data architecture',
    icon: iconDatabase,
  },
]

const bottomRowCards: CapabilityCard[] = [
  {
    title: 'Integrations',
    description: 'APIs, third-party platforms, and business systems',
    icon: iconIntegrations,
  },
  {
    title: 'Cloud',
    description: 'Deployment and scalable infrastructure',
    icon: iconCloud,
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent features and automated workflows',
    icon: iconAi,
  },
]

const tools = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Docker', icon: 'logos:docker-icon' },
]

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-xl:justify-start max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({ card, widthClass }: { card: CapabilityCard; widthClass: string }) => (
  <RevealWrapper className={`reveal-me group relative min-h-[410px] w-full overflow-hidden ${widthClass}`}>
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span className="inline-flex text-secondary dark:text-backgroundBody">{card.icon}</span>
        <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] max-sm:text-2xl">{card.title}</h5>
        <p>{card.description}</p>
      </div>

      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span className="inline-flex text-backgroundBody dark:text-secondary">{card.icon}</span>
        <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary max-sm:text-2xl">
          {card.title}
        </h5>
        <p className="text-backgroundBody dark:text-secondary">{card.description}</p>
      </div>
    </div>
  </RevealWrapper>
)

const cardWidth = 'md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]'

/** Layout: BuiltToPerform / Home-24 ServicesV16 flip cards + Home-06 ClientV4 tech logos. */
const Capabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Capabilities</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 lg:leading-[1.21]">
              Built for performance, integration, and <InstrumentText>scale.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {topRowCards.map((card) => (
          <FlipCard key={card.title} card={card} widthClass={cardWidth} />
        ))}
      </div>

      <div className={`${gridRowClass} lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}>
        {bottomRowCards.map((card) => (
          <FlipCard key={card.title} card={card} widthClass={cardWidth} />
        ))}
      </div>

      <div className="container mt-14 md:mt-20">
        <RevealWrapper className="mx-auto grid w-fit grid-cols-2 border-l border-t dark:border-dark sm:grid-cols-4 lg:grid-cols-7">
          {tools.map((tool) => (
            <figure
              key={tool.name}
              className="flex size-[110px] items-center justify-center border-b border-r dark:border-dark sm:size-[120px] md:size-[130px]"
            >
              <Icon
                icon={tool.icon}
                width={48}
                height={48}
                aria-label={tool.name}
                className="text-secondary dark:text-backgroundBody"
              />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Capabilities
