import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import pricingBg from '@/public/images/pricing-gradient.png'

const categories = [
  {
    title: 'Product',
    items: ['Product discovery', 'Requirements & scope', 'Feature prioritization'],
  },
  {
    title: 'Build',
    items: ['Development', 'Integrations', 'Testing'],
  },
  {
    title: 'Experience',
    items: ['UX / user journeys', 'UI design', 'Prototype'],
  },
  {
    title: 'Launch',
    items: ['Deployment', 'Analytics', 'Go-live setup'],
  },
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

/** Layout: AiPackageCard expanded — full-width package card with 2×2 includes. */
const SaasPackageCard = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="mb-10 md:mb-14">
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>The Package</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 max-w-3xl">Everything needed to move from concept to launch.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear max-w-2xl text-[#808080]">
              One coordinated product team across strategy, experience, technology and launch.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me relative flex w-full flex-col overflow-hidden rounded-radius-sm border bg-backgroundBody p-[30px] dark:border-dark dark:bg-dark md:p-10">
          <div
            className="pointer-events-none absolute inset-0 h-full w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${pricingBg.src})` }}
            aria-hidden
          />

          <div className="relative flex flex-1 flex-col">
            <h3 className="mb-5 text-lg font-normal uppercase tracking-[0.06em] md:text-xl">
              SaaS Product Development
            </h3>

            <SectionLabel className="mb-3">Investment starting from</SectionLabel>
            <p className="mb-8 text-[42px] font-normal leading-none tracking-[-0.02em] md:text-5xl">$5,999</p>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.08em]">What&apos;s included</p>
            <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category.title}>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.08em]">{category.title}</p>
                  <ul className="[&>*:not(:last-child)]:mb-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex list-none items-center gap-3 text-[16px] leading-[1.5]">
                        <CheckmarkIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mb-8 text-sm font-medium uppercase tracking-[0.08em] text-[#808080]">
              Typical timeline: 1-2 Weeks
            </p>

            <div className="mt-auto w-full">
              <ButtonComponentList className="flex w-full" itemClassName="block w-full">
                <ButtonComponent href="/contact" variant="primary" fullWidth>
                  Build My SaaS Product
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SaasPackageCard
