'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
    const gap = 24
    const slideWidth = slideEls[0]?.offsetWidth || 0

    slideEls.forEach((slide, index) => {
      const offset = index - currentIndex
      const zIndex = totalSlides - Math.abs(offset)
      const xPos = offset * (slideWidth + gap)
      let scale = 1 - Math.abs(offset) * 0.12
      let opacity = 1 - Math.abs(offset) * 0.25
      let zPos = -Math.abs(offset) * 90

      if (offset === 0) {
        scale = 1.12
        opacity = 1
        zPos = 0
      } else if (Math.abs(offset) > 1) {
        opacity = 0.45
        scale = 0.78
      }

      slide.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) scale(${scale})`
      slide.style.opacity = Math.max(0.35, opacity).toString()
      slide.style.zIndex = zIndex.toString()
    })
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length])

  const startSlider = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextSlide, 4000)
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
  }, [currentIndex, updateSlider, slides.length])

  useEffect(() => {
    startSlider()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startSlider, slides.length])

  useEffect(() => {
    window.addEventListener('resize', updateSlider)
    return () => window.removeEventListener('resize', updateSlider)
  }, [updateSlider])

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-4">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">{content.description}</p>
          </TextAppearAnimation>
        </div>
      </div>

      <div className="relative overflow-x-hidden overflow-y-visible pb-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 55%, color-mix(in srgb, #615cce 28%, transparent) 0%, transparent 70%)',
          }}
        />

        <div className="relative flex min-h-[480px] items-center justify-center pb-20 pt-4 sm:min-h-[520px] sm:pb-24 md:min-h-[560px]">
          <div className="relative flex w-full max-w-[1320px] items-center justify-center perspective-[1200px]">
            <div
              className="relative flex h-full w-full items-center justify-center overflow-visible"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  ref={(el) => {
                    if (el) slideRefs.current[index] = el
                  }}
                  className="absolute w-[min(300px,78vw)] overflow-visible transition-[transform,opacity] duration-500 ease-out sm:w-[340px] md:w-[380px] lg:w-[400px]"
                  onMouseEnter={stopSlider}
                  onMouseLeave={startSlider}
                >
                  <Link href={slide.href} className="group block">
                    <article className="relative w-full overflow-visible pb-14 sm:pb-16">
                      <div className="isolate overflow-hidden rounded-radius-md [transform:translateZ(0)]">
                        <figure className="relative aspect-[4/5] w-full">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 300px, 400px"
                          />
                        </figure>
                      </div>

                      <div className="absolute inset-x-4 bottom-0 translate-y-[4%] rounded-radius-md bg-[#1a1a1a] px-5 py-5 sm:inset-x-5 sm:px-6 sm:py-6">
                        <h5 className="text-lg font-normal leading-snug text-[#F2F2F2] sm:text-xl">{slide.title}</h5>
                        <div className="mt-2 flex items-end gap-3 sm:mt-3 sm:gap-4">
                          <p className="min-w-0 flex-1 text-sm leading-relaxed text-[#F2F2F2]/70 sm:text-[15px]">
                            {slide.description}
                          </p>
                          <figure className="relative size-10 shrink-0 overflow-hidden rounded-radius-sm bg-primary sm:size-11">
                            <ArrowUpRight
                              aria-hidden
                              className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 !stroke-white !text-white opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:translate-x-7 group-hover:opacity-0"
                              strokeWidth={2}
                            />
                            <ArrowUpRight
                              aria-hidden
                              className="absolute size-6 -translate-x-3 translate-y-8 !stroke-white !text-white opacity-0 transition-all duration-500 group-hover:translate-x-[13px] group-hover:translate-y-[10px] group-hover:opacity-100"
                              strokeWidth={2}
                            />
                          </figure>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-6 flex justify-center gap-2 md:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 w-8 rounded-radius-sm transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-secondary/25 dark:bg-backgroundBody/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
