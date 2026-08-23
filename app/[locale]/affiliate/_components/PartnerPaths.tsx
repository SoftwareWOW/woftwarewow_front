import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type PathCard = {
  id: number
  title: string
  tagline: string
  description: string
  features: string[]
  cta: string
  ctaVariant: 'primary' | 'white'
}

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

const cards: PathCard[] = [
  {
    id: 1,
    title: 'Referral Partner',
    tagline: 'Know a Business That Needs WOW?',
    description:
      'Introduce them to us. If the referral becomes an eligible client, you receive the agreed referral reward.',
    features: ['Clients', 'Consultants & Professionals', 'Friends of WOW', 'Occasional referrals'],
    cta: 'MAKE A REFERRAL',
    ctaVariant: 'white',
  },
  {
    id: 2,
    title: 'Affiliate Partner',
    tagline: 'Turn Referrals Into an Ongoing Partnership.',
    description:
      'Join our affiliate network, consistently introduce opportunities, and earn rewards through a more structured relationship with WOW.',
    features: ['Creators & agencies', 'Consultants & communities', 'Business Networks', 'Professional Partners.'],
    cta: 'BECOME AN AFFILIATE',
    ctaVariant: 'primary',
  },
]

/** Layout: digital-transformation TheGap — two comparison cards. No default featured glow. */
const PartnerPaths = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="mb-7 text-center lg:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>CHOOSE YOUR PATH</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">Refer Occasionally or Partner With Us Ongoing.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-[#808080]">
              Build knowledge on your own time or join us for practical, interactive experiences.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-[30px] md:grid-cols-2">
          {cards.map((card) => (
            <RevealWrapper
              key={card.id}
              className="reveal-me relative flex w-full flex-col border bg-backgroundBody px-[30px] py-[30px] dark:border-dark dark:bg-dark"
            >
              <h3 className="relative mb-3 text-xl font-normal uppercase tracking-[0.04em] text-secondary/70 max-sm:text-lg md:text-2xl dark:text-backgroundBody/70">
                {card.title}
              </h3>
              <h4 className="relative mb-4 text-2xl font-normal leading-[1.3] max-sm:text-xl">{card.tagline}</h4>
              <p className="relative mb-8 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70">
                {card.description}
              </p>
              <p className="relative mb-4 text-[17px] font-medium">Best for:</p>
              <ul className="relative mb-10 [&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {card.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex list-none items-start gap-[10px] text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                  >
                    <CheckmarkIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-auto">
                <ButtonComponentList className="flex" itemClassName="block">
                  <ButtonComponent href="/contact" variant={card.ctaVariant}>
                    {card.cta}
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerPaths
