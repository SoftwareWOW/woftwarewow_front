'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'
import {
  techCategories,
  TechCard,
} from '@/components/wow/shared/TechStackShared'

/** Keep AI-relevant categories for this service page only. */
const HIDDEN_CATEGORY_IDS = new Set([
  'design',
  'marketing',
  'commerce',
  'communication',
  'frontend',
  'cms',
])

const aiTechCategories = techCategories.filter((cat) => !HIDDEN_CATEGORY_IDS.has(cat.id))

/** Layout: about/TechStack UI — AI-focused categories (does not change About or TechStackShared). */
const TechStack = () => {
  const defaultCategory = aiTechCategories.find((c) => c.id === 'ai') ?? aiTechCategories[0]
  const [activeId, setActiveId] = useState(defaultCategory.id)
  const active = aiTechCategories.find((c) => c.id === activeId) ?? defaultCategory
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
          <SectionLabel className="mb-6">Our Stack</SectionLabel>
          <h2
            id="tech-heading"
            className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]"
          >
            Powered by industry-leading{' '}
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
              technology
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#808080] transition-colors duration-300 sm:text-lg">
            Models, automation tools, and integrations we use to put AI to work in real operations.
          </p>
        </motion.div>

        <LayoutGroup id={tabsId}>
          <div
            role="tablist"
            aria-label="AI and automation technology categories"
            className="mx-auto mt-12 flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-6 px-1 pb-3 sm:mt-14 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
          >
            {aiTechCategories.map((cat) => {
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
