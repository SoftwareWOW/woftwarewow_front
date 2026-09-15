import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'

const HERO_IMAGE =
  '/images/wow/nav/cards/pexels-akaaljotsingh-anandpuria-156395437-10703306%201.png'

type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: { src: string; alt?: string }[]
}

/** Layout: Home-14 HeroV14 — full-bleed image hero + dual CTAs. */
const HospitalityHero = ({
  title = 'Turn Great Experiences Into ',
  italicTitle = 'Growth.',
  description =
    'We help hospitality and tourism brands attract more guests, strengthen their digital presence, and create smoother experiences from discovery to return.',
  images,
}: PageHeroProps) => {
  const heroImage = images?.[0] ?? { src: HERO_IMAGE, alt: '' }
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="hospitality-hero-heading"
    >
      <img
        src={heroImage.src}
        alt={heroImage.alt ?? ''}
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-black/50 to-black/65" aria-hidden />

      <div className="container relative z-10 flex min-h-[70vh] items-end pb-10 pt-[120px] sm:min-h-[75vh] sm:items-center sm:pb-14 sm:pt-[135px] md:min-h-[80vh] md:pb-16 md:pt-[150px] lg:min-h-screen lg:pb-20 lg:pt-44">
        <RevealWrapper className="reveal-me w-full max-w-3xl">
          <h1
            id="hospitality-hero-heading"
            className="mb-3 text-3xl leading-tight text-backgroundBody sm:text-4xl sm:leading-tight md:text-5xl lg:text-[clamp(2.75rem,5vw,4.5rem)] lg:leading-[1.1]"
          >
            {title}
            {italicTitle ? (
              <InstrumentText variant="solid" className="text-backgroundBody dark:text-backgroundBody">
                {italicTitle}
              </InstrumentText>
            ) : null}
          </h1>
          {description ? (
            <p className="max-w-xl text-sm leading-relaxed text-backgroundBody/70 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg">
              {description}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 lg:mt-12">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Grow Your Business
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="#solutions" variant="secondary">
                Explore Solutions
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HospitalityHero
