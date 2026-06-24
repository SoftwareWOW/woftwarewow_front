'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import topArrow from '@/public/images/icons/arrow-Icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 3

const wowProjects = [
  {
    id: 1,
    title: 'Healthcare Practice Digital Transformation',
    description:
      'A unified website, patient portal, and marketing system that increased appointment bookings by 47% in six months.',
    thumbnail: '/images/portfolio/project-img-01.png',
    alt: 'Healthcare digital transformation project by WOW Superagency',
    href: '/contact',
  },
  {
    id: 2,
    title: 'Construction Brand & Web Overhaul',
    description:
      'Complete rebrand, high-performance website, and lead-generation funnel for a regional construction firm expanding into new markets.',
    thumbnail: '/images/portfolio/project-img-02.png',
    alt: 'Construction brand and website project by WOW Superagency',
    href: '/contact',
  },
  {
    id: 3,
    title: 'Legal Firm AI Workflow Automation',
    description:
      'Custom AI tools and intake automation that cut manual document processing time by 60% while improving client response speed.',
    thumbnail: '/images/portfolio/project-img-03.png',
    alt: 'Legal firm AI automation project by WOW Superagency',
    href: '/contact',
  },
  {
    id: 4,
    title: 'Hospitality Booking Platform',
    description:
      'End-to-end booking software, secure hosting, and conversion-focused design for a boutique hotel group across three locations.',
    thumbnail: '/images/portfolio/project-img-04.png',
    alt: 'Hospitality booking platform project by WOW Superagency',
    href: '/contact',
  },
  {
    id: 5,
    title: 'Retail eCommerce Growth Campaign',
    description:
      'Integrated social, paid media, and email strategy that doubled online revenue for an independent retailer in one holiday season.',
    thumbnail: '/images/home-5/case-study-1.png',
    alt: 'Retail eCommerce growth campaign by WOW Superagency',
    href: '/contact',
  },
  {
    id: 6,
    title: 'Professional Services Growth Hub',
    description:
      'WOW Hub deployment with CRM integration, team training, and accelerated lead nurturing for a multi-office advisory firm.',
    thumbnail: '/images/home-5/case-study-2.png',
    alt: 'Professional services growth hub project by WOW Superagency',
    href: '/contact',
  },
]

const WowProjects = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? wowProjects : wowProjects.slice(0, INITIAL_VISIBLE_COUNT)

  return (
    <section className="relative overflow-hidden bg-background pb-14 pt-14 transition-colors duration-300 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-center justify-center gap-y-4 md:mb-20 md:flex-row md:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear flex-1 text-secondary dark:text-backgroundBody">
              Selected <i className="font-instrument italic text-secondary dark:text-backgroundBody">Projects</i>
            </h2>
          </TextAppearAnimation>
          <div>
            <TextAppearAnimation>
              <p className="max-w-md flex-1 text-colorText dark:text-dark-100 md:self-end md:text-right">
                Real results from businesses that trusted WOW Superagency to unify their technology, marketing, and
                growth under one coordinated team.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:mb-[30px]">
          {visibleProjects.map((project) => (
            <RevealWrapper as="article" className="reveal-me underline-hover-effect group relative" key={project.id}>
              <Link href={project.href} className="block overflow-hidden rounded-lg">
                <Image
                  width={1330}
                  height={445}
                  src={project.thumbnail}
                  alt={project.alt}
                  className="transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </Link>

              <div className="absolute bottom-4 left-4 max-w-96 rounded-sm border border-transparent bg-backgroundBody/95 p-2 backdrop-blur-sm transition-colors duration-300 max-md:right-4 max-md:top-2 dark:border-white/10 dark:bg-dark-200/95 sm:p-3 md:bottom-10 md:left-10 md:max-w-[535px] md:p-[30px]">
                <div className="project-title mb-2 md:mb-5">
                  <Link href={project.href}>
                    <h3 className="text-[24px] font-normal text-secondary dark:text-backgroundBody lg:text-5xl lg:leading-[1.2]">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                <p className="text-colorText dark:text-dark-100 max-sm:text-xs md:text-sm">{project.description}</p>
              </div>

              <figure className="absolute right-10 top-10 h-[55px] w-[55px] cursor-pointer overflow-hidden bg-primary max-md:hidden md:block">
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

        {wowProjects.length > INITIAL_VISIBLE_COUNT && (
          <RevealWrapper className="mt-10 flex justify-center md:mt-14">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rv-button rv-button-white block md:inline-block"
              aria-expanded={showAll}>
              <div className="rv-button-top">
                <span>{showAll ? 'See Less' : 'See More'}</span>
              </div>
              <div className="rv-button-bottom">
                <span>{showAll ? 'See Less' : 'See More'}</span>
              </div>
            </button>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default WowProjects
