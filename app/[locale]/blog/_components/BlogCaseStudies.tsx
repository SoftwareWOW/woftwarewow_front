'use client'

import { BlogType } from '@/app/[locale]/blog/page'
import RevealWrapper from '@/components/animation/RevealWrapper'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

interface BlogCaseStudiesProps {
  blogs: BlogType[]
}

const CarouselGridIndicator = ({
  isActive,
  onClick,
  ariaLabel,
}: {
  isActive: boolean
  onClick: () => void
  ariaLabel: string
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    aria-current={isActive}
    className={`h-[2px] w-[10px] shrink-0 rounded-none border-0 p-0 transition-colors duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7cff]/40 ${
      isActive ? 'bg-[#8b7cff]' : 'bg-black/25 dark:bg-[#E8E8E8]/40'
    }`}
  />
)

const BlogCaseStudies: FC<BlogCaseStudiesProps> = ({ blogs }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!api || !isAutoPlay) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [api, isAutoPlay])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  const handleManualNavigation = (direction: 'prev' | 'next') => {
    if (!api) return

    setIsAutoPlay(false)

    if (direction === 'next') {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    } else if (api.canScrollPrev()) {
      api.scrollPrev()
    } else {
      api.scrollTo(blogs.length - 1)
    }

    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  if (!blogs.length) return null

  return (
    <section className="relative overflow-hidden bg-background px-3 pb-14 transition-colors duration-300 dark:bg-background md:px-4 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      {/* Soft purple/pink glow behind heading */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 h-56 w-[min(90%,720px)] -translate-x-1/2 rounded-full opacity-60 blur-3xl dark:opacity-80"
        style={{
          background:
            'radial-gradient(circle, rgba(139,124,255,0.35) 0%, rgba(183,148,244,0.2) 40%, rgba(244,168,184,0.15) 65%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper className="mb-10 text-center md:mb-14">
          <SectionLabel className="mx-auto mb-5">Case Studies</SectionLabel>
          <h2 className="mb-4 font-normal leading-[1.1] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
            View our previous works
          </h2>
          <p className="mx-auto max-w-[540px] text-base leading-relaxed text-[#808080] transition-colors duration-300">
            Our success comes from a skilled team driving the future of Design solutions.
          </p>
        </RevealWrapper>

        <div
          className="relative w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {blogs.map((blog, index) => {
                const isFeatured = index === currentIndex
                return (
                  <CarouselItem
                    key={blog.slug}
                    className="pl-4 basis-full sm:basis-1/2 md:pl-6 lg:basis-1/3"
                  >
                    <article className="group flex h-full flex-col">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="relative mb-5 block overflow-hidden rounded-radius-md border border-[#e5e5e5] dark:border-white/5"
                      >
                        <Image
                          src={blog.thumbnail}
                          width={420}
                          height={320}
                          alt={blog.title}
                          className="aspect-[420/320] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>

                      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#808080] sm:text-xs">
                        {String(blog.date ?? '').toUpperCase()}
                      </p>

                      <Link href={`/blog/${blog.slug}`}>
                        <h3 className="mb-5 text-[clamp(1.15rem,2vw,1.5rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 group-hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:group-hover:text-[#b794f4]">
                          {blog.title}
                        </h3>
                      </Link>

                      <div className="mt-auto">
                        <ButtonComponent
                          href={`/blog/${blog.slug}`}
                          variant={isFeatured ? 'primary' : 'white'}
                          size="sm"
                        >
                          3 Minute Read
                        </ButtonComponent>
                      </div>
                    </article>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <button
              type="button"
              onClick={() => handleManualNavigation('prev')}
              aria-label="Previous case study"
              className="absolute left-0 top-[22%] z-20 flex size-9 items-center justify-center rounded-radius-sm border border-[#1515151A] bg-background text-[#0D0D0D] transition-colors duration-300 hover:border-primary hover:text-primary dark:border-[#EDF0F51A] dark:bg-dark dark:text-[#F2F2F2] dark:hover:border-[#b794f4] dark:hover:text-[#b794f4] sm:size-10 md:-left-2 lg:-left-4 xl:-left-12"
            >
              <ChevronLeft className="size-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => handleManualNavigation('next')}
              aria-label="Next case study"
              className="absolute right-0 top-[22%] z-20 flex size-9 items-center justify-center rounded-radius-sm border border-[#1515151A] bg-background text-[#0D0D0D] transition-colors duration-300 hover:border-primary hover:text-primary dark:border-[#EDF0F51A] dark:bg-dark dark:text-[#F2F2F2] dark:hover:border-[#b794f4] dark:hover:text-[#b794f4] sm:size-10 md:-right-2 lg:-right-4 xl:-right-12"
            >
              <ChevronRight className="size-5" strokeWidth={1.5} />
            </button>

            <div className="relative z-20 mt-10 flex justify-center md:mt-12">
              <div className="flex items-center gap-1">
                {blogs.map((blog, index) => (
                  <CarouselGridIndicator
                    key={blog.slug}
                    isActive={index === currentIndex}
                    onClick={() => {
                      if (!api) return
                      setIsAutoPlay(false)
                      api.scrollTo(index)
                      setTimeout(() => setIsAutoPlay(true), 5000)
                    }}
                    ariaLabel={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default BlogCaseStudies
