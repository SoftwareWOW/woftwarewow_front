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

const card = (file: string) => `/images/wow/nav/cards/${encodeURIComponent(file)}`

const hoverImages = [
  '/images/wow/Hero/devision/Education.jpg',
  card('learningevent.png'),
  card('pexels-fauxels-3183132 1.png'),
  card('pexels-cottonbro-4069290 1.png'),
  card('pexels-karola-g-6255984 1.png'),
  card('pexels-cottonbro-8088441 1.png'),
]

const data: JourneyItem[] = [
  {
    id: 1,
    index: '01',
    title: 'Reach More Learners',
    description: 'Increase visibility across search, social, campaigns, and digital channels.',
    img: hoverImages[0],
  },
  {
    id: 2,
    index: '02',
    title: 'Build Credibility',
    description: 'Create a trusted brand and digital presence around your expertise.',
    img: hoverImages[1],
  },
  {
    id: 3,
    index: '03',
    title: 'Increase Enrollment',
    description: 'Make programs, pricing, registration, and next steps easier to understand.',
    img: hoverImages[2],
  },
  {
    id: 4,
    index: '04',
    title: 'Improve Engagement',
    description: 'Create stronger digital experiences that keep learners involved.',
    img: hoverImages[3],
  },
  {
    id: 5,
    index: '05',
    title: 'Simplify Operations',
    description: 'Automate communication, enrollment, administration, and repetitive workflows.',
    img: hoverImages[4],
  },
  {
    id: 6,
    index: '06',
    title: 'Grow Your Programs',
    description: 'Build the marketing, technology, and infrastructure needed to scale.',
    img: hoverImages[5],
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
              <SectionLabel>BUILT AROUND THE LEARNER</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">Make Learning Easier to Discover, Join, and Continue.</h2>
            </TextAppearAnimation>
          </div>
          <div className="max-md:w-full md:max-w-80 lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                We strengthen the experiences that connect learners with your programs before, during, and after
                enrollment.
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
          src="/images/wow/Hero/devision/Education.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="reveal-me mx-auto border-t text-sm max-md:px-5 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1380px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="row group flex min-h-[110px] cursor-pointer flex-col justify-center gap-2 border-b py-5 sm:min-h-[138px] sm:flex-row sm:items-center sm:justify-start sm:gap-0 sm:py-4"
            onMouseEnter={() => showPreview(item.img)}
            onMouseMove={movePreview}
            onMouseLeave={hidePreview}
          >
            <div className="w-12 shrink-0 font-instrument text-lg italic leading-[22px] sm:-mt-5 sm:w-16 sm:text-nowrap">
              {item.index}
            </div>
            <div className="min-w-0 text-2xl leading-tight sm:ml-8 sm:w-64 md:ml-11 md:w-80 md:text-3xl lg:w-80 lg:leading-[1.1] xl:text-4xl 2xl:ml-11 2xl:w-[470px] 2xl:text-5xl">
              {item.title}
            </div>
            <div className="min-w-0 flex-1 text-sm leading-[1.6] text-[#808080] sm:ml-8 md:ml-12 md:text-base xl:ml-24 2xl:ml-[150px] 2xl:text-2xl">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CareJourney
