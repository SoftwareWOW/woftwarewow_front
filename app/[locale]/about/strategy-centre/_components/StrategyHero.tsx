import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'
import Image from 'next/image'

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
}

const StrategyHero = ({
  badgeTitle = 'Strategy Centre',
  title = 'Strategy That Drives',
  italicTitle = 'Clear. Measurable. Built to scale.',
  description = 'Discover how WOW plans, executes, and measures digital growth for SMBs — with clarity, measurable outcomes, and a coordinated roadmap across every division.',
  images,
}: StrategyHeroProps) => {
  const heroImage = images?.[0] ?? DEFAULT_IMAGE

  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt ?? 'WOW Strategy Centre'}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/55 to-dark" />

      <div className="container relative z-10 flex min-h-[70vh] items-end pb-12 pt-28 sm:min-h-[75vh] sm:items-center sm:pb-16 sm:pt-32 md:min-h-[80vh] lg:min-h-screen lg:pb-20 lg:pt-36">
        <RevealWrapper className="reveal-me w-full max-w-3xl">
          <SectionLabel className="mb-4 bg-white/15 text-backgroundBody dark:bg-white/15 dark:text-backgroundBody sm:mb-5">
            {badgeTitle}
          </SectionLabel>

          <h1 className="mb-3 text-3xl leading-tight text-backgroundBody sm:text-4xl sm:leading-tight md:text-5xl lg:text-[clamp(2.75rem,5vw,4.5rem)] lg:leading-[1.1]">
            {title}{' '}
            <br className="hidden sm:block" />
            Growth –{' '}
            <br className="hidden md:block" />
            <InstrumentText>{italicTitle}</InstrumentText>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-backgroundBody/70 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg">
            {description}
          </p>

          <div className="mt-6 sm:mt-8 lg:mt-12">
            <ButtonComponent href="/meet" variant="white">
              Book a Strategy Session
            </ButtonComponent>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default StrategyHero
