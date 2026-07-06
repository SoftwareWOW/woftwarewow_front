'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

const WowGrowthCta = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
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


      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="relative rounded-radius-md border border-[#e5e5e5] bg-white/50 backdrop-blur-sm px-6 py-12 transition-all duration-300  dark:border-white/5 dark:bg-dark/50 md:px-10 md:py-16 lg:px-14 lg:py-20">
          <RevealWrapper className="mx-auto max-w-[900px] text-center">
            <TextAppearAnimation>
              <h2 className="text-appear font-normal leading-[1.1] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                Ready To{' '}
                <CtaImageSlider
                  slides={[
                    { id: '1', img: '/images/wow/Hero/Growth/image (3).png' },
                    { id: '2', img: '/images/wow/Hero/Growth/image (2).png' },
                    { id: '3', img: '/images/wow/Hero/Growth/image (1).png' },
                  ]}
                />
                <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
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
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WowGrowthCta
