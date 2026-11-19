'use client'

import type { MarqueeDivisionHint } from '@/components/wow/LandascapComponets/WowDivisionMarqueeLogoHover'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type WowDivisionMarqueeCenterHintProps = {
  hint: MarqueeDivisionHint | null
}

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
          <div className="w-[10.5rem] overflow-hidden rounded-radius-sm bg-white p-2 shadow-md ring-1 ring-foreground/10 dark:bg-dark sm:w-[11.5rem]">
            <div className="relative h-[3.25rem] w-full overflow-hidden rounded-md sm:h-[3.75rem]">
              <Image
                src={hint.imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="184px"
                unoptimized={isSvg}
              />
            </div>
            <p className="mt-2 text-center text-[9px] leading-snug text-secondary dark:text-[#F2F2F2] sm:text-[10px]">
              {hint.title}
            </p>
            <p className="mt-1 text-center text-[8px] leading-relaxed text-[#808080] sm:text-[9px]">
              {hint.description}
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}