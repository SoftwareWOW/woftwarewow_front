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
  const sliderRef = useRef<HTMLDivElement>(null)
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

      <div className="relative overflow-hidden" ref={sliderRef}>
        <div className="flex h-[500px] items-center justify-center">
          <div className="instagram-slider-container relative flex w-full items-center justify-center perspective-[1000px]">
            <div
              className="slides-wrapper relative flex h-full w-full items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  ref={(el) => {
                    if (el) slideRefs.current[index] = el
                  }}
                  className="slide absolute w-[320px] transition-all duration-500 md:w-[400px]"
                  onMouseEnter={stopSlider}
                  onMouseLeave={startSlider}
                >
                  <figure className="relative overflow-hidden rounded-radius-md">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={500}
                      className="h-full w-full rounded-radius-md object-cover"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
