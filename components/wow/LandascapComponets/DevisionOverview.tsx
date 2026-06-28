'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import { useState } from 'react'
import {
  Code2,
  TrendingUp,
  Palette,
  Brain,
  Users,
  Rocket,
  Globe,
  Star,
  Shield,
  LayoutDashboard,
  ArrowRight,
} from 'lucide-react'

const divisions = [
  {
    id: 1,
    title: 'SoftwareWOW!',
    description: 'Custom software, mobile apps, and digital products built to scale with your business — not against it.',
    icon: Code2,
    color: '#8b7cff',
    bgGradient: 'from-[#8b7cff]/20 to-[#b794f4]/20',
    href: '/divisions/software',
  },
  {
    id: 2,
    title: 'WOW Marketing',
    description: 'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
    icon: TrendingUp,
    color: '#f4a8b8',
    bgGradient: 'from-[#f4a8b8]/20 to-[#ff9191]/20',
    href: '/divisions/marketing',
  },
  {
    id: 3,
    title: 'WOW Design',
    description: 'Brand identity and visual systems that make your business memorable, credible, and impossible to ignore.',
    icon: Palette,
    color: '#b794f4',
    bgGradient: 'from-[#b794f4]/20 to-[#8b7cff]/20',
    href: '/divisions/design',
  },
  {
    id: 4,
    title: 'WOW Intelligence',
    description: 'AI solutions and automation that sharpen decisions, reduce manual work, and accelerate results.',
    icon: Brain,
    color: '#ff9191',
    bgGradient: 'from-[#ff9191]/20 to-[#f4a8b8]/20',
    href: '/divisions/intelligence',
  },
  {
    id: 5,
    title: 'WOW Social',
    description: 'Social strategy and community building that turns followers into customers and customers into advocates.',
    icon: Users,
    color: '#8b7cff',
    bgGradient: 'from-[#8b7cff]/20 to-[#b794f4]/20',
    href: '/divisions/social',
  },
  {
    id: 6,
    title: 'WOW Accelerate',
    description: 'Growth programs and strategic coaching designed to help your business reach its next level — faster.',
    icon: Rocket,
    color: '#f4a8b8',
    bgGradient: 'from-[#f4a8b8]/20 to-[#ff9191]/20',
    href: '/divisions/accelerate',
  },
  {
    id: 7,
    title: 'WOW Websites',
    description: 'High-performance websites optimized for speed, search visibility, conversion, and long-term growth.',
    icon: Globe,
    color: '#b794f4',
    bgGradient: 'from-[#b794f4]/20 to-[#8b7cff]/20',
    href: '/divisions/websites',
  },
  {
    id: 8,
    title: 'WOW Impact',
    description: 'Purpose-led initiatives and community programs that strengthen your brand and expand your reach.',
    icon: Star,
    color: '#ff9191',
    bgGradient: 'from-[#ff9191]/20 to-[#f4a8b8]/20',
    href: '/divisions/impact',
  },
  {
    id: 9,
    title: 'WOW Host',
    description: 'Secure, reliable hosting and infrastructure that keeps your business online, fast, and protected.',
    icon: Shield,
    color: '#8b7cff',
    bgGradient: 'from-[#8b7cff]/20 to-[#b794f4]/20',
    href: '/divisions/host',
  },
  {
    id: 10,
    title: 'WOW Hub',
    description: 'Your centralized command center for tools, training, collaboration, and seamless team execution.',
    icon: LayoutDashboard,
    color: '#b794f4',
    bgGradient: 'from-[#b794f4]/20 to-[#8b7cff]/20',
    href: '/divisions/hub',
  },
]

const DevisionOverview = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 0,
  })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      ref={triggerRef}
      className="service-section relative overflow-hidden bg-background py-14 transition-colors duration-300 md:py-16 lg:py-[88px] xl:py-[100px]"
      aria-labelledby="divisions-heading"
    >
      {/* Background decorative elements - matching WowSuperAgencyClient */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <TextAppearAnimation>
              <h2
                id="divisions-heading"
                className="text-appear text-left text-[#000000] dark:text-[#F2F2F2] max-md:text-4xl max-sm:text-3xl"
              >
                Specialized Divisions. <br />
                One Unified{' '}
                <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                  Ecosystem.
                </span>
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <RevealWrapper className="mt-7 md:mt-14">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-radius-lg bg-gradient-to-r from-[#8b7cff] to-[#b794f4] px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8b7cff]/30"
                aria-label="Explore the WOW Superagency ecosystem"
              >
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  Explore the Ecosystem
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="service-wrapper mt-12 flex w-max flex-nowrap gap-6 overflow-visible px-5 sm:px-6 md:mt-16 md:pl-[20%] md:pr-10"
        aria-label="WOW Superagency divisions"
      >
        {divisions.map((item) => {
          const Icon = item.icon
          const isHovered = hoveredId === item.id

          return (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-[78vw] shrink-0 rounded-radius-md border transition-all duration-500 cursor-pointer sm:w-[320px] md:w-[360px] lg:w-[390px] focus:outline-none focus:ring-2 focus:ring-[#8b7cff] focus:ring-offset-2"
              style={{
                borderColor: isHovered
                  ? '#8b7cff'
                  : '#e5e5e5',
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <article
                className={`relative h-full min-h-[280px] rounded-radius-md bg-white/80 backdrop-blur-sm dark:bg-dark/80 p-6 transition-all duration-500 md:p-8 ${
                  isHovered
                    ? 'shadow-2xl shadow-[#8b7cff]/20 dark:shadow-[#8b7cff]/30'
                    : 'shadow-sm dark:shadow-none'
                }`}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 rounded-radius-md bg-gradient-to-br ${item.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-0.5 rounded-radius-md bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  {/* Header with icon and number */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`rounded-radius-sm p-3 transition-all duration-500 ${
                        isHovered
                          ? 'bg-gradient-to-br from-[#8b7cff] to-[#b794f4] text-white shadow-lg shadow-[#8b7cff]/30'
                          : 'bg-[#f0f0f0] text-[#8b7cff] dark:bg-white/5 dark:text-[#b794f4]'
                      }`}
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <span
                      className={`font-instrument text-4xl font-normal leading-none transition-colors duration-300 md:text-5xl ${
                        isHovered
                          ? 'text-[#8b7cff]'
                          : 'text-[#d0d0d0] dark:text-white/10'
                      }`}
                    >
                      {String(item.id).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-4 text-2xl font-bold leading-[110%] tracking-[-0.02em] transition-colors duration-300 md:text-3xl ${
                      isHovered
                        ? 'text-[#1a1a1a] dark:text-[#F2F2F2]'
                        : 'text-[#1a1a1a] dark:text-[#F2F2F2]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 text-sm leading-6 transition-colors duration-300 md:text-base ${
                      isHovered
                        ? 'text-[#333333] dark:text-[#CCCCCC]'
                        : 'text-[#555555] dark:text-[#888888]'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Learn more link */}
                  <div
                    className={`mt-4 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isHovered
                        ? 'text-[#8b7cff] opacity-100'
                        : 'text-[#8b7cff] opacity-0'
                    }`}
                  >
                    <span>Explore Division</span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`}
                    />
                  </div>

                  {/* Decorative bottom line */}
                  <div
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] transition-all duration-500 ${
                      isHovered ? 'w-2/3' : 'w-0'
                    }`}
                  />
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default DevisionOverview