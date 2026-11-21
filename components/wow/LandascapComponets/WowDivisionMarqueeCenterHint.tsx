'use client'

import type { MarqueeDivisionHint } from '@/components/wow/LandascapComponets/WowDivisionMarqueeLogoHover'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type WowDivisionMarqueeCenterHintProps = {
  hint: MarqueeDivisionHint | null
}

/** ~300×400 marquee hover card (matches Figma reference). */
const CARD_CLASS =
  'flex min-h-[25rem] w-[min(300px,calc(100vw-2rem))] max-w-[300px] flex-col gap-3 overflow-hidden rounded-radius-sm bg-white p-5 shadow-box ring-1 ring-foreground/5 dark:bg-dark'

export default function WowDivisionMarqueeCenterHint({ hint }: WowDivisionMarqueeCenterHintProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isSvg = hint?.imageSrc.toLowerCase().endsWith('.svg')

  return createPortal(
    <AnimatePresence mode="wait">
      {hint ? (
        <motion.div
          key={hint.divisionId}
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed inset-0 z-[1200] flex items-center justify-center px-4"
        >
          <div className={CARD_CLASS}>
            <div className="relative h-[11rem] w-full shrink-0 overflow-hidden rounded-radius-sm sm:h-[11.5rem]">
              <Image
                src={hint.imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="300px"
                unoptimized={isSvg}
              />
            </div>
            <p className="text-center font-outfit text-sm font-light leading-snug text-secondary dark:text-[#F2F2F2] sm:text-base">
              {hint.title}
            </p>
            <p className="text-center font-outfit text-xs font-light leading-relaxed text-[#808080] sm:text-sm sm:leading-relaxed">
              {hint.description}
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}