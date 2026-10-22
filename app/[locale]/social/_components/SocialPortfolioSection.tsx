'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { SOCIAL_PORTFOLIO } from './social-content'

export default function SocialPortfolioSection() {
  const content = SOCIAL_PORTFOLIO
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return content.projects
    return content.projects.filter((project) => project.category === activeCategory)
  }, [activeCategory, content.projects])

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-8 flex flex-col gap-8 md:mb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <RevealWrapper className="mb-3">
              <SectionLabel>{content.eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                {content.titleBefore}
                <InstrumentText>{content.titleAccent}</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full max-w-md lg:pt-2">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-right md:text-lg">{content.description}</p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-6 flex md:justify-end">
              <ButtonComponentList>
                <ButtonComponent href={content.ctaHref} variant="secondary">
                  {content.ctaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="mb-8 md:mb-10">
          <div
            role="tablist"
            aria-label="Social portfolio categories"
            className="flex w-full flex-wrap overflow-hidden rounded-radius-sm border border-[#e5e5e5] bg-[#f5f5f5] dark:border-white/10 dark:bg-dark/50 sm:flex-nowrap"
          >
            {content.filters.map((category, index) => {
              const isActive = activeCategory === category.slug
              return (
                <button
                  key={category.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`relative flex-1 px-3 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 sm:px-4 sm:py-4 sm:text-xs md:text-[13px] ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-background text-[#0D0D0D] hover:bg-[#8b7cff]/10 dark:text-[#F2F2F2] dark:hover:bg-white/5'
                  } ${index > 0 ? 'border-l border-[#1515151A] dark:border-[#EDF0F51A]' : ''}`}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {filteredProjects.map((project) => (
            <RevealWrapper key={project.id} as="article" className="reveal-me group">
              <Link href={project.href} className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-sm">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#808080] sm:text-xs">
                  <span>{project.industryLabel}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-2 text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-tight tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 group-hover:text-primary dark:text-[#F2F2F2]">
                  {project.title}
                </h3>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
