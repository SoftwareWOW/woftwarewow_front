import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

const IconFrame = ({ children }: { children: ReactNode }) => (
  <span className="mb-2 inline-flex size-[52px] items-center justify-center">{children}</span>
)

const capabilities: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: 'Social Strategy',
    description: 'Channel strategy, audience direction and content planning built around clear objectives.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="3" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path
            d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="1" className="fill-secondary dark:fill-backgroundBody" />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Content & Campaigns',
    description: 'Social posts, short-form content and campaigns designed for the platforms your audience uses.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 10l8-6 8 6v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 14h6M9 17h4"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Community Management',
    description: 'Support conversations, audience engagement and stronger online communities.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="9" cy="9" r="2.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <circle cx="16" cy="10" r="2" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path
            d="M4 18c.8-2.2 2.6-3.5 5-3.5s4.2 1.3 5 3.5M13.5 14.5c1.4-.3 2.8.2 3.8 1.5"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Paid Social',
    description: 'Targeted social campaigns designed around reach, acquisition or conversion objectives.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="8" cy="10" r="2.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="2" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <circle cx="16" cy="15" r="2" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path
            d="M10.2 11.2l3.2-1.6M10.5 11.8l3.2 2"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Influencer & Creator Collaborations',
    description: 'Identify and activate relevant creators and collaborations where they make strategic sense.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="9" cy="9" r="2.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <circle cx="15.5" cy="9" r="2.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
          <path
            d="M9 6.2l.6-1.4M15.5 6.2l.6-1.4M8.2 6.5l-1.2-.8M16.3 6.5l1.2-.8"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4.5 18c.7-2 2.4-3.2 4.5-3.2s3.8 1.2 4.5 3.2M14 14.8c1.3-.2 2.6.3 3.5 1.4"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconFrame>
    ),
  },
  {
    title: 'Analytics & Optimization',
    description: 'Track performance, learn what resonates, and continuously improve reach and engagement.',
    icon: (
      <IconFrame>
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="4"
            width="18"
            height="14"
            rx="1.5"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
          />
          <path
            d="M7 14l3-3 2.5 2.5L17 9"
            className="stroke-secondary dark:stroke-backgroundBody"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17" cy="16" r="2.5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
        </svg>
      </IconFrame>
    ),
  },
]

/** Layout: Home-13 ServicesV12 adapted to mock — centered header + 6 capability cards. */
const SocialCapabilities = () => {
  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Social Capabilities</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 className="mb-3">
            Everything behind a
            <InstrumentText> stronger social </InstrumentText>
            presence.
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
            From deciding what to say to getting it in front of the right people.
          </p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {capabilities.map((item) => (
          <RevealWrapper
            key={item.title}
            className="reveal-me rounded-radius-md border px-6 py-9 shadow-none dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            {item.icon}
            <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{item.title}</h5>
            <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-14">
        <ButtonComponentList>
          <ButtonComponent href="/contact" variant="secondary">
            Build Your Social Presence
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default SocialCapabilities
