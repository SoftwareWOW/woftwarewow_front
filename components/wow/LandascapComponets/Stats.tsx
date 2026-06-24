'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import CounterAnimation from '@/utils/CounterAnimation'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const achievementStats = [
  { 
    value: 3000, 
    label: 'Businesses Reached', 
    suffix: '+',
    description: 'Through websites, campaigns, software, content, and growth initiatives.'
  },
  { 
    value: 500, 
    label: 'Projects Delivered', 
    suffix: '+',
    description: 'Across marketing, technology, design, AI, and growth.'
  },
  { 
    value: 20, 
    label: 'Industries Served', 
    suffix: '+',
    description: 'Including healthcare, construction, legal, hospitality, retail, professional services, and eCommerce.'
  },
  { 
    value: 600, 
    label: 'Consultations & Strategy Sessions', 
    suffix: '+',
    description: 'Helping businesses identify opportunities and accelerate growth.'
  },
]

const Stats = () => {
  const { revealRef } = useReveal()
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // Scroll-stop effect with GSAP
  useGSAP(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const stats = statsRef.current

    if (!section || !pin || !stats) return

    // Calculate total scroll distance needed (in pixels)
    const scrollDistance = window.innerHeight * 0.6 // 60% of viewport height

    // Create a timeline for the scroll-stop effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: pin, // Pin the section
        scrub: 0.5, // Smooth scrubbing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          // Add class for dark mode text transition
          section.classList.add('is-pinned')
        },
        onLeave: () => {
          section.classList.remove('is-pinned')
        },
        onEnterBack: () => {
          section.classList.add('is-pinned')
        },
        onLeaveBack: () => {
          section.classList.remove('is-pinned')
        },
      },
    })

    // Animate stats elements with stagger
    const statElements = stats.querySelectorAll('.stat-item')
    tl.fromTo(
      statElements,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      },
      0
    )

    // Animate the description text
    tl.fromTo(
      section.querySelector('.section-description'),
      {
        opacity: 0.5,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      },
      0.1
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-background px-3 py-3 transition-colors duration-300 dark:bg-background md:px-4 md:py-4 min-h-screen"
    >
      {/* Pin container */}
      <div ref={pinRef} className="w-full">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-0 dark:opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }} />
          </div>
          
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1320px]">
            {/* Description with animation */}
            <RevealWrapper>
              <h4 
                className="section-description mx-auto max-w-4xl text-center font-['Outfit'] text-[clamp(18px,2.5vw,28px)] font-normal leading-[1.6] tracking-[0.02em] text-[#333333] dark:text-[#666666] transition-colors duration-700 is-pinned:dark:text-[#F2F2F2] is-pinned:text-[#1a1a1a]"
                ref={revealRef}
              >
                WOW Superagency brings technology, marketing, AI, websites, software, and growth services together under one coordinated ecosystem—helping businesses move faster with less complexity.
              </h4>
            </RevealWrapper>

            {/* Stats Grid */}
            <div 
              ref={statsRef}
              className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6"
            >
              {achievementStats.map((stat, index) => (
                <div key={stat.label} className="stat-item w-full">
                  <div className="group relative flex h-full min-h-[280px] flex-col items-center justify-start rounded-2xl border border-[#e5e5e5] dark:border-white/5 bg-white/50 backdrop-blur-sm dark:bg-dark/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#8b7cff]/5 dark:hover:shadow-[#8b7cff]/10 hover:border-[#8b7cff]/20 dark:hover:border-[#8b7cff]/20 md:p-8">
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8b7cff]/0 via-[#b794f4]/0 to-[#f4a8b8]/0 transition-all duration-500 group-hover:from-[#8b7cff]/10 group-hover:via-[#b794f4]/10 group-hover:to-[#f4a8b8]/10" />
                    
                    {/* Number */}
                    <div className="flex items-baseline gap-1">
                      <h2 className="font-['Outfit'] text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] dark:text-white transition-colors duration-300">
                        <CounterAnimation number={stat.value} />
                      </h2>
                      {stat.suffix && (
                        <span className="font-['Outfit'] text-[clamp(24px,3vw,40px)] font-bold text-[#8b7cff]">
                          {stat.suffix}
                        </span>
                      )}
                    </div>

                    {/* Label */}
                    <p className="mt-2 text-center font-['Outfit'] text-[clamp(14px,1.2vw,18px)] font-semibold text-[#1a1a1a] dark:text-[#F2F2F2] transition-colors duration-300">
                      {stat.label}
                    </p>

                    {/* Description */}
                    <p className="mt-3 line-clamp-3 text-center font-['Outfit'] text-[clamp(11px,0.9vw,14px)] font-normal leading-[1.5] text-[#666666] dark:text-[#888888] transition-colors duration-300">
                      {stat.description}
                    </p>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] transition-all duration-500 group-hover:w-2/3" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom decorative text */}
            <div className="mt-12 text-center">
              <p className="font-['Outfit'] text-[clamp(12px,1vw,14px)] text-[#999999] dark:text-[#666666] transition-colors duration-300">
                Trusted by businesses worldwide
              </p>
              <div className="mt-3 flex justify-center gap-4">
                {['✓', '✓', '✓', '✓'].map((check, i) => (
                  <span key={i} className="text-[#8b7cff] opacity-40 dark:opacity-30">{check}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for the scroll-stop effect */}
      <style jsx>{`
        .is-pinned .section-description {
          transition: color 0.7s ease;
        }
        
        .is-pinned.dark .section-description {
          color: #F2F2F2 !important;
        }
        
        .is-pinned .section-description {
          color: #1a1a1a !important;
        }
      `}</style>
    </section>
  )
}

export default Stats