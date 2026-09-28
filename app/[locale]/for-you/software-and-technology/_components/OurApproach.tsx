import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { cmsImageSrc } from '@/lib/strapi/cms-section-props'

/** Layout: Home-25 WhyChooseUsV8 — approach list + image + CTA. */
const OurApproach = ({
  eyebrow = 'Our Approach',
  title = 'Build what you need.\nIntegrate what already works.',
  description =
    'Not every problem needs custom software. We look at the business first—then determine where custom development, existing platforms, integrations, automation or modernization make the most sense.',
  image,
  items,
}: Partial<CmsTechnologiesSection> = {}) => {
  const displayItems = items?.length ? items : []
  const imageSrc = cmsImageSrc(image)

  if (!displayItems.length && !imageSrc) {
    return null
  }
  const titleLines = title.split('\n')

  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-16 md:flex-row lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                {titleLines[0]}
                {titleLines[1] ? (
                  <>
                    <br />
                    {titleLines[1]}
                  </>
                ) : null}
              </h2>
            </RevealWrapper>
          </div>

          <div className="w-full md:max-w-80 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] md:place-self-end md:text-right">
                {description}
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {displayItems.map((point) => (
              <RevealWrapper key={point.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
              </RevealWrapper>
            ))}

            <RevealWrapper className="reveal-me mt-7 md:mt-9 lg:mt-14">
              <ButtonComponentList className="flex justify-start" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Talk to a Technology Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          {imageSrc ? (
            <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
              <img
                src={imageSrc}
                alt={image?.alt ?? 'Technology approach — build and integrate'}
                className="h-full w-full object-cover"
              />
            </RevealWrapper>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default OurApproach
