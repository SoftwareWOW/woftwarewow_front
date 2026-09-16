'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeSectionHeader } from '@/lib/strapi/cms-section-props'
import {
  techCategories,
  TechCard,
  type Category,
} from '@/components/wow/shared/TechStackShared'

type TechStackProps = Partial<CmsTechnologiesSection>

function mergeCmsIntoTechCategories(
  categories: Category[],
  cmsItems?: CmsTechnologiesSection['items'],
): Category[] {
  if (!cmsItems?.length) return categories

  let itemIndex = 0
  return categories.map((category) => ({
    ...category,
    items: category.items.map((tech) => {
      const cms = cmsItems[itemIndex]
      itemIndex += 1
      if (!cms) return tech

      return {
        ...tech,
        name: cms.title || tech.name,
        hint: cms.description ?? tech.hint,
      }
    }),
  }))
}

const TechStack = ({
  eyebrow = 'Our Stack',
  title = 'Powered by industry-leading',
  accentTitle = 'technology',
  description =
    'We choose proven, modern tools to ship secure, scalable, and high-performance solutions — engineered for businesses that expect world-class digital experiences.',
  items,
}: TechStackProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title, accentTitle, description },
    { eyebrow, title, accentTitle, description },
  )

  const categories = mergeCmsIntoTechCategories(techCategories, items)
  const [activeId, setActiveId] = useState(categories[0].id)
  const active = categories.find((c) => c.id === activeId) ?? categories[0]
  const tabsId = useId()

  return (
    <section
      aria-labelledby="tech-heading"
      className="relative overflow-hidden bg-background transition-colors duration-300 dark:border-white/10 dark:bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-3xl dark:opacity-25"
        style={{ background: WOW_GRADIENT }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionLabel className="mb-6">{header.eyebrow}</SectionLabel>
          <h2
            id="tech-heading"
            className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]"
          >
            {header.title}{' '}
            <span
              className="font-instrument italic"
              style={{
                background: WOW_GRADIENT,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {header.accentTitle}
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#808080] transition-colors duration-300 sm:text-lg">
            {header.description}
          </p>
        </motion.div>

        <LayoutGroup id={tabsId}>
          <div
            role="tablist"
            aria-label="Technology categories"
            className="mx-auto mt-12 flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-6 px-1 pb-3 sm:mt-14 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
          >
            {categories.map((cat) => {
              const isActive = cat.id === activeId
              const CatIcon = cat.icon
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tabsId}-${cat.id}`}
                  id={`${tabsId}-tab-${cat.id}`}
                  onClick={() => setActiveId(cat.id)}
                  className="relative shrink-0 snap-start rounded-full px-4 py-2 text-sm font-medium text-[#808080] outline-none transition-colors duration-200 hover:text-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:text-[#F2F2F2] aria-selected:text-secondary dark:aria-selected:text-[#F2F2F2]"
                >
                  {isActive && (
                    <motion.span
                      layoutId={`${tabsId}-pill`}
                      className="absolute inset-0 rounded-full border border-black/10 bg-backgroundBody dark:border-white/10 dark:bg-[#1F1F1F]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <CatIcon className="h-4 w-4" aria-hidden />
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </LayoutGroup>

        <div
          role="tabpanel"
          id={`${tabsId}-${active.id}`}
          aria-labelledby={`${tabsId}-tab-${active.id}`}
          className="mt-10 sm:mt-14"
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {active.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(16.666%-0.833rem)]"
                >
                  <TechCard
                    name={item.name}
                    hint={item.hint}
                    icon={item.icon}
                    color={item.color}
                    invertInDark={item.invertInDark}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default TechStack
