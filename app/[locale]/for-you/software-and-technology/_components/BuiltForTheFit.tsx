import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const needCustom = [
  'Your team relies heavily on spreadsheets or manual processes.',
  "Your current tools don't communicate with each other.",
  "Existing software doesn't fit your workflow.",
  'Legacy systems are slowing the business down.',
]

const wantTo = [
  'Turn an idea into a software product.',
  'Automate repetitive processes.',
  'Create a better customer experience.',
  'Build technology that can scale with the business.',
]

const CheckIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-secondary/40 dark:border-backgroundBody/40">
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

const cardClassName =
  'relative rounded-radius-md border border-secondary/15 px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/25 md:pt-16'

/** Layout: Why SMBs TheGap — dual bordered columns with checks on both sides. */
const BuiltForTheFit = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Built for the Fit</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-5 max-w-3xl md:mb-8">
           Your business shouldn't have to work around its software.
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
           Sometimes existing tools work perfectly. Sometimes they create more work than they remove.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-x-10 gap-y-10 md:mt-16 lg:grid-cols-2">
          <div className={cardClassName}>
            <div>
              <h6 className="mb-8 text-sm font-normal uppercase tracking-[0.08em] max-md:text-base">
                You may need a custom solution if…
              </h6>
              <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {needCustom.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-start gap-4 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={cardClassName}>
            <div>
              <h6 className="mb-8 text-sm font-normal uppercase tracking-[0.08em] max-md:text-base">
                Or if you want to…
              </h6>
              <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {wantTo.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-start gap-4 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                  >
                    <CheckIcon />
                    <span>{item}</span>
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

export default BuiltForTheFit
