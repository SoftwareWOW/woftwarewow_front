import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import pricingBg from '@/public/images/pricing-gradient.png'
import type { StaticImageData } from 'next/image'

type GapCard = {
  id: number
  title: string
  features: string[]
  icon: 'x' | 'check'
  isFeatured?: StaticImageData
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

const CloseIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 dark:bg-backgroundBody/20">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M3 3L9 9M9 3L3 9"
        className="stroke-secondary dark:stroke-backgroundBody"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
)

const cards: GapCard[] = [
  {
    id: 1,
    title: "What's happening now",
    icon: 'x',
    features: [
      'Too much work is still manual.',
      'Information lives across different tools.',
      'Teams repeat the same administrative tasks.',
      'Existing systems no longer fit the business.',
      'Customers encounter unnecessary friction.',
    ],
  },
  {
    id: 2,
    title: 'What you need next',
    icon: 'check',
    features: [
      'Smarter workflows',
      'Connected systems',
      'Better automation',
      'Modern digital tools',
      'A setup ready to grow',
    ],
    isFeatured: pricingBg,
  },
]

/** Layout: LearnYourWay / HostingThatFits — two comparison cards. */
const TheGap = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="mb-7 text-center lg:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Gap</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">More providers shouldn&apos;t mean more problems.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl text-[#808080]">
              But for many growing businesses, getting the right expertise means managing an increasingly fragmented
              network.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-[30px] md:grid-cols-2">
          {cards.map((card) => (
            <RevealWrapper
              key={card.id}
              className="reveal-me relative flex w-full flex-col border bg-backgroundBody px-[30px] py-[30px] dark:border-dark dark:bg-dark"
            >
              {card.isFeatured && (
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${card.isFeatured.src})` }}
                />
              )}

              <h3 className="relative mb-8 text-xl font-normal uppercase tracking-[0.04em] max-sm:text-lg md:text-2xl">
                {card.title}
              </h3>
              <ul className="relative [&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
                {card.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex list-none items-start gap-[10px] text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
                  >
                    {card.icon === 'check' ? <CheckmarkIcon /> : <CloseIcon />}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheGap
