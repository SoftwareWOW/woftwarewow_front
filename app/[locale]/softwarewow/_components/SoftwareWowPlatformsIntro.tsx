'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import { cn } from '@/utils/cn'
import { SOFTWAREWOW_PLATFORMS } from './softwarewow-content'

export default function SoftwareWowPlatformsIntro() {
  const copy = SOFTWAREWOW_PLATFORMS
  const { revealRef } = useReveal()
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  return (
    <section className="about relative bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="absolute inset-0 overflow-hidden opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <div className="container relative z-10">
        <RevealWrapper>
          <h4
            ref={revealRef}
            className="mx-auto max-w-4xl text-center font-['Outfit'] text-[clamp(18px,2.5vw,28px)] font-[300px] leading-[1.6] tracking-[0.02em] text-[#333333] transition-colors duration-700 dark:text-[#666666]"
          >
            {copy.intro}
          </h4>
        </RevealWrapper>

        <div
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
          className="relative mt-10 overflow-hidden sm:mt-14"
        >
          <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
            {copy.logos.map((item) => (
              <div
                key={item.id}
                className={cn(
                  'z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-transparent bg-transparent transition-colors duration-300',
                )}
              >
                <img src={item.logo} alt={item.alt} className="inline-block opacity-80 dark:hidden" />
                <img src={item.darkLogo} alt={item.alt} className="hidden opacity-90 dark:inline-block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
