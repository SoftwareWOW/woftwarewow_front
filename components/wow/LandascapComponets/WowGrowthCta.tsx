'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import Link from 'next/link'

const WowGrowthCta = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e8e4ff] via-[#dceefb] to-[#f5f0ff] dark:from-[#1a1a2e] dark:via-[#0f0f1a] dark:to-[#1a1025]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#8b7cff]/20 blur-3xl dark:bg-[#8b7cff]/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#f4a8b8]/20 blur-3xl dark:bg-[#f4a8b8]/10"
      />

      <div className="container relative z-10">
        <RevealWrapper className="mx-auto max-w-[900px] text-center">
          <TextAppearAnimation>
            <h2 className="text-appear text-[clamp(2rem,5.5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-secondary dark:text-backgroundBody">
              Ready To{' '}
              <CtaImageSlider
                slides={[
                  { id: '1', img: '/images/agent/01.jpg' },
                  { id: '2', img: '/images/agent/02.jpg' },
                  { id: '3', img: '/images/agent/03.jpg' },
                ]}
              />
              <span className="font-seasons italic text-secondary dark:text-backgroundBody">Accelerate</span> Your
              Growth?
            </h2>
          </TextAppearAnimation>

          <RevealWrapper className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="rv-button rv-button-primary block w-full sm:w-auto"
              aria-label="Book a free consultation">
              <div className="rv-button-top">
                <span className="text-xs uppercase tracking-[0.15em]">Book a Free Consultation</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-xs uppercase tracking-[0.15em]">Book a Free Consultation</span>
              </div>
            </Link>

            <Link
              href="/services"
              className="rv-button rv-button-secondary block w-full sm:w-auto dark:!bg-secondary"
              aria-label="Explore our divisions">
              <div className="rv-button-top">
                <span className="text-xs uppercase tracking-[0.15em]">Explore Our Divisions</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-xs uppercase tracking-[0.15em]">Explore Our Divisions</span>
              </div>
            </Link>
          </RevealWrapper>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WowGrowthCta
