'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { CmsImageGallerySection } from '@/lib/strapi/mappers/page-sections'
import { mergeGalleryItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

type GalleryItem = {
  id: number
  image: string
  link: string
  alt?: string
}

const card = (file: string) => `/images/wow/nav/cards/${encodeURIComponent(file)}`

const DEFAULT_DATA: GalleryItem[] = [
  { id: 1, image: '/images/wow/Hero/devision/Education.jpg', link: 'https://www.instagram.com/' },
  { id: 2, image: card('learningevent.png'), link: 'https://www.instagram.com/' },
  { id: 3, image: card('pexels-fauxels-3183132 1.png'), link: 'https://www.instagram.com/' },
  { id: 4, image: card('pexels-cottonbro-4069290 1.png'), link: 'https://www.instagram.com/' },
  { id: 5, image: card('pexels-cottonbro-8088441 1.png'), link: 'https://www.instagram.com/' },
  { id: 6, image: card('pexels-karola-g-6255984 1.png'), link: 'https://www.instagram.com/' },
  { id: 7, image: '/images/wow/Hero/Human/office.png', link: 'https://www.instagram.com/' },
  { id: 8, image: card('pexels-akaaljotsingh-anandpuria-156395437-10703306 1.png'), link: 'https://www.instagram.com/' },
]

/** Layout: Home-11 InstagramGallery — 3D carousel (no shadow). */
type SocialGalleryProps = Partial<CmsImageGallerySection>

const SocialGallery = ({
  eyebrow = 'Gallery',
  title,
  accentTitle,
  description,
  images,
}: SocialGalleryProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle, description }, { eyebrow, title, accentTitle, description })
  const galleryItems = mergeGalleryItems(DEFAULT_DATA, images)

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

  return (
    <section>
      <div className="mb-8 text-center md:mb-14">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Gallery</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2>
            Follow us on
            <InstrumentText> Instagram</InstrumentText>
          </h2>
        </RevealWrapper>
      </div>

      <div className="relative overflow-hidden" ref={sliderRef}>
        <div className="flex h-[320px] items-center justify-center sm:h-[400px] md:h-[500px]">
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
                  className="slide absolute w-[220px] transition-all duration-500 sm:w-[280px] md:w-[320px] lg:w-[400px]"
                  onMouseEnter={stopSlider}
                  onMouseLeave={startSlider}
                >
                  <figure className="relative overflow-hidden rounded-radius-md shadow-none">
                    <img
                      src={item.image}
                      alt={item.alt ?? `Social gallery ${item.id}`}
                      className="h-[200px] w-full rounded-radius-md object-cover sm:h-[240px] md:h-[280px] lg:h-[320px]"
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
