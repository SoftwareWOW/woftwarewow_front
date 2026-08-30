import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  AdvertisingCopyIcon,
  BrandMessagingIcon,
  DigitalContentIcon,
  DrivenCopywritingIcon,
  IndustryKnowledgeIcon,
  ScalableSolutionsIcon,
} from '@/components/homepage-18/Icons'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

type Capability = {
  title: string
  description: string
  icon: ReactNode
  href: string
}

const topRow: Capability[] = [
  {
    title: 'Web Applications',
    description: 'Custom browser-based systems and platforms.',
    icon: <DrivenCopywritingIcon />,
    href: '/softwarewow/services/web-applications',
  },
  {
    title: 'Mobile Applications',
    description: 'Connected mobile experiences for customers and teams.',
    icon: <BrandMessagingIcon />,
    href: '/softwarewow/services/mobile-app-development',
  },
  {
    title: 'APIs & Integrations',
    description: 'Connect software, platforms, and business data.',
    icon: <AdvertisingCopyIcon />,
    href: '/contact',
  },
]

const bottomRow: Capability[] = [
  {
    title: 'Workflow Automation',
    description: 'Reduce manual processes through smarter systems.',
    icon: <ScalableSolutionsIcon />,
    href: '/contact',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Reliable environments for deployment and scale.',
    icon: <IndustryKnowledgeIcon />,
    href: '/contact',
  },
  {
    title: 'AI Integration',
    description: 'Add intelligent features where they create practical value.',
    icon: <DigitalContentIcon />,
    href: '/softwarewow/services/ai-automation',
  },
]

const FlipCard = ({ item }: { item: Capability }) => (
  <RevealWrapper className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span>{item.icon}</span>
        <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{item.title}</h5>
        <p>{item.description}</p>
      </div>
      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span>{item.icon}</span>
        <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
          {item.title}
        </h5>
        <p className="mb-10 text-backgroundBody dark:text-secondary">{item.description}</p>
        <ButtonComponent href={item.href} variant="secondary" size="sm-v2">
          Learn More
        </ButtonComponent>
      </div>
    </div>
  </RevealWrapper>
)

/** Layout: homepage-12/ServicesV11 — 6 hover-flip cards (3+3). */
const Capabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="mb-2">
              <SectionLabel>Capabilities</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Everything needed to build the <InstrumentText>right solution.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-72 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {topRow.map((item) => (
          <FlipCard key={item.title} item={item} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center px-5 max-lg:mt-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark">
        {bottomRow.map((item) => (
          <FlipCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Capabilities
