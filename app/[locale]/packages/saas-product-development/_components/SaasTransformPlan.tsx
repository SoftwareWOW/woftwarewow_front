import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const cards = [
  {
    title: 'Product',
    items: ['Product discovery', 'Requirements & scope', 'Feature prioritization'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect width={48} height={48} className="fill-backgroundBody transition-colors duration-300 group-hover:fill-secondary dark:fill-secondary dark:group-hover:fill-backgroundBody" />
        <path
          d="M14 30V18h8v4h4v-4h8v12h-8v-4h-4v4H14Z"
          className="stroke-secondary transition-colors duration-300 group-hover:stroke-backgroundBody dark:stroke-backgroundBody dark:group-hover:stroke-secondary"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: 'Build',
    items: ['Development', 'Integrations', 'Testing'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect width={48} height={48} className="fill-backgroundBody transition-colors duration-300 group-hover:fill-secondary dark:fill-secondary dark:group-hover:fill-backgroundBody" />
        <path
          d="M14 34h20M16 34V22h4v12M24 34V18h4v16M32 34V26h4v8"
          className="stroke-secondary transition-colors duration-300 group-hover:stroke-backgroundBody dark:stroke-backgroundBody dark:group-hover:stroke-secondary"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Experience',
    items: ['UX / user journeys', 'UI design', 'Prototype'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect width={48} height={48} className="fill-backgroundBody transition-colors duration-300 group-hover:fill-secondary dark:fill-secondary dark:group-hover:fill-backgroundBody" />
        <circle
          cx={24}
          cy={22}
          r={6}
          className="stroke-secondary transition-colors duration-300 group-hover:stroke-backgroundBody dark:stroke-backgroundBody dark:group-hover:stroke-secondary"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M14 36c2-5 6-8 10-8s8 3 10 8"
          className="stroke-secondary transition-colors duration-300 group-hover:stroke-backgroundBody dark:stroke-backgroundBody dark:group-hover:stroke-secondary"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: 'Launch',
    items: ['Deployment', 'Analytics', 'Go-live setup'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
        <rect width={48} height={48} className="fill-backgroundBody transition-colors duration-300 group-hover:fill-secondary dark:fill-secondary dark:group-hover:fill-backgroundBody" />
        <path
          d="M24 34V16M24 16l-6 6M24 16l6 6"
          className="stroke-secondary transition-colors duration-300 group-hover:stroke-backgroundBody dark:stroke-backgroundBody dark:group-hover:stroke-secondary"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const CheckmarkIcon = () => (
  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary transition-colors duration-300 group-hover:bg-backgroundBody dark:bg-backgroundBody dark:group-hover:bg-secondary">
    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody transition-colors duration-300 group-hover:stroke-secondary dark:stroke-secondary dark:group-hover:stroke-backgroundBody"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

/** Layout: Home-23 WhyChooseUsV7 — 2×2 grid with hover-to-white. */
const SaasTransformPlan = () => {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Your Transformation Plan</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear lg:leading-[1.1]">
              Everything needed to move from <InstrumentText>concept to launch.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-4 text-[#808080]">
              One coordinated product team across strategy, experience, technology and launch.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me grid grid-cols-12 gap-[30px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group col-span-12 flex-1 rounded-radius-sm border px-[30px] py-10 transition-colors duration-300 hover:bg-white dark:border-dark dark:hover:bg-backgroundBody lg:col-span-6"
            >
              <span>{card.icon}</span>
              <h5 className="mb-4 mt-5 uppercase transition-colors duration-300 group-hover:text-secondary dark:group-hover:text-secondary">
                {card.title}
              </h5>
              <ul className="[&>*:not(:last-child)]:mb-2.5">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-center gap-3 text-base text-[#808080] transition-colors duration-300 group-hover:text-secondary/70"
                  >
                    <CheckmarkIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Build My SaaS Product
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SaasTransformPlan
