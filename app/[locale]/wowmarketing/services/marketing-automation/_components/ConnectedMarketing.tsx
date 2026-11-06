import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'

const DEFAULT_ITEMS = [
  { title: 'Email Marketing' },
  { title: 'CRM Systems' },
  { title: 'Lead Generation' },
  { title: 'Customer Journeys' },
]

/** Centered header + four connected capability labels. */
const ConnectedMarketing = ({
  eyebrow = 'CONNECTED MARKETING',
  title = 'Every tool.',
  accentTitle = 'Working together.',
  items,
}: Partial<CmsTechnologiesSection> = {}) => {
  const displayItems = mergeFeatureItems(DEFAULT_ITEMS, items)

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mb-3">
              {title}
              {accentTitle ? <InstrumentText> {accentTitle}</InstrumentText> : null}
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {displayItems.map((item) => (
            <RevealWrapper
              key={item.title}
              className="reveal-me border px-6 py-8 text-center dark:border-dark md:py-10"
            >
              <h5>{item.title}</h5>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedMarketing
