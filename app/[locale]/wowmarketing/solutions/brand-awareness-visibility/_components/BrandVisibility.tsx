import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'

type QualityStep = {
  title: string
  headline: string
  description: string
}

const DEFAULT_QUALITIES: QualityStep[] = [
  {
    title: 'Distinctive',
    headline: 'Easy to recognize.',
    description: "A visual and verbal identity that doesn't disappear into the category.",
  },
  {
    title: 'Relevant',
    headline: 'Right for your audience.',
    description: "Creative decisions grounded in who you're trying to reach.",
  },
  {
    title: 'Consistent',
    headline: 'Recognizable everywhere.',
    description: 'A system that works across channels, teams and formats.',
  },
  {
    title: 'Usable',
    headline: 'Built for the real world.',
    description: 'Guidelines and assets your team can actually apply day to day.',
  },
]

type BrandVisibilityProps = Partial<CmsProcessSection> & {
  title?: string
  titleAccent?: string
  titleUsesInstrument?: boolean
  secondaryDescription?: string
  ctaLabel?: string
  ctaHref?: string
  steps?: QualityStep[]
}

/** Layout: split heading + 2×2 approach grid. */
const BrandVisibility = ({
  eyebrow = 'Brand Visibility',
  title = 'More than a',
  titleAccent = 'good-looking logo.',
  titleUsesInstrument = true,
  description = 'We shape brands that stand the test of time',
  secondaryDescription,
  steps,
  ctaLabel = 'Start Now',
  ctaHref = '/contact',
}: BrandVisibilityProps = {}) => {
  const cmsSteps = steps as QualityStep[] | undefined
  const displayQualities: QualityStep[] =
    cmsSteps?.length === 4
      ? cmsSteps.map((step, i) => ({
          title: step.title,
          headline: step.headline ?? DEFAULT_QUALITIES[i]?.headline ?? '',
          description: step.description ?? DEFAULT_QUALITIES[i]?.description ?? '',
        }))
      : DEFAULT_QUALITIES

  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
        <div className="w-full lg:max-w-[45%]">
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-light leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              {titleUsesInstrument && titleAccent ? (
                <>
                  {title} <InstrumentText>{titleAccent}</InstrumentText>
                </>
              ) : (
                title
              )}
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear mt-3 text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">{description}</p>
          </TextAppearAnimation02>
          {secondaryDescription ? (
            <TextAppearAnimation02>
              <p className="text-appear mt-4 text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">
                {secondaryDescription}
              </p>
            </TextAppearAnimation02>
          ) : null}

          <RevealWrapper className="reveal-me mt-7 md:mt-14">
            <ButtonComponentList className="flex justify-start">
              <ButtonComponent href={ctaHref} variant="white">
                {ctaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:max-w-[55%]">
          {displayQualities.map((item, index) => (
            <RevealWrapper
              key={item.title}
              className={`reveal-me px-[30px] py-[50px] dark:border-dark ${
                index % 2 === 0 ? 'sm:border-r' : ''
              } ${index < 2 ? 'border-b dark:border-b-dark' : ''}`}
            >
              <h2 className="font-instrument text-4xl font-light italic leading-tight tracking-[-1px] uppercase sm:text-5xl md:text-[55px] lg:text-[64px] xl:leading-[1.15]">
                {item.title}
              </h2>
              <h5 className="mb-4 mt-4">{item.headline}</h5>
              <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandVisibility
