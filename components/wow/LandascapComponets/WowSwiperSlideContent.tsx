'use client'

import { Link } from '@/i18n/navigation'
import { ArrowUpRight } from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'
import type { FC } from 'react'

interface SwiperSlideContentProps {
  title: string
  userName: string
  position: string
  userImg: string | StaticImageData
  href: string
  mediaSrc: string
  mediaAlt: string
}

const WowSwiperSlideContent: FC<SwiperSlideContentProps> = ({
  title,
  userName,
  position,
  userImg,
  href,
  mediaSrc,
  mediaAlt,
}) => {
  return (
    <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2 md:items-stretch md:gap-8 md:p-8 lg:gap-10 lg:p-10">
      <div className="flex min-w-0 flex-col">
        <span aria-hidden className="mb-4 inline-flex text-secondary/20 dark:text-backgroundBody/20 md:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.8286 6V16.9714C21.3264 16.9714 16.9186 17.1793 16.9184 27.1958V32.4H27.6V54H6V32.4V27.1958C6 19.3208 8.03795 13.4729 12.4905 9.81413C15.5705 7.28323 19.2195 6 23.8286 6ZM50.229 6V16.9714C47.7268 16.9714 43.319 17.1793 43.3187 27.1958V32.4H54.0004V54H32.4004V32.4V27.1958C32.4004 19.3208 34.4383 13.4729 38.8909 9.81413C41.9709 7.28323 45.6199 6 50.229 6Z"
              fill="currentColor"
            />
          </svg>
        </span>

        <p className="mb-8 flex-1 font-outfit text-base font-normal leading-[1.5] text-[#1a1a1a] transition-colors duration-300 dark:text-white md:mb-10 md:text-xl lg:text-[22px]">
          {title}
        </p>

        <div className="mt-auto flex items-center gap-3">
          <div className="relative size-[52px] shrink-0 overflow-hidden rounded-full md:size-[60px]">
            <Image
              src={userImg}
              alt={userName}
              width={60}
              height={60}
              quality={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="truncate font-outfit text-lg text-[#1a1a1a] transition-colors duration-300 dark:text-white md:text-2xl md:leading-[1.2]">
              {userName}
            </h4>
            <p className="truncate text-sm font-light leading-5 text-[#666666] transition-colors duration-300 dark:text-white/60">
              {position}
            </p>
          </div>
        </div>
      </div>

      <Link
        href={href}
        className="group relative block min-h-[220px] overflow-hidden rounded-radius-md sm:min-h-[260px] md:min-h-full"
        aria-label={`View case study for ${userName}`}
      >
        <Image
          src={mediaSrc}
          alt={mediaAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <figure className="absolute bottom-4 left-4 flex size-[52px] cursor-pointer items-center justify-center overflow-hidden rounded-radius-sm bg-primary md:bottom-5 md:left-5 md:size-[56px] lg:size-[65px] xl:size-[79px]">
          <ArrowUpRight
            aria-hidden
            className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 !stroke-white !text-white opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 md:size-8 lg:size-9 xl:size-10"
            strokeWidth={2}
          />
          <ArrowUpRight
            aria-hidden
            className="absolute size-7 -translate-x-4 translate-y-12 !stroke-white !text-white opacity-0 transition-all duration-500 group-hover:translate-x-[14px] group-hover:translate-y-4 group-hover:opacity-100 md:size-8 md:group-hover:translate-x-[16px] md:group-hover:translate-y-[18px] lg:size-9 lg:group-hover:translate-x-[18px] lg:group-hover:translate-y-5 xl:size-10 xl:group-hover:translate-x-[19px]"
            strokeWidth={2}
          />
        </figure>
      </Link>
    </div>
  )
}

export default WowSwiperSlideContent
