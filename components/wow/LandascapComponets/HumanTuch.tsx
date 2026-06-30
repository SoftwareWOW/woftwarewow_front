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
    <section className="relative overflow-hidden bg-background pb-14 pt-[110px] transition-colors duration-300 dark:bg-background md:pb-16 md:pt-[150px] lg:pb-[88px] lg:pt-[190px] xl:pb-[100px]">
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

      <div className="relative z-10 mx-auto max-w-screen-xl px-3 max-lg:px-5">
        <div className="flex flex-col gap-8 max-lg:justify-center lg:flex-row">
          <div className="w-full flex-1 max-lg:self-center">
            <TextAppearAnimation>
              <h2 className="text-appear max-w-[720px] text-[48px] font-medium leading-[1.05] tracking-[-0.055em] text-[#000000] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
                Technology <br />
                Powered.{' '}
                <span className="bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text font-instrument italic font-normal tracking-[-0.06em] text-transparent">
                  Human
                </span>
                <br />
                Led.
              </h2>
            </TextAppearAnimation>

            <RevealWrapper className="reveal-me mt-8 flex items-center gap-5 pb-8">
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
                <p className="text-sm font-medium text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                  Yahya Sadat
                </p>
                <span className="text-xs text-[#8b7cff] dark:text-[#b794f4]">
                  Founder & CEO
                </span>
                <p className="mt-1 max-w-[360px] text-[11px] leading-4 text-[#555555] transition-colors duration-300 dark:text-[#F2F2F2]/35">
                  Technology powered. People focused.
                </p>
              </figcaption>
            </RevealWrapper>

            <RevealWrapperV2 as="figure" className="reveal-me mb-8 w-full rounded-radius-sm">
              <Image src={hero01} alt="Hero Img 01" className="w-full" />
            </RevealWrapperV2>

            <RevealWrapper as="figure" className="reveal-me w-full rounded-radius-sm">
              <Image src={hero02} alt="Hero Img 02" className="w-full" />
            </RevealWrapper>
          </div>

          <div className="w-full flex-1 max-lg:self-center">
            <RevealWrapper as="figure" className="reveal-me mb-8 rounded-radius-sm">
              <Image src={hero03} alt="Hero Img 03" className="w-full" />
            </RevealWrapper>

            <RevealWrapper as="figure" className="reveal-me rounded-radius-sm">
              <Image src={hero04} alt="Hero Img 04" className="w-full" />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumanTouch