'use client'

import { useMeetDialogOptional } from '@/components/wow/shared/MeetDialogProvider'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import { useLenis } from 'lenis/react'
import Image from 'next/image'
import type { CSSProperties, MouseEvent, ReactNode } from 'react'
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

      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight

      const travel = element.offsetHeight - viewportHeight

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
    window.visualViewport?.addEventListener('resize', onScroll)
    window.visualViewport?.addEventListener('scroll', onScroll)

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
      window.visualViewport?.removeEventListener('resize', onScroll)
      window.visualViewport?.removeEventListener('scroll', onScroll)

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
  max-w-full
  items-center
  justify-center
  whitespace-nowrap
  rounded-radius-md
  px-5
  py-4
  text-[10px]
  font-medium
  uppercase
  tracking-[0.16em]
  transition-opacity
  hover:opacity-85
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-white/40
  sm:px-8
  sm:py-5
  sm:text-[11px]
  sm:tracking-[0.22em]
  md:px-12
  md:py-6
`

type NotchPlacement = 'top-right' | 'bottom-left'

function NotchedCta({
  placement,
  href,
  className,
  children,
  onClick,
}: {
  placement: NotchPlacement
  href: string
  className: string
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}) {
  const isTopRight = placement === 'top-right'

  return (
    <div
      className={
        isTopRight
          ? 'relative z-[2] rounded-bl-[10px] bg-backgroundBody pb-2 pl-2 dark:bg-dark'
          : 'relative z-[2] rounded-tr-[10px] bg-backgroundBody pr-2 pt-2 dark:bg-dark'
      }
    >
      <span
        aria-hidden
        className={
          isTopRight
            ? 'pointer-events-none absolute left-[-10px] top-0 z-[3] h-[10px] w-[10px]'
            : 'pointer-events-none absolute left-0 top-[-10px] z-[3] h-[10px] w-[10px]'
        }
        style={{
          background: isTopRight
            ? 'radial-gradient(circle at 0% 100%, transparent 10px, var(--hero-bg) 10.5px)'
            : 'radial-gradient(circle at 100% 0%, transparent 10px, var(--hero-bg) 10.5px)',
        }}
      />
      <span
        aria-hidden
        className={
          isTopRight
            ? 'pointer-events-none absolute bottom-[-10px] right-0 z-[3] h-[10px] w-[10px]'
            : 'pointer-events-none absolute bottom-0 right-[-10px] z-[3] h-[10px] w-[10px]'
        }
        style={{
          background: isTopRight
            ? 'radial-gradient(circle at 0% 100%, transparent 10px, var(--hero-bg) 10.5px)'
            : 'radial-gradient(circle at 100% 0%, transparent 10px, var(--hero-bg) 10.5px)',
        }}
      />
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    </div>
  )
}

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

     Intro copy and docked copy must never render together.
     A crossfade is what made the two headlines sit on top
     of each other while the image shrank.
  ======================================================= */

  const dockedOpacity =
    Math.max(
      0,
      Math.min(
        1,
        (eased - 0.35) / 0.4,
      ),
    )

  const introOpacity =
    dockedOpacity > 0 ? 0 : 1 - Math.min(1, eased * 1.6)

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
   * Below md — same shrink as desktop, with extra top
   * room so the wrapping headline stays above the image.
   */
  const mobileImageTop =
    lerp(0, 38, eased)

  const mobileImageBottom =
    lerp(0, 12, eased)

  /*
   * TABLET
   * md -> xl
   */
  const tabletImageTop =
    lerp(0, 42, eased)

  const tabletImageBottom =
    lerp(0, 8, eased)

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
      className={`relative z-0 h-[240dvh] ${stageBgClass}`}
    >
      {/* ==================================================
          FIXED / PINNED HERO
      ================================================== */}

      <div
        className={`
          h-dvh
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
          ['--image-top-mobile' as string]: `${mobileImageTop}dvh`,
          ['--image-bottom-mobile' as string]: `${mobileImageBottom}dvh`,
          ['--image-top-tablet' as string]: `${tabletImageTop}dvh`,
          ['--image-bottom-tablet' as string]: `${tabletImageBottom}dvh`,
          ['--image-top-desktop' as string]: `${imageTop}dvh`,
          ['--image-bottom-desktop' as string]: `${imageBottom}dvh`,
          ['--image-side' as string]: `${imageSide}vw`,
          ['--image-radius' as string]: `${imageRadius}px`,
        } as CSSProperties}
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
            borderRadius: `${imageRadius}px`,
          }}
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
              break-words
              font-outfit
              text-[clamp(1.85rem,8vw,4.5rem)]
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

            pt-[max(5.5rem,8vh)]
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
              break-words
              font-outfit
              text-[clamp(1.6rem,5.4vw,3.15rem)]
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
            IMAGE OVERLAP TEXT

            Same copy as the docked layer, clipped to the
            shrinking image so type turns white on the photo
            without a second unclipped headline showing through.
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[21]
            px-[6vw]
            pt-[max(5.5rem,8vh)]
            md:pt-[max(5.5rem,6vh)]

            [clip-path:inset(var(--image-top-mobile)_var(--image-side)_var(--image-bottom-mobile)_var(--image-side)_round_var(--image-radius))]
            md:[clip-path:inset(var(--image-top-tablet)_var(--image-side)_var(--image-bottom-tablet)_var(--image-side)_round_var(--image-radius))]
            xl:[clip-path:inset(var(--image-top-desktop)_var(--image-side)_var(--image-bottom-desktop)_var(--image-side)_round_var(--image-radius))]
          "
          style={{
            opacity: dockedOpacity,
          }}
        >
          <h2
            className="
              max-w-3xl
              break-words
              font-outfit
              text-[clamp(1.6rem,5.4vw,3.15rem)]
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
            TOP-RIGHT CTA — sits on the shrinking image corner
        ================================================== */}

        <div
          className="
            absolute
            z-[30]
            max-w-[calc(100%-0.75rem)]

            top-[var(--image-top-mobile)]
            right-[var(--image-side)]

            md:top-[var(--image-top-tablet)]
            xl:top-[var(--image-top-desktop)]
          "
          style={{
            opacity: ctaOpacity,
            pointerEvents:
              dockedInteractive
                ? 'auto'
                : 'none',
          }}
        >
          <NotchedCta
            placement="top-right"
            href="/meet"
            className={`${pillBase} bg-secondary text-backgroundBody dark:bg-backgroundBody dark:text-secondary`}
            onClick={(event) => {
              if (!meetDialog) return
              event.preventDefault()
              meetDialog.open()
            }}
          >
            {HERO_COPY.ctaPrimary}
          </NotchedCta>
        </div>

        {/* ==================================================
            BOTTOM-LEFT CTA — sits on the shrinking image corner
        ================================================== */}

        <div
          className="
            absolute
            z-[30]
            max-w-[calc(100%-0.75rem)]

            left-[var(--image-side)]
            bottom-[var(--image-bottom-mobile)]

            md:bottom-[var(--image-bottom-tablet)]
            xl:bottom-[var(--image-bottom-desktop)]
          "
          style={{
            opacity: ctaOpacity,
            pointerEvents:
              dockedInteractive
                ? 'auto'
                : 'none',
          }}
        >
          <NotchedCta
            placement="bottom-left"
            href="/services"
            className={`${pillBase} bg-primary text-white`}
          >
            {HERO_COPY.ctaSecondary}
          </NotchedCta>
        </div>
      </div>
    </section>
  )
}