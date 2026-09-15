import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'

const DEFAULT_TOPICS = [
  'Marketing & Growth',
  'AI & Automation',
  'Sales',
  'Branding & Creative',
  'Social Media',
  'Websites & eCommerce',
  'Software & Technology',
  'Business Systems',
  'Meaningful impact',
]

/** Layout: EverythingToGrow / ServicesV14 — centered header + 9 bordered topic cards. */
const LearningTopics = ({
  eyebrow = 'Explore',
  title = "What you'll love",
  accentTitle = 'learning here',
  description =
    'Practical topics built around the challenges growing businesses face — from marketing and AI to systems and meaningful impact.',
  items,
}: Partial<CmsTechnologiesSection> = {}) => {
  const displayTopics = mergeFeatureItems(
    DEFAULT_TOPICS.map((topic) => ({ title: topic })),
    items,
  )

  return (
    <section id="learning-topics">
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className=" relative">
          <h2 className="mb-3">
            {title}
            <br />
            <InstrumentText>{accentTitle}</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">{description}</p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {displayTopics.map((item) => (
          <RevealWrapper
            key={item.title}
            className="reveal-me rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <h5 className="mb-0">{item.title}</h5>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-14">
        <ButtonComponentList>
          <ButtonComponent href="/wowhub" variant="primary">
            Browse All Learning
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default LearningTopics
