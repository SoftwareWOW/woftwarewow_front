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

  /*
   * LARGE DESKTOP
   * xl and above
   */
  const imageTop =
    lerp(0, 40, eased)

  const imageSide =
    lerp(0, 4, eased)

  const imageBottom =
    lerp(0, 1, eased)

  /*
   * MOBILE
   * Below md
   */
  const mobileImageTop =
    lerp(0, 28, eased)

  const mobileImageBottom =
    lerp(0, 15, eased)

  /*
   * TABLET
   * md -> xl
   *
   * Tablet text wraps onto more lines, so the image needs to
   * begin lower than it does on large desktop.
   */
  const tabletImageTop =
    lerp(0, 48, eased)

  const tabletImageBottom =
    lerp(0, 1, eased)

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

            md:top-[var(--image-top-tablet)]
            md:bottom-[var(--image-bottom-tablet)]

            xl:top-[var(--image-top-desktop)]
            xl:bottom-[var(--image-bottom-desktop)]
          "
          style={{
            '--image-top-mobile': `${mobileImageTop}vh`,
            '--image-bottom-mobile': `${mobileImageBottom}vh`,

            '--image-top-tablet': `${tabletImageTop}vh`,
            '--image-bottom-tablet': `${tabletImageBottom}vh`,

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
          <h1
            className="
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

            Mobile keeps the position you already fixed.
            Tablet/desktop use the original desktop padding.
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
            MOBILE IMAGE OVERLAP TEXT

            Kept for mobile only.
            It uses exactly the same mobile top padding as the
            normal docked text, so there is no duplicate offset.
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[21]
            px-[6vw]
            pt-[9rem]
            md:hidden
          "
          style={{
            opacity: dockedOpacity,
            clipPath: `inset(${mobileImageTop}vh ${imageSide}vw ${mobileImageBottom}vh ${imageSide}vw round ${imageRadius}px)`,
          }}
        >
          <h2
            className="
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

        {/* ==================================================
            LARGE DESKTOP IMAGE OVERLAP TEXT

            IMPORTANT:
            Starts only at xl now.
            It is intentionally disabled on tablet so tablet
            text cannot be clipped by the desktop image mask.
        ================================================== */}

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
            xl:block
          "
          style={{
            opacity: dockedOpacity,
            clipPath: `inset(${imageTop}vh ${imageSide}vw ${imageBottom}vh ${imageSide}vw round ${imageRadius}px)`,
          }}
        >
          <h2
            className="
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

            Mobile: above image.
            Tablet: follows tablet image top.
            Desktop: keeps original desktop image top.
        ================================================== */}

        <div
          className="
            absolute
            z-[30]

            top-[var(--cta-top-mobile)]
            right-[var(--cta-side)]
            -translate-y-full

            md:top-[var(--cta-top-tablet)]
            md:translate-y-0

            xl:top-[var(--cta-top-desktop)]
          "
          style={{
            '--cta-top-mobile': `${mobileImageTop}vh`,
            '--cta-top-tablet': `${tabletImageTop}vh`,
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

            Mobile keeps the mobile bottom.
            Tablet gets its own bottom.
            Large desktop keeps the desktop bottom.
        ================================================== */}

        <div
          className="
            absolute
            z-[30]

            left-[var(--cta-side)]
            bottom-[var(--cta-bottom-mobile)]
            translate-y-full

            md:bottom-[var(--cta-bottom-tablet)]
            md:translate-y-0

            xl:bottom-[var(--cta-bottom-desktop)]
          "
          style={{
            '--cta-side': `${imageSide}vw`,
            '--cta-bottom-mobile': `${mobileImageBottom}vh`,
            '--cta-bottom-tablet': `${tabletImageBottom}vh`,
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