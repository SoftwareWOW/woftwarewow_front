'use client'

import { useMeetDialogOptional } from '@/components/wow/shared/MeetDialogProvider'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import { useLenis } from 'lenis/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type WowHeroProps = {
  hero: Dictionary['hero']
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const STAGE = '#0a0a0a'

const HERO_COPY = {
  badge: 'The Superagency for business growth',
  headline: 'Why work with an agency when you can work with a Superagency?',
  lead: "We're the Superagency with the expertise to deliver beyond the limits of a traditional agency.",
  body: 'Strategy, technology, marketing, and growth expertise brought together to solve bigger business challenges and turn ambitious goals into action.',
  ctaPrimary: 'Start a conversation',
  ctaSecondary: 'Explore what we do',
} as const

function Fillet({
  corner,
  className = '',
}: {
  corner: 'top left' | 'top right' | 'bottom left' | 'bottom right'
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-7 w-7 ${className}`}
      style={{
        backgroundColor: STAGE,
        maskImage: `radial-gradient(circle 28px at ${corner}, transparent 99%, #000 100%)`,
        WebkitMaskImage: `radial-gradient(circle 28px at ${corner}, transparent 99%, #000 100%)`,
      }}
    />
  )
}

/** 0 = full-screen image, 1 = image docked into the layout card. */
function useShrinkProgress() {
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const lenis = useLenis()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setProgress(1)
      return
    }

    let frame = 0

    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return

      const travel = el.offsetHeight - window.innerHeight
      if (travel <= 0) {
        setProgress(0)
        return
      }

      const scrollY = lenis?.scroll ?? window.scrollY
      const start = el.getBoundingClientRect().top + scrollY
      const next = (scrollY - start) / travel
      setProgress(Math.min(1, Math.max(0, next)))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    let offLenis: (() => void) | undefined
    if (lenis) {
      lenis.on('scroll', onScroll)
      offLenis = () => lenis.off('scroll', onScroll)
    }

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      offLenis?.()
    }
  }, [lenis])

  return { ref, progress }
}

const pillBase =
  'relative inline-flex items-center justify-center rounded-2xl px-8 py-5 text-[11px] font-medium uppercase tracking-[0.22em] whitespace-nowrap transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:px-12 sm:py-6'

export default function WowHero({ hero: _hero }: WowHeroProps) {
  const { ref, progress } = useShrinkProgress()
  const eased = progress * progress * (3 - 2 * progress)
  const meetDialog = useMeetDialogOptional()
  const pinned = progress < 1

  const introOpacity = 1 - Math.min(1, eased * 1.6)
  const dockedOpacity = Math.max(0, (eased - 0.35) / 0.4)
  const ctaOpacity = Math.max(0, (eased - 0.5) / 0.35)
  const dockedInteractive = eased > 0.6

  const imageTop = lerp(0, 46, eased)
  const imageSide = lerp(0, 4, eased)
  const imageBottom = lerp(0, 10, eased)
  const imageRadius = lerp(0, 18, eased)

  return (
    <section
      ref={ref}
      className="relative z-0 h-[240vh]"
      style={{ backgroundColor: STAGE }}
      aria-label="Hero"
    >
      <div
        className="h-screen w-full overflow-hidden"
        style={{
          backgroundColor: STAGE,
          position: pinned ? 'fixed' : 'absolute',
          top: pinned ? 0 : 'auto',
          bottom: pinned ? 0 : 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          className="absolute overflow-hidden"
          style={{
            top: `${imageTop}vh`,
            left: `${imageSide}vw`,
            right: `${imageSide}vw`,
            bottom: `${imageBottom}vh`,
            borderRadius: `${imageRadius}px`,
          }}
        >
          <Image
            src="/images/wow/hero-banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1] flex flex-col justify-center px-[6vw]"
          style={{ opacity: introOpacity }}
        >
          <span className="w-fit rounded-full bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80">
            {HERO_COPY.badge}
          </span>
          <h1 className="mt-8 max-w-4xl font-outfit text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white">
            {HERO_COPY.headline}
          </h1>
          <p className="mt-8 max-w-xl font-outfit text-base font-light text-white/85 md:text-lg">
            {HERO_COPY.lead}
          </p>
        </div>

        <div
          className="absolute inset-0 z-[1] px-[6vw] pt-[max(5.5rem,6vh)]"
          style={{
            opacity: dockedOpacity,
            pointerEvents: dockedInteractive ? 'auto' : 'none',
          }}
        >
          <span className="inline-block w-fit rounded-full bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/80">
            {HERO_COPY.badge}
          </span>
          <h2 className="mt-6 max-w-3xl font-outfit text-[clamp(1.75rem,4.2vw,3.15rem)] font-light leading-[1.08] tracking-tight text-white">
            {HERO_COPY.headline}
          </h2>
          <p className="mt-5 max-w-xl font-outfit text-sm font-light text-white/85 md:text-base">
            {HERO_COPY.lead}
          </p>
          <p className="mt-4 max-w-xl font-outfit text-sm font-light text-white/55 md:text-base">
            {HERO_COPY.body}
          </p>
        </div>

        <div
          className="absolute z-[2] max-md:bottom-[22vh] max-md:right-[6vw] md:right-[4vw]"
          style={{
            top: `calc(${imageTop}vh)`,
            opacity: ctaOpacity,
            pointerEvents: dockedInteractive ? 'auto' : 'none',
          }}
        >
          <div
            className="absolute right-0 bottom-[-36px] p-5 sm:bottom-[-40px] sm:p-7"
            style={{ backgroundColor: STAGE, paddingRight: 0 }}
          >
            <Fillet corner="bottom left" className="bottom-[10px] left-[-28px] sm:bottom-[12px]" />
            <Fillet corner="bottom left" className="bottom-[-28px] right-0" />
            <Link
              href="/meet"
              className={`${pillBase} bg-[#ededed] text-[#171717]`}
              onClick={(event) => {
                if (!meetDialog) return
                event.preventDefault()
                meetDialog.open()
              }}
            >
              {HERO_COPY.ctaPrimary}
            </Link>
          </div>
        </div>

        <div
          className="absolute z-[2] max-md:bottom-[8vh] max-md:left-[6vw]"
          style={{
            left: `${imageSide}vw`,
            bottom: `${imageBottom}vh`,
            opacity: ctaOpacity,
            pointerEvents: dockedInteractive ? 'auto' : 'none',
          }}
        >
          <div
            className="absolute left-0 top-[-36px] p-5 sm:top-[-40px] sm:p-7"
            style={{ backgroundColor: STAGE, paddingLeft: 0 }}
          >
            <Fillet corner="top right" className="right-[-28px] top-[10px] sm:top-[12px]" />
            <Fillet corner="top right" className="left-0 top-[-28px]" />
            <Link href="/services" className={`${pillBase} bg-primary text-white`}>
              {HERO_COPY.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
