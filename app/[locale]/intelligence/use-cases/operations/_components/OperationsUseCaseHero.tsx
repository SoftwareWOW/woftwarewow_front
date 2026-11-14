'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import VideoModal from '@/components/shared/VideoModal'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'
import { useState } from 'react'

type CtaLink = { label: string; href: string }
type HeroImage = { src: string; alt: string; width?: number; height?: number }

type OperationsUseCaseHeroProps = {
  badgeTitle: string
  title: string
  italicTitle: string
  description: string
  images: ReadonlyArray<HeroImage>
  primaryCta: CtaLink
  secondaryCta?: CtaLink
  enableVideoModal?: boolean
  headingId?: string
}

/** Layout copy: Home-25 HeroV25 + Home-24 HeroV24 dual imagery (text left, media right). */
export default function OperationsUseCaseHero({
  badgeTitle,
  title,
  italicTitle,
  description,
  images,
  primaryCta,
  secondaryCta,
  enableVideoModal = false,
  headingId = 'intelligence-operations-use-case-hero-heading',
}: OperationsUseCaseHeroProps) {
  const image0 = images[0]
  const image1 = images[1] ?? images[0]
  const [open, setOpen] = useState(false)

  if (!title && !italicTitle && !image0?.src) {
    return null
  }

  return (
    <section
      className="video-section relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover object-center pt-[30px] dark:bg-none md:pt-[40px] xl:pt-[50px]"
      aria-labelledby={headingId}
    >
      <div className="hero-video-container mx-auto max-w-[1600px] px-4 md:px-[30px]">
        <div className="flex flex-col items-center gap-x-20 gap-y-14 lg:flex-row lg:items-stretch">
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>{badgeTitle}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h1
                id={headingId}
                className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
              >
                {title}
                {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
              </h1>
            </RevealWrapper>

            {description ? (
              <RevealWrapper className="reveal-me mt-3">
                <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
              </RevealWrapper>
            ) : null}

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
              <ButtonComponentList className="flex flex-wrap gap-3" itemClassName="block">
                <ButtonComponent href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </ButtonComponent>
                {secondaryCta ? (
                  <ButtonComponent href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </ButtonComponent>
                ) : null}
              </ButtonComponentList>
            </RevealWrapperV2>
          </div>

          {image0?.src ? (
            <RevealWrapper className="reveal-me flex w-full flex-1 flex-col gap-5 md:flex-row lg:w-1/2">
              <figure
                onClick={enableVideoModal ? () => setOpen(true) : undefined}
                onKeyDown={
                  enableVideoModal
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') setOpen(true)
                      }
                    : undefined
                }
                role={enableVideoModal ? 'button' : undefined}
                tabIndex={enableVideoModal ? 0 : undefined}
                className={`relative mt-0 overflow-hidden rounded-radius-md sm:mt-[78px] md:flex-1${enableVideoModal ? ' cursor-pointer' : ''}`}
              >
                <CmsResponsiveImage
                  image={image0}
                  sizes={CMS_IMAGE_SIZES.heroDual}
                  width={410}
                  height={540}
                  className="h-auto w-full object-cover md:h-[540px] md:w-full"
                  priority
                />
              </figure>
              {image1?.src ? (
                <figure className="overflow-hidden rounded-radius-md md:flex-1">
                  <CmsResponsiveImage
                    image={image1}
                    sizes={CMS_IMAGE_SIZES.heroDual}
                    width={410}
                    height={540}
                    className="h-auto w-full object-cover md:h-[540px] md:w-full"
                  />
                </figure>
              ) : null}
            </RevealWrapper>
          ) : null}
        </div>
      </div>
      {enableVideoModal ? <VideoModal open={open} setOpen={setOpen} /> : null}
    </section>
  )
}