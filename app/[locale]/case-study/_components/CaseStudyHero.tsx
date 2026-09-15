import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

const CaseStudyHero = ({
  badgeTitle = 'Case Studies',
  title = 'Real Projects.',
  italicTitle = 'Partnerships.',
  description =
    "Explore how we've helped businesses solve challenges through technology, websites, branding, marketing, AI, and digital innovation.",
}: CmsHeroComponentProps) => {
  return (
    <section className="relative overflow-hidden bg-background px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]">
      <RevealWrapper className="container">
        <div className="mb-5 flex items-center justify-center gap-2 md:mb-6 md:gap-5 md:mt-3 xl:mt-0">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </div>
        <h1 className="text-center xl:text-nowrap">
          {title}
          <br className="hidden xl:block" />
          Real{' '}
          <span className="font-instrument italic !bg-none !bg-clip-border !text-inherit">
            {italicTitle}
          </span>
        </h1>

        {description ? <p className="mt-3 text-center md:mt-7">{description}</p> : null}
      </RevealWrapper>
    </section>
  )
}

export default CaseStudyHero
