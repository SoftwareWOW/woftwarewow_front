import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroAboutSection } from '@/lib/strapi/mappers/page-sections'

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
  'relative rounded-radius-md border px-[30px] pb-[30px] pt-8 shadow-none dark:border-dark md:pt-16'

type Props = Partial<CmsHeroAboutSection> & {
  eyebrow?: string
  title?: string
  accentTitle?: string
  needHeading?: string
  wantHeading?: string
  needItems?: string[]
  wantItems?: string[]
  closingLine?: string
}

/** Layout: Why SMBs TheGap — dual bordered columns with checks on both sides. */
const BuiltForTheFit = ({
  eyebrow = 'Built for the Fit',
  title = "Your business shouldn't have to work around its software.",
  accentTitle,
  body = 'Sometimes existing tools work perfectly. Sometimes they create more work than they remove.',
  needHeading = 'You may need a custom solution if…',
  wantHeading = 'Or if you want to…',
  needItems = [],
  wantItems = [],
  closingLine,
}: Props = {}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto mb-5 md:mb-8">
              {title}
              {accentTitle ? (
                <>
                  <br className="hidden sm:block" />
                  <InstrumentText>{accentTitle}</InstrumentText>
                </>
              ) : null}
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{body}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-x-10 gap-y-10 md:mt-16 lg:grid-cols-2">
          <div className={cardClassName}>
            <div>
              <h6 className="mb-8 text-sm font-normal uppercase tracking-[0.08em] max-md:text-base">
                {needHeading}
              </h6>
              <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {needItems.map((item) => (
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
                {wantHeading}
              </h6>
              <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {wantItems.map((item) => (
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

        {closingLine ? (
          <RevealWrapper className="reveal-me mt-10 text-center md:mt-14">
            <p className="mx-auto max-w-2xl text-lg leading-[1.6] tracking-[0.36px] text-secondary dark:text-backgroundBody">
              {closingLine}
            </p>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}

export default BuiltForTheFit
