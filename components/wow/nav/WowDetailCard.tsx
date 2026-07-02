'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Image from 'next/image'
import type { NavigationDetailPanel } from './navigation-types'
import { navCardImages } from './nav-assets'

type WowDetailCardProps = NavigationDetailPanel & {
  href?: string
  onNavigate?: () => void
  imageSrc?: string
  contentKey?: string
}

const contentTransition = {
  duration: 0.22,
  ease: [0.16, 1, 0.3, 1] as const,
}

const detailCtaBtnClass =
  'flex h-[60px] w-[88px] shrink-0 items-center justify-center rounded-radius-sm bg-primary p-5 transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'

const detailCtaIconClass =
  'size-10 shrink-0 !stroke-white !text-white transition-transform duration-300 ease-out group-hover/detail-card:-rotate-90'

export default function WowDetailCard({
  title,
  description,
  includes,
  ctaLabel,
  image,
  imageSrc,
  href,
  onNavigate,
  contentKey = 'default',
}: WowDetailCardProps) {
  const imageSrcResolved =
    imageSrc ?? navCardImages[image as keyof typeof navCardImages] ?? navCardImages.default

  const ctaButton = href ? (
    <Link href={href} onClick={onNavigate} className={detailCtaBtnClass}>
      <ArrowUpRight aria-hidden className={detailCtaIconClass} strokeWidth={2} />
      <span className="sr-only">{ctaLabel}</span>
    </Link>
  ) : (
    <button type="button" className={detailCtaBtnClass}>
      <ArrowUpRight aria-hidden className={detailCtaIconClass} strokeWidth={2} />
      <span className="sr-only">{ctaLabel}</span>
    </button>
  )

  return (
    <div className="group/detail-card relative w-[280px] shrink-0 rounded-radius-sm bg-white p-5 lg:w-[340px] 2xl:w-[426px] dark:bg-dark">
      <motion.div
        key={contentKey}
        initial={{ opacity: 0.72, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={contentTransition}
        className="flex flex-col gap-[30px]"
      >
          <div className="relative h-[200px] w-full overflow-hidden rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-none sm:h-[230px] sm:rounded-tr-[24px] sm:rounded-br-[24px] sm:rounded-bl-[24px]">
            <Image
              src={imageSrcResolved}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1430px) 360px, 426px"
            />

            <div className="pointer-events-none absolute left-0 top-0 z-[2] h-[82px] w-[120px] rounded-br-[20px] bg-white dark:bg-dark" />
            <div className="pointer-events-none absolute left-[120px] top-0 z-[3] h-6 w-6 bg-[radial-gradient(circle_at_100%_100%,transparent_24px,white_25px)] dark:bg-[radial-gradient(circle_at_100%_100%,transparent_24px,#171717_25px)]" />
            <div className="pointer-events-none absolute left-0 top-[82px] z-[3] h-6 w-6 bg-[radial-gradient(circle_at_100%_100%,transparent_24px,white_25px)] dark:bg-[radial-gradient(circle_at_100%_100%,transparent_24px,#171717_25px)]" />
          </div>

          <div className="flex flex-col gap-[13px]">
            <p className="text-lg font-medium leading-none text-black 2xl:text-xl dark:text-backgroundBody">
              {title}
            </p>

            <div className="text-sm font-light leading-none text-black 2xl:text-base dark:text-backgroundBody">
              <p className="text-[16px]">{description}</p>
              <p className="mt-4">Includes:</p>
            </div>

            <ul className="flex flex-col gap-[6px]">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-[10px]">
                  <Check
                    aria-hidden
                    className="size-3 shrink-0 text-black dark:text-backgroundBody"
                    strokeWidth={2}
                  />
                  <span className="text-[14px] font-light leading-none text-black dark:text-backgroundBody">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {ctaButton}
      </motion.div>
    </div>
  )
}
