import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import pricingBg from '@/public/images/pricing-gradient.png'

const included = [
  'Automation & process audit',
  'Opportunity prioritization',
  'System integrations',
  'Workflow implementation',
  'Testing & refinement',
  'Launch & handover',
]

const CheckmarkIcon = () => (
  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 12 12" fill="none" aria-hidden>
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

          <RevealWrapper className="reveal-me relative flex w-full max-w-md flex-col overflow-hidden rounded-radius-sm border bg-backgroundBody p-[30px] dark:border-dark dark:bg-dark lg:max-w-[420px]">
            <div
              className="pointer-events-none absolute inset-0 h-full w-full bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${pricingBg.src})` }}
              aria-hidden
            />

            <div className="relative flex flex-1 flex-col">
              <h3 className="mb-5 text-lg font-normal uppercase tracking-[0.06em] md:text-xl">
                AI Automation Package
              </h3>

              <SectionLabel className="mb-3">Investment starting from</SectionLabel>
              <p className="mb-8 text-[42px] font-normal leading-none tracking-[-0.02em] md:text-5xl">$1,399</p>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.08em]">What&apos;s included</p>
              <ul className="mb-6 [&>*:not(:last-child)]:mb-3">
                {included.map((item) => (
                  <li key={item} className="flex list-none items-center gap-3 text-[16px] leading-[1.5]">
                    <CheckmarkIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-8 text-sm font-medium uppercase tracking-[0.08em] text-[#808080]">
                Typical timeline: 1-2 Weeks
              </p>

              <div className="mt-auto w-full">
                <ButtonComponentList className="flex w-full" itemClassName="block w-full">
                  <ButtonComponent href="/contact" variant="primary" fullWidth>
                    Get the Package
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AiPackageCard
