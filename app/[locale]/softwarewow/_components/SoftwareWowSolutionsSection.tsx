import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Layers } from 'lucide-react'
import { SOFTWAREWOW_SOLUTIONS } from './softwarewow-content'

const cardClassName =
  'relative flex h-full min-h-[220px] flex-col rounded-radius-md border border-secondary/15 bg-background px-[30px] py-8 transition-colors duration-300 dark:border-dark dark:bg-dark md:min-h-[240px] md:py-10'

export default function SoftwareWowSolutionsSection() {
  const section = SOFTWAREWOW_SOLUTIONS
  const topRow = section.cards.slice(0, 3)
  const bottomRow = section.cards.slice(3)

  return (
    <section className="overflow-hidden bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="relative mb-10 text-center md:mb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[min(100%,720px)] -translate-x-1/2 opacity-0 dark:opacity-100"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 30%, color-mix(in srgb, #615cce 35%, transparent) 0%, transparent 70%)',
            }}
          />
          <RevealWrapper className="reveal-me relative mb-3 flex justify-center">
            <SectionLabel>{section.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear relative mb-3 text-center">{section.title}</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear relative mx-auto max-w-3xl text-[#808080]">{section.description}</p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {topRow.map((card) => (
            <RevealWrapper key={card.id} className={`reveal-me ${cardClassName}`}>
              <span className="mb-6 inline-flex size-12 items-center justify-center rounded-radius-sm border border-secondary/15 dark:border-backgroundBody/20">
                <Layers aria-hidden className="size-6 text-secondary dark:text-backgroundBody" strokeWidth={1.25} />
              </span>
              <h3 className="mb-3 text-2xl leading-tight md:text-[1.75rem]">{card.title}</h3>
              <p className="text-base leading-relaxed text-[#808080] dark:text-backgroundBody/70">{card.description}</p>
            </RevealWrapper>
          ))}
        </div>

        <div className="mx-auto mt-[30px] grid max-w-4xl grid-cols-1 gap-[30px] md:grid-cols-2">
          {bottomRow.map((card) => (
            <RevealWrapper key={card.id} className={`reveal-me ${cardClassName}`}>
              <span className="mb-6 inline-flex size-12 items-center justify-center rounded-radius-sm border border-secondary/15 dark:border-backgroundBody/20">
                <Layers aria-hidden className="size-6 text-secondary dark:text-backgroundBody" strokeWidth={1.25} />
              </span>
              <h3 className="mb-3 text-2xl leading-tight md:text-[1.75rem]">{card.title}</h3>
              <p className="text-base leading-relaxed text-[#808080] dark:text-backgroundBody/70">{card.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
