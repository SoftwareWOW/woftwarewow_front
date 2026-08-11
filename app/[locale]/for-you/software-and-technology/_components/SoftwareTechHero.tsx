'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimationV2 from '@/components/shared/HeroGradientAnimationV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

/** Layout: Home-12 HeroV12 — centered hero + floating images. */
const SoftwareTechHero = () => {
  const heroImage1Ref = useRef<HTMLDivElement>(null)
  const heroImage2Ref = useRef<HTMLDivElement>(null)
  const heroImage3Ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(true)

  useEffect(() => {
    if (!heroImage1Ref.current || !heroImage2Ref.current || !heroImage3Ref.current) return

    gsap.set(heroImage1Ref.current, {
      x: -320,
      opacity: 0.8,
      rotate: -20,
      visibility: 'visible',
    })

    gsap.set(heroImage2Ref.current, {
      x: 280,
      opacity: 0.8,
      rotate: 20,
      visibility: 'visible',
    })

    gsap.set(heroImage3Ref.current, {
      scale: 0,
      opacity: 0.8,
      rotate: -17,
      visibility: 'visible',
    })
  }, [])

  useEffect(() => {
    if (!heroImage1Ref.current || !heroImage2Ref.current || !heroImage3Ref.current) return

    const ctx = gsap.context(() => {
      const image1 = heroImage1Ref.current
      const image2 = heroImage2Ref.current
      const image3 = heroImage3Ref.current

      gsap.killTweensOf([image1, image2, image3])

      if (isHovered) {
        gsap.fromTo(
          image1,
          { x: -320, opacity: 0.8, rotate: -20 },
          { duration: 0.5, x: 0, opacity: 1, rotate: 0, ease: 'power2.out' },
        )
        gsap.fromTo(
          image2,
          { x: 280, opacity: 0.8, rotate: 20 },
          { duration: 0.5, x: 0, opacity: 1, rotate: 0, ease: 'power2.out' },
        )
        gsap.fromTo(
          image3,
          { scale: 0, opacity: 0.8, rotate: -17 },
          { duration: 0.5, scale: 1, opacity: 1, rotate: 0, ease: 'power2.out' },
        )
      } else {
        gsap.fromTo(
          image1,
          { x: 0, opacity: 1, rotate: 0 },
          { duration: 1.2, x: -320, opacity: 0.8, rotate: -20, ease: 'power1.inOut' },
        )
        gsap.fromTo(
          image2,
          { x: 0, opacity: 1, rotate: 0 },
          { duration: 1.2, x: 280, opacity: 0.8, rotate: 20, ease: 'power1.inOut' },
        )
        gsap.fromTo(
          image3,
          { scale: 1, opacity: 1, rotate: 0 },
          { duration: 1, scale: 0, opacity: 0.8, rotate: -17, ease: 'back.in(1.2)' },
        )
      }
    })

    return () => ctx.revert()
  }, [isHovered])

  return (
    <section
      className="relative overflow-hidden pt-[120px] sm:pt-[135px] md:pt-[150px] lg:pt-44 xl:pt-[200px]"
      aria-labelledby="software-tech-heading"
    >
      <div className="container">
        <HeroGradientAnimationV2 />
        <RevealWrapper className="mb-3 flex items-center justify-center">
          <SectionLabel>Software &amp; Technology</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h1
            id="software-tech-heading"
            className="text-center text-[clamp(2rem,4.571vw,4rem)] font-normal leading-[1.15] tracking-[-0.03em]"
          >
            Technology built around your business.
          </h1>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-relaxed text-[#808080] md:text-lg">
           From custom software and digital products to integrations and modernization, we build technology that solves real problems and supports how your business works.
          </p>
        </RevealWrapper>
        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <ButtonComponentList>
              <ButtonComponent href="/contact" variant="primary">
                Talk to a Technology Expert
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
      <div className="absolute -left-[4.5%] top-[42%] hidden md:block" ref={heroImage1Ref}>
        <img src="/images/hero-img/hero-img-05.png" alt="" className="reveal-me" />
      </div>
      <div className="absolute -right-[5%] top-[12%] hidden md:block" ref={heroImage2Ref}>
        <img src="/images/hero-img/hero-img-06.png" alt="" />
      </div>
      <div className="absolute bottom-[0%] right-[18.5%] hidden lg:block" ref={heroImage3Ref}>
        <img src="/images/hero-img/hero-img-07.png" alt="" className="reveal-me" />
      </div>
    </section>
  )
}

export default SoftwareTechHero
