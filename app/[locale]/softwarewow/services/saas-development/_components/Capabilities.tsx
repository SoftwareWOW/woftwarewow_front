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
  id: string
  icon: ReactNode
  title: string
  description: string
}

const topRow: Capability[] = [
  {
    id: 'product-ux',
    icon: <DrivenCopywritingIcon />,
    title: 'Product & UX',
    description: 'User journeys, dashboards, onboarding, and product interfaces.',
  },
  {
    id: 'auth-roles',
    icon: <BrandMessagingIcon />,
    title: 'Authentication & Roles',
    description: 'Secure accounts, teams, permissions, and access controls.',
  },
  {
    id: 'billing',
    icon: <ScalableSolutionsIcon />,
    title: 'Billing & Subscriptions',
    description: 'Recurring plans, upgrades, and payment integrations.',
  },
]

const bottomRow: Capability[] = [
  {
    id: 'apis',
    icon: <AdvertisingCopyIcon />,
    title: 'APIs & Integrations',
    description: 'Connect external tools, services, and business systems.',
  },
  {
    id: 'cloud',
    icon: <IndustryKnowledgeIcon />,
    title: 'Cloud & Infrastructure',
    description: 'Reliable deployment and scalable application environments.',
  },
  {
    id: 'analytics',
    icon: <DigitalContentIcon />,
    title: 'Analytics & Admin',
    description: 'Management tools, reporting, and product visibility.',
  },
]

const CapabilityCard = ({ item }: { item: Capability }) => (
  <div className="flex-1 border px-[30px] py-20 dark:border-dark">
    <span>{item.icon}</span>
    <h5 className="mb-2.5 mt-5 lg:text-[35px]">{item.title}</h5>
    <p className="text-base leading-[1.6]">{item.description}</p>
  </div>
)

/** Layout: homepage-18/OurExpertise — grouped bordered icon cards, two rows of three. */
const Capabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="md:w-[60%] md:self-start">
            <RevealWrapper className="reveal-me mb-2">
              <SectionLabel>Capabilities</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Everything behind a modern <InstrumentText>SaaS product.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="primary" size="sm">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <article>
          <RevealWrapper className="reveal-me mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {topRow.map((item) => (
              <CapabilityCard key={item.id} item={item} />
            ))}
          </RevealWrapper>
          <RevealWrapper className="reveal-me flex flex-col gap-[30px] md:flex-row">
            {bottomRow.map((item) => (
              <CapabilityCard key={item.id} item={item} />
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default Capabilities
