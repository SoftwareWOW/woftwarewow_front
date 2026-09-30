import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { cmsImageSrc } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

type Props = Partial<CmsTechnologiesSection>

/** Home-12 — WhyChooseUs: centered header + list + image + CTA. */
const WhatsIncluded = ({ eyebrow, title, description, items, image }: Props = {}) => {
  const displayItems =
    items?.map((item) => ({
      title: item.title,
      description: item.description ?? '',
    })) ?? []
  const imageSrc = cmsImageSrc(image)

  if (!displayItems.length && !imageSrc && !title) {
    return null
  }

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          {eyebrow ? (
            <RevealWrapper className="reveal-me mb-3 flex justify-center">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
          ) : null}
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
          {displayItems.length ? (
            <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
              {displayItems.map((item) => (
                <RevealWrapper key={item.title} className="reveal-me py-3.5 pr-[30px] lg:py-[30px]">
                  <h5>{item.title}</h5>
                  {item.description ? (
                    <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
                  ) : null}
                </RevealWrapper>
              ))}
            </div>
          ) : null}

          {imageSrc ? (
            <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-sm md:w-1/2">
              <img
                src={imageSrc}
                alt={image?.alt ?? 'Brand authority package essentials'}
                className="h-full w-full rounded-radius-sm object-contain"
              />
            </RevealWrapper>
          ) : null}
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
