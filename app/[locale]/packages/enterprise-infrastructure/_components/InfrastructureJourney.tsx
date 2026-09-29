import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import processImg from '@/public/images/process-img-01.png'
import Image from 'next/image'
import { cmsImageSrc } from '@/lib/strapi/cms-section-props'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'

type Props = Partial<CmsProcessSection>

/** Layout: Home-11 ProcessV6 — stacked bordered steps + image. */
const InfrastructureJourney = ({ eyebrow, title, accentTitle, steps, image }: Props = {}) => {
  const displaySteps =
    steps?.map((step) => ({
      title: step.title,
      description: step.description ?? '',
    })) ?? []
  const imageSrc = cmsImageSrc(image)

  if (!displaySteps.length && !title) {
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
              <h2 className="text-appear my-3">
                {title}
                {accentTitle ? <InstrumentText>{accentTitle}</InstrumentText> : null}
              </h2>
            </TextAppearAnimation>
          ) : null}
        </div>
        <div className="flex flex-col-reverse gap-x-[100px] gap-y-14 md:flex-row">
          {displaySteps.length ? (
            <div className="md:w-1/2 [&>*:not(:last-child)]:mb-5 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
              {displaySteps.map((step) => (
                <RevealWrapper key={step.title} className="reveal-me">
                  <h5 className="lg:-tracking-[-1.08px]">{step.title}</h5>
                  {step.description ? (
                    <p className="py-3 text-base leading-[1.6] text-[#808080]">{step.description}</p>
                  ) : null}
                </RevealWrapper>
              ))}
              <RevealWrapper className="mt-7 md:mt-10">
                <ButtonComponentList className="flex max-md:justify-center">
                  <ButtonComponent href="/contact" variant="primary">
                    Build Your Infrastructure
                  </ButtonComponent>
                </ButtonComponentList>
              </RevealWrapper>
            </div>
          ) : null}
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Designing and deploying business infrastructure"
                className="h-full w-full rounded-radius-md object-cover"
              />
            ) : (
              <Image
                src={processImg}
                alt="Designing and deploying business infrastructure"
                className="h-full w-full rounded-radius-md object-cover"
              />
            )}
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureJourney
