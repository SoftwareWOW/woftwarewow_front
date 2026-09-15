import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, cmsImageSrc, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const DEFAULT_POINTS = [
  {
    title: 'Get Discovered',
    description: 'Reach travelers where they search, explore, and make decisions.',
  },
  {
    title: 'Build Desire',
    description: 'Use stronger branding, content, and visuals to make the experience worth choosing.',
  },
  {
    title: 'Drive More Bookings',
    description: 'Create clearer journeys from interest to reservation.',
  },
  {
    title: 'Improve Guest Experience',
    description: 'Make important information, communication, and digital touchpoints easier.',
  },
  {
    title: 'Build Loyalty',
    description: 'Stay connected after the experience and encourage repeat visits.',
  },
]

/** Layout: Home-12 WhyChooseUs — left list + right image. */
type WhatMattersMostProps = Partial<CmsTechnologiesSection>

const WhatMattersMost = ({
  eyebrow = 'BUILT AROUND THE GUEST',
  title = 'Make Every Step Worth',
  accentTitle = '',
  description,
  items,
  image,
}: WhatMattersMostProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems(DEFAULT_POINTS, items)
  const imageSrc = cmsImageSrc(image, '/images/wow/nav/cards/pexels-akaaljotsingh-anandpuria-156395437-10703306%201.png')

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">{header.title}{header.accentTitle ? <> <InstrumentText>{header.accentTitle}</InstrumentText></> : null}</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-[#808080]">
              We help strengthen the moments that influence how guests discover, choose, experience, and remember your
              brand.
            </p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-[#e5e5e5] dark:[&>*:not(:last-child)]:border-white/10">
            {mergedItems.map((point) => (
              <RevealWrapper key={point.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper
            as="figure"
            className="relative min-h-[320px] overflow-hidden rounded-radius-md md:min-h-[480px] md:w-1/2 lg:min-h-[560px]"
          >
            <img
              src={imageSrc ?? ''}
              alt="Hospitality and tourism guest experience"
              className="h-full min-h-[320px] w-full rounded-radius-md object-cover md:min-h-[480px] lg:min-h-[560px]"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhatMattersMost
