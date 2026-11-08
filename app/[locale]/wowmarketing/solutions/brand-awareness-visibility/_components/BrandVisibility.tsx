import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import { mergeProcessSteps, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

type FrameworkStep = {
  id: number
  title: string
  headline?: string
  description: string
}

const DEFAULT_STEPS: FrameworkStep[] = [
  {
    id: 1,
    title: 'Discover',
    headline: 'Know Your Audience.',
    description: 'Identify your ideal customers, their interests, and the channels they use.',
  },
  {
    id: 2,
    title: 'Strategize',
    headline: 'Plan Your Visibility.',
    description: 'Create a clear campaign strategy with the right message, channels, and targeting.',
  },
  {
    id: 3,
    title: 'Amplify',
    headline: 'Expand Your Reach.',
    description: 'Launch coordinated content and advertising campaigns to connect with new audiences.',
  },
  {
    id: 4,
    title: 'Optimize',
    headline: 'Build Lasting Impact.',
    description: 'Monitor campaign performance and refine your approach to strengthen brand recognition.',
  },
]

type BrandVisibilityProps = Partial<CmsProcessSection> & {
  accentTitle?: string
  frameworkTagline?: string
  ctaLabel?: string
  ctaHref?: string
  steps?: Array<{ title: string; headline?: string; description?: string }>
}

/** Layout matches digital-strategy `WowGrowthFramework` (OUR FRAMEWORK). */
const BrandVisibility = ({
  eyebrow = 'Brand Visibility',
  title = 'From Visibility to',
  accentTitle = 'Recognition.',
  description,
  steps,
  frameworkTagline,
  ctaLabel = 'Start Growing Your Reach',
  ctaHref = '/contact',
}: BrandVisibilityProps = {}) => {
  const header = mergeSectionHeader(
    {
      eyebrow,
      title,
      accentTitle,
      description: description ?? '',
    },
    { eyebrow, title, accentTitle, description },
  )
  const tagline =
    frameworkTagline ??
    (description ||
      'We follow a focused process to help your brand reach the right people and build lasting recognition.')

  const cmsSteps = steps as FrameworkStep[] | undefined
  const mergedSteps: FrameworkStep[] =
    cmsSteps?.length === 4
      ? cmsSteps.map((step, index) => ({
          id: index + 1,
          title: step.title,
          headline: step.headline ?? DEFAULT_STEPS[index]?.headline,
          description: step.description ?? DEFAULT_STEPS[index]?.description ?? '',
        }))
      : (mergeProcessSteps(DEFAULT_STEPS, steps) as FrameworkStep[])

  return (
    <section id="brand-visibility" className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <HeroGradientAnimation />
          <RevealWrapper className="mb-5">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </RevealWrapper>
          <HeadingWithInstrument
            className="max-w-4xl text-[38px] font-light leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]"
            before={header.title}
            accent={header.accentTitle ?? ''}
          />
          {tagline ? (
            <TextAppearAnimation02>
              <p className="text-appear text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">{tagline}</p>
            </TextAppearAnimation02>
          ) : null}

          <div className="mt-7 md:mt-14">
            <ButtonComponent href={ctaHref} variant="white">
              {ctaLabel}
            </ButtonComponent>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-[26px] lg:mt-0">
          {mergedSteps.map((step, index) => {
            const isLeftColumn = index % 2 === 0

            return (
              <RevealWrapper
                key={step.id}
                className={isLeftColumn ? 'border-r px-[30px] py-[50px] dark:border-dark' : 'px-[30px] py-[50px]'}
              >
                <h2 className="font-instrument text-5xl font-light italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
                  {String(index + 1).padStart(2, '0')}
                </h2>
                <h5 className="mb-4 mt-4">{step.title}</h5>
                {step.headline ? <h6 className="mb-4 text-base font-normal leading-snug md:text-lg">{step.headline}</h6> : null}
                <p className="text-base text-[#808080]">{step.description}</p>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BrandVisibility
