import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'

const DEFAULT_IMAGE: CmsHeroImage = {
  src: '/images/wow/hero-banner.jpg',
  alt: 'WOW Strategy Centre',
}

type StrategyHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: CmsHeroImage[]
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaHref?: string
}

/** Split hero — copy left, featured image right (not a background). */
const StrategyHero = ({
  badgeTitle = 'Strategy Centre',
  title = 'Strategy That Drives',
  italicTitle = 'Clear. Measurable. Built to scale.',
  description = 'Discover how WOW plans, executes, and measures digital growth for SMBs — with clarity, measurable outcomes, and a coordinated roadmap across every division.',
  images,
  primaryCtaLabel = 'Book Strategy Session',
  secondaryCtaLabel = 'Explore Our Approach',
  primaryCtaHref = '/meet',
  secondaryCtaHref = '#growth-framework',
}: StrategyHeroProps) => {
  const heroImage = images?.[0] ?? DEFAULT_IMAGE

  return (
    <section
      className="relative overflow-hidden bg-background pb-16 pt-[30px] transition-colors duration-300 dark:bg-[#0A0A0A] md:pb-20 md:pt-[40px] lg:pb-24 xl:pt-[50px]"
      aria-labelledby="strategy-centre-hero-heading"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-10 px-4 md:px-[30px] lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="w-full lg:max-w-[640px] lg:flex-1">
          <RevealWrapper className="reveal-me mb-4 md:mb-5">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="strategy-centre-hero-heading"
              className="text-[clamp(2rem,4.571vw,4.5rem)] font-normal leading-[1.12] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]"
            >
              {title}
              {italicTitle ? (
                <>
                  <br />
                  <InstrumentText variant="solid">{italicTitle}</InstrumentText>
                </>
              ) : null}
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3 md:mt-4">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 lg:mt-12">
            <ButtonComponent
              href={primaryCtaHref}
              variant="primary"
              className="dark:!border-white/20"
            >
              {primaryCtaLabel}
            </ButtonComponent>
            <ButtonComponent
              href={secondaryCtaHref}
              variant="secondary"
              className="dark:!border-white/20 dark:!bg-transparent dark:!text-[#F2F2F2]"
            >
              {secondaryCtaLabel}
            </ButtonComponent>
          </RevealWrapper>
        </div>

        <RevealWrapper
          as="figure"
          className="reveal-me flex w-full justify-center overflow-hidden rounded-radius-md lg:w-auto lg:flex-1 lg:justify-end"
        >
          <CmsResponsiveImage
            image={heroImage}
            alt={heroImage.alt ?? 'WOW Strategy Centre'}
            sizes={CMS_IMAGE_SIZES.sideColumn}
            width={heroImage.width ?? 520}
            height={heroImage.height ?? 640}
            className="h-auto max-h-[min(70vh,520px)] w-full max-w-[520px] rounded-radius-md object-cover lg:max-w-none"
            priority
          />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default StrategyHero
