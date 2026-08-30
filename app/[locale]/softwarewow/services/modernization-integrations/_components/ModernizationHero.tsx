'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useEffect, useRef, useState } from 'react'

const HERO_IMAGES = [
  {
    src: '/images/wow/nav/cards/software&technology.png',
    alt: 'Connected systems and technology stack',
  },
  {
    src: '/images/wow/nav/cards/sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc%201.png',
    alt: 'Modern operations dashboard',
  },
]

/** Layout: homepage-19/HeroV19 — split headline + stacked product images + circle mark. */
const ModernizationHero = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return

    const initCircleText = () => {
      const text = textRef.current
      if (!text) return

      const originalText = 'Modernize what works. Connect what matters. '
      const chars = originalText.trim().split('')
      const angleStep = 360 / chars.length

      const formattedText = chars
        .map((char, i) => {
          const angle = i * angleStep
          return `<span 
          style="
            position: absolute;
            left: 50%;
            top: 8%;
            transform: rotate(${angle}deg);
            transform-origin: 0 50px;
            display: inline-block;
          "
        >${char}</span>`
        })
        .join('')

      text.innerHTML = formattedText
      setIsInitialized(true)
    }

    requestAnimationFrame(initCircleText)
  }, [isInitialized])

  return (
    <section
      className="relative overflow-hidden pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14"
      aria-labelledby="modernization-hero-heading"
    >
      <div
        id="hero-gradient-wrapper"
        className="absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0"
      >
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          id="hero-gradient"
          className="-top-[10%] left-0 scale-50"
        />
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-5">
            <SectionLabel>Modernization & Integrations</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            id="modernization-hero-heading"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            Modernize what works.
            <br className="hidden lg:block" /> <InstrumentText>Connect what matters.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
            Upgrade legacy software, connect disconnected systems, and create a technology foundation that’s easier to
            maintain, integrate, and evolve.
          </RevealWrapper>
          <RevealWrapperV2 className="reveal-me-2 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary" size="sm">
                Start a Project
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/portfolio" variant="secondary" size="sm">
                View Our Work
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapperV2>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-[78px]">
            <div className="absolute -left-0 -top-[12%] z-10 mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full before:absolute before:h-[140px] before:w-[140px] before:rounded-full before:bg-white before:content-[''] dark:before:bg-secondary lg:-left-[12%]">
              <figure className="relative z-50">
                <img src="/images/icons/text-circle-logo.png" alt="" aria-hidden className="inline dark:hidden" />
                <img
                  src="/images/icons/text-circle-dark-logo.png"
                  alt=""
                  aria-hidden
                  className="hidden dark:inline"
                />
              </figure>
              <div
                ref={textRef}
                className="text-2 h-[120px] w-[120px] rounded-full bg-secondary text-[10px] text-backgroundBody dark:bg-backgroundBody dark:text-secondary"
              />
            </div>
            <figure className="overflow-hidden rounded-radius-md">
              <img src={HERO_IMAGES[0].src} alt={HERO_IMAGES[0].alt} className="block w-full max-sm:w-full" />
            </figure>
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me">
            <figure className="overflow-hidden rounded-radius-md">
              <img src={HERO_IMAGES[1].src} alt={HERO_IMAGES[1].alt} className="block w-full max-sm:w-full" />
            </figure>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ModernizationHero
