import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import type { Dictionary } from '@/i18n/types'
import Image from 'next/image'

type WowHeroProps = {
  hero: Dictionary['hero']
}

const heroImage = '/images/wow/hero-banner.jpg'

const titleHighlightClass =
  'font-seasons text-[clamp(2.5rem,5.5vw,4.6875rem)] italic leading-[1.1] !bg-none bg-clip-border !text-secondary dark:!text-backgroundBody'

const descriptionClass =
  'mt-6 max-w-[580px] text-base font-light leading-[1.4] text-[#4B5563] sm:text-lg md:mt-8 md:text-[22px] md:leading-[1.3] dark:text-dark-100'

export default function WowHero({ hero }: WowHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 md:pt-36">
      <div className="relative mx-auto max-w-[1173px]">
        <div className="wow-hero__shell">
          <h1 className="wow-hero__mobile-title text-[clamp(1.75rem,7vw,2.25rem)] font-normal leading-[1.33] text-secondary md:hidden dark:text-backgroundBody">
            <TextAppearAnimation>{hero.title}</TextAppearAnimation>
          </h1>

          <div className="wow-hero__stage">
            <div className="wow-hero__image-layer">
              <Image
                src={heroImage}
                alt={hero.imageAlt}
                fill
                className="wow-hero__image"
                priority
                sizes="(max-width: 1173px) 100vw, 1173px"
              />
            </div>

            <div className="wow-hero__mobile-row md:hidden">
              <div className="wow-hero__mobile-perfect">
                <span className={`block ${titleHighlightClass} !text-[clamp(2.75rem,14vw,4.25rem)]`}>
                  {hero.titleHighlight}
                </span>
              </div>
            </div>

            <div className="wow-hero__text-wrap">
              <div className="wow-hero__text">
                <TextAppearAnimation>
                  <h1 className="text-[clamp(2rem,4.5vw,3.375rem)] font-normal leading-[1.33] text-secondary dark:text-backgroundBody">
                    {hero.title}{' '}
                    <span className={titleHighlightClass}>{hero.titleHighlight}</span>
                  </h1>
                </TextAppearAnimation>
                <p className={descriptionClass}>{hero.description}</p>
              </div>
            </div>
          </div>

          <RevealWrapper className="wow-hero__mobile-description md:hidden">
            <p className={descriptionClass}>{hero.description}</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
