'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import Image from 'next/image'

const HERO_IMAGE = '/images/wow/hero-banner.jpg'
const HERO_IMAGE_ALT = 'SoftwareWOW technology'

const HERO_TITLE = 'So, you want the tech that gives your business an edge?'
const HERO_TITLE_HIGHLIGHT = 'Perfect'
const HERO_DESCRIPTION =
  'We develop intelligent systems and future-ready apps that make your business more productive and more competitive.'

const notchGradient = (color: string) =>
  `radial-gradient(circle at 100% 100%, transparent calc(var(--radius-md) - 0.5px), ${color} calc(var(--radius-md) + 1px))`

/** Bento hero: rounded outer frame, full-bleed image, overlapping text panel with inverse corner radius. */
export default function SoftwareWowHero() {
  const panelBg = 'bg-backgroundBody dark:bg-[#0D0D0D]'
  const notchLight = '#ededed'
  const notchDark = '#0D0D0D'

  return (
    <section className="softwarewow-ecosystem relative overflow-x-clip bg-backgroundBody px-3 pt-24 transition-colors duration-300 dark:bg-dark md:px-4 md:pt-28 lg:overflow-visible lg:pt-32">
      <div className="relative mx-auto max-w-[1320px]">
        <div className={`overflow-hidden rounded-radius-md ${panelBg}`}>
          <div className="softwarewow-hero__stage relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="relative h-full w-full min-h-[inherit]">
                <Image
                  src={HERO_IMAGE}
                  alt={HERO_IMAGE_ALT}
                  fill
                  className="object-cover object-[72%_center] sm:object-right"
                  priority
                  sizes="(max-width: 1320px) 100vw, 1320px"
                />
              </div>
            </div>

            <div className="softwarewow-hero__text-wrap relative z-10">
              <div
                className="pointer-events-none absolute right-[calc(var(--radius-md)*-1)] top-0 z-[3] size-[var(--radius-md)] dark:hidden"
                style={{ background: notchGradient(notchLight) }}
              />
              <div
                className="pointer-events-none absolute right-[calc(var(--radius-md)*-1)] top-0 z-[3] hidden size-[var(--radius-md)] dark:block"
                style={{ background: notchGradient(notchDark) }}
              />

              <div
                className={`softwarewow-hero__text-panel relative z-[1] rounded-br-[var(--radius-md)] ${panelBg}`}
              >
                <div
                  className="pointer-events-none absolute bottom-[calc(var(--radius-md)*-1)] left-0 z-[3] size-[var(--radius-md)] dark:hidden"
                  style={{ background: notchGradient(notchLight) }}
                />
                <div
                  className="pointer-events-none absolute bottom-[calc(var(--radius-md)*-1)] left-0 z-[3] hidden size-[var(--radius-md)] dark:block"
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
        </div>
      </div>
    </section>
  )
}
