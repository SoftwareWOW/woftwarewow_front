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
    id: 'maintenance',
    icon: <DrivenCopywritingIcon />,
    title: 'Application Maintenance',
    description: 'Ongoing software updates, dependency management, and technical maintenance.',
  },
  {
    id: 'troubleshooting',
    icon: <BrandMessagingIcon />,
    title: 'Troubleshooting & Bug Fixes',
    description: 'Investigation, debugging, and resolution of functional and technical issues.',
  },
  {
    id: 'performance',
    icon: <ScalableSolutionsIcon />,
    title: 'Performance & Optimization',
    description: 'Application performance reviews, code improvements, and technical bottleneck resolution.',
  },
]

const bottomRow: Capability[] = [
  {
    id: 'security',
    icon: <AdvertisingCopyIcon />,
    title: 'Security & Stability',
    description: 'Security updates, vulnerability remediation, and improvements to application reliability.',
  },
  {
    id: 'features',
    icon: <IndustryKnowledgeIcon />,
    title: 'Feature Development',
    description: 'New capabilities, workflow enhancements, and improvements to existing functionality.',
  },
  {
    id: 'monitoring',
    icon: <DigitalContentIcon />,
    title: 'Monitoring & Technical Support',
    description:
      'Application monitoring, issue investigation, and ongoing technical assistance based on agreed support arrangements.',
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
                Everything your software needs to <InstrumentText>stay ahead.</InstrumentText>
              </h2>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-3 max-w-2xl">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">
                From technical maintenance to product evolution, we bring together the expertise needed to support and
                improve your existing applications.
              </p>
            </RevealWrapper>
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
