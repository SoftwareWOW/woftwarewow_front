'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

interface Translation {
  x: string
  y: string
}

/** Layout: Home-04 HeroV11 — centered hero + 6 floating decorative images. */
const BrandingCreativeHero = () => {
  const heroButtonRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<Array<HTMLImageElement | null>>([])

  useEffect(() => {
    const imagePaths: string[] = [
      '/images/home-4/random-1.png',
      '/images/home-4/random-2.png',
      '/images/home-4/random-3.png',
      '/images/home-4/random-4.png',
      '/images/home-4/random-5.png',
      '/images/home-4/random-6.png',
    ]

    const translations: Translation[] = [
      { x: '-50%', y: '-8%' },
      { x: '50%', y: '-8%' },
      { x: '0%', y: '-8%' },
      { x: '0%', y: '-8%' },
      { x: '-50%', y: '-8%' },
      { x: '0%', y: '-8%' },
    ]

    const decorativeImages: HTMLImageElement[] = imagesRef.current.filter(
      (ref): ref is HTMLImageElement => ref !== null,
    )
    const originalSrcs: string[] = decorativeImages.map((img) => img.src)

    const handleMouseEnter = (): void => {
      const shuffledPaths: string[] = [...imagePaths].sort(() => Math.random() - 0.5)
      const selectedPaths = shuffledPaths.slice(0, decorativeImages.length)

      decorativeImages.forEach((img, index) => {
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
      decorativeImages.forEach((img, index) => {
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
    if (buttonElement && decorativeImages.length > 0) {
      buttonElement.addEventListener('mouseenter', handleMouseEnter)
      buttonElement.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        buttonElement.removeEventListener('mouseenter', handleMouseEnter)
        buttonElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imagesRef.current[index] = el
  }

  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pt-[130px] md:pt-[160px] xl:pt-[200px]"
    >
      <HeroGradientAnimation />
      <div className="container relative z-10">
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>Branding &amp; Creative</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h1 className="text-center text-[clamp(2rem,4.571vw,4rem)] font-normal leading-[1.15] tracking-[-0.03em]">
            Build a brand people
            <br />
            remember.
          </h1>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-relaxed text-[#808080] md:text-lg">
    Turn what makes your business different into a clear, distinctive brand—with the strategy, identity and creative assets to show up consistently.
          </p>
        </RevealWrapper>
        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <div
            ref={heroButtonRef}
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Build Your Brand
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                Explore Our Capabilities
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
      <figure className="absolute left-[8%] top-[12%] hidden md:block lg:left-[18%] lg:top-[20%]">
        <img src="/images/home-4/random-1.png" alt="" className="decorative-image" ref={setImageRef(0)} />
      </figure>
      <figure className="absolute right-[15%] top-[10%] hidden md:block lg:right-[20%] lg:top-[20%]">
        <img src="/images/home-4/random-2.png" alt="" className="decorative-image" ref={setImageRef(1)} />
      </figure>
      <figure className="absolute left-[2%] top-[42%] hidden lg:block">
        <img src="/images/home-4/random-3.png" alt="" className="decorative-image" ref={setImageRef(2)} />
      </figure>
      <figure className="absolute right-[2%] top-[32%] hidden lg:block">
        <img src="/images/home-4/random-4.png" alt="" className="decorative-image" ref={setImageRef(3)} />
      </figure>
      <figure className="absolute bottom-[4%] left-[12%] hidden md:block lg:bottom-[5%] lg:left-[18%]">
        <img src="/images/home-4/random-5.png" alt="" className="decorative-image" ref={setImageRef(4)} />
      </figure>
      <figure className="absolute bottom-[1%] right-[3%] hidden md:block lg:bottom-[3%] lg:right-[5%]">
        <img src="/images/home-4/random-6.png" alt="" className="decorative-image" ref={setImageRef(5)} />
      </figure>
    </RevealWrapper>
  )
}

export default BrandingCreativeHero
