'use client'

import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import { useEffect, useRef } from 'react'

const DEFAULT_IMAGES = [
  {
    src: '/images/wow/nav/cards/Host.png',
    alt: 'WOW Host infrastructure and hosting',
  },
  {
    src: '/images/wow/nav/cards/software&technology.png',
    alt: 'Software and technology systems',
  },
  {
    src: '/images/wow/nav/cards/Intelligent.png',
    alt: 'Intelligent automation and infrastructure',
  },
]

type HeroHoverImagesProps = {
  images?: { src: string; alt?: string }[]
}

/** Layout: Home-13 AboutHoverImages — three hover-expand figures. */
const HeroHoverImages = ({ images }: HeroHoverImagesProps) => {
  const resolvedImages = images?.length ? images : DEFAULT_IMAGES
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
        {resolvedImages.map((image, index) => (
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
