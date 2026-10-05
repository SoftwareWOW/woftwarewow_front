'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MARKETING_INDUSTRIES } from './marketing-content'

export default function MarketingIndustriesCarousel() {
  const content = MARKETING_INDUSTRIES
  const slides = content.slides
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const updateSlider = useCallback(() => {
    const slideEls = slideRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!slideEls.length) return

    const totalSlides = slideEls.length
    const gap = 20
    const slideWidth = slideEls[0]?.offsetWidth || 0

    slideEls.forEach((slide, index) => {
      const offset = index - currentIndex
      const zIndex = totalSlides - Math.abs(offset)

      const xPos = offset * (slideWidth + gap)
      let scale = 1 - Math.abs(offset) * 0.2
      const opacity = 1 - Math.abs(offset) * 0.1
      let zPos = -Math.abs(offset) * 100

      if (offset === 0) {
        scale = 1.2
        zPos = 0
      }

      slide.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) scale(${scale})`
      slide.style.opacity = opacity.toString()
      slide.style.zIndex = zIndex.toString()
    })
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length])

  const startSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(nextSlide, 3000)
  }, [nextSlide])

  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    slideRefs.current = []
    setCurrentIndex(0)
  }, [slides.length])

  useEffect(() => {
    updateSlider()
    startSlider()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [slides.length, updateSlider, startSlider, currentIndex])

  useEffect(() => {
    window.addEventListener('resize', updateSlider)
    return () => window.removeEventListener('resize', updateSlider)
  }, [updateSlider])

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">{content.description}</p>
          </TextAppearAnimation>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex h-[520px] items-center justify-center md:h-[560px]">
          <div className="relative flex w-full items-center justify-center perspective-[1000px]">
            <div
              className="relative flex h-full w-full items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  ref={(el) => {
                    if (el) slideRefs.current[index] = el
                  }}
                  className="absolute w-[320px] transition-all duration-500 md:w-[400px]"
                  onMouseEnter={stopSlider}
                  onMouseLeave={startSlider}
                >
                  <article className="overflow-hidden rounded-radius-md border border-secondary/10 dark:border-backgroundBody/10">
                    <div className="relative aspect-[4/3] w-full">
                      <Image src={slide.image} alt={slide.title} fill className="object-cover" sizes="400px" />
                    </div>
                    <div className="relative bg-secondary p-5 dark:bg-[#1a1a1a]">
                      <h5 className="text-lg text-backgroundBody dark:text-[#F2F2F2]">{slide.title}</h5>
                      <p className="mt-2 text-sm leading-relaxed text-backgroundBody/80 dark:text-[#F2F2F2]/75">
                        {slide.description}
                      </p>
                      {index === currentIndex ? (
                        <span className="absolute bottom-5 right-5 inline-flex size-10 items-center justify-center rounded-radius-sm bg-primary text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path
                              d="M7 17L17 7M17 7H9M17 7V15"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
