'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const wowProjects = [
  {
    id: 1,
    title: 'Healthcare Practice Digital Transformation',
    description:
      'A unified website, patient portal, and marketing system that increased appointment bookings by 47% in six months.',
    thumbnail: '/images/wow/Hero/project/Rectangle 10101 (1).png',
    alt: 'Healthcare digital transformation project by WOW Superagency',
    href: '/case-studies/healthcare-digital-transformation',
  },
  {
    id: 2,
    title: 'Construction Brand & Web Overhaul',
    description:
      'Complete rebrand, high-performance website, and lead-generation funnel for a regional construction firm expanding into new markets.',
    thumbnail: '/images/wow/Hero/project/Worls Card (1).png',
    alt: 'Construction brand and website project by WOW Superagency',
    href: '/case-studies/construction-brand-overhaul',
  },
  {
    id: 3,
    title: 'Legal Firm AI Workflow Automation',
    description:
      'Custom AI tools and intake automation that cut manual document processing time by 60% while improving client response speed.',
    thumbnail: '/images/wow/Hero/project/Rectangle 40115 (2).png',
    alt: 'Legal firm AI automation project by WOW Superagency',
    href: '/case-studies/legal-ai-automation',
  },
  {
    id: 4,
    title: 'Hospitality Booking Platform',
    description:
      'End-to-end booking software, secure hosting, and conversion-focused design for a boutique hotel group across three locations.',
    thumbnail: '/images/wow/Hero/project/Rectangle40115(1).png',
    alt: 'Hospitality booking platform project by WOW Superagency',
    href: '/case-studies/hospitality-booking-platform',
  },
]

type CarouselGridIndicatorProps = {
  isActive: boolean
  onClick: () => void
  ariaLabel: string
}

const CarouselGridIndicator = ({ isActive, onClick, ariaLabel }: CarouselGridIndicatorProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    aria-current={isActive}
    className={`h-[2px] w-[10px] shrink-0 rounded-none border-0 p-0 transition-colors duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7cff]/40 ${
      isActive ? 'bg-[#8b7cff]' : 'bg-black dark:bg-[#E8E8E8]'
    }`}
  />
)

const ChallengeSolution = () => {
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
      api.scrollTo(wowProjects.length - 1)
    }

    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
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

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col items-center justify-center gap-y-4 md:mb-20 md:flex-row md:justify-between">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-3">Case Studies</SectionLabel>
            </RevealWrapper>

            <TextAppearAnimation>
              <h2 className="text-appear flex-1 text-[#0D0D0D] dark:text-[#F2F2F2]">
                Real Challenges. <br />
                <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                  Real Results.
                </span>
              </h2>
            </TextAppearAnimation>
          </div>

          <div>
            <TextAppearAnimation>
              <p className="max-w-md flex-1 text-[#808080] md:self-end md:text-right">
                See how businesses use technology, marketing, AI, and integrated growth systems to solve problems and
                drive measurable outcomes.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-6 flex justify-end md:mt-8">
              <ButtonComponentList>
                <ButtonComponent href="/case-studies" variant="secondary">
                  View All Case Studies
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

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
            <CarouselContent className="-ml-0">
              {wowProjects.map((project) => (
                <CarouselItem key={project.id} className="basis-full pl-0">
                  <RevealWrapper
                    as="article"
                    className="group relative overflow-hidden rounded-radius-sm border border-[#e5e5e5] bg-white/50 backdrop-blur-sm transition-all duration-500 dark:border-white/5 dark:bg-dark/50"
                  >
                    <Link href={project.href} className="block overflow-hidden rounded-t-radius-sm">
                      <Image
                        width={1330}
                        height={445}
                        src={project.thumbnail}
                        alt={project.alt}
                        className="h-auto w-full transition-all duration-700 group-hover:scale-105"
                      />
                    </Link>

                    <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-radius-sm border border-white/20 bg-backgroundBody/95 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-backgroundBody/100 dark:border-white/10 dark:bg-dark-200/95 dark:hover:bg-dark-200/100 sm:p-4 md:bottom-8 md:left-8 md:max-w-[535px] md:p-6 lg:bottom-10 lg:left-10 lg:p-8">
                      <div className="project-title mb-2 md:mb-3">
                        <Link href={project.href}>
                          <h3 className="text-base font-normal text-[#0D0D0D] transition-colors duration-300 group-hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:group-hover:text-[#b794f4] sm:text-lg md:text-3xl lg:text-4xl">
                            {project.title}
                          </h3>
                        </Link>
                      </div>
                      <p className="text-xs text-[#808080] sm:text-sm md:text-base">{project.description}</p>
                    </div>

                    <Link
                      href={project.href}
                      className="absolute right-10 top-10 size-[60px] cursor-pointer overflow-hidden rounded-radius-sm bg-primary max-md:hidden md:size-[65px] md:block lg:size-[79px]"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight
                        aria-hidden
                        className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 !stroke-white !text-white opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                        strokeWidth={2}
                        color="#ffffff"
                      />
                      <ArrowUpRight
                        aria-hidden
                        className="absolute size-10 -translate-x-4 translate-y-12 !stroke-white !text-white opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                        strokeWidth={2}
                        color="#ffffff"
                      />
                    </Link>
                  </RevealWrapper>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button
              type="button"
              onClick={() => handleManualNavigation('prev')}
              aria-label="Previous case study"
              className="absolute -left-6 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-radius-sm bg-[#EDF0F5] opacity-50 p-2 sm:p-3 md:p-4 lg:p-5 text-white transition-colors duration-300 hover:opacity-70 dark:bg-[#151515]"
            >
              <ChevronLeft
                className="size-9 text-white sm:size-10"
                strokeWidth={1.5}
              />
            </button>

            <button
              type="button"
              onClick={() => handleManualNavigation('next')}
              aria-label="Next case study"
              className="absolute -right-6 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-radius-sm bg-[#EDF0F5] opacity-50 p-2 sm:p-3 md:p-4 lg:p-5 text-white transition-colors duration-300 hover:opacity-70 dark:bg-[#151515]"
            >
              <ChevronRight
                className="size-9 text-white sm:size-10"
                strokeWidth={1.5}
              />
            </button>

            <div className="relative z-20 mt-6 flex justify-center">
              <div className="flex items-center gap-1">
                {wowProjects.map((project, index) => (
                  <CarouselGridIndicator
                    key={project.id}
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

export default ChallengeSolution
