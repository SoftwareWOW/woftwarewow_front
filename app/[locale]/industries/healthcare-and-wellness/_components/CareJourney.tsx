'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gsap from 'gsap'
import { useRef } from 'react'

interface JourneyItem {
  id: number
  index: string
  title: string
  description: string
  img: string
}

const data: JourneyItem[] = [
  {
    id: 1,
    index: '01',
    title: 'Get Found',
    description: 'Search, content, social media, and campaigns help people discover your services.',
    img: '/images/portfolio/portfolio-list-hover-img-01.png',
  },
  {
    id: 2,
    index: '02',
    title: 'Build Confidence',
    description: 'Clear information, strong branding, and thoughtful digital experiences establish trust.',
    img: '/images/portfolio/portfolio-list-hover-img-02.png',
  },
  {
    id: 3,
    index: '03',
    title: 'Make Access Simple',
    description: 'Booking, inquiries, communication, and digital touchpoints make taking the next step easier.',
    img: '/images/portfolio/portfolio-list-hover-img-03.png',
  },
  {
    id: 4,
    index: '04',
    title: 'Stay Connected',
    description: 'Follow-up, automation, content, and CRM systems support stronger ongoing relationships.',
    img: '/images/portfolio/portfolio-list-hover-img-04.png',
  },
]

/** Layout: Home-14 AwardWinningWork — cursor-following hover preview + numbered rows. */
const CareJourney = () => {
  const previewRef = useRef<HTMLDivElement>(null)
  const previewImgRef = useRef<HTMLImageElement>(null)

  const showPreview = (imgSrc: string) => {
    const preview = previewRef.current
    const previewImg = previewImgRef.current
    if (!preview || !previewImg) return
    previewImg.src = imgSrc
    gsap.to(preview, {
      duration: 0.3,
      scale: 1,
      rotate: 15,
      ease: 'power2.out',
    })
  }

  const movePreview = (event: React.MouseEvent<HTMLDivElement>) => {
    const preview = previewRef.current
    if (!preview) return
    const offsetX = preview.offsetWidth / 2
    const offsetY = preview.offsetHeight / 2
    preview.style.left = `${event.clientX - offsetX}px`
    preview.style.top = `${event.clientY - offsetY}px`
  }

  const hidePreview = () => {
    const preview = previewRef.current
    if (!preview) return
    gsap.to(preview, {
      duration: 0.3,
      scale: 0,
      rotate: -15,
      ease: 'power2.out',
    })
  }

  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-6 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Care Journey</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">Support Every Step of the Experience.</h2>
            </TextAppearAnimation>
          </div>
          <div className="max-md:w-full md:max-w-80 lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                A better experience starts before the first appointment and continues long after it.
              </p>
            </TextAppearAnimation>
          </div>
        </div>
      </div>

      <div
        ref={previewRef}
        className="pointer-events-none fixed left-1/2 top-1/4 z-50 h-[200px] w-[200px] origin-center rotate-[20deg] scale-0 overflow-hidden rounded-radius-md"
      >
        <img
          ref={previewImgRef}
          src="/images/portfolio/portfolio-list-hover-img-01.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="reveal-me mx-auto border-t text-sm max-xl:overflow-auto max-md:px-5 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1380px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="row group flex min-h-[138px] cursor-pointer items-center justify-start border-b py-4"
            onMouseEnter={() => showPreview(item.img)}
            onMouseMove={movePreview}
            onMouseLeave={hidePreview}
          >
            <div className="-mt-5 w-16 shrink-0 text-nowrap font-instrument text-lg italic leading-[22px]">
              {item.index}
            </div>
            <div className="ml-11 w-72 text-nowrap text-3xl md:w-96 md:text-4xl lg:w-80 lg:leading-[1.1] 2xl:w-[470px] 2xl:text-5xl">
              {item.title}
            </div>
            <div className="ml-16 min-w-0 flex-1 text-base leading-[1.6] text-[#808080] xl:ml-40 2xl:ml-[150px] 2xl:text-2xl">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CareJourney
