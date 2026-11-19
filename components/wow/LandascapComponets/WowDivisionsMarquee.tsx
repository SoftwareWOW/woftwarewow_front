'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import {
  divisionIdFromMarqueeTitle,
  WOW_DIVISION_MARQUEE_TITLES,
} from '@/components/wow/data/wow-division-titles'
import WowDivisionMarqueeCenterHint from '@/components/wow/LandascapComponets/WowDivisionMarqueeCenterHint'
import WowDivisionMarqueeLogoHover from '@/components/wow/LandascapComponets/WowDivisionMarqueeLogoHover'
import type { MarqueeDivisionHint } from '@/components/wow/LandascapComponets/WowDivisionMarqueeLogoHover'
import type { NavigationData } from '@/components/wow/nav/navigation-types'
import type { Dictionary } from '@/i18n/types'
import { useMessages } from 'next-intl'
import { useState } from 'react'
import Marquee from 'react-fast-marquee'

const sparkleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
    <path
      d="M20.002 0C20.002 0 19.789 11.2169 24.2871 15.7149C28.785 20.2129 40.002 20 40.002 20C40.002 20 28.785 19.7871 24.2871 24.2851C19.789 28.7831 20.002 40 20.002 40C20.002 40 20.2149 28.7831 15.7168 24.2851C11.2189 19.7871 0.00195312 20 0.00195312 20C0.00195312 20 11.2189 20.2129 15.7168 15.7149C20.2149 11.2169 20.002 0 20.002 0Z"
      className="fill-black dark:fill-white"
    />
  </svg>
)

type MarqueeEntry = {
  divisionId: NonNullable<ReturnType<typeof divisionIdFromMarqueeTitle>>
  label: string
}

type WowDivisionsMarqueeProps = {
  /** Division display titles (e.g. "WOW Design"). Defaults to all ecosystem divisions. */
  divisions?: readonly string[]
}

function useDivisionDetailPanels(): NavigationData['detailPanels'] {
  const messages = useMessages() as Dictionary
  return messages.navigation.detailPanels
}

function toMarqueeEntries(titles: readonly string[]): MarqueeEntry[] {
  return titles.flatMap((title) => {
    const divisionId = divisionIdFromMarqueeTitle(title)
    if (!divisionId) return []
    return [{ divisionId, label: title }]
  })
}

function MarqueeRow({
  entries,
  detailPanels,
  onHintChange,
  direction = 'left',
  rowClassName,
}: {
  entries: readonly MarqueeEntry[]
  detailPanels: NavigationData['detailPanels']
  onHintChange: (hint: MarqueeDivisionHint | null) => void
  direction?: 'left' | 'right'
  rowClassName?: string
}) {
  const loop = [...entries, ...entries]
  const defaultPanel = detailPanels.default

  return (
    <Marquee direction={direction} pauseOnHover gradient={false} speed={45}>
      <div className={`flex items-center justify-between py-2.5 ${rowClassName ?? ''}`}>
        {loop.map((entry, idx) => {
          const detail =
            detailPanels[entry.divisionId as keyof typeof detailPanels] ?? defaultPanel

          return (
            <div className="mr-5 flex items-center gap-6" key={`${entry.divisionId}-${idx}`}>
              <WowDivisionMarqueeLogoHover
                divisionId={entry.divisionId}
                label={entry.label}
                detail={detail}
                onHintChange={onHintChange}
              />
              <span className="mt-5 shrink-0">{sparkleIcon}</span>
            </div>
          )
        })}
      </div>
    </Marquee>
  )
}

/** Dual-row scrolling marquee of division brand logos (same assets as header) + sparkle separators. */
export default function WowDivisionsMarquee({ divisions = WOW_DIVISION_MARQUEE_TITLES }: WowDivisionsMarqueeProps) {
  const detailPanels = useDivisionDetailPanels()
  const [hint, setHint] = useState<MarqueeDivisionHint | null>(null)
  const entries = toMarqueeEntries(divisions)
  const mid = Math.ceil(entries.length / 2)
  const topRow = entries.slice(0, mid)
  const bottomRow = entries.slice(mid)

  return (
  <>
    <section
      className="overflow-hidden bg-background transition-colors duration-300 dark:bg-background"
      aria-label="WOW Superagency divisions"
    >
      <RevealWrapper>
        <MarqueeRow
          entries={topRow}
          detailPanels={detailPanels}
          onHintChange={setHint}
          rowClassName="pb-5"
        />
      </RevealWrapper>

      <RevealWrapper className="border-t border-black/10 dark:border-dark">
        <MarqueeRow
          entries={bottomRow.length ? bottomRow : topRow}
          detailPanels={detailPanels}
          onHintChange={setHint}
          direction="right"
        />
      </RevealWrapper>
    </section>

    <WowDivisionMarqueeCenterHint hint={hint} />
  </>
  )
}