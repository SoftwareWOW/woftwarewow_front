'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimationV2 from '@/components/shared/HeroGradientAnimationV2'
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

/** Layout: Branding-style floating hero images (3 slots) + Home-12 centered copy. */
const SoftwareTechHero = ({
  badgeTitle = 'Software & Technology',
  title = 'Technology built for your',
  italicTitle = 'business.',
  description =
    'Design and build software, apps, and digital products that solve real problems and support long-term growth.',
  images,
}: CmsHeroComponentProps) => {
  const decorativeImagePaths = useMemo(
    () => (images ?? []).map((img) => img.src).filter(Boolean).slice(0, 3),
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
    <section
      className="relative overflow-hidden pb-16 pt-[120px] sm:pt-[135px] md:pb-20 md:pt-[150px] lg:pb-28 lg:pt-44 xl:pb-[160px] xl:pt-[200px]"
      aria-labelledby="software-tech-heading"
    >
      {decorativeImagePaths[0] ? (
        <figure className="pointer-events-none absolute left-[2%] top-[14%] z-0 hidden md:block lg:left-[6%] lg:top-[16%] xl:left-[10%]">
          <img
            src={decorativeImagePaths[0]}
            alt={images?.[0]?.alt ?? ''}
            className="h-[110px] w-[85px] rounded-sm object-cover lg:h-[140px] lg:w-[108px] xl:h-[160px] xl:w-[124px]"
            ref={setImageRef(0)}
          />
        </figure>
      ) : null}
      {decorativeImagePaths[1] ? (
        <figure className="pointer-events-none absolute right-[2%] top-[12%] z-0 hidden md:block lg:right-[6%] lg:top-[14%] xl:right-[10%]">
          <img
            src={decorativeImagePaths[1]}
            alt={images?.[1]?.alt ?? ''}
            className="h-[100px] w-[82px] rounded-sm object-cover  lg:h-[128px] lg:w-[105px] xl:h-[148px] xl:w-[120px]"
            ref={setImageRef(1)}
          />
        </figure>
      ) : null}
      {decorativeImagePaths[2] ? (
        <figure className="pointer-events-none absolute bottom-[4%] right-[4%] z-0 hidden md:block lg:bottom-[6%] lg:right-[6%] xl:right-[8%]">
          <img
            src={decorativeImagePaths[2]}
            alt={images?.[2]?.alt ?? ''}
            className="h-[90px] w-[130px] rounded-sm object-cover lg:h-[112px] lg:w-[164px] xl:h-[128px] xl:w-[188px]"
            ref={setImageRef(2)}
          />
        </figure>
      ) : null}

      <div className="container relative z-10">
        <HeroGradientAnimationV2 />
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me text-center">
          <h1
            id="software-tech-heading"
            className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            {title}
            <br className="hidden lg:block" />
            {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
          </h1>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-relaxed text-[#808080] md:text-lg">
            {description}
          </p>
        </RevealWrapper>
        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <div ref={heroButtonRef}>
            <ButtonComponentList>
              <ButtonComponent href="/contact" variant="primary">
                Talk to a Technology Expert
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SoftwareTechHero
