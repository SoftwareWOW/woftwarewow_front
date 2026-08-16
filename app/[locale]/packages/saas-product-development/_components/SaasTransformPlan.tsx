import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

type IconVariant = 'default' | 'inverted'

const iconRectClass = (variant: IconVariant) =>
  variant === 'inverted'
    ? 'fill-secondary dark:fill-backgroundBody'
    : 'fill-backgroundBody dark:fill-secondary'

const iconStrokeClass = (variant: IconVariant) =>
  variant === 'inverted'
    ? 'stroke-backgroundBody dark:stroke-secondary'
    : 'stroke-secondary dark:stroke-backgroundBody'

const ProductIcon = ({ variant }: { variant: IconVariant }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
    <rect width={48} height={48} className={iconRectClass(variant)} />
    <path
      d="M14 30V18h8v4h4v-4h8v12h-8v-4h-4v4H14Z"
      className={iconStrokeClass(variant)}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

const BuildIcon = ({ variant }: { variant: IconVariant }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
    <rect width={48} height={48} className={iconRectClass(variant)} />
    <path
      d="M14 34h20M16 34V22h4v12M24 34V18h4v16M32 34V26h4v8"
      className={iconStrokeClass(variant)}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const ExperienceIcon = ({ variant }: { variant: IconVariant }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
    <rect width={48} height={48} className={iconRectClass(variant)} />
    <circle cx={24} cy={22} r={6} className={iconStrokeClass(variant)} strokeWidth="1.5" fill="none" />
    <path
      d="M14 36c2-5 6-8 10-8s8 3 10 8"
      className={iconStrokeClass(variant)}
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

const LaunchIcon = ({ variant }: { variant: IconVariant }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none" aria-hidden>
    <rect width={48} height={48} className={iconRectClass(variant)} />
    <path
      d="M24 34V16M24 16l-6 6M24 16l6 6"
      className={iconStrokeClass(variant)}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const cards: {
  title: string
  items: string[]
  icon: (variant: IconVariant) => ReactNode
}[] = [
  {
    title: 'Product',
    items: ['Product discovery', 'Requirements & scope', 'Feature prioritization'],
    icon: (variant) => <ProductIcon variant={variant} />,
  },
  {
    title: 'Build',
    items: ['Development', 'Integrations', 'Testing'],
    icon: (variant) => <BuildIcon variant={variant} />,
  },
  {
    title: 'Experience',
    items: ['UX / user journeys', 'UI design', 'Prototype'],
    icon: (variant) => <ExperienceIcon variant={variant} />,
  },
  {
    title: 'Launch',
    items: ['Deployment', 'Analytics', 'Go-live setup'],
    icon: (variant) => <LaunchIcon variant={variant} />,
  },
]

const CheckmarkIcon = ({ inverted = false }: { inverted?: boolean }) => (
  <span
    className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full ${
      inverted
        ? 'bg-backgroundBody dark:bg-secondary'
        : 'bg-secondary dark:bg-backgroundBody'
    }`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className={
          inverted
            ? 'stroke-secondary dark:stroke-backgroundBody'
            : 'stroke-backgroundBody dark:stroke-secondary'
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

type CardPanelProps = {
  title: string
  items: string[]
  icon: ReactNode
  inverted?: boolean
}

const CardPanel = ({ title, items, icon, inverted = false }: CardPanelProps) => (
  <>
    <span>{icon}</span>
    <h5 className={`mb-4 mt-5 uppercase ${inverted ? 'text-backgroundBody dark:text-secondary' : ''}`}>
      {title}
    </h5>
    <ul className="[&>*:not(:last-child)]:mb-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex list-none items-center gap-3 text-base ${
            inverted ? 'text-backgroundBody/80 dark:text-secondary/80' : 'text-[#808080]'
          }`}
        >
          <CheckmarkIcon inverted={inverted} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </>
)

/** Layout: WhyChooseUsV7 + ServicesV11 slide hover. */
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
              className="group relative col-span-12 min-h-[280px] overflow-hidden rounded-radius-sm border dark:border-dark lg:col-span-6"
            >
              {/* Front */}
              <div className="absolute inset-0 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <CardPanel title={card.title} items={card.items} icon={card.icon('default')} />
              </div>
              {/* Back — ServicesV11 invert */}
              <div className="absolute inset-0 z-10 translate-y-full bg-secondary px-[30px] py-10 transition-all duration-700 group-hover:translate-y-0 dark:bg-backgroundBody">
                <CardPanel title={card.title} items={card.items} icon={card.icon('inverted')} inverted />
              </div>
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
