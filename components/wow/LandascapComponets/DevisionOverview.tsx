'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const DIVISION_BG_BASE = '/images/wow/Hero/devision'

const divisions = [
  {
    id: 1,
    title: 'SoftwareWOW!',
    description:
      'Custom software, mobile apps, and digital products built to scale with your business — not against it.',
    bgImage: `${DIVISION_BG_BASE}/Mockup 2 Dark.png`,
    href: '/divisions/software',
  },
  {
    id: 2,
    title: 'WOW Marketing',
    description: 'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
    bgImage: `${DIVISION_BG_BASE}/Image-copy-scaled.jpeg`,
    href: '/divisions/marketing',
  },
  {
    id: 3,
    title: 'WOW Design',
    description:
      'Brand identity and visual systems that make your business memorable, credible, and impossible to ignore.',
    bgImage: `${DIVISION_BG_BASE}/Design 1.jpg`,
    href: '/divisions/design',
  },
  {
    id: 4,
    title: 'WOW Intelligence',
    description: 'AI solutions and automation that sharpen decisions, reduce manual work, and accelerate results.',
    bgImage: `${DIVISION_BG_BASE}/Intelligence.jpg`,
    href: '/divisions/intelligence',
  },
  {
    id: 5,
    title: 'WOW Social',
    description:
      'Social strategy and community building that turns followers into customers and customers into advocates.',
    bgImage: `${DIVISION_BG_BASE}/Events (1).jpg`,
    href: '/divisions/social',
  },
  {
    id: 6,
    title: 'WOW Accelerate',
    description: 'Growth programs and strategic coaching designed to help your business reach its next level — faster.',
    bgImage: `${DIVISION_BG_BASE}/Accelerate.jpg`,
    href: '/divisions/accelerate',
  },
  {
    id: 7,
    title: 'WOW Websites',
    description:
      'High-performance websites optimized for speed, search visibility, conversion, and long-term growth.',
    bgImage: `${DIVISION_BG_BASE}/Website 1.jpg`,
    href: '/divisions/websites',
  },
  {
    id: 8,
    title: 'WOW Impact',
    description: 'Purpose-led initiatives and community programs that strengthen your brand and expand your reach.',
    bgImage: `${DIVISION_BG_BASE}/Impact.jpg`,
    href: '/divisions/impact',
  },
  {
    id: 9,
    title: 'WOW Host',
    description: 'Secure, reliable hosting and infrastructure that keeps your business online, fast, and protected.',
    bgImage: `${DIVISION_BG_BASE}/Server.jpg`,
    href: '/divisions/host',
  },
  {
    id: 10,
    title: 'WOW Hub',
    description: 'Your centralized command center for tools, training, collaboration, and seamless team execution.',
    bgImage: `${DIVISION_BG_BASE}/Education.jpg`,
    href: '/divisions/hub',
  },
]

const wowGradientClass =
  'bg-gradient-to-r from-[#f4a8b8] via-[#b794f4] to-[#8b7cff] bg-clip-text text-transparent'

function renderDivisionTitle(title: string, isImageActive: boolean) {
  const wowClass = isImageActive ? wowGradientClass : 'text-[#8b7cff]'

  if (title.startsWith('WOW ')) {
    return (
      <>
        <span className={wowClass}>WOW</span>
        <span> {title.slice(4)}</span>
      </>
    )
  }

  const wowIndex = title.indexOf('WOW')
  if (wowIndex !== -1) {
    return (
      <>
        {title.slice(0, wowIndex)}
        <span className={wowClass}>WOW</span>
        {title.slice(wowIndex + 3)}
      </>
    )
  }

  return title
}

const DevisionOverview = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 0,
  })
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const isImageActive = hoveredId !== null

  return (
    <section
      ref={triggerRef}
      className="service-section relative flex min-h-[85vh] flex-col overflow-hidden py-14 transition-colors duration-500 md:py-16 lg:py-[88px] xl:py-[100px]"
      aria-labelledby="divisions-heading"
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Default lavender background */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-[#ebe6f4] transition-opacity duration-700 ${
          isImageActive ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Division background images */}
      {divisions.map((item) => (
        <div
          key={item.id}
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-700 ${
            hoveredId === item.id ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.bgImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={item.id <= 2}
          />
        </div>
      ))}

      {/* Dark overlay when a division image is active */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-black/55 transition-opacity duration-700 ${
          isImageActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="container relative z-10 flex-1">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <span
              className={`mb-5 inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-500 ${
                isImageActive
                  ? 'bg-white/15 text-white/90'
                  : 'bg-[#1a1a1a] text-white'
              }`}
            >
              Divisions Overview
            </span>

            <TextAppearAnimation>
              <h2
                id="divisions-heading"
                className={`text-appear text-left transition-colors duration-500 max-md:text-4xl max-sm:text-3xl ${
                  isImageActive ? 'text-white' : 'text-[#1a1a1a]'
                }`}
              >
                Eleven Divisions. <br />
                One Growth{' '}
                <span className="font-instrument italic">Ecosystem.</span>
              </h2>
            </TextAppearAnimation>
          </div>

          <div
            className={`relative hidden h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full shadow-lg transition-all duration-500 md:flex lg:h-[88px] lg:w-[88px] ${
              isImageActive ? 'bg-white/95' : 'bg-white'
            }`}
          >
            <Image
              src="/images/wow/wowlogo.png"
              alt="WOW"
              width={48}
              height={48}
              className="h-10 w-10 object-contain lg:h-12 lg:w-12"
            />
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="service-wrapper relative z-10 mt-12 flex w-max flex-nowrap gap-5 overflow-visible px-5 sm:px-6 md:mt-auto md:gap-6 md:pl-[12%] md:pr-10 lg:pl-[15%]"
        aria-label="WOW Superagency divisions"
      >
        {divisions.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-[78vw] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7cff] focus-visible:ring-offset-2 sm:w-[300px] md:w-[320px] lg:w-[340px]"
            onMouseEnter={() => setHoveredId(item.id)}
            onFocus={() => setHoveredId(item.id)}
            onBlur={() => setHoveredId(null)}
          >
            <article
              className={`relative flex min-h-[300px] flex-col rounded-radius-sm p-7 shadow-md transition-all duration-500 md:min-h-[320px] md:p-8 ${
                isImageActive
                  ? 'bg-white text-[#1a1a1a] shadow-xl shadow-black/10'
                  : 'bg-[#1c1c1c] text-white shadow-lg shadow-black/20'
              }`}
            >
              <h3 className="pr-4 text-2xl font-bold leading-[1.15] tracking-[-0.02em] md:text-[1.65rem]">
                {renderDivisionTitle(item.title, isImageActive)}
              </h3>

              <p
                className={`mt-4 flex-1 text-sm leading-6 md:text-[15px] ${
                  isImageActive ? 'text-[#555555]' : 'text-[#b0b0b0]'
                }`}
              >
                {item.description}
              </p>

              <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-radius-sm bg-[#8b7cff] text-white transition-transform duration-300 group-hover:scale-105">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} aria-hidden />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default DevisionOverview
