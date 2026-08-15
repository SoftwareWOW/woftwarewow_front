import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import pricingBg from '@/public/images/pricing-gradient.png'
import Link from 'next/link'

const included = [
  'Automation & process audit',
  'Opportunity prioritization',
  'System integrations',
  'Workflow implementation',
  'Testing & refinement',
  'Launch & handover',
]

const CheckmarkIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary dark:bg-backgroundBody">
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

/** Layout: HostingThatFits / image 3 — left intro + featured package pricing card. */
const AiPackageCard = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
          <div className="w-full min-w-0 flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Hosting That Fits</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mb-3 max-w-xl">Start with what you need. Scale when you need more.</h2>
            </TextAppearAnimation>
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080]">
                Different businesses need different levels of infrastructure. We&apos;ll help match the setup to your
                requirements.
              </p>
            </TextAppearAnimation>
          </div>

          <RevealWrapper className="reveal-me relative flex w-full max-w-md flex-col border bg-backgroundBody px-[30px] pb-28 pt-[30px] dark:border-dark dark:bg-dark lg:max-w-[420px]">
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${pricingBg.src})` }}
            />

            <h3 className="relative mb-6 text-xl font-normal uppercase tracking-[0.04em] md:text-2xl">
              AI Automation Package
            </h3>

            <p className="relative mb-2 text-sm font-medium uppercase tracking-wide text-secondary/70 dark:text-backgroundBody/70">
              Investment starting from
            </p>
            <p className="relative mb-8 text-4xl font-normal leading-none md:text-5xl">$1,399</p>

            <p className="relative mb-3 text-sm font-medium uppercase tracking-wide text-secondary dark:text-backgroundBody">
              What&apos;s included
            </p>
            <ul className="relative [&>*:not(:last-child)]:mb-2 md:[&>*:not(:last-child)]:mb-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex list-none items-start gap-[10px] text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                >
                  <CheckmarkIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="relative mt-8 text-sm font-medium uppercase tracking-wide text-secondary/70 dark:text-backgroundBody/70">
              Typical timeline: 1-2 Weeks
            </p>

            <div className="absolute bottom-8 w-[calc(100%-60px)]">
              <Link href="/contact" className="rv-button rv-button-primary w-full">
                <div className="rv-button-top !w-full !text-center">
                  <span className="font-normal">Get the Package</span>
                </div>
                <div className="rv-button-bottom !w-full !text-center">
                  <span className="font-normal">Get the Package</span>
                </div>
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AiPackageCard
