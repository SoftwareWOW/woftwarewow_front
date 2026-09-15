import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import { mergeProcessSteps } from '@/lib/strapi/cms-section-props'

const DEFAULT_VISIBILITY_ITEMS = [
  {
    title: 'Pipeline Clarity',
    description: 'See where every opportunity stands and what needs attention next.',
  },
  {
    title: 'Activity Tracking',
    description: 'Understand what your team is doing and where momentum is building.',
  },
  {
    title: 'Forecasting',
    description: 'Build realistic revenue projections based on real pipeline data.',
  },
  {
    title: 'Reporting & Insights',
    description: 'Turn sales activity into clear reports that guide better decisions.',
  },
]

/** Layout: Home-15 BrandingProcess — split heading + 2×2 numbered grid. */
const SalesVisibility = ({
  eyebrow = 'Sales Visibility',
  description =
    'We help teams see pipeline health, activity and outcomes — so sales decisions are based on reality, not guesswork.',
  steps,
}: Partial<CmsProcessSection> = {}) => {
  const visibilityItems = mergeProcessSteps(DEFAULT_VISIBILITY_ITEMS, steps)

  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="">
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              A clearer view of what&apos;s working in
              <i className="font-instrument"> your sales engine.</i>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear text-lg leading-[1.6] tracking-[0.36px]">{description}</p>
          </TextAppearAnimation02>

          <RevealWrapper className="reveal-me mt-7 md:mt-14">
            <ButtonComponentList className="flex justify-start">
              <ButtonComponent href="/contact" variant="white">
                Start Now
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 gap-y-[26px]">
          {visibilityItems.map((item, index) => (
            <RevealWrapper
              key={item.title}
              className={`px-[30px] py-[50px]${index % 2 === 0 ? ' border-r dark:border-dark' : ''}`}
            >
              <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
                {index + 1}
              </h2>
              <h5 className="mb-6 mt-4">{item.title}</h5>
              <p className="text-base">{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SalesVisibility
