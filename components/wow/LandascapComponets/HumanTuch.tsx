'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'

import hero01 from '@/public/images/wow/Hero/Human/ali.png'
import hero02 from '@/public/images/wow/Hero/Human/Rectangle2.png'
import hero03 from '@/public/images/wow/Hero/Human/sadat2.png'
import hero04 from '@/public/images/wow/Hero/Human/Rectangle3.png'

const HumanTouch = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 py-3 transition-colors duration-300 dark:bg-background md:px-4 md:py-4">
      {/* Background decorative elements - matching WowSuperAgencyClient */}
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
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="grid gap-3">
            <div className="bg-transparent p-0">
              <TextAppearAnimation>
                <h2 className="text-appear max-w-[720px] text-[48px] font-medium leading-[1.05] tracking-[-0.055em] text-[#000000] transition-colors duration-300 dark:text-white sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
                  Technology <br />
                  Powered.{' '}
                  <span className="font-instrument italic font-normal tracking-[-0.06em] bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                    Human
                  </span>
                  <br />
                  Led.
                </h2>
              </TextAppearAnimation>
              <RevealWrapper className="mt-7 flex items-center gap-4">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-[#8b7cff] shadow-lg shadow-[#8b7cff]/20">
                  <Image
                    src="/images/wow/Hero/Human/sadat1.png"
                    alt="Yahya Sadat"
                    width={48}
                    height={48}
                    className="size-full object-contain"
                  />
                </div>

                <figcaption>
                  <p className="text-sm font-medium text-[#1a1a1a] transition-colors duration-300 dark:text-white">
                    Yahya Sadat
                  </p>
                  <span className="text-xs text-[#8b7cff] dark:text-[#b794f4]">
                    Founder & CEO
                  </span>
                  <p className="mt-1 max-w-[360px] text-[11px] leading-4 text-[#555555] transition-colors duration-300 dark:text-white/35">
                    Building WOW Superagency with a simple belief: the best digital experiences are powered by advanced
                    technology — and guided by people who genuinely care about your business.
                  </p>
                </figcaption>
              </RevealWrapper>
            </div>

            <RevealWrapperV2 as="figure" className="h-[220px] overflow-hidden rounded-radius-md border border-[#e5e5e5] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:shadow-none sm:h-[300px] lg:h-[310px] xl:h-[340px]">
              <Image
                src={hero01}
                alt="Creative technology visual"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </RevealWrapperV2>

            <RevealWrapper as="figure" className="h-[220px] overflow-hidden rounded-radius-md border border-[#e5e5e5] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:shadow-none sm:h-[300px] lg:h-[310px] xl:h-[340px]">
              <Image
                src={hero02}
                alt="Modern digital workspace"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </RevealWrapper>
          </div>

          <div className="grid gap-3">
            <RevealWrapper as="figure" className="h-[420px] overflow-hidden rounded-radius-md border border-[#e5e5e5] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:shadow-none sm:h-[620px] lg:h-[640px] xl:h-[720px]">
              <Image
                src={hero03}
                alt="Technology-powered collaboration"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </RevealWrapper>

            <RevealWrapper as="figure" className="h-[260px] overflow-hidden rounded-radius-md border border-[#e5e5e5] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:shadow-none sm:h-[340px] lg:h-[330px] xl:h-[370px]">
              <Image
                src={hero04}
                alt="Human led innovation"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumanTouch