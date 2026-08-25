'use client'

import { useMeetDialogOptional } from '@/components/wow/shared/MeetDialogProvider'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import { useLenis } from 'lenis/react'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'

type WowHeroProps = {
  hero: Dictionary['hero']
}

const HERO_COPY = {
  badge: 'The Superagency for business growth',
  headline: 'Why work with an agency when you can work with a Superagency?',
  lead: "We're the Superagency with the expertise to deliver beyond the limits of a traditional agency.",
  body: 'Strategy, technology, marketing, and growth expertise brought together to solve bigger business challenges and turn ambitious goals into action.',
  ctaPrimary: 'Start a conversation',
  ctaSecondary: 'Explore what we do',
} as const

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const stageBgClass =
  'bg-backgroundBody transition-colors duration-300 dark:bg-dark'

/* =========================================================
   SCROLL PROGRESS
========================================================= */

function useShrinkProgress() {
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const lenis = useLenis()

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      setProgress(1)
      return
    }

    let frame = 0

    const update = () => {
      frame = 0

      const element = ref.current
      if (!element) return

      const travel = element.offsetHeight - window.innerHeight

      if (travel <= 0) {
        setProgress(0)
        return
      }

      const scrollY = lenis?.scroll ?? window.scrollY

      const sectionStart =
        element.getBoundingClientRect().top + scrollY

      const next = (scrollY - sectionStart) / travel

      setProgress(Math.min(1, Math.max(0, next)))
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    window.addEventListener('resize', onScroll)

    let removeLenisListener: (() => void) | undefined

    if (lenis) {
      lenis.on('scroll', onScroll)

      removeLenisListener = () => {
        lenis.off('scroll', onScroll)
      }
    }

    return () => {
      if (frame) {
        cancelAnimationFrame(frame)
      }

      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)

      removeLenisListener?.()
    }
  }, [lenis])

  return {
    ref,
    progress,
  }
}

/* =========================================================
   BUTTON STYLE
========================================================= */

const pillBase = `
  relative
  z-[5]
  inline-flex
  items-center
  justify-center
  whitespace-nowrap
  rounded-[10px]
  px-8
  py-5
  text-[11px]
  font-medium
  uppercase
  tracking-[0.22em]
  transition-opacity
  hover:opacity-85
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-white/40
  sm:px-12
  sm:py-6
`

/* =========================================================
   HERO
========================================================= */

export default function WowHero({
  hero: _hero,
}: WowHeroProps) {
  const { ref, progress } = useShrinkProgress()

  const meetDialog = useMeetDialogOptional()

  /* Smoothstep easing */
  const eased =
    progress *
    progress *
    (3 - 2 * progress)

  const pinned = progress < 1

  /* =======================================================
     OPACITY
  ======================================================= */

  const introOpacity =
    1 - Math.min(1, eased * 1.6)

  const dockedOpacity =
    Math.max(
      0,
      Math.min(
        1,
        (eased - 0.35) / 0.4,
      ),
    )

  const ctaOpacity =
    Math.max(
      0,
      Math.min(
        1,
        (eased - 0.5) / 0.35,
      ),
    )

  const dockedInteractive =
    eased > 0.6

  /* =======================================================
     IMAGE ANIMATION
  ======================================================= */

  const imageTop =
    lerp(0, 40, eased)

  const imageSide =
    lerp(0, 4, eased)

  const imageBottom =
    lerp(0, 1, eased)

  /* Mobile docked image stays centered so the order becomes:
     top button -> image shape -> bottom button. */
  const mobileImageTop =
    lerp(0, 28, eased)

  const mobileImageBottom =
    lerp(0, 15, eased)

  /*
   * Image corners:
   * 0px while full screen
   * 10px when docked
   */
  const imageRadius =
    lerp(0, 10, eased)

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className={`relative z-0 h-[240vh] ${stageBgClass}`}
    >
      {/* ==================================================
          FIXED / PINNED HERO
      ================================================== */}

      <div
        className={`
          h-screen
          w-full
          overflow-hidden
          isolate

          [--hero-bg:#ededed]
          dark:[--hero-bg:#0D0D0D]

          ${stageBgClass}
        `}
        style={{
          position: pinned ? 'fixed' : 'absolute',
          top: pinned ? 0 : 'auto',
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        {/* ==================================================
            IMAGE
        ================================================== */}

        <div
          className="
            absolute
            z-0
            overflow-hidden
            top-[var(--image-top-mobile)]
            right-[var(--image-side)]
            bottom-[var(--image-bottom-mobile)]
            left-[var(--image-side)]
            md:top-[var(--image-top-desktop)]
            md:bottom-[var(--image-bottom-desktop)]
          "
          style={{
            '--image-top-mobile': `${mobileImageTop}vh`,
            '--image-bottom-mobile': `${mobileImageBottom}vh`,
            '--image-top-desktop': `${imageTop}vh`,
            '--image-bottom-desktop': `${imageBottom}vh`,
            '--image-side': `${imageSide}vw`,
            borderRadius: `${imageRadius}px`,
          } as CSSProperties}
        >
          <Image
            src="/images/wow/hero-banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ==================================================
            FULL SCREEN INTRO
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            flex
            flex-col
            justify-center
            px-[6vw]
          "
          style={{
            opacity: introOpacity,
          }}
        >
          <span
            className="
              w-fit
              rounded-full
              bg-white/15
              px-4
              py-1.5
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-white/90
              backdrop-blur-sm
            "
          >
            {HERO_COPY.badge}
          </span>

          <h1
            className="
              mt-8
              max-w-4xl
              font-outfit
              text-[clamp(2.25rem,6vw,4.5rem)]
              font-light
              leading-[1.05]
              tracking-tight
              text-white
            "
          >
            {HERO_COPY.headline}
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              font-outfit
              text-base
              font-light
              text-white/85
              md:text-lg
            "
          >
            {HERO_COPY.lead}
          </p>
        </div>

        {/* ==================================================
            DOCKED COPY
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[20]
            px-[6vw]
            pt-[9rem]
            md:pt-[max(5.5rem,6vh)]
          "
          style={{
            opacity: dockedOpacity,
            pointerEvents:
              dockedInteractive
                ? 'auto'
                : 'none',
          }}
        >
  

          <h2
            className="
              mt-6
              max-w-3xl
              font-outfit
              text-[clamp(1.75rem,4.2vw,3.15rem)]
              font-light
              leading-[1.08]
              tracking-tight
              text-secondary
              dark:text-backgroundBody
            "
          >
            {HERO_COPY.headline}
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              font-outfit
              text-sm
              font-light
              text-secondary/85
              dark:text-backgroundBody/85
              md:text-base
            "
          >
            {HERO_COPY.lead}
          </p>

          <p
            className="
              mt-4
              max-w-xl
              font-outfit
              text-sm
              font-light
              text-muted-foreground
              dark:text-dark-100
              md:text-base
            "
          >
            {HERO_COPY.body}
          </p>
        </div>

        {/* ==================================================
            DOCKED COPY — IMAGE OVERLAY

            Keep the original dark copy on the page background,
            then paint the same copy in white ONLY where the image
            passes underneath it. This keeps the text readable on
            both desktop and mobile without moving/changing the
            existing layout.
        ================================================== */}

        {/* Mobile image overlap text */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[21]
            px-[6vw]
            pt-[9rem] md:pt-[max(5.5rem,6vh)]
            md:hidden
          "
          style={{
            opacity: dockedOpacity,
            clipPath: `inset(${mobileImageTop}vh ${imageSide}vw ${mobileImageBottom}vh ${imageSide}vw round ${imageRadius}px)`,
          }}
        >

          <h2
            className="
              mt-6
              max-w-3xl
              font-outfit
              text-[clamp(1.75rem,4.2vw,3.15rem)]
              font-light
              leading-[1.08]
              tracking-tight
              text-white
            "
          >
            {HERO_COPY.headline}
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              font-outfit
              text-sm
              font-light
              text-white/85
            "
          >
            {HERO_COPY.lead}
          </p>

          <p
            className="
              mt-4
              max-w-xl
              font-outfit
              text-sm
              font-light
              text-white/75
            "
          >
            {HERO_COPY.body}
          </p>
        </div>

        {/* Desktop image overlap text */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[21]
            hidden
            px-[6vw]
            pt-[max(5.5rem,6vh)]
            md:block
          "
          style={{
            opacity: dockedOpacity,
            clipPath: `inset(${imageTop}vh ${imageSide}vw ${imageBottom}vh ${imageSide}vw round ${imageRadius}px)`,
          }}
        >

          <h2
            className="
              mt-6
              max-w-3xl
              font-outfit
              text-[clamp(1.75rem,4.2vw,3.15rem)]
              font-light
              leading-[1.08]
              tracking-tight
              text-white
            "
          >
            {HERO_COPY.headline}
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              font-outfit
              text-sm
              font-light
              text-white/85
              md:text-base
            "
          >
            {HERO_COPY.lead}
          </p>

          <p
            className="
              mt-4
              max-w-xl
              font-outfit
              text-sm
              font-light
              text-white/75
              md:text-base
            "
          >
            {HERO_COPY.body}
          </p>
        </div>

        {/* ==================================================
            TOP-RIGHT CTA

            10px main corner
            10px left fillet
            10px bottom fillet
        ================================================== */}

        <div
          className="
            absolute
            z-[30]
            top-[var(--cta-top-mobile)]
            right-[var(--cta-side)]
            -translate-y-full
            md:top-[var(--cta-top-desktop)]
            md:translate-y-0
          "
          style={{
            '--cta-top-mobile': `${mobileImageTop}vh`,
            '--cta-top-desktop': `${imageTop}vh`,
            '--cta-side': `${imageSide}vw`,
            opacity: ctaOpacity,
            pointerEvents:
              dockedInteractive
                ? 'auto'
                : 'none',
          } as CSSProperties}
        >
          <div
            className="
              relative
              z-[2]
              rounded-bl-[10px]
              bg-backgroundBody
              pb-2
              pl-2
              dark:bg-dark
            "
          >
            {/* LEFT INVERTED CORNER */}

            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                left-[-10px]
                top-0
                z-[3]
                h-[10px]
                w-[10px]
              "
              style={{
                background:
                  'radial-gradient(circle at 0% 100%, transparent 10px, var(--hero-bg) 10.5px)',
              }}
            />

            {/* BOTTOM INVERTED CORNER */}

            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                bottom-[-10px]
                right-0
                z-[3]
                h-[10px]
                w-[10px]
              "
              style={{
                background:
                  'radial-gradient(circle at 0% 100%, transparent 10px, var(--hero-bg) 10.5px)',
              }}
            />

            <Link
              href="/meet"
              className={`
                ${pillBase}
                bg-secondary
                text-backgroundBody
                dark:bg-backgroundBody
                dark:text-secondary
              `}
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

        {/* ==================================================
            BOTTOM-LEFT CTA

            Exact opposite/mirror of top-right.
            All corners = 10px.
        ================================================== */}

        <div
          className="
            absolute
            z-[30]
            left-[var(--cta-side)]
            bottom-[var(--cta-bottom-mobile)]
            translate-y-full
            md:bottom-[var(--cta-bottom-desktop)]
            md:translate-y-0
          "
          style={{
            '--cta-side': `${imageSide}vw`,
            '--cta-bottom-mobile': `${mobileImageBottom}vh`,
            '--cta-bottom-desktop': `${imageBottom}vh`,
            opacity: ctaOpacity,
            pointerEvents:
              dockedInteractive
                ? 'auto'
                : 'none',
          } as CSSProperties}
        >
          <div
            className="
              relative
              z-[2]
              rounded-tr-[10px]
              bg-backgroundBody
              pr-2
              pt-2
              dark:bg-dark
            "
          >
            {/* TOP INVERTED CORNER */}

            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                left-0
                top-[-10px]
                z-[3]
                h-[10px]
                w-[10px]
              "
              style={{
                background:
                  'radial-gradient(circle at 100% 0%, transparent 10px, var(--hero-bg) 10.5px)',
              }}
            />

            {/* RIGHT INVERTED CORNER */}

            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                bottom-0
                right-[-10px]
                z-[3]
                h-[10px]
                w-[10px]
              "
              style={{
                background:
                  'radial-gradient(circle at 100% 0%, transparent 10px, var(--hero-bg) 10.5px)',
              }}
            />

            <Link
              href="/services"
              className={`
                ${pillBase}
                bg-primary
                text-white
              `}
            >
              {HERO_COPY.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}