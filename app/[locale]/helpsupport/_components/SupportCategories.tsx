import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

type CapabilityCard = {
  title: string
  description: string
  icon: ReactNode
}

const iconDocument = (
  <svg xmlns="http://www.w3.org/2000/svg" width={42} height={50} viewBox="0 0 42 50" fill="none" aria-hidden>
    <path d="M8.33333 39.5833H33.3333V27.0833H8.33333V39.5833ZM10.4167 29.1667H31.25V37.5H10.4167V29.1667ZM18.75 20.8333H8.33333V18.75H18.75V20.8333ZM18.75 12.5H8.33333V10.4167H18.75V12.5ZM26.4729 0H5.20833C2.3375 0 0 2.3375 0 5.20833V50H41.6667V15.1937L26.4729 0ZM27.0833 3.55625L38.1104 14.5833H27.0833V3.55625ZM2.08333 47.9167V5.20833C2.08333 3.48542 3.48542 2.08333 5.20833 2.08333H25V16.6667H39.5833V47.9167H2.08333Z" />
  </svg>
)

const iconSystems = (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
    <path d="M44.7917 31.25H23.9583C21.0875 31.25 18.75 33.5854 18.75 36.4583V40.625C18.75 43.4979 21.0875 45.8333 23.9583 45.8333H44.7917C47.6646 45.8333 50 43.4979 50 40.625V36.4583C50 33.5854 47.6646 31.25 44.7917 31.25ZM29.1667 43.75H23.9583C22.2354 43.75 20.8333 42.3479 20.8333 40.625V36.4583C20.8333 34.7354 22.2354 33.3333 23.9583 33.3333H29.1667V43.75ZM47.9167 40.625C47.9167 42.3479 46.5146 43.75 44.7917 43.75H31.25V33.3333H44.7917C46.5146 33.3333 47.9167 34.7354 47.9167 36.4583V40.625ZM44.7917 4.16667H23.9583C21.0875 4.16667 18.75 6.50208 18.75 9.375V13.5417C18.75 16.4146 21.0875 18.75 23.9583 18.75H44.7917C47.6646 18.75 50 16.4146 50 13.5417V9.375C50 6.50208 47.6646 4.16667 44.7917 4.16667ZM37.5 16.6667H23.9583C22.2354 16.6667 20.8333 15.2646 20.8333 13.5417V9.375C20.8333 7.65208 22.2354 6.25 23.9583 6.25H37.5V16.6667ZM47.9167 13.5417C47.9167 15.2646 46.5146 16.6667 44.7917 16.6667H39.5833V6.25H44.7917C46.5146 6.25 47.9167 7.65208 47.9167 9.375V13.5417ZM8.33333 12.5C11.7792 12.5 14.5833 9.69583 14.5833 6.25C14.5833 2.80417 11.7792 0 8.33333 0C4.8875 0 2.08333 2.80417 2.08333 6.25C2.08333 9.69583 4.8875 12.5 8.33333 12.5ZM8.33333 2.08333C10.6312 2.08333 12.5 3.95208 12.5 6.25C12.5 8.54792 10.6312 10.4167 8.33333 10.4167C6.03542 10.4167 4.16667 8.54792 4.16667 6.25C4.16667 3.95208 6.03542 2.08333 8.33333 2.08333ZM16.6667 19.7917V22.9167H14.5833V19.7917C14.5833 18.0687 13.1812 16.6667 11.4583 16.6667H5.20833C3.48542 16.6667 2.08333 18.0687 2.08333 19.7917V22.9167H0V19.7917C0 16.9187 2.3375 14.5833 5.20833 14.5833H11.4583C14.3292 14.5833 16.6667 16.9187 16.6667 19.7917ZM14.5833 33.3333C14.5833 29.8875 11.7792 27.0833 8.33333 27.0833C4.8875 27.0833 2.08333 29.8875 2.08333 33.3333C2.08333 36.7792 4.8875 39.5833 8.33333 39.5833C11.7792 39.5833 14.5833 36.7792 14.5833 33.3333ZM4.16667 33.3333C4.16667 31.0354 6.03542 29.1667 8.33333 29.1667C10.6312 29.1667 12.5 31.0354 12.5 33.3333C12.5 35.6312 10.6312 37.5 8.33333 37.5C6.03542 37.5 4.16667 35.6312 4.16667 33.3333ZM16.6667 46.875V50H14.5833V46.875C14.5833 45.1521 13.1812 43.75 11.4583 43.75H5.20833C3.48542 43.75 2.08333 45.1521 2.08333 46.875V50H0V46.875C0 44.0021 2.3375 41.6667 5.20833 41.6667H11.4583C14.3292 41.6667 16.6667 44.0021 16.6667 46.875Z" />
  </svg>
)

const iconNetwork = (
  <svg xmlns="http://www.w3.org/2000/svg" width={58} height={51} viewBox="0 0 58 51" fill="none" aria-hidden>
    <path d="M51.1905 19.5476C48.3143 19.5476 45.9119 21.5952 45.3595 24.3095H37.9762C37.6619 21.8286 36.4048 19.6595 34.5595 18.1524L38.3929 12.0071C39.0452 12.2524 39.7429 12.4048 40.4786 12.4048C43.7619 12.4048 46.431 9.73571 46.431 6.45238C46.431 3.16905 43.7619 0.5 40.4786 0.5C37.1952 0.5 34.5262 3.16905 34.5262 6.45238C34.5262 8.14286 35.2405 9.6619 36.3762 10.7452L32.5524 16.8738C31.3381 16.3119 29.9976 15.9762 28.5738 15.9762C27.15 15.9762 25.8095 16.3119 24.5929 16.8762L20.769 10.7476C21.9048 9.6619 22.619 8.14286 22.619 6.45238C22.619 3.16905 19.95 0.5 16.6667 0.5C13.3833 0.5 10.7143 3.16905 10.7143 6.45238C10.7143 9.73571 13.3833 12.4048 16.6667 12.4048C17.4024 12.4048 18.1 12.2524 18.75 12.0095L22.5833 18.1548C20.7357 19.6619 19.481 21.8286 19.1667 24.3095H11.7833C11.231 21.5952 8.82619 19.5476 5.95238 19.5476C2.66905 19.5476 0 22.2167 0 25.5C0 28.7833 2.66905 31.4524 5.95238 31.4524C8.82857 31.4524 11.231 29.4048 11.7833 26.6905H19.1667C19.481 29.1714 20.7357 31.3381 22.581 32.8452L18.7476 38.9905C18.0976 38.7452 17.4 38.5952 16.6643 38.5952C13.381 38.5952 10.7119 41.2643 10.7119 44.5476C10.7119 47.831 13.381 50.5 16.6643 50.5C19.9476 50.5 22.6167 47.831 22.6167 44.5476C22.6167 42.8571 21.9 41.3357 20.7643 40.2524L24.5881 34.1238C25.8024 34.6881 27.1429 35.0238 28.569 35.0238C29.9952 35.0238 31.3333 34.6881 32.5476 34.1238L36.3714 40.2524C35.2357 41.3357 34.5214 42.8571 34.5214 44.5476C34.5214 47.831 37.1905 50.5 40.4738 50.5C43.7571 50.5 46.4262 47.831 46.4262 44.5476C46.4262 41.2643 43.7571 38.5952 40.4738 38.5952C39.7381 38.5952 39.0405 38.7476 38.3905 38.9929L34.5571 32.8476C36.4048 31.3405 37.6595 29.1738 37.9738 26.6905H45.3571C45.9095 29.4048 48.3143 31.4524 51.1881 31.4524C54.4714 31.4524 57.1405 28.7833 57.1405 25.5C57.1405 22.2167 54.4738 19.5476 51.1905 19.5476ZM40.4762 2.88095C42.4452 2.88095 44.0476 4.48333 44.0476 6.45238C44.0476 8.42143 42.4452 10.0238 40.4762 10.0238C38.5071 10.0238 36.9048 8.42143 36.9048 6.45238C36.9048 4.48333 38.5071 2.88095 40.4762 2.88095ZM13.0952 6.45238C13.0952 4.48333 14.6976 2.88095 16.6667 2.88095C18.6357 2.88095 20.2381 4.48333 20.2381 6.45238C20.2381 8.42143 18.6357 10.0238 16.6667 10.0238C14.6976 10.0238 13.0952 8.42143 13.0952 6.45238ZM5.95238 29.0714C3.98333 29.0714 2.38095 27.469 2.38095 25.5C2.38095 23.531 3.98333 21.9286 5.95238 21.9286C7.92143 21.9286 9.52381 23.531 9.52381 25.5C9.52381 27.469 7.92143 29.0714 5.95238 29.0714ZM16.6667 48.119C14.6976 48.119 13.0952 46.5167 13.0952 44.5476C13.0952 42.5786 14.6976 40.9762 16.6667 40.9762C18.6357 40.9762 20.2381 42.5786 20.2381 44.5476C20.2381 46.5167 18.6357 48.119 16.6667 48.119ZM44.0476 44.5476C44.0476 46.5167 42.4452 48.119 40.4762 48.119C38.5071 48.119 36.9048 46.5167 36.9048 44.5476C36.9048 42.5786 38.5071 40.9762 40.4762 40.9762C42.4452 40.9762 44.0476 42.5786 44.0476 44.5476ZM28.5714 32.6429C24.6333 32.6429 21.4286 29.4381 21.4286 25.5C21.4286 21.5619 24.6333 18.3571 28.5714 18.3571C32.5095 18.3571 35.7143 21.5619 35.7143 25.5C35.7143 29.4381 32.5095 32.6429 28.5714 32.6429ZM51.1905 29.0714C49.2214 29.0714 47.619 27.469 47.619 25.5C47.619 23.531 49.2214 21.9286 51.1905 21.9286C53.1595 21.9286 54.7619 23.531 54.7619 25.5C54.7619 27.469 53.1595 29.0714 51.1905 29.0714Z" />
  </svg>
)

const topRowCards: CapabilityCard[] = [
  {
    title: 'Projects & Services',
    description: 'Project updates, deliverables, revisions, timelines, and service questions.',
    icon: iconNetwork,
  },
  {
    title: 'Account & Client Portal',
    description: 'Access, login issues, account information, and workspace help.',
    icon: iconSystems,
  },
  {
    title: 'Websites & Hosting',
    description: 'Domains, hosting, email, website maintenance, and technical support.',
    icon: iconDocument,
  },
]

const bottomRowCards: CapabilityCard[] = [
  {
    title: 'Files & Deliverables',
    description: 'Finding, accessing, downloading, or requesting project assets.',
    icon: iconDocument,
  },
  {
    title: 'Billing & Payments',
    description: 'Invoices, payments, subscriptions, quotations, and billing questions.',
    icon: iconNetwork,
  },
  {
    title: 'General Support',
    description: "Anything that doesn't fit into another category.",
    icon: iconSystems,
  },
]

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-xl:justify-start max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const CategoryCard = ({ card, widthClass }: { card: CapabilityCard; widthClass: string }) => (
  <RevealWrapper
    className={`reveal-me flex min-h-[410px] w-full flex-col rounded-radius-md px-[30px] py-10 ${widthClass}`}
  >
    <span className="inline-flex [&_path]:fill-secondary [&_path]:dark:fill-backgroundBody">{card.icon}</span>
    <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] max-sm:text-2xl">{card.title}</h5>
    <p className="text-[#808080]">{card.description}</p>
    <div className="mt-auto pt-8">
      <ButtonComponentList className="flex" itemClassName="block">
        <ButtonComponent href="/contact" variant="white">
          VIEW HELP
        </ButtonComponent>
      </ButtonComponentList>
    </div>
  </RevealWrapper>
)

const cardWidth = 'md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]'

/** Layout: technology-and-saas ExperiencePillars — 3+3 grid, static default face, no FlipCard. */
const SupportCategories = () => {
  return (
    <section id="support-categories">
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>SUPPORT CATEGORIES</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 lg:leading-[1.21]">Find What You Need.</h2>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {topRowCards.map((card) => (
          <CategoryCard key={card.title} card={card} widthClass={cardWidth} />
        ))}
      </div>

      <div className={`${gridRowClass} lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}>
        {bottomRowCards.map((card) => (
          <CategoryCard key={card.title} card={card} widthClass={cardWidth} />
        ))}
      </div>
    </section>
  )
}

export default SupportCategories
