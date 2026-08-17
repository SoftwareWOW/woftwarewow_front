'use client'

import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import { useEffect, useRef } from 'react'

const images = [
  {
    src: '/images/hero-img/about-hero-1.png',
    alt: 'About Hero 1',
  },
  {
    src: '/images/hero-img/about-hero-2.png',
    alt: 'About Hero 2',
  },
  {
    src: '/images/hero-img/about-hero-3.png',
    alt: 'About Hero 3',
  },
]

/** Layout: Home-13 AboutHoverImages — three hover-expand figures. Template images unchanged. */
const HeroHoverImages = () => {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = galleryRef.current
    if (!container) return

    const figures = container.querySelectorAll<HTMLElement>('.about-image')
    figures[0]?.classList.add('about-active-image')

    const onImageHover = (e: Event) => {
      figures.forEach((img) => img.classList.remove('about-active-image'))
      ;(e.currentTarget as HTMLElement)?.classList.add('about-active-image')
    }

    figures.forEach((img) => img.addEventListener('mouseenter', onImageHover))

    return () => {
      figures.forEach((img) => img.removeEventListener('mouseenter', onImageHover))
    }
  }, [])

  return (
    <div className="container pt-14 md:pt-28" ref={galleryRef}>
      <RevealWrapperV2 className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-5">
        {images.map((image, index) => (
          <figure
            key={image.src}
            className={`about-image h-[450px] cursor-pointer overflow-hidden rounded-radius-md lg:min-h-[660px] ${
              index === 0 ? 'about-active-image' : ''
            }`}
          >
            <img src={image.src} alt={image.alt} className="h-full w-full rounded-radius-md object-cover" />
          </figure>
        ))}
      </RevealWrapperV2>
    </div>
  )
}

export default HeroHoverImages
