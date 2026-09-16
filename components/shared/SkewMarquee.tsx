'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const DEFAULT_MARQUEE_IMAGES = [
  { id: 1, src: '/images/marquee-img/hero-marquee-01.png', alt: 'Marquee 1' },
  { id: 2, src: '/images/marquee-img/hero-marquee-02.png', alt: 'Marquee 2' },
  { id: 3, src: '/images/marquee-img/hero-marquee-03.png', alt: 'Marquee 3' },
  { id: 4, src: '/images/marquee-img/hero-marquee-04.png', alt: 'Marquee 4' },
  { id: 5, src: '/images/marquee-img/hero-marquee-05.png', alt: 'Marquee 5' },
  { id: 6, src: '/images/marquee-img/hero-marquee-06.png', alt: 'Marquee 6' },
]

type MarqueeImage = {
  id: number
  src: string
  alt?: string
}

type SkewMarqueeProps = {
  className?: string
  images?: Array<{ src: string; alt?: string }> | null
}

function buildMarqueeImages(images?: Array<{ src: string; alt?: string }> | null): MarqueeImage[] {
  const source =
    images?.length ?
      images.filter((image) => Boolean(image.src))
    : DEFAULT_MARQUEE_IMAGES

  if (!source.length) return DEFAULT_MARQUEE_IMAGES

  const loop = [...source, ...source]
  return loop.map((image, index) => ({
    id: index + 1,
    src: image.src,
    alt: image.alt,
  }))
}

const SkewMarquee = ({ className, images }: SkewMarqueeProps) => {
  const marqueeImages = buildMarqueeImages(images)
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  function createMarqueeScroll(target: HTMLElement, partSelector: string) {
    const items = gsap.utils.toArray<HTMLElement>(partSelector)

    const itemCount = items.length / 2
    const totalWidth = target.scrollWidth / 2

    gsap.to(target, {
      x: `-=${totalWidth}`,
      duration: itemCount * 2,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0)),
      },
    })
  }

  useGSAP(
    () => {
      if (containerRef.current && marqueeRef.current) {
        createMarqueeScroll(marqueeRef.current, '.marquee-part')

        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'top 50%',
            scrub: false,
            once: true,
          },
          y: 200,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        })
      }
    },
    { scope: containerRef },
  )

  return (
    <section className={cn('relative w-full pb-16 pt-24 lg:pb-48', className)}>
      {/*
        Contain 3D transform bleed so it cannot widen the document (which breaks
        fixed header/footer + Lenis scroll). Clip horizontally only so the ribbon
        is not cropped top/bottom.
      */}
      <div className="w-full overflow-x-clip overflow-y-visible">
        <div
          ref={containerRef}
          style={{
            transform:
              'translate3d(-200px, 0px, 0px) scale3d(1, 1, 1) rotateX(30deg) rotateY(17deg) rotateZ(342deg) skew(7deg, 359deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div ref={marqueeRef} className="flex flex-nowrap gap-5">
            {marqueeImages.map((img) => (
              <figure
                key={img.id}
                className="marquee-part z-50 h-[280px] w-[240px] flex-shrink-0 overflow-hidden rounded-radius-md sm:h-[340px] sm:w-[300px] lg:h-[400px] lg:w-[370px]">
                <Image
                  width={370}
                  height={400}
                  src={img.src}
                  alt={img.alt ?? `Marquee ${img.id}`}
                  className="h-full w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkewMarquee
