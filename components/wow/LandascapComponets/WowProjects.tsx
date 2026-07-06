'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import topArrow from '@/public/images/icons/arrow-Icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 3

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
  {
    id: 5,
    title: 'Retail eCommerce Growth Campaign',
    description:
      'Integrated social, paid media, and email strategy that doubled online revenue for an independent retailer in one holiday season.',
    thumbnail: '/images/home-5/case-study-1.png',
    alt: 'Retail eCommerce growth campaign by WOW Superagency',
    href: '/case-studies/retail-ecommerce-growth',
  },
  {
    id: 6,
    title: 'Professional Services Growth Hub',
    description:
      'WOW Hub deployment with CRM integration, team training, and accelerated lead nurturing for a multi-office advisory firm.',
    thumbnail: '/images/home-5/case-study-2.png',
    alt: 'Professional services growth hub project by WOW Superagency',
    href: '/case-studies/professional-services-hub',
  },
]

const WowProjects = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? wowProjects : wowProjects.slice(0, INITIAL_VISIBLE_COUNT)

  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      {/* Background decorative elements */}
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
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-center gap-y-4 md:mb-20 md:flex-row md:justify-between">
          <div>
           
            <RevealWrapper>
              <span className="mb-3 inline-block rounded-full bg-[#E8E8E8] px-4 py-1.5 text-[12px] font-[300px] uppercase tracking-[0.14em] text-[#0D0D0D] dark:bg-white/10 dark:text-[#F2F2F2]">
                Case Studies
              </span>
            </RevealWrapper>

            <TextAppearAnimation>
              <h2 className="text-appear flex-1 text-[#0D0D0D] dark:text-[#F2F2F2]">
                Real Challenges. <br/>
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
            {/* View All Case Studies Button */}
            <RevealWrapper className="mt-6 flex justify-end md:mt-8">
              <ButtonComponentList>
                <ButtonComponent href="/case-studies" variant="secondary">
                  View All Case Studies
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 md:space-y-8">
          {visibleProjects.map((project) => (
            <RevealWrapper
              as="article"
              className="group relative overflow-hidden rounded-radius-sm border border-[#e5e5e5] bg-white/50 backdrop-blur-sm transition-all duration-500 dark:border-white/5 dark:bg-dark/50"
              key={project.id}
            >
              <Link href={project.href} className="block overflow-hidden rounded-t-radius-sm">
                <Image
                  width={1330}
                  height={445}
                  src={project.thumbnail}
                  alt={project.alt}
                  className="transition-all duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-radius-sm border border-white/20 bg-backgroundBody/95 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-backgroundBody/100 dark:border-white/10 dark:bg-dark-200/95 dark:hover:bg-dark-200/100 sm:p-4 md:bottom-8 md:left-8 md:max-w-[535px] md:p-6 lg:bottom-10 lg:left-10 lg:p-8">
                <div className="project-title mb-2 md:mb-3">
                  <Link href={project.href}>
                    <h3 className="text-base font-normal text-[#0D0D0D] transition-colors duration-300 group-hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:group-hover:text-[#b794f4] sm:text-lg md:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                <p className="text-xs text-[#808080] sm:text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <figure className="absolute right-10 top-10 h-[55px] w-[55px] rounded-radius-sm cursor-pointer overflow-hidden bg-primary max-md:hidden md:block">
                <Image
                  src={topArrow}
                  alt=""
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                />
                <Image
                  src={topArrow}
                  alt=""
                  aria-hidden
                  className="absolute -translate-x-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                />
              </figure>
            </RevealWrapper>
          ))}
        </div>

        {/* See More / See Less Button */}
        {wowProjects.length > INITIAL_VISIBLE_COUNT && (
          <RevealWrapper className="mt-10 flex justify-center md:mt-14">
            <ButtonComponentList>
              <ButtonComponent
                type="button"
                variant="secondary"
                onClick={() => setShowAll((prev) => !prev)}
                ariaExpanded={showAll}
              >
                {showAll ? 'See Less' : 'See More'}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default WowProjects