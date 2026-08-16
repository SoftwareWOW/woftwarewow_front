import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  AdvertisingCopyIcon,
  ArrowIcon,
  BrandMessagingIcon,
  DigitalContentIcon,
  EmailSalesCopyIcon,
  SeoCopywritingIcon,
  ThoughtLeadershipIcon,
} from '@/components/homepage-18/Icons'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import type { ReactNode } from 'react'

const included: { id: string; title: string; description: string; icon: ReactNode }[] = [
  {
    id: '1',
    title: 'VPS & Dedicated Hosting',
    description: 'Flexible infrastructure for higher-demand websites, platforms and applications.',
    icon: <BrandMessagingIcon />,
  },
  {
    id: '2',
    title: 'Cloud Infrastructure',
    description: 'Scalable resources and cloud storage for evolving business requirements.',
    icon: <SeoCopywritingIcon />,
  },
  {
    id: '3',
    title: 'Security & Protection',
    description: 'Infrastructure protection designed to strengthen reliability and resilience.',
    icon: <AdvertisingCopyIcon />,
  },
  {
    id: '4',
    title: 'Backup Solutions',
    description: 'Protect important business data and support continuity.',
    icon: <ThoughtLeadershipIcon />,
  },
  {
    id: '5',
    title: 'CDN & Performance',
    description: 'Improve content delivery and digital performance.',
    icon: <EmailSalesCopyIcon />,
  },
  {
    id: '6',
    title: 'Business Email & Domains',
    description: 'Essential business infrastructure managed alongside your hosting environment.',
    icon: <DigitalContentIcon />,
  },
]

/** Layout: Home-18 ServicesV15 — 3-column bordered icon cards with arrow hover. */
const WhatsIncluded = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>What&apos;s Included</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mt-3">
                The infrastructure your business needs to <InstrumentText>operate and grow.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="max-md:w-full md:flex-1">
            <TextAppearAnimation>
              <p className="text-appear text-[#808080] md:text-right">
                Bring hosting, cloud, security and essential infrastructure together through one coordinated solution.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList className="flex justify-end max-md:justify-center">
                <ButtonComponent href="/contact" variant="white">
                  Talk to an Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {included.map((item) => (
          <RevealWrapper key={item.id} className="reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]">
            <Link href="/contact">
              <span>{item.icon}</span>
              <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{item.title}</h5>
              <p className="mb-20 text-[#808080] lg:mb-[106px]">{item.description}</p>
              <div className="flex items-center justify-center overflow-hidden border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
                <ArrowIcon />
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default WhatsIncluded
