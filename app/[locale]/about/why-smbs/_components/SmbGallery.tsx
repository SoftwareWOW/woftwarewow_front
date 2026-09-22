'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'
import { resolveGalleryItems } from '@/lib/strapi/cms-section-props'

type GalleryItem = {
  id: number
  image: string
  link: string
  alt?: string
}

const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: '/images/testimonial/testimonial-1.png',
    link: 'https://www.instagram.com/',
  },
  {
    id: 2,
    image: '/images/testimonial/testimonial-2.png',
    link: 'https://www.instagram.com/',
  },
  {
    id: 3,
    image: '/images/testimonial/testimonial-3.png',
    link: 'https://www.instagram.com/',
  },
  {
    id: 4,
    image: '/images/testimonial/testimonial-4.png',
    link: 'https://www.instagram.com/',
  },
  {
    id: 5,
    image: '/images/testimonial/testimonial-5.png',
    link: 'https://www.instagram.com/',
  },
  {
    id: 6,
    image: '/images/testimonial/testimonial-1.png',
    link: 'https://www.instagram.com/',
  },
  {
    id: 7,
    image: '/images/testimonial/testimonial-2.png',
    link: 'https://www.instagram.com/',
  },
  {
    id: 8,
    image: '/images/testimonial/testimonial-3.png',
    link: 'https://www.instagram.com/',
  },
]

/** Layout: Home-11 InstagramGallery — 3D carousel gallery. */
type SmbGalleryProps = { images?: CmsGalleryImage[] | null }

const SmbGallery = ({ images }: SmbGalleryProps = {}) => {
  const galleryItems = resolveGalleryItems(DEFAULT_GALLERY_ITEMS, images)


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

      if (slide) {
        slide.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) scale(${scale})`
        slide.style.opacity = opacity.toString()
        slide.style.zIndex = zIndex.toString()
      }
    })
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
  }, [])

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
    updateSlider()
    startSlider()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [updateSlider, startSlider])

  const handleSlideMouseEnter = useCallback(() => {
    stopSlider()
  }, [stopSlider])

  const handleSlideMouseLeave = useCallback(() => {
    startSlider()
  }, [startSlider])

  return (
    <section>
      <div className="mb-8 text-center md:mb-14">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>In the Work</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2>
            Real work for
            <InstrumentText> real growth</InstrumentText>
          </h2>
        </RevealWrapper>
      </div>
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
                  onMouseEnter={handleSlideMouseEnter}
                  onMouseLeave={handleSlideMouseLeave}
                >
                  <figure className="group relative overflow-hidden rounded-radius-md shadow-lg">
                    <img
                      src={item.image}
                      alt={item.alt ?? `SMB work gallery ${item.id}`}
                      className="h-full w-full rounded-radius-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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

export default SmbGallery
