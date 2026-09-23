import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroImage, CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const DEFAULT_POINTS = [
  {
    title: 'Business goals',
    description: 'Built around the outcomes that matter most.',
  },
  {
    title: 'Industry context',
    description: 'Shaped by your industry and competitive landscape.',
  },
  {
    title: 'Market & customer',
    description: 'Focused on your audience and market opportunities.',
  },
  {
    title: 'Growth stage',
    description: 'Matched to where your business is today.',
  },
  {
    title: 'Budget & resources',
    description: 'Prioritized for practical, measurable returns.',
  },
]

type BuiltAroundYourBusinessProps = Partial<CmsProcessSection> & {
  image?: CmsHeroImage | null
}

const DEFAULT_IMAGE = {
  src: '/images/home-5/why-rivor.png',
  alt: 'Strategies built around your business',
}

const BuiltAroundYourBusiness = ({
  eyebrow = 'Built Around You',
  title = 'Strategies built around',
  accentTitle = 'your business',
  description,
  steps,
  image,
}: BuiltAroundYourBusinessProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const mergedSteps = mergeProcessSteps(DEFAULT_POINTS, steps)


  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </RevealWrapper>
          <HeadingWithInstrument
            className="mt-3 text-center"
            before={header.title}
            accent={header.accentTitle ?? ''}
          />
          <TextAppearAnimation>
            <p className="text-appear">
              Tailored by goals, industry, market, customer, maturity, and budget
            </p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b">
            {mergedSteps.map((point) => (
              <RevealWrapper key={point.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{point.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="md:w-1/2">
            <img
              src={image?.src ?? DEFAULT_IMAGE.src}
              alt={image?.alt ?? DEFAULT_IMAGE.alt}
              className="h-full w-full rounded-radius-sm sm:rounded-radius-sm md:rounded-radius-md"
            />
          </RevealWrapper>
        </div>
        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/meet" variant="primary">
              Book a Strategy Session
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuiltAroundYourBusiness
