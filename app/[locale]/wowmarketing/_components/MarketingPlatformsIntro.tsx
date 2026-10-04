'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { data as logoData } from '@/data/logo/logo'
import useReveal from '@/hooks/useReveal'
import { cn } from '@/utils/cn'
import { MARKETING_PLATFORMS_INTRO } from './marketing-content'

export default function MarketingPlatformsIntro() {
  const { revealRef } = useReveal()

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
            {MARKETING_PLATFORMS_INTRO}
          </h4>
        </RevealWrapper>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-14">
          {logoData.map((item) => (
            <div
              key={item.id}
              className={cn(
                'flex h-24 w-48 shrink-0 items-center justify-center rounded-radius-sm border border-transparent bg-backgroundBody transition-colors duration-300',
                'hover:border-primary hover:bg-primary/10 dark:border-transparent dark:bg-dark dark:hover:border-primary dark:hover:bg-primary/10',
              )}
            >
              <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
              <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
