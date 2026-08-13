import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const fitItems = [
  'Your business is established, but growth feels inconsistent.',
  "You're getting traffic or leads, but not enough are converting.",
  "Marketing activities aren't working together.",
  'Sales and marketing feel disconnected.',
  "You're unsure which channels deserve more investment.",
  'You want a clearer, measurable growth strategy.',
]

const CheckIcon = () => (
  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary sm:size-6 dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody dark:stroke-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

/** Home-04 — AboutV4: badge + headline + image + copy column (checklist content). */
const BuiltForGrowth = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-2">
          <SectionLabel>Built for Growth</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h3 className="text-appear mb-8 text-3xl leading-tight sm:text-[34px] md:text-[44px] lg:mb-[52px] lg:text-[54px] xl:text-[64px] xl:leading-[1.1]">
            You&apos;ve built the business. Now you want more from it.
          </h3>
        </TextAppearAnimation>
        <RevealWrapper className="reveal-me mb-10 max-w-3xl lg:mb-16">
          <p className="text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">
            The Business Growth Package is designed for established businesses that have the foundations in place but
            need a more structured approach to generating and converting growth.
          </p>
        </RevealWrapper>

        <RevealWrapper className="flex flex-col gap-x-16 gap-y-16 lg:flex-row">
          <figure className="overflow-hidden rounded-radius-sm lg:w-1/2">
            <img
              src="/images/wow/nav/cards/Business%20growth%201.png"
              alt="Business owner looking ahead to the next stage of growth"
              className="h-full w-full rounded-radius-sm object-cover"
            />
          </figure>
          <div className="lg:w-1/2">
            <h5 className="mb-8">This package could be right for you if:</h5>
            <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
              {fitItems.map((item) => (
                <li
                  key={item}
                  className="flex list-none items-start gap-4 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg leading-[1.6] tracking-[0.36px]">
              The goal isn&apos;t simply more marketing. It&apos;s a better growth system.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuiltForGrowth
