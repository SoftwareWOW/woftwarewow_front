import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroImage, CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const gains = [
  'Access to WOW’s SMB ecosystem of growing businesses',
  'Cross-service opportunities across software, marketing, creative, and growth',
  'Collaborative delivery with coordinated teams',
  'Joint growth initiatives — co-marketing, referrals, and shared offers',
]

const DEFAULT_IMAGE: CmsHeroImage = {
  src: '/images/wow/nav/cards/pexels-fauxels-3183132 1.png',
  alt: 'Built for mutual growth',
}

/** Layout: Home-25 WhatWeOffer — image + list. */
type MutualGrowthProps = Partial<CmsTechnologiesSection> & {
  image?: CmsHeroImage | null
}

const MutualGrowth = ({
  eyebrow = 'Mutual Growth',
  title,
  accentTitle,
  description,
  items,
  image,
}: MutualGrowthProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems([], items)


  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-x-16">
          <RevealWrapper className="reveal-me col-span-12 lg:col-span-6 lg:h-full">
            <img
              src={image?.src ?? DEFAULT_IMAGE.src}
              alt={image?.alt ?? DEFAULT_IMAGE.alt}
              className="h-full w-full object-cover"
            />
          </RevealWrapper>

          <RevealWrapper className="col-span-12 space-y-7 lg:col-span-6">
            <div className="space-y-3">
              <SectionLabel>{header.eyebrow}</SectionLabel>
              <h2>
                Built for mutual <InstrumentText>growth</InstrumentText>
              </h2>
              <p className="text-lg font-normal leading-[28.8px] tracking-[0.36px] text-black/70 dark:text-backgroundBody/70">
                Partnerships that expand reach, deepen delivery, and create shared opportunity.
              </p>
            </div>

            <ul className="list-inside list-disc space-y-1.5">
              {gains.map((item) => (
                <li
                  key={item}
                  className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ButtonComponentList
              className="mt-2 flex justify-start"
              itemClassName="block w-full text-center md:inline-block md:w-auto"
            >
              <ButtonComponent href="/meet" variant="secondary">
                Talk to Our Team
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default MutualGrowth
