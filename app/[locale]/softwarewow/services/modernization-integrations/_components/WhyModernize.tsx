'use client'

import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import RevealWrapper from '@/components/animation/RevealWrapper'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const transformations = [
  {
    id: 1,
    before: 'Disconnected systems',
    after: 'Connected ecosystem',
    benefit: 'Reduce Complexity',
    img: '/images/wow/nav/cards/software&technology.png',
  },
  {
    id: 2,
    before: 'Legacy technology',
    after: 'Modern architecture',
    benefit: 'Improve Performance',
    img: '/images/wow/nav/cards/digital%20transofrmation%201.png',
  },
  {
    id: 3,
    before: 'Manual handoffs',
    after: 'Integrated workflows',
    benefit: 'Connect Your Tools',
    img: '/images/wow/nav/cards/AI%20and%20Automation%201.png',
  },
  {
    id: 4,
    before: 'Limited flexibility',
    after: 'Easier to evolve',
    benefit: 'Increase Flexibility',
    img: '/images/wow/nav/cards/SaaS%20Dev%201.png',
  },
  {
    id: 5,
    before: 'Data silos',
    after: 'Connected information',
    benefit: 'Build for What’s Next',
    img: '/images/wow/nav/cards/sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc%201.png',
  },
]

/** Layout: homepage-14/AwardWinningWork — hover table rows + preview image. */
const WhyModernize = () => {
  const previewRef = useRef<HTMLDivElement>(null)
  const previewImgRef = useRef<HTMLImageElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preview = previewRef.current
    const previewImg = previewImgRef.current
    const table = tableRef.current
    if (!preview || !previewImg || !table) return

    const rows = table.querySelectorAll<HTMLDivElement>('.row')
    const listeners: Array<{
      row: HTMLDivElement
      enter: () => void
      move: (e: MouseEvent) => void
      leave: () => void
    }> = []

    rows.forEach((row) => {
      const imgSrc = row.getAttribute('data-img')

      const enter = () => {
        if (!previewImg || !imgSrc) return
        previewImg.src = imgSrc
        gsap.to(preview, {
          duration: 0.3,
          scale: 1,
          rotate: 15,
          ease: 'power2.out',
        })
      }

      const move = (e: MouseEvent) => {
        const offsetX = preview.offsetWidth / 2
        const offsetY = preview.offsetHeight / 2
        preview.style.left = `${e.clientX - offsetX}px`
        preview.style.top = `${e.clientY - offsetY}px`
      }

      const leave = () => {
        gsap.to(preview, {
          duration: 0.3,
          scale: 0,
          rotate: -15,
          ease: 'power2.out',
        })
      }

      row.addEventListener('mouseenter', enter)
      row.addEventListener('mousemove', move)
      row.addEventListener('mouseleave', leave)
      listeners.push({ row, enter, move, leave })
    })

    return () => {
      listeners.forEach(({ row, enter, move, leave }) => {
        row.removeEventListener('mouseenter', enter)
        row.removeEventListener('mousemove', move)
        row.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-6 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>Why Modernize</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                Your technology shouldn’t hold your business <InstrumentText>back.</InstrumentText>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="max-md:w-full md:max-w-80 lg:max-w-[470px]">
            <TextAppearAnimation02>
              <p className="max-w-lg max-md:text-justify md:place-self-end md:text-right">
                Modernization helps remove technical limitations while preserving the systems, processes, and
                investments that still create value.
              </p>
            </TextAppearAnimation02>
          </div>
        </div>
      </div>

      <div
        ref={previewRef}
        className="pointer-events-none fixed left-1/2 top-1/4 z-20 h-[200px] w-[200px] origin-center rotate-[20deg] scale-0"
      >
        <figure className="h-full w-full overflow-hidden">
          <img
            ref={previewImgRef}
            src="/images/wow/nav/cards/software&technology.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        </figure>
      </div>

      <div
        ref={tableRef}
        className="reveal-me mx-auto border-t text-sm max-xl:overflow-auto max-md:px-5 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1380px]"
      >
        {transformations.map((item) => (
          <div
            key={item.id}
            className="row group flex min-h-[138px] cursor-pointer items-center justify-start border-b py-4"
            data-img={item.img}
          >
            <div className="-mt-5 w-40 shrink-0 font-instrument text-lg italic leading-[22px] md:w-52">
              {item.before}
            </div>
            <div className="ml-6 w-56 text-2xl md:ml-11 md:w-72 md:text-3xl lg:w-80 lg:leading-[1.1] 2xl:w-[470px] 2xl:text-5xl">
              {item.after}
            </div>
            <div className="ml-8 w-10 shrink-0 text-2xl leading-[1.6] xl:ml-16 2xl:ml-[150px]" aria-hidden>
              →
            </div>
            <div className="ml-6 w-40 text-right text-xl leading-[1.6] md:w-60 lg:w-[175px] xl:text-2xl 2xl:ml-0">
              {item.benefit}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyModernize
