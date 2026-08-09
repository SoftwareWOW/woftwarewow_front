import RevealWrapper from '@/components/animation/RevealWrapper'
import {
  DrivenCopywritingIcon,
  IndustryKnowledgeIcon,
  PsychologyWritingIcon,
  ScalableSolutionsIcon,
  SeoStrategyIcon,
} from '@/components/homepage-18/Icons'
import React, { FC } from 'react'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
import SectionLabel from '@/components/wow/shared/SectionLabel'

interface ExpertiseCardProps {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const ExpertiseCard: FC<ExpertiseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex-1 border px-[30px] py-20 dark:border-dark">
      <span>{icon}</span>
      <h5 className="mb-2.5 mt-5 lg:text-[35px]">{title}</h5>
      <p className="text-base leading-[1.6]">{description}</p>
    </div>
  )
}

const TOP_ROW_EXPERTISE: ExpertiseCardProps[] = [
  {
    id: 'business',
    icon: <ScalableSolutionsIcon />,
    title: 'Business',
    description: 'Growth models, priorities, and operating decisions that keep ambition grounded in reality.',
  },
  {
    id: 'brand',
    icon: <PsychologyWritingIcon />,
    title: 'Brand',
    description: 'Positioning, messaging, and identity systems that make your offer unmistakable.',
  },
  {
    id: 'marketing',
    icon: <DrivenCopywritingIcon />,
    title: 'Marketing',
    description: 'Channel strategy and campaigns designed to attract demand and convert it into revenue.',
  },
]

const BOTTOM_ROW_EXPERTISE: ExpertiseCardProps[] = [
  {
    id: 'technology-ai',
    icon: <SeoStrategyIcon />,
    title: 'Technology & AI',
    description: 'Digital foundations and intelligent systems that support scale without complexity.',
  },
  {
    id: 'sales-growth',
    icon: <IndustryKnowledgeIcon />,
    title: 'Sales & Growth',
    description: 'Funnels, offers, and revenue systems that turn strategy into measurable commercial results.',
  },
]

const StrategicExpertise: FC = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="md:w-[60%] md:self-start">
            <RevealWrapper className="reveal-me mb-2">
              <SectionLabel>Strategic Expertise</SectionLabel>
            </RevealWrapper>
            <HeadingWithInstrument
              className="lg:leading-[1.1]"
              before="Our strategic"
              accent="expertise"
            />
          </div>
          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                Five strategic areas that shape every roadmap — before specialist divisions execute the work.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList
                className="flex justify-end max-md:justify-center"
                itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto"
              >
                <ButtonComponent href="/meet" variant="primary">
                  Let&apos;s Talk
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <article>
          <RevealWrapper className="reveal-me mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {TOP_ROW_EXPERTISE.map((expertise) => (
              <ExpertiseCard
                key={expertise.id}
                id={expertise.id}
                icon={expertise.icon}
                title={expertise.title}
                description={expertise.description}
              />
            ))}
          </RevealWrapper>

          <RevealWrapper className="reveal-me flex flex-col gap-[30px] md:flex-row">
            {BOTTOM_ROW_EXPERTISE.map((expertise) => (
              <RevealWrapper
                key={expertise.id}
                className="reveal-me min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark"
              >
                <span>{expertise.icon}</span>
                <h5 className="mb-2.5 mt-5 lg:text-[35px]">{expertise.title}</h5>
                <p className="text-base leading-[1.6]">{expertise.description}</p>
              </RevealWrapper>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default StrategicExpertise
