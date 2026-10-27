
'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import Image from 'next/image'

const HERO_IMAGE = '/images/wow/hero-banner.jpg'
const HERO_IMAGE_ALT = 'SoftwareWOW technology'

const HERO_TITLE =
  'So, you want the tech that gives your business an edge?'

const HERO_TITLE_HIGHLIGHT = 'Perfect'

const HERO_DESCRIPTION =
  'We develop intelligent systems and future-ready apps that make your business more productive and more competitive.'

const notchGradient = (color: string) =>
  `radial-gradient(circle at 100% 100%, transparent calc(var(--radius-md, 20px) - 0.5px), ${color} calc(var(--radius-md, 20px) + 1px))`

export default function SoftwareWowHero() {
  const panelBg = 'bg-backgroundBody dark:bg-[#0D0D0D]'
  const notchLight = '#ededed'
  const notchDark = '#0D0D0D'

  return (
    <section className="softwarewow-ecosystem relative overflow-x-clip bg-backgroundBody pt-10 transition-colors duration-300 dark:bg-dark sm:pt-10 md:pt-12 lg:overflow-visible lg:pt-14">
      <div className="container relative">
        <div className={`softwarewow-hero__outer-frame ${panelBg}`}>
          {/* Mobile heading */}
          <h1 className="softwarewow-hero-title px-[clamp(1rem,3.428571429vw,1.5rem)] pb-3 pt-[clamp(1rem,3.428571429vw,1.5rem)] font-normal text-secondary md:hidden dark:text-backgroundBody">
            <TextAppearAnimation>
              {HERO_TITLE}
            </TextAppearAnimation>
          </h1>

          {/* Hero image and text */}
          <div className="softwarewow-hero__stage relative">
            <div className="softwarewow-hero__image-layer">
              <div className="softwarewow-hero__image-frame">
                <Image
                  src={HERO_IMAGE}
                  alt={HERO_IMAGE_ALT}
                  fill
                  priority
                  className="softwarewow-hero__image object-cover object-[72%_center] md:object-right"
                  sizes="(max-width: 1320px) 100vw, 1320px"
                />
              </div>
            </div>

            {/* Mobile Perfect label and inverse corners */}
            <div className="softwarewow-hero__mobile-row">
              <div className="softwarewow-hero__mobile-perfect">
                <span className="softwarewow-hero-title block font-instrument italic !bg-none bg-clip-border !text-secondary dark:!text-backgroundBody">
                  {HERO_TITLE_HIGHLIGHT}
                </span>
              </div>
            </div>

            {/* Desktop bento text panel */}
            <div className="softwarewow-hero__text-wrap relative z-10 hidden md:block">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[calc(var(--radius-md,20px)*-1)] top-0 z-[3] size-[var(--radius-md,20px)] dark:hidden"
                style={{ background: notchGradient(notchLight) }}
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[calc(var(--radius-md,20px)*-1)] top-0 z-[3] hidden size-[var(--radius-md,20px)] dark:block"
                style={{ background: notchGradient(notchDark) }}
              />

              <div
                className={`softwarewow-hero__text-panel relative z-[1] rounded-br-[var(--radius-md,20px)] ${panelBg}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[calc(var(--radius-md,20px)*-1)] left-0 z-[3] size-[var(--radius-md,20px)] dark:hidden"
                  style={{ background: notchGradient(notchLight) }}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[calc(var(--radius-md,20px)*-1)] left-0 z-[3] hidden size-[var(--radius-md,20px)] dark:block"
                  style={{ background: notchGradient(notchDark) }}
                />

                <TextAppearAnimation>
                  <h1 className="softwarewow-hero-title font-normal text-secondary dark:text-backgroundBody">
                    {HERO_TITLE}{' '}
                    <InstrumentText className="font-instrument italic [font-size:inherit] [line-height:inherit]">
                      {HERO_TITLE_HIGHLIGHT}
                    </InstrumentText>
                  </h1>
                </TextAppearAnimation>

                <p className="softwarewow-hero-description softwarewow-hero__description text-[#4B5563] dark:text-[#808080]">
                  {HERO_DESCRIPTION}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile description */}
          <RevealWrapper className="px-[clamp(1rem,3.428571429vw,1.5rem)] pb-[clamp(1rem,3.428571429vw,1.5rem)] pt-4 md:hidden">
            <p className="softwarewow-hero-description softwarewow-hero__description text-[#4B5563] dark:text-[#808080]">
              {HERO_DESCRIPTION}
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
