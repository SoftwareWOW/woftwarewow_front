'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { WOW_DIVISION_MARQUEE_TITLES } from '@/components/wow/data/wow-division-titles'
import { renderWowInTitle } from '@/components/wow/shared/WowText'
import Marquee from 'react-fast-marquee'

const sparkleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
    <path
      d="M20.002 0C20.002 0 19.789 11.2169 24.2871 15.7149C28.785 20.2129 40.002 20 40.002 20C40.002 20 28.785 19.7871 24.2871 24.2851C19.789 28.7831 20.002 40 20.002 40C20.002 40 20.2149 28.7831 15.7168 24.2851C11.2189 19.7871 0.00195312 20 0.00195312 20C0.00195312 20 11.2189 20.2129 15.7168 15.7149C20.2149 11.2169 20.002 0 20.002 0Z"
      className="fill-black dark:fill-white"
    />
  </svg>
)

const labelClassName =
  'text-nowrap text-5xl font-light leading-tight tracking-[-2px] text-secondary dark:text-[#F2F2F2] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.1] xl:tracking-[-2.88px]'

type WowDivisionsMarqueeProps = {
  /** Division display titles (e.g. "WOW Design"). Defaults to all ecosystem divisions. */
  divisions?: readonly string[]
}

function MarqueeRow({
  titles,
  direction = 'left',
  rowClassName,
}: {
  titles: readonly string[]
  direction?: 'left' | 'right'
  rowClassName?: string
}) {
  const loop = [...titles, ...titles]

  return (
    <Marquee direction={direction} pauseOnHover gradient={false} speed={45}>
      <div className={`flex items-center justify-between py-2.5 ${rowClassName ?? ''}`}>
        {loop.map((title, idx) => (
          <div className="mr-5 flex items-center gap-6" key={`${title}-${idx}`}>
            <span className={labelClassName}>{renderWowInTitle(title, 'text-[1em] xl:text-[1em]')}</span>
            <span className="mt-5 shrink-0">{sparkleIcon}</span>
          </div>
        ))}
      </div>
    </Marquee>
  )
}

/** Dual-row scrolling marquee of WOW divisions — same layout as Marquess, gradient WOW + sparkle separators. */
export default function WowDivisionsMarquee({ divisions = WOW_DIVISION_MARQUEE_TITLES }: WowDivisionsMarqueeProps) {
  const mid = Math.ceil(divisions.length / 2)
  const topRow = divisions.slice(0, mid)
  const bottomRow = divisions.slice(mid)

  return (
    <section className="overflow-hidden bg-background transition-colors duration-300 dark:bg-background" aria-label="WOW Superagency divisions">
      <RevealWrapper>
        <MarqueeRow titles={topRow} rowClassName="pb-5" />
      </RevealWrapper>

      <RevealWrapper className="border-t border-black/10 dark:border-dark">
        <MarqueeRow titles={bottomRow.length ? bottomRow : topRow} direction="right" />
      </RevealWrapper>
    </section>
  )
}
