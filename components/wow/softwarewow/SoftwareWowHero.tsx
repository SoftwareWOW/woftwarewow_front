'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import Image from 'next/image'

const HERO_IMAGE = '/images/wow/hero-banner.jpg'
const HERO_IMAGE_ALT = 'SoftwareWOW technology'

const HERO_TITLE = 'So, you want the tech that gives your business an edge?'
const HERO_TITLE_HIGHLIGHT = 'Perfect'
const HERO_DESCRIPTION =
  'We develop intelligent systems and future-ready apps that make your business more productive and more competitive.'

const titleHighlightClass =
  'font-instrument text-[clamp(2.35rem,5vw,4.25rem)] italic leading-[1.05] !bg-none bg-clip-border !text-secondary dark:!text-backgroundBody'

const descriptionClass =
  'mt-4 max-w-[520px] text-[15px] font-light leading-[1.35] text-[#4B5563] sm:text-base md:mt-5 md:text-[18px] md:leading-[1.3] dark:text-[#808080]'

/** Bento hero: rounded outer frame, full-bleed image, overlapping text panel with inverse corner radius. */
export default function SoftwareWowHero() {
  const panelBg = 'bg-backgroundBody dark:bg-[#0D0D0D]'
  const notchLight = '#ededed'
  const notchDark = '#0D0D0D'

  return (
    <section className="softwarewow-ecosystem relative overflow-x-clip bg-backgroundBody px-3 pt-24 transition-colors duration-300 dark:bg-dark md:px-4 md:pt-28 lg:overflow-visible lg:pt-32">
      <div className="relative mx-auto max-w-[1320px]">
        <div className={`overflow-hidden rounded-[24px] p-3 sm:rounded-[32px] sm:p-4 md:p-5 ${panelBg}`}>
          <h1 className="px-3 pb-3 text-[clamp(1.65rem,6.5vw,2.15rem)] font-normal leading-[1.25] text-secondary md:hidden dark:text-backgroundBody">
            <TextAppearAnimation>{HERO_TITLE}</TextAppearAnimation>
          </h1>

          <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[500px]">
            <div className="absolute inset-0 overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px]">
              <Image
                src={HERO_IMAGE}
                alt={HERO_IMAGE_ALT}
                fill
                className="object-cover object-right"
                priority
                sizes="(max-width: 1320px) 100vw, 1320px"
              />
            </div>

            {/* Mobile: highlight word + notch */}
            <div className="relative z-10 flex items-stretch md:hidden">
              <div
                className={`relative z-[2] w-[150px] rounded-br-[20px] px-2 pb-2 pt-0 sm:w-[180px] ${panelBg}`}
              >
                <span className={`block ${titleHighlightClass} !text-[clamp(2.5rem,13vw,4rem)]`}>
                  {HERO_TITLE_HIGHLIGHT}
                </span>
              </div>
              <div
                className="softwarewow-hero-notch pointer-events-none absolute bottom-[-20px] left-0 z-[3] h-5 w-5 dark:hidden"
                style={{
                  background: `radial-gradient(circle at 100% 100%, transparent 20px, ${notchLight} 21px)`,
                }}
              />
              <div
                className="softwarewow-hero-notch pointer-events-none absolute bottom-[-20px] left-0 z-[3] hidden h-5 w-5 dark:block"
                style={{
                  background: `radial-gradient(circle at 100% 100%, transparent 20px, ${notchDark} 21px)`,
                }}
              />
              <div
                className="softwarewow-hero-notch pointer-events-none absolute left-[150px] top-0 z-[3] h-5 w-5 dark:hidden sm:left-[180px]"
                style={{
                  background: `radial-gradient(circle at 100% 100%, transparent 20px, ${notchLight} 21px)`,
                }}
              />
              <div
                className="softwarewow-hero-notch pointer-events-none absolute left-[150px] top-0 z-[3] hidden h-5 w-5 dark:block sm:left-[180px]"
                style={{
                  background: `radial-gradient(circle at 100% 100%, transparent 20px, ${notchDark} 21px)`,
                }}
              />
            </div>

            {/* Desktop: text panel overlapping image */}
            <div className="relative z-10 hidden max-w-full md:block md:max-w-[72%] lg:max-w-[68%]">
              <div
                className="softwarewow-hero-notch pointer-events-none absolute right-[-32px] top-0 z-[3] h-8 w-8 dark:hidden"
                style={{
                  background: `radial-gradient(circle at 100% 100%, transparent 32px, ${notchLight} 33px)`,
                }}
              />
              <div
                className="softwarewow-hero-notch pointer-events-none absolute right-[-32px] top-0 z-[3] hidden h-8 w-8 dark:block"
                style={{
                  background: `radial-gradient(circle at 100% 100%, transparent 32px, ${notchDark} 33px)`,
                }}
              />

              <div className={`relative z-[1] rounded-br-[32px] px-8 py-9 sm:px-10 sm:py-10 md:px-11 md:py-10 lg:px-12 lg:py-11 ${panelBg}`}>
                <div
                  className="softwarewow-hero-notch pointer-events-none absolute bottom-[-32px] left-0 z-[3] h-8 w-8 dark:hidden"
                  style={{
                    background: `radial-gradient(circle at 100% 100%, transparent 32px, ${notchLight} 33px)`,
                  }}
                />
                <div
                  className="softwarewow-hero-notch pointer-events-none absolute bottom-[-32px] left-0 z-[3] hidden h-8 w-8 dark:block"
                  style={{
                    background: `radial-gradient(circle at 100% 100%, transparent 32px, ${notchDark} 33px)`,
                  }}
                />

                <TextAppearAnimation>
                  <h1 className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.25] text-secondary dark:text-backgroundBody">
                    {HERO_TITLE}{' '}
                    <InstrumentText className="font-instrument italic">{HERO_TITLE_HIGHLIGHT}</InstrumentText>
                  </h1>
                </TextAppearAnimation>

                <p className={descriptionClass}>{HERO_DESCRIPTION}</p>
              </div>
            </div>
          </div>

          <RevealWrapper className="px-3 pt-4 sm:px-4 md:hidden">
            <p className={descriptionClass}>{HERO_DESCRIPTION}</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
