'use client'

import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import type { NavigationDetailPanel } from './navigation-types'

type WowDetailCardProps = NavigationDetailPanel & {
  href?: string
  onNavigate?: () => void
}

export default function WowDetailCard({
  title,
  description,
  includes,
  ctaLabel,
  href,
  onNavigate,
}: WowDetailCardProps) {
  return (
    <div className="flex w-[426px] shrink-0 flex-col gap-[30px] rounded-[13px] bg-white p-5 dark:bg-dark-200">
      <div className="relative h-[262px] w-full overflow-hidden rounded-[8px] bg-[#f5f5f5] dark:bg-dark">
        <Image
          src="/images/wow/nav/detail-card.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="426px"
        />
      </div>

      <div className="flex flex-col gap-[13px]">
        <p className="text-xl font-medium leading-none text-black dark:text-backgroundBody">{title}</p>

        <div className="text-base font-light leading-none text-black dark:text-backgroundBody">
          <p>{description}</p>
          <p className="mt-4">Includes:</p>
        </div>

        <ul className="flex flex-col gap-1.5">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0 text-black dark:text-backgroundBody">
                <path
                  d="M2 6.5L4.5 9L10 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-light leading-none text-black dark:text-backgroundBody">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {href ? (
        <Link
          href={href}
          onClick={onNavigate}
          className="flex h-[60px] w-[88px] shrink-0 items-center justify-center rounded-[5px] bg-primary p-5 text-white transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
            <path
              d="M8 18H28M28 18L20 10M28 18L20 26"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">{ctaLabel}</span>
        </Link>
      ) : (
        <button
          type="button"
          className="flex h-[60px] w-[88px] shrink-0 items-center justify-center rounded-[5px] bg-primary p-5 text-white transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
            <path
              d="M8 18H28M28 18L20 10M28 18L20 26"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">{ctaLabel}</span>
        </button>
      )}
    </div>
  )
}
