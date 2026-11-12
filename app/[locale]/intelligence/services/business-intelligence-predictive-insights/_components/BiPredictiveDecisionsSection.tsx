import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'

type Benefit = { title: string; description: string }

type BiPredictiveDecisionsSectionProps = {
  eyebrow: string
  title: string
  description: string
  benefits: ReadonlyArray<Benefit>
  image: { src: string; alt: string; width?: number; height?: number }
  sectionId?: string
}

/** Layout copy: homepage-13 BuiltAroundPeople (AiAssistantsFasterAnswersSection). */
export default function BiPredictiveDecisionsSection({
  eyebrow,
  title,
  description,
  benefits,
  image,
  sectionId,
}: BiPredictiveDecisionsSectionProps) {
  return (
    <section id={sectionId} className="scroll-mt-24">
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">{title}</h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
          </RevealWrapper>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:items-stretch md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {benefits.map((benefit) => (
              <RevealWrapper key={benefit.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{benefit.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{benefit.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper
            as="figure"
            className="reveal-me min-h-[280px] overflow-hidden rounded-radius-md md:w-1/2 md:min-h-0 md:self-stretch"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-radius-md md:min-h-[420px]">
              <CmsResponsiveImage
                image={image}
                alt={image.alt}
                sizes={CMS_IMAGE_SIZES.halfGrid}
                width={image.width ?? 665}
                height={image.height ?? 440}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
