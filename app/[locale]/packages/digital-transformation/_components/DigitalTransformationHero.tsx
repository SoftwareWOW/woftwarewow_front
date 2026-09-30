'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'
import gsap from 'gsap'
import { useEffect, useMemo, useRef } from 'react'

interface Translation {
  x: string
  y: string
}

const decorativeImgClass =
  'rounded-sm object-contain shadow-sm h-[110px] w-[85px] lg:h-[140px] lg:w-[108px] xl:h-[160px] xl:w-[124px]'

/** Layout: BrandingCreativeHero — centered hero + up to 6 CMS floating images. */
const DigitalTransformationHero = ({
  badgeTitle = 'Digital Transformation Package',
  title = 'Modernize how you',
  italicTitle = 'work.',
  description =
    'Modernize how your business works — connected systems, automation and a clearer digital setup.',
  images,
}: CmsHeroComponentProps) => {
  const decorativeImagePaths = useMemo(
    () => (images ?? []).map((img) => img.src).filter(Boolean).slice(0, 6),
    [images],
  )

  const heroButtonRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  useEffect(() => {
    const imagePaths: string[] = [...decorativeImagePaths]
    if (!imagePaths.length) return

    const translations: Translation[] = [
      { x: '-50%', y: '-8%' },
      { x: '50%', y: '-8%' },
      { x: '0%', y: '-8%' },
      { x: '0%', y: '-8%' },
      { x: '-50%', y: '-8%' },
      { x: '0%', y: '-8%' },
    ]

    const decorativeImageElements: HTMLImageElement[] = imagesRef.current.filter(
      (ref): ref is HTMLImageElement => ref !== null,
    )
    const originalSrcs: string[] = decorativeImageElements.map((img) => img.src)

    const handleMouseEnter = (): void => {
      const shuffledPaths: string[] = [...imagePaths].sort(() => Math.random() - 0.5)
      const selectedPaths = shuffledPaths.slice(0, decorativeImageElements.length)

      decorativeImageElements.forEach((img, index) => {
        const newImagePath = selectedPaths[index]
        const translation = translations[index % translations.length]

        gsap.to(img, {
          duration: 0.7,
          x: translation.x,
          y: translation.y,
          opacity: 0,
          onComplete: () => {
            img.src = newImagePath
            gsap.set(img, { x: translation.x, y: translation.y, opacity: 0, scale: 0 })
            gsap.to(img, { duration: 0.7, opacity: 1, scale: 1 })
          },
        })
      })
    }

    const handleMouseLeave = (): void => {
      decorativeImageElements.forEach((img, index) => {
        const translation = translations[index % translations.length]
        const originalSrc = originalSrcs[index]

        gsap.to(img, {
          duration: 0.7,
          x: translation.x,
          y: translation.y,
          opacity: 0,
          onComplete: () => {
            img.src = originalSrc
            gsap.set(img, { x: '0%', y: '0%', opacity: 0, scale: 0 })
            gsap.to(img, { duration: 0.7, opacity: 1, scale: 1 })
          },
        })
      })
    }

    const buttonElement = heroButtonRef.current
    if (buttonElement && decorativeImageElements.length > 0) {
      buttonElement.addEventListener('mouseenter', handleMouseEnter)
      buttonElement.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        buttonElement.removeEventListener('mouseenter', handleMouseEnter)
        buttonElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [decorativeImagePaths])

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imagesRef.current[index] = el
  }

  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pb-16 pt-[130px] md:pb-20 md:pt-[160px] lg:pb-28 xl:pb-[160px] xl:pt-[200px]"
      aria-labelledby="digital-transformation-heading"
    >
      <HeroGradientAnimation />

      {decorativeImagePaths[0] ? (
        <figure className="pointer-events-none absolute left-[2%] top-[14%] z-0 hidden md:block lg:left-[6%] lg:top-[16%] xl:left-[10%]">
          <img
            src={decorativeImagePaths[0]}
            alt={images?.[0]?.alt ?? ''}
            className={decorativeImgClass}
            ref={setImageRef(0)}
          />
        </figure>
      ) : null}
      {decorativeImagePaths[1] ? (
        <figure className="pointer-events-none absolute right-[2%] top-[12%] z-0 hidden md:block lg:right-[6%] lg:top-[14%] xl:right-[10%]">
          <img
            src={decorativeImagePaths[1]}
            alt={images?.[1]?.alt ?? ''}
            className="rounded-sm object-contain h-[100px] w-[82px] lg:h-[128px] lg:w-[105px] xl:h-[148px] xl:w-[120px]"
            ref={setImageRef(1)}
          />
        </figure>
      ) : null}
      {decorativeImagePaths[2] ? (
        <figure className="pointer-events-none absolute left-[1%] top-[46%] z-0 hidden lg:block xl:left-[3%]">
          <img
            src={decorativeImagePaths[2]}
            alt={images?.[2]?.alt ?? ''}
            className="rounded-sm object-contain  h-[120px] w-[92px] xl:h-[148px] xl:w-[114px]"
            ref={setImageRef(2)}
          />
        </figure>
      ) : null}
      {decorativeImagePaths[3] ? (
        <figure className="pointer-events-none absolute right-[1%] top-[38%] z-0 hidden lg:block xl:right-[3%]">
          <img
            src={decorativeImagePaths[3]}
            alt={images?.[3]?.alt ?? ''}
            className="rounded-sm object-contain h-[150px] w-[110px] xl:h-[180px] xl:w-[132px]"
            ref={setImageRef(3)}
          />
        </figure>
      ) : null}
      {decorativeImagePaths[4] ? (
        <figure className="pointer-events-none absolute bottom-[6%] left-[8%] z-0 hidden md:block lg:bottom-[8%] lg:left-[14%] xl:left-[18%]">
          <img
            src={decorativeImagePaths[4]}
            alt={images?.[4]?.alt ?? ''}
            className="rounded-sm object-contain h-[95px] w-[74px] lg:h-[120px] lg:w-[92px] xl:h-[136px] xl:w-[105px]"
            ref={setImageRef(4)}
          />
        </figure>
      ) : null}
      {decorativeImagePaths[5] ? (
        <figure className="pointer-events-none absolute bottom-[4%] right-[4%] z-0 hidden md:block lg:bottom-[6%] lg:right-[6%] xl:right-[8%]">
          <img
            src={decorativeImagePaths[5]}
            alt={images?.[5]?.alt ?? ''}
            className="rounded-sm object-contain h-[90px] w-[130px] lg:h-[112px] lg:w-[164px] xl:h-[128px] xl:w-[188px]"
            ref={setImageRef(5)}
          />
        </figure>
      ) : null}

      <div className="container relative z-10">
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me text-center">
          <h1
            id="digital-transformation-heading"
            className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            {title}
            <br className="hidden lg:block" />
            {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
          </h1>
        </RevealWrapper>
        {description ? (
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-[#808080] md:max-w-2xl md:text-lg">
              {description}
            </p>
          </RevealWrapper>
        ) : null}
        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <div ref={heroButtonRef} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Start Your Transformation
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                See What&apos;s Included
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </RevealWrapper>
  )
}

export default DigitalTransformationHero
