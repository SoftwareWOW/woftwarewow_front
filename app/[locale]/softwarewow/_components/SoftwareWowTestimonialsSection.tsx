'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { Dictionary } from '@/i18n/types'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { SOFTWAREWOW_SECTION_SHELL, SOFTWAREWOW_TESTIMONIALS } from './softwarewow-content'

const CLIENT_IMAGES: Record<string, string> = {
  'Michael Carter': '/images/wow/Hero/client/Michael Carter.png',
  'Emma Richardson': '/images/wow/Hero/client/Emma Richardson.jpg',
  'Daniel Foster': '/images/wow/Hero/client/Daniel Foster.png',
  'Sophia Bennett': '/images/wow/Hero/client/Sophia Bennett.png',
}

type Props = {
  superAgencyClient: Dictionary['superAgencyClient']
  clientImages?: Record<string, string>
}

export default function SoftwareWowTestimonialsSection({
  superAgencyClient,
  clientImages: clientImagesProp,
}: Props) {
  const content = SOFTWAREWOW_TESTIMONIALS
  const clientImages = { ...CLIENT_IMAGES, ...clientImagesProp }
  const reviews = superAgencyClient.reviews ?? []

  if (!reviews.length) return null

  return (
    <section className={`${SOFTWAREWOW_SECTION_SHELL} overflow-hidden`}>
      <div className="container">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>{content.eyebrow}</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-8 mt-3 text-center md:mb-10">{content.title}</h2>
        </TextAppearAnimation>
      </div>

      <RevealWrapper>
        <div className="flex items-center gap-[30px] max-sm:mb-[1px]">
          <Marquee pauseOnHover speed={110} autoFill>
            {reviews.map((review) => {
              const imageSrc = clientImages[review.userName] ?? '/images/wow/Hero/client/Michael Carter.png'
              return (
                <div
                  key={review.id}
                  className="flex w-96 min-h-[237px] flex-col border p-[30px] first:ml-[30px] dark:border-dark md:w-[470px]"
                >
                  <p className="text-[17px] leading-normal tracking-normal">{review.title}</p>
                  <div className="mt-[29px] flex items-center gap-4">
                    <figure className="relative size-16 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={imageSrc}
                        alt={review.userName || 'Review author'}
                        fill
                        quality={90}
                        className="object-cover"
                        sizes="64px"
                      />
                    </figure>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-light leading-[1.2] tracking-wide">{review.userName}</h3>
                      <p className="mt-[3.5px] text-base font-light leading-snug">{review.position}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Marquee>
        </div>
      </RevealWrapper>
    </section>
  )
}
