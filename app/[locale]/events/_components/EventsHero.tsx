import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { EVENTS_HERO } from './events-content'

/** Layout: HospitalityHero — full-bleed image hero + dual CTAs. */
export default function EventsHero() {
  const hero = EVENTS_HERO
  const heroImage = hero.images[0]

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="events-hero-heading">
      <img
        loading="eager"
        fetchPriority="high"
        src={heroImage.src}
        alt={heroImage.alt}
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-black/50 to-black/65" aria-hidden />

      <div className="container relative z-10 flex min-h-[70vh] items-end pb-10 pt-[120px] sm:min-h-[75vh] sm:items-center sm:pb-14 sm:pt-[135px] md:min-h-[80vh] md:pb-16 md:pt-[150px] lg:min-h-screen lg:pb-20 lg:pt-44">
        <RevealWrapper className="reveal-me w-full max-w-3xl">
          <SectionLabel className="mb-4 border-white/20 bg-black/30 text-backgroundBody dark:text-backgroundBody">
            {hero.badgeTitle}
          </SectionLabel>
          <h1
            id="events-hero-heading"
            className="mb-3 text-3xl font-light leading-tight text-backgroundBody sm:text-4xl sm:leading-tight md:text-5xl lg:text-[clamp(2.75rem,5vw,4.5rem)] lg:leading-[1.1]"
          >
            {hero.title}
            <InstrumentText variant="solid" className="text-backgroundBody dark:text-backgroundBody">
              {hero.italicTitle}
            </InstrumentText>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-backgroundBody/70 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg">
            {hero.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 lg:mt-12">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={hero.primaryCtaHref} variant="primary">
                {hero.primaryCta}
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={hero.secondaryCtaHref} variant="secondary">
                {hero.secondaryCta}
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
