'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CmsImageGallerySection } from '@/lib/strapi/mappers/page-sections'

type GalleryItem = {
  id: number
  image: string
  link: string
  alt?: string
}

/** Layout: Home-11 InstagramGallery — 3D carousel (no shadow). */
type SocialGalleryProps = Partial<CmsImageGallerySection>

const SocialGallery = ({
  eyebrow,
  title,
  accentTitle,
  description,
  images,
}: SocialGalleryProps = {}) => {
  const galleryItems = useMemo<GalleryItem[]>(() => {
    if (!images?.length) return []
    return images
      .filter((img) => img.src)
      .map((img, index) => ({
        id: index + 1,
        image: img.src,
        link: img.href ?? '#',
        alt: img.alt,
      }))
  }, [images])

  const sliderRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const updateSlider = useCallback(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!slides.length) return

    const totalSlides = slides.length
    const gap = 20
    const slideWidth = slides[0]?.offsetWidth || 0

    slides.forEach((slide, index) => {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
  }, [galleryItems.length])

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
  }, [galleryItems])

  useEffect(() => {
    if (!galleryItems.length) return
    updateSlider()
    startSlider()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [galleryItems.length, updateSlider, startSlider])

  if (!galleryItems.length) {
    return null
  }

  const showHeader = Boolean(eyebrow || title || accentTitle || description)

  return (
    <section>

   <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Gallery</SectionLabel>
        </RevealWrapper>
      <div className="relative overflow-hidden" ref={sliderRef}>
        <div className="flex h-[500px] items-center justify-center">
          <div className="instagram-slider-container perspective-[1000px] relative flex w-full items-center justify-center">
            <div
              className="slides-wrapper relative flex h-full w-full items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    if (el) slideRefs.current[index] = el
                  }}
                  className="slide absolute w-[320px] transition-all duration-500 md:w-[400px]"
                  onMouseEnter={stopSlider}
                  onMouseLeave={startSlider}
                >
                  <figure className="relative overflow-hidden rounded-radius-md shadow-none">
                    <img
                      src={item.image}
                      alt={item.alt ?? `Social gallery ${item.id}`}
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

export default SocialGallery
