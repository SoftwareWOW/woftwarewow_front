import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { cmsImageSrc, mergeFeatureItems } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

const DEFAULT_ITEMS = [
  {
    title: 'Brand Positioning',
    description: 'Value proposition, audience positioning, messaging, and brand direction.',
  },
  {
    title: 'Visual Identity',
    description: 'Brand identity, visual system, and supporting creative assets.',
  },
  {
    title: 'Personal or Business Website',
    description: 'A credible digital destination that communicates expertise and value.',
  },
  {
    title: 'Thought Leadership',
    description: 'Content themes, articles, insights, and authority-building content direction.',
  },
  {
    title: 'Social Positioning',
    description: 'Profile optimization, channel positioning, and content foundations.',
  },
  {
    title: 'Reputation & Visibility',
    description: 'Credibility-building assets, testimonials, media positioning, and reputation support.',
  },
]

const DEFAULT_IMAGE = '/images/wow/nav/cards/social media start 1.png'

type Props = Partial<CmsTechnologiesSection>

/** Home-12 — WhyChooseUs: centered header + list + image + CTA. */
const WhatsIncluded = ({
  eyebrow = "What's Included",
  title = 'Everything you need to strengthen your presence.',
  description = 'A coordinated set of brand, content, digital, and reputation-building essentials.',
  items,
  image,
}: Props = {}) => {
  const mergedItems = mergeFeatureItems(DEFAULT_ITEMS, items)
  const imageSrc = cmsImageSrc(image, DEFAULT_IMAGE)

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">{title}</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">{description}</p>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {mergedItems.map((item) => (
              <RevealWrapper key={item.title} className="reveal-me py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{item.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-sm md:w-1/2">
            <img
              src={imageSrc ?? ''}
              alt="Brand authority package essentials"
              className="h-full w-full rounded-radius-sm object-cover"
            />
          </RevealWrapper>
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="/contact" variant="primary">
              Build Your Authority
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhatsIncluded
