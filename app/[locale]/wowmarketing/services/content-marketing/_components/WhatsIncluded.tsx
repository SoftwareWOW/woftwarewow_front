import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

type Props = Partial<CmsTechnologiesSection> & {
  ctaLabel?: string
  ctaHref?: string
}

/** Home-12 — WhyChooseUs: centered header + list + image + CTA. */
const WhatsIncluded = ({
  eyebrow,
  title,
  description,
  items,
  image,
  ctaLabel = 'Build Your Authority',
  ctaHref = '/contact',
}: Props = {}) => {
  const displayItems =
    items?.map((item) => ({
      title: item.title,
      description: item.description ?? '',
    })) ?? []
  const hasImage = Boolean(image?.src)

  if (!displayItems.length && !hasImage && !title) {
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

        <div className="flex flex-col-reverse gap-y-8 md:grid md:grid-cols-2 md:items-stretch md:gap-x-[30px]">
          {displayItems.length ? (
            <div className="min-h-0 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
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

          {hasImage ? (
            <RevealWrapper
              as="figure"
              className="reveal-me relative min-h-[280px] w-full md:min-h-0 md:h-full"
            >
              <div className="absolute inset-0 overflow-hidden rounded-radius-md [clip-path:inset(0_round_var(--radius-md))]">
                <CmsResponsiveImage
                  image={image}
                  alt={image?.alt ?? 'Brand authority package essentials'}
                  fill
                  sizes={CMS_IMAGE_SIZES.halfGrid}
                  className="object-cover"
                />
              </div>
            </RevealWrapper>
          ) : null}
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href={ctaHref} variant="primary">
              {ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhatsIncluded
