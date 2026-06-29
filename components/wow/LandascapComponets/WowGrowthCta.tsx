'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

const WowGrowthCta = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 py-3 transition-colors duration-300 dark:bg-background md:px-4 md:py-4">
      {/* Background decorative elements - matching design system */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
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

      {/* Gradient orbs - light mode */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#8b7cff]/10 blur-3xl transition-opacity duration-300 dark:opacity-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#f4a8b8]/10 blur-3xl transition-opacity duration-300 dark:opacity-0"
      />

      {/* Gradient orbs - dark mode */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#8b7cff]/20 blur-3xl opacity-0 transition-opacity duration-300 dark:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#f4a8b8]/20 blur-3xl opacity-0 transition-opacity duration-300 dark:opacity-100"
      />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="relative rounded-radius-sm border border-[#e5e5e5] bg-white/50 backdrop-blur-sm px-6 py-12 transition-all duration-300 hover:border-[#8b7cff]/20 hover:shadow-2xl hover:shadow-[#8b7cff]/5 dark:border-white/5 dark:bg-dark/50 dark:hover:border-[#8b7cff]/20 dark:hover:shadow-[#8b7cff]/10 md:px-10 md:py-16 lg:px-14 lg:py-20">
          {/* Decorative gradient line at top */}
          <div className="absolute left-1/2 top-0 h-1 w-1/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] opacity-50" />

          <RevealWrapper className="mx-auto max-w-[900px] text-center">
            <TextAppearAnimation>
              {/* Small label */}
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[#8b7cff] dark:text-[#b794f4]">
                Let's Grow Together
              </p>

              <h2 className="text-appear text-[clamp(2rem,5.5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#000000] dark:text-[#F2F2F2]">
                Ready To{' '}
                <CtaImageSlider
                  slides={[
                    { id: '1', img: '/images/wow/Hero/Growth/image (3).png' },
                    { id: '2', img: '/images/wow/Hero/Growth/image (2).png' },
                    { id: '3', img: '/images/wow/Hero/Growth/image (1).png' },
                  ]}
                />
                <span className="font-seasons italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                  Accelerate
                </span>{' '}
                Your Growth?
              </h2>
            </TextAppearAnimation>

            <RevealWrapper className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <ButtonComponentList>
                <ButtonComponent href="/contact" variant="secondary" ariaLabel="Book a free consultation">
                  Book Your Free Consultation
                </ButtonComponent>
              </ButtonComponentList>

              <ButtonComponentList>
                <ButtonComponent href="/services" variant="secondary" ariaLabel="Explore our divisions">
                  Explore Our Divisions
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>

            {/* Trust indicator */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#8b7cff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm text-[#555555] dark:text-[#999999]">No obligation, just clarity</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#8b7cff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm text-[#555555] dark:text-[#999999]">Strategy-first approach</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#8b7cff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm text-[#555555] dark:text-[#999999]">100% confidential</span>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WowGrowthCta
