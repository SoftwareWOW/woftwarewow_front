'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { IMPACT_WORK } from './impact-content'

export default function ImpactWorkSection() {
  const content = IMPACT_WORK
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filteredCards = useMemo(() => {
    if (activeCategory === 'ALL') return content.cards
    return content.cards.filter((card) => card.category === activeCategory)
  }, [activeCategory, content.cards])

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
            aria-label="Personal branding work categories"
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

        <div className="grid w-full grid-cols-1 gap-6 gap-y-10 md:grid-cols-2 md:gap-8 lg:gap-10">
          {filteredCards.map((item) => (
            <RevealWrapper
              key={item.id}
              className="group flex w-full min-w-0 flex-col overflow-hidden rounded-radius-sm border border-[#e5e5e5] bg-background dark:border-white/10"
            >
              <Link href={item.href} className="block w-full">
                <figure className="aspect-[16/10] w-full overflow-hidden sm:aspect-[5/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </figure>
              </Link>

              <div className="blog-title flex flex-1 flex-col p-5 sm:p-6 md:p-7">
                <Link href={item.href}>
                  <h3 className="text-[27px] leading-tight tracking-tight md:text-3xl lg:text-4xl">{item.title}</h3>
                </Link>
                <p className="mb-2 mt-3 text-lg font-normal leading-[1.4] tracking-[0.4px] text-[#808080] md:mt-5">
                  {item.description}
                </p>
                <p className="mb-5 text-base text-[#808080] md:mb-8">{item.bullets}</p>
                <div className="mt-auto">
                  <ButtonComponent href={item.href} variant="white">
                    READ MORE
                  </ButtonComponent>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
