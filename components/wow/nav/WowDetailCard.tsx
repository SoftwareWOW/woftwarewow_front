'use client'

import { Link } from '@/i18n/navigation'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import type { NavigationDetailPanel } from './navigation-types'
import { navCardImages } from './nav-assets'

type WowDetailCardProps = NavigationDetailPanel & {
  href?: string
  onNavigate?: () => void
  imageSrc?: string
}

export default function WowDetailCard({
  title,
  description,
  includes,
  ctaLabel,
  image,
  imageSrc,
  href,
  onNavigate,
}: WowDetailCardProps) {
  const imageSrcResolved =
    imageSrc ?? navCardImages[image as keyof typeof navCardImages] ?? navCardImages.default

  return (
    <div className="flex w-[360px] shrink-0 flex-col gap-[30px] rounded-[13px] bg-white p-5 2xl:w-[426px] dark:bg-dark-200">
      <div className="relative h-[200px] w-full overflow-hidden rounded-[8px] sm:h-[230px] 2xl:h-[262px]">
        <Image
          src={imageSrcResolved}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1430px) 360px, 426px"
        />
      </div>

      <div className="flex flex-col gap-[13px]">
        <p className="text-lg font-medium leading-none text-black 2xl:text-xl dark:text-backgroundBody">{title}</p>

        <div className="text-sm font-light leading-none text-black 2xl:text-base dark:text-backgroundBody">
          <p className='text-[16px]'>{description}</p>
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
              <span className="text-[14px] font-light leading-none text-black dark:text-backgroundBody">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {href ? (
        <Link
          href={href}
          onClick={onNavigate}
          className="flex h-[60px] w-[88px] shrink-0 items-center justify-center rounded-[5px] bg-primary p-5 transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
          <ArrowRight aria-hidden className="size-9 text-white" strokeWidth={2} />
          <span className="sr-only">{ctaLabel}</span>
        </Link>
      ) : (
        <button
          type="button"
          className="flex h-[60px] w-[88px] shrink-0 items-center justify-center rounded-[5px] bg-primary p-5 transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
          <ArrowRight aria-hidden className="size-9 text-white" strokeWidth={2} />
          <span className="sr-only">{ctaLabel}</span>
        </button>
      )}
    </div>
  )
}
