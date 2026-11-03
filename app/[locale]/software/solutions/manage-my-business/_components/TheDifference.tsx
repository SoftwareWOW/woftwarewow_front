'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const comparisons = [
  {
    before: 'Information scattered across tools',
    after: 'Information easier to access',
    detail: 'Bring important business data into connected workflows and interfaces.',
  },
  {
    before: 'Manual handoffs between teams',
    after: 'Clearer workflow ownership',
    detail: 'Define who does what—and let systems route work automatically.',
  },
  {
    before: 'Duplicate data entry everywhere',
    after: 'One source of operational truth',
    detail: 'Reduce retyping and errors when platforms share the same core data.',
  },
  {
    before: 'Slow approval cycles',
    after: 'Faster decisions with visibility',
    detail: 'Notifications and dashboards keep leaders informed without chasing updates.',
  },
  {
    before: 'Tools that do not scale with growth',
    after: 'Systems that grow with your business',
    detail: 'Build flexible platforms that adapt as teams, customers, and processes expand.',
  },
]

const cardClassName =
  'relative min-h-[220px] rounded-radius-md border border-secondary/15 bg-background px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/25 dark:bg-background md:pt-10'

/** Layout: for-you/ai-and-automation/AutomationInAction — Before/After with carousel. */
const TheDifference = () => {
  const [index, setIndex] = useState(0)
  const active = comparisons[index]
  const total = comparisons.length

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>The Difference</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Less friction. <InstrumentText>More momentum.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mx-auto max-w-2xl">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">
              The goal isn&apos;t to add more software to your business. It&apos;s to make the technology you use more
              useful.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className={cardClassName}>
            <p className="mb-6 text-xs font-light uppercase tracking-[0.2em] text-[#808080]">Before</p>
            <p className="text-xl font-light leading-snug md:text-2xl">{active.before}</p>
          </div>
          <div className={cardClassName}>
            <p className="mb-6 text-xs font-light uppercase tracking-[0.2em] text-[#808080]">After</p>
            <p className="text-xl font-light leading-snug md:text-2xl">{active.after}</p>
          </div>
        </RevealWrapper>

        <RevealWrapper className="reveal-me mt-6 text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{active.detail}</p>
        </RevealWrapper>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            className="flex size-11 items-center justify-center rounded-radius-sm border transition-colors hover:bg-secondary/5 dark:border-dark dark:hover:bg-backgroundBody/10"
            aria-label="Previous comparison"
          >
            <ChevronLeft aria-hidden className="size-5" strokeWidth={1.5} />
          </button>
          <span className="min-w-[3rem] text-center text-sm font-light tabular-nums text-[#808080]">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="flex size-11 items-center justify-center rounded-radius-sm border transition-colors hover:bg-secondary/5 dark:border-dark dark:hover:bg-backgroundBody/10"
            aria-label="Next comparison"
          >
            <ChevronRight aria-hidden className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TheDifference
