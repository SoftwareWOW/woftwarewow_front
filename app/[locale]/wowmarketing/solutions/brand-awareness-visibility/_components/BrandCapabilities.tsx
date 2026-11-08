import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'

type BrandCapabilitiesProps = Partial<CmsTechnologiesSection> & {
  closingLine?: string
  showCtas?: boolean
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
}

/** Layout: Home-12 WhyChooseUs — centered header + list + image + optional CTAs. */
const BrandCapabilities = ({
  eyebrow = 'Brand Capabilities',
  title = 'From strategy to every expression of your brand.',
  description,
  items,
  image,
  closingLine,
  showCtas = true,
  primaryCtaLabel = 'Build Your Brand',
  secondaryCtaLabel = 'Talk to a Branding Expert',
}: BrandCapabilitiesProps = {}) => {
  const displayCapabilities =
    items?.map((item, index) => ({
      number: String(index + 1).padStart(2, '0'),
      title: item.title,
      description: item.description ?? '',
    })) ?? []
  const hasSideImage = Boolean(image?.src)

  if (!displayCapabilities.length && !hasSideImage) {
    return null
  }

  const fallbackImage = '/images/wow/Hero/Growth/image (3).png'

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          {title ? (
            <TextAppearAnimation>
              <h2 className="text-appear mb-3">{title}</h2>
            </TextAppearAnimation>
          ) : null}
          {description ? (
            <TextAppearAnimation>
              <p className="text-appear mx-auto max-w-2xl text-[#808080]">{description}</p>
            </TextAppearAnimation>
          ) : null}
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          {displayCapabilities.length ? (
            <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
              {displayCapabilities.map((item) => (
                <RevealWrapper key={item.number} className="reveal-me py-3.5 pr-[30px] lg:py-[30px]">
                  <h5>
                    <span className="mr-2 text-[#808080]">{item.number}</span>
                    {item.title}
                  </h5>
                  <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
                </RevealWrapper>
              ))}
            </div>
          ) : null}

          {hasSideImage ? (
            <RevealWrapper as="figure" className="reveal-me relative min-h-[320px] overflow-hidden rounded-radius-md md:min-h-[480px] md:w-1/2">
              <CmsResponsiveImage
                image={image}
                fallbackSrc={fallbackImage}
                alt={image?.alt ?? 'Brand capabilities and visibility strategy'}
                fill
                sizes={CMS_IMAGE_SIZES.halfGrid}
                className="rounded-radius-md object-cover"
              />
            </RevealWrapper>
          ) : null}
        </div>

        {closingLine ? (
          <RevealWrapper className="reveal-me mt-10 text-center md:mt-14">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#808080] md:text-xl">{closingLine}</p>
          </RevealWrapper>
        ) : null}

        {showCtas ? (
          <RevealWrapper className="mt-10 flex justify-center gap-3 max-md:flex-col max-md:items-center md:mt-14 md:gap-4">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                {primaryCtaLabel}
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                {secondaryCtaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}

export default BrandCapabilities
