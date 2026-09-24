import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { partnerBenefits as DEFAULT_PARTNERBENEFITS } from '../_data/partners'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, cmsImageSrc, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

/** Layout: Home-12 WhyChooseUs — 5 stacked benefit rows + image. */
type WhyPartnerWithWowProps = Partial<CmsTechnologiesSection>

const WhyPartnerWithWow = ({
  eyebrow = 'WHY WOW',
  title = 'Built for mutual growth.',
  accentTitle = '',
  description,
  items,
  image,
}: WhyPartnerWithWowProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedItems = mergeFeatureItems(DEFAULT_PARTNERBENEFITS, items)
  const imageSrc = cmsImageSrc(image, '/images/wow/Hero/devision/Accelerate.jpg')
  const imageAlt = image?.alt ?? 'WOW partner ecosystem'


  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <RevealWrapper className="reveal-me mb-4 flex justify-center md:mb-5">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">{header.title}</h2>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b dark:[&>*]:border-dark">
            {mergedItems.map((benefit) => (
              <RevealWrapper key={benefit.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{benefit.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{benefit.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src={imageSrc ?? ''}
              alt={imageAlt}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Become a Partner
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhyPartnerWithWow
