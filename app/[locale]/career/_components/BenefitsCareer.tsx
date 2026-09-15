import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const DEFAULT_BENEFITSDATA = [
  { id: 1, title: 'Flexible scheduling options' },
  { id: 2, title: 'Career development' },
  { id: 3, title: 'Work-life balance' },
  { id: 4, title: 'Recognition & rewards' },
  { id: 5, title: 'Modern tools & technology' },
  { id: 6, title: 'Collaborative culture' },
  { id: 7, title: 'Innovation first' },
  { id: 8, title: 'Continuous learning' },
  { id: 9, title: 'Meaningful impact' },
]

type BenefitsCareerProps = Partial<CmsTechnologiesSection>

const BenefitsCareer = ({
  eyebrow = 'Benefits',
  title = 'Why You\'ll Love Working Here',
  accentTitle = '',
  description,
  items,
}: BenefitsCareerProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems(DEFAULT_BENEFITSDATA, items)


  return (
    <section className="overflow-hidden">
      <div className="container">
        <RevealWrapper className="mb-3 flex justify-center">
          <SectionLabel>{header.eyebrow}</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-4 text-center lg:mb-8">{header.title}</h2>
        </TextAppearAnimation>
        <RevealWrapper>
          <p className="text-appear mx-auto max-w-[750px] text-left max-lg:px-5 md:text-center">
            We believe great work happens when talented people have the freedom, tools, and opportunities to do their
            best every day.
          </p>
        </RevealWrapper>

        <div className="mt-10 grid grid-cols-1 items-center justify-center gap-[30px] sm:grid-cols-2 md:mt-[60px] lg:grid-cols-3">
          {mergedItems.map((benefit) => (
            <RevealWrapper key={benefit.id} className="border p-[30px] text-center dark:border-dark">
              {benefit.title}
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsCareer
