import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const fragmented = [
  'Multiple priorities',
  'Scattered information',
  'Repeated coordination',
  'Disconnected systems',
  'Unclear ownership',
]

const aligned = [
  'Shared direction',
  'Connected knowledge',
  'Easier collaboration',
  'Connected systems',
  'Clear accountability',
]

const CrossIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-secondary/30 dark:border-backgroundBody/30">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M9 3L3 9M3 3L9 9"
        className="stroke-secondary dark:stroke-backgroundBody"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
)

const CheckIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-secondary/30 dark:border-backgroundBody/30">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-secondary dark:stroke-backgroundBody"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

/** Layout: Home-23 PricingV5 — two bordered comparison columns (no pricing chrome). */
const TheGap = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Gap</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-5 max-w-3xl md:mb-8">
              More providers shouldn&apos;t mean more <InstrumentText>problems.</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              But for many growing businesses, getting the right expertise means managing an increasingly fragmented
              network.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-x-10 gap-y-10 md:mt-16 lg:grid-cols-2">
          <div className="relative border border-secondary/20 px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/20 md:pt-16">
            <div>
              <h6 className="mb-8 text-sm font-normal uppercase tracking-[0.08em] max-md:text-base">
                When work is fragmented
              </h6>
              <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {fragmented.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-center gap-[12px] text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                  >
                    <CrossIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative border border-secondary px-[30px] pb-[30px] pt-8 dark:border-backgroundBody md:pt-16">
            <div>
              <h6 className="mb-8 text-sm font-normal uppercase tracking-[0.08em] max-md:text-base">
                When work is aligned
              </h6>
              <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {aligned.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-center gap-[12px] text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TheGap
