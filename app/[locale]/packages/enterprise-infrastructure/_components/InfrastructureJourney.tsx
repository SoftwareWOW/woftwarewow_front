import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { cmsImageSrc, mergeProcessSteps } from '@/lib/strapi/cms-section-props'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'

const DEFAULT_STEPS = [
  {
    title: 'Assess',
    description: 'Understand your systems, requirements, risks and growth needs.',
  },
  {
    title: 'Design',
    description: 'Define the right infrastructure for your business.',
  },
  {
    title: 'Deploy',
    description: 'Configure and launch your infrastructure environment.',
  },
  {
    title: 'Support',
    description: 'Maintain, monitor and evolve your infrastructure as you grow.',
  },
]

const DEFAULT_IMAGE = '/images/wow/nav/cards/software&technology.png'

type Props = Partial<CmsProcessSection>

/** Layout: Home-11 ProcessV6 — stacked bordered steps + image. */
const InfrastructureJourney = ({
  eyebrow = 'Your Infrastructure Journey',
  title = 'From assessment to ',
  accentTitle = 'ongoing support.',
  steps,
  image,
}: Props = {}) => {
  const mergedSteps = mergeProcessSteps(DEFAULT_STEPS, steps).map((step, index) => ({
    ...DEFAULT_STEPS[index],
    title: step.title,
    description: step.description,
  }))
  const imageSrc = cmsImageSrc(image, DEFAULT_IMAGE)

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              {title}
              <InstrumentText>{accentTitle}</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[100px] gap-y-14 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:mb-5 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {mergedSteps.map((step) => (
              <RevealWrapper key={step.title} className="reveal-me">
                <h5 className="lg:-tracking-[-1.08px]">{step.title}</h5>
                <p className="py-3 text-base leading-[1.6] text-[#808080]">{step.description}</p>
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
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src={imageSrc ?? ''}
              alt="Designing and deploying business infrastructure"
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureJourney
