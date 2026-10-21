'use client'

import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import { CmsResponsiveImage } from '@/lib/strapi/cms-section-props'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'
import { useEffect, useRef } from 'react'

type DesignHeroHoverImagesProps = {
  images?: CmsHeroImage[]
}

/** Design-only gallery — same behavior as enterprise HeroHoverImages, tighter top spacing for page rhythm. */
export default function DesignHeroHoverImages({ images }: DesignHeroHoverImagesProps) {
  const resolvedImages = (images ?? []).filter((image) => image.src)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = galleryRef.current
    if (!container || !resolvedImages.length) return

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
  }, [resolvedImages.length])

  if (!resolvedImages.length) {
    return null
  }

  return (
    <div className="container pt-8 md:pt-12" ref={galleryRef}>
      <RevealWrapperV2 className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-5">
        {resolvedImages.map((image, index) => (
          <figure
            key={image.src}
            className={`about-image relative h-[450px] cursor-pointer overflow-hidden rounded-radius-md lg:min-h-[660px] ${
              index === 0 ? 'about-active-image' : ''
            }`}
          >
            <CmsResponsiveImage
              image={image}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-radius-md object-cover"
              priority
            />
          </figure>
        ))}
      </RevealWrapperV2>
    </div>
  )
}
