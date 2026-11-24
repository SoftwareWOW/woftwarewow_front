'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type SpeakingMediaPresenceHeroProps = {
  badgeTitle: string
  title: string
  italicTitle: string
  description: string
  primaryCta: string
  primaryCtaHref: string
  secondaryCta: string
  secondaryCtaHref: string
  image: { src: string; alt: string }
  headingId?: string
}

/** Copy of events EventsHero (HospitalityHero full-bleed) — content props for Impact speaking page. */
export default function SpeakingMediaPresenceHero({
  badgeTitle,
  title,
  italicTitle,
  description,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
  image,
  headingId = 'speaking-media-presence-hero-heading',
}: SpeakingMediaPresenceHeroProps) {
  return (
    <section className="relative w-full overflow-hidden" aria-labelledby={headingId}>
      <img
        loading="eager"
        fetchPriority="high"
        src={image.src}
        alt={image.alt}
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-black/50 to-black/65" aria-hidden />

      <div className="container relative z-10 flex min-h-[70vh] items-end pb-10 pt-[120px] sm:min-h-[75vh] sm:items-center sm:pb-14 sm:pt-[135px] md:min-h-[80vh] md:pb-16 md:pt-[150px] lg:min-h-screen lg:pb-20 lg:pt-44">
        <RevealWrapper className="reveal-me w-full max-w-3xl">
          <SectionLabel className="mb-4 border-white/20 bg-black/30 text-backgroundBody dark:text-backgroundBody">
            {badgeTitle}
          </SectionLabel>
          <h1
            id={headingId}
            className="mb-3 text-3xl font-light leading-tight text-backgroundBody sm:text-4xl sm:leading-tight md:text-5xl lg:text-[clamp(2.75rem,5vw,4.5rem)] lg:leading-[1.1]"
          >
            {title}
            <InstrumentText variant="solid" className="text-backgroundBody dark:text-backgroundBody">
              {italicTitle}
            </InstrumentText>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-backgroundBody/70 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 lg:mt-12">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={primaryCtaHref} variant="primary">
                {primaryCta}
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={secondaryCtaHref} variant="secondary">
                {secondaryCta}
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
