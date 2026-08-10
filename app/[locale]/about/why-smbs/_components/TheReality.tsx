import RevealWrapper from '@/components/animation/RevealWrapper'
import {
  AdvertisingCopyIcon,
  BrandMessagingIcon,
  DigitalContentIcon,
  EmailSalesCopyIcon,
  SeoCopywritingIcon,
  ThoughtLeadershipIcon,
} from '@/components/homepage-18/Icons'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

const challenges: { id: string; title: string; description: string; icon: ReactNode }[] = [
  {
    id: '1',
    title: 'Technology keeps changing.',
    description: 'Businesses have to decide what is worth adopting.',
    icon: <BrandMessagingIcon />,
  },
  {
    id: '2',
    title: 'Marketing keeps fragmenting.',
    description: 'Search, social, paid, email and content all compete for attention.',
    icon: <SeoCopywritingIcon />,
  },
  {
    id: '3',
    title: 'AI is changing the rules.',
    description: "The opportunity is huge, but knowing where to start isn't easy.",
    icon: <AdvertisingCopyIcon />,
  },
  {
    id: '4',
    title: 'Customers expect more.',
    description: 'Fast websites, great experiences and immediate responses have become normal.',
    icon: <ThoughtLeadershipIcon />,
  },
  {
    id: '5',
    title: 'Sales needs better systems.',
    description: 'Leads, CRM, automation all set up increasingly need to work together.',
    icon: <EmailSalesCopyIcon />,
  },
  {
    id: '6',
    title: 'Specialists are expensive to build in-house.',
    description: "Hiring an expert team across every discipline isn't realistic for many SMBs.",
    icon: <DigitalContentIcon />,
  },
]

/** Layout: Home-18 ServicesV15 — 6 bordered icon cards in a responsive grid. */
const TheReality = () => {
  return (
    <section>
      <div className="container mb-10 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>The Reality</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 className="mx-auto max-w-4xl">
            Running a small business has never felt this <InstrumentText>complex.</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me mt-4">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
            The expectations are getting bigger. The resources aren&apos;t always growing with them.
          </p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {challenges.map((item) => (
          <RevealWrapper
            key={item.id}
            className="reveal-me border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <span>{item.icon}</span>
            <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{item.title}</h5>
            <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default TheReality
