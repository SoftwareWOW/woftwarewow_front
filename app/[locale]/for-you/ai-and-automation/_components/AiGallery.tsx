'use client'

import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'
import { useEffect, useMemo, useRef } from 'react'

type GalleryPanel = {
  id: number
  image: string
  alt?: string
}

/** Layout: Home-13 AboutHoverImages — 3 tilted panels with hover-active swap. */
const AiGallery = ({ images }: { images?: CmsGalleryImage[] | null } = {}) => {
  const galleryRef = useRef<HTMLDivElement>(null)
  const displayImages = useMemo<GalleryPanel[]>(() => {
    if (!images?.length) return []
    return images
      .filter((img) => img.src)
      .map((img, index) => ({
        id: index + 1,
        image: img.src,
        alt: img.alt,
      }))
  }, [images])

  useEffect(() => {
    const container = galleryRef.current
    if (!container) return

    const imageElements = container.querySelectorAll<HTMLElement>('.about-image')

    imageElements[0]?.classList.add('about-active-image')

    const onImageHover = (e: Event) => {
      imageElements.forEach((img) => img.classList.remove('about-active-image'))
      ;(e.currentTarget as HTMLElement)?.classList.add('about-active-image')
    }

    imageElements.forEach((img) => img.addEventListener('mouseenter', onImageHover))

    return () => {
      imageElements.forEach((img) => img.removeEventListener('mouseenter', onImageHover))
    }
  }, [displayImages])

  if (!displayImages.length) {
    return null
  }

  return (
    <section>
      <div className="container" ref={galleryRef}>
        <RevealWrapperV2 className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-5">
          {displayImages.map((item, index) => (
            <figure
              key={item.id}
              className={`about-image h-[450px] cursor-pointer lg:min-h-[660px]${index === 0 ? ' about-active-image' : ''}`}
            >
              <img src={item.image} alt={item.alt ?? ''} className="h-full w-full object-cover" />
            </figure>
          ))}
        </RevealWrapperV2>
      </div>
    </section>
  )
}

export default AiGallery
