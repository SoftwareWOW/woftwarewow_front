'use client'

import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import { useEffect, useRef } from 'react'

/** Layout: Home-13 AboutHoverImages — 3 tilted panels with hover-active swap. */
const AiGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = galleryRef.current
    if (!container) return

    const images = container.querySelectorAll<HTMLElement>('.about-image')

    images[0]?.classList.add('about-active-image')

    const onImageHover = (e: Event) => {
      images.forEach((img) => img.classList.remove('about-active-image'))
      ;(e.currentTarget as HTMLElement)?.classList.add('about-active-image')
    }

    images.forEach((img) => img.addEventListener('mouseenter', onImageHover))

    return () => {
      images.forEach((img) => img.removeEventListener('mouseenter', onImageHover))
    }
  }, [])

  return (
    <section>
      <div className="container" ref={galleryRef}>
        <RevealWrapperV2 className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-5">
          <figure className="about-image about-active-image h-[450px] cursor-pointer lg:min-h-[660px]">
            <img src="/images/hero-img/about-hero-1.png" alt="" className="h-full w-full object-cover" />
          </figure>
          <figure className="about-image h-[450px] cursor-pointer lg:min-h-[660px]">
            <img src="/images/hero-img/about-hero-2.png" alt="" className="h-full w-full object-cover" />
          </figure>
          <figure className="about-image h-[450px] cursor-pointer lg:min-h-[660px]">
            <img src="/images/hero-img/about-hero-3.png" alt="" className="h-full w-full object-cover" />
          </figure>
        </RevealWrapperV2>
      </div>
    </section>
  )
}

export default AiGallery
