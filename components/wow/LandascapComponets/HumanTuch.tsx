'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'
import InstrumentText from '../shared/InstrumentText'
import SectionLabel from '../shared/SectionLabel'

import hero01 from '@/public/images/wow/Hero/Human/ali.png'
import hero02 from '@/public/images/wow/Hero/Human/Rectangle2.png'
import hero03 from '@/public/images/wow/Hero/Human/sadat2.png'
import hero04 from '@/public/images/wow/Hero/Human/Rectangle3.png'

type HumanTouchGalleryItem = {
  src: string
  alt?: string
  width?: number
  height?: number
}

type HumanTouchProps = {
  sectionLabel?: string
  title?: string
  founder?: {
    name?: string
    role?: string
    tagline?: string
    avatar?: string
  }
  galleryItems?: (HumanTouchGalleryItem | undefined)[]
}

const HumanTouch = ({
  sectionLabel = 'Human Touch',
  title,
  founder,
  galleryItems,
}: HumanTouchProps) => {
  const founderName = founder?.name ?? 'Yahya Sadat'
  const founderRole = founder?.role ?? 'Founder & CEO'
  const founderTagline = founder?.tagline ?? 'Technology powered. People focused.'
  const founderAvatar = founder?.avatar ?? '/images/wow/Hero/Human/sadat1.png'
  const galleryItem01 = galleryItems?.[0]
  const galleryItem02 = galleryItems?.[1]
  const galleryItem03 = galleryItems?.[2]
  const galleryItem04 = galleryItems?.[3]

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 dark:bg-background">
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
                
                        <RevealWrapper>
                          <SectionLabel className="mb-5">{sectionLabel}</SectionLabel>
                        </RevealWrapper>
            <h2 className="max-w-[720px] text-[48px] font-medium leading-[1.05] tracking-[-0.055em] text-[#000000] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
              {title ? (
                <span className="text-appear">{title}</span>
              ) : (
                <>
                  <TextAppearAnimation>
                    <span className="text-appear">
                      Technology <br />
                      Powered.{' '}
                    </span>
                  </TextAppearAnimation>
                  <InstrumentText className="font-normal tracking-[-0.06em]">Human</InstrumentText>
                  <TextAppearAnimation>
                    <span className="text-appear">
                      <br />
                      Led.
                    </span>
                  </TextAppearAnimation>
                </>
              )}
            </h2>

            <RevealWrapper className="reveal-me mt-8 flex items-center gap-5 pb-8">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-[#8b7cff] shadow-lg shadow-[#8b7cff]/20">
                <Image
                  src={founderAvatar}
                  alt={founderName}
                  width={48}
                  height={48}
                  className="size-full object-contain"
                />
              </div>

              <figcaption>
                <p className="text-sm font-medium text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                  {founderName}
                </p>
                <span className="text-xs text-[#8b7cff] dark:text-[#b794f4]">
                  {founderRole}
                </span>
                <p className="mt-1 max-w-[360px] text-[11px] leading-4 text-[#555555] transition-colors duration-300 dark:text-[#F2F2F2]/35">
                  {founderTagline}
                </p>
              </figcaption>
            </RevealWrapper>

            <RevealWrapperV2 as="figure" className="reveal-me mb-8 w-full rounded-radius-sm">
              <Image
                src={galleryItem01?.src ?? hero01}
                alt={galleryItem01?.alt || 'Hero Img 01'}
                width={galleryItem01?.width ?? hero01.width}
                height={galleryItem01?.height ?? hero01.height}
                className="h-auto w-full"
              />
            </RevealWrapperV2>

            <RevealWrapper as="figure" className="reveal-me w-full rounded-radius-sm">
              <Image
                src={galleryItem02?.src ?? hero02}
                alt={galleryItem02?.alt || 'Hero Img 02'}
                width={galleryItem02?.width ?? hero02.width}
                height={galleryItem02?.height ?? hero02.height}
                className="h-auto w-full"
              />
            </RevealWrapper>
          </div>

          <div className="w-full flex-1 max-lg:self-center">
            <RevealWrapper as="figure" className="reveal-me mb-8 rounded-radius-sm">
              <Image
                src={galleryItem03?.src ?? hero03}
                alt={galleryItem03?.alt || 'Hero Img 03'}
                width={galleryItem03?.width ?? hero03.width}
                height={galleryItem03?.height ?? hero03.height}
                className="h-auto w-full"
              />
            </RevealWrapper>

            <RevealWrapper as="figure" className="reveal-me rounded-radius-sm">
              <Image
                src={galleryItem04?.src ?? hero04}
                alt={galleryItem04?.alt || 'Hero Img 04'}
                width={galleryItem04?.width ?? hero04.width}
                height={galleryItem04?.height ?? hero04.height}
                className="h-auto w-full"
              />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumanTouch