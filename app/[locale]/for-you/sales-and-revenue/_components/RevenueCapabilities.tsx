import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { ReactNode } from 'react'

type CapabilityCard = {
  title: string
  headline: string
  description: string
  icon: ReactNode
  backIcon: ReactNode
}

const topRowCards: CapabilityCard[] = [
  {
    title: 'Lead Generation',
    headline: 'Create more opportunities.',
    description: 'Build targeted inbound and outbound systems for reaching potential customers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={42} height={50} viewBox="0 0 42 50" fill="none" aria-hidden>
        <path
          d="M8.33333 39.5833H33.3333V27.0833H8.33333V39.5833ZM10.4167 29.1667H31.25V37.5H10.4167V29.1667ZM18.75 20.8333H8.33333V18.75H18.75V20.8333ZM18.75 12.5H8.33333V10.4167H18.75V12.5ZM26.4729 0H5.20833C2.3375 0 0 2.3375 0 5.20833V50H41.6667V15.1937L26.4729 0ZM27.0833 3.55625L38.1104 14.5833H27.0833V3.55625ZM2.08333 47.9167V5.20833C2.08333 3.48542 3.48542 2.08333 5.20833 2.08333H25V16.6667H39.5833V47.9167H2.08333Z"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
    backIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={42} height={50} viewBox="0 0 42 50" fill="none" aria-hidden>
        <path
          d="M8.33333 39.5833H33.3333V27.0833H8.33333V39.5833ZM10.4167 29.1667H31.25V37.5H10.4167V29.1667ZM18.75 20.8333H8.33333V18.75H18.75V20.8333ZM18.75 12.5H8.33333V10.4167H18.75V12.5ZM26.4729 0H5.20833C2.3375 0 0 2.3375 0 5.20833V50H41.6667V15.1937L26.4729 0ZM27.0833 3.55625L38.1104 14.5833H27.0833V3.55625ZM2.08333 47.9167V5.20833C2.08333 3.48542 3.48542 2.08333 5.20833 2.08333H25V16.6667H39.5833V47.9167H2.08333Z"
          className="fill-backgroundBody dark:fill-secondary"
        />
      </svg>
    ),
  },
  {
    title: 'CRM & Pipeline',
    headline: 'Create a clearer path to conversion.',
    description: 'Design and optimize journeys that move prospects toward action.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
        <path
          d="M44.7917 31.25H23.9583C21.0875 31.25 18.75 33.5854 18.75 36.4583V40.625C18.75 43.4979 21.0875 45.8333 23.9583 45.8333H44.7917C47.6646 45.8333 50 43.4979 50 40.625V36.4583C50 33.5854 47.6646 31.25 44.7917 31.25ZM29.1667 43.75H23.9583C22.2354 43.75 20.8333 42.3479 20.8333 40.625V36.4583C20.8333 34.7354 22.2354 33.3333 23.9583 33.3333H29.1667V43.75ZM47.9167 40.625C47.9167 42.3479 46.5146 43.75 44.7917 43.75H31.25V33.3333H44.7917C46.5146 33.3333 47.9167 34.7354 47.9167 36.4583V40.625ZM44.7917 4.16667H23.9583C21.0875 4.16667 18.75 6.50208 18.75 9.375V13.5417C18.75 16.4146 21.0875 18.75 23.9583 18.75H44.7917C47.6646 18.75 50 16.4146 50 13.5417V9.375C50 6.50208 47.6646 4.16667 44.7917 4.16667ZM37.5 16.6667H23.9583C22.2354 16.6667 20.8333 15.2646 20.8333 13.5417V9.375C20.8333 7.65208 22.2354 6.25 23.9583 6.25H37.5V16.6667ZM47.9167 13.5417C47.9167 15.2646 46.5146 16.6667 44.7917 16.6667H39.5833V6.25H44.7917C46.5146 6.25 47.9167 7.65208 47.9167 9.375V13.5417ZM8.33333 12.5C11.7792 12.5 14.5833 9.69583 14.5833 6.25C14.5833 2.80417 11.7792 0 8.33333 0C4.8875 0 2.08333 2.80417 2.08333 6.25C2.08333 9.69583 4.8875 12.5 8.33333 12.5Z"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
    backIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
        <path
          d="M44.7917 31.25H23.9583C21.0875 31.25 18.75 33.5854 18.75 36.4583V40.625C18.75 43.4979 21.0875 45.8333 23.9583 45.8333H44.7917C47.6646 45.8333 50 43.4979 50 40.625V36.4583C50 33.5854 47.6646 31.25 44.7917 31.25Z"
          className="fill-backgroundBody dark:fill-secondary"
        />
      </svg>
    ),
  },
  {
    title: 'Sales Automation',
    headline: 'Reduce repetitive sales work.',
    description: 'Automate follow-ups, lead routing, notifications and routine workflows.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
        <path
          d="M50 48.9583C50 49.5333 49.5333 50 48.9583 50H5.20833C2.3375 50 0 47.6625 0 44.7917V1.04167C0 0.466667 0.466667 0 1.04167 0C1.61667 0 2.08333 0.466667 2.08333 1.04167V44.7917C2.08333 46.5146 3.48542 47.9167 5.20833 47.9167H48.9583C49.5333 47.9167 50 48.3833 50 48.9583ZM44.7917 10.4167H36.4583C35.8833 10.4167 35.4167 10.8833 35.4167 11.4583C35.4167 12.0333 35.8833 12.5 36.4583 12.5H44.7917C45.2729 12.5 45.7292 12.6104 46.1375 12.8042L34.1146 24.0833C32.8979 25.3021 30.9146 25.3042 29.6292 24.0229L27.6417 22.3583C25.6771 20.3917 22.2312 20.4021 20.2875 22.3479L8.65 33.6271C8.2375 34.0271 8.22708 34.6875 8.62708 35.1C8.83125 35.3104 9.10417 35.4167 9.375 35.4167C9.63542 35.4167 9.89792 35.3187 10.1 35.1229L21.7479 23.8333C22.9271 22.6542 24.9208 22.5917 26.2333 23.8937L28.2208 25.5583C30.25 27.5896 33.5562 27.5896 35.5625 25.5812L47.5854 14.3021L47.6083 14.2792C47.8042 14.6875 47.9146 15.1437 47.9146 15.6271V23.9604C47.9146 24.5354 48.3812 25.0021 48.9562 25.0021C49.5312 25.0021 49.9979 24.5354 49.9979 23.9604V15.625C49.9979 12.7542 47.6625 10.4167 44.7917 10.4167Z"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
    backIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
        <path
          d="M50 48.9583C50 49.5333 49.5333 50 48.9583 50H5.20833C2.3375 50 0 47.6625 0 44.7917V1.04167C0 0.466667 0.466667 0 1.04167 0C1.61667 0 2.08333 0.466667 2.08333 1.04167V44.7917C2.08333 46.5146 3.48542 47.9167 5.20833 47.9167H48.9583C49.5333 47.9167 50 48.3833 50 48.9583ZM44.7917 10.4167H36.4583C35.8833 10.4167 35.4167 10.8833 35.4167 11.4583C35.4167 12.0333 35.8833 12.5 36.4583 12.5H44.7917Z"
          className="fill-backgroundBody dark:fill-secondary"
        />
      </svg>
    ),
  },
]

const bottomRowCards: CapabilityCard[] = [
  {
    title: 'Outbound Sales',
    headline: 'Reach the right prospects proactively.',
    description: 'Build structured outreach campaigns around defined audiences and offers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={58} height={51} viewBox="0 0 58 51" fill="none" aria-hidden>
        <path
          d="M51.1905 19.5476C48.3143 19.5476 45.9119 21.5952 45.3595 24.3095H37.9762C37.6619 21.8286 36.4048 19.6595 34.5595 18.1524L38.3929 12.0071C39.0452 12.2524 39.7429 12.4048 40.4786 12.4048C43.7619 12.4048 46.431 9.73571 46.431 6.45238C46.431 3.16905 43.7619 0.5 40.4786 0.5C37.1952 0.5 34.5262 3.16905 34.5262 6.45238C34.5262 8.14286 35.2405 9.6619 36.3762 10.7452L32.5524 16.8738C31.3381 16.3119 29.9976 15.9762 28.5738 15.9762C27.15 15.9762 25.8095 16.3119 24.5929 16.8762L20.769 10.7476C21.9048 9.6619 22.619 8.14286 22.619 6.45238C22.619 3.16905 19.95 0.5 16.6667 0.5C13.3833 0.5 10.7143 3.16905 10.7143 6.45238C10.7143 9.73571 13.3833 12.4048 16.6667 12.4048C17.4024 12.4048 18.1 12.2524 18.75 12.0095L22.5833 18.1548C20.7357 19.6619 19.481 21.8286 19.1667 24.3095H11.7833C11.231 21.5952 8.82619 19.5476 5.95238 19.5476C2.66905 19.5476 0 22.2167 0 25.5C0 28.7833 2.66905 31.4524 5.95238 31.4524C8.82857 31.4524 11.231 29.4048 11.7833 26.6905H19.1667C19.481 29.1714 20.7357 31.3381 22.581 32.8452L18.7476 38.9905C18.0976 38.7452 17.4 38.5952 16.6643 38.5952C13.381 38.5952 10.7119 41.2643 10.7119 44.5476C10.7119 47.831 13.381 50.5 16.6643 50.5C19.9476 50.5 22.6167 47.831 22.6167 44.5476C22.6167 42.8571 21.9 41.3357 20.7643 40.2524L24.5881 34.1238C25.8024 34.6881 27.1429 35.0238 28.569 35.0238C29.9952 35.0238 31.3333 34.6881 32.5476 34.1238L36.3714 40.2524C35.2357 41.3357 34.5214 42.8571 34.5214 44.5476C34.5214 47.831 37.1905 50.5 40.4738 50.5C43.7571 50.5 46.4262 47.831 46.4262 44.5476C46.4262 41.2643 43.7571 38.5952 40.4738 38.5952C39.7381 38.5952 39.0405 38.7476 38.3905 38.9929L34.5571 32.8476C36.4048 31.3405 37.6595 29.1738 37.9738 26.6905H45.3571C45.9095 29.4048 48.3143 31.4524 51.1881 31.4524C54.4714 31.4524 57.1405 28.7833 57.1405 25.5C57.1405 22.2167 54.4738 19.5476 51.1905 19.5476Z"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
    backIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={58} height={51} viewBox="0 0 58 51" fill="none" aria-hidden>
        <path
          d="M51.1905 19.5476C48.3143 19.5476 45.9119 21.5952 45.3595 24.3095H37.9762C37.6619 21.8286 36.4048 19.6595 34.5595 18.1524L38.3929 12.0071C39.0452 12.2524 39.7429 12.4048 40.4786 12.4048C43.7619 12.4048 46.431 9.73571 46.431 6.45238C46.431 3.16905 43.7619 0.5 40.4786 0.5C37.1952 0.5 34.5262 3.16905 34.5262 6.45238C34.5262 8.14286 35.2405 9.6619 36.3762 10.7452L32.5524 16.8738C31.3381 16.3119 29.9976 15.9762 28.5738 15.9762C27.15 15.9762 25.8095 16.3119 24.5929 16.8762L20.769 10.7476C21.9048 9.6619 22.619 8.14286 22.619 6.45238C22.619 3.16905 19.95 0.5 16.6667 0.5C13.3833 0.5 10.7143 3.16905 10.7143 6.45238C10.7143 9.73571 13.3833 12.4048 16.6667 12.4048Z"
          className="fill-backgroundBody dark:fill-secondary"
        />
      </svg>
    ),
  },
  {
    title: 'Conversion Optimization',
    headline: 'Get more from existing opportunities.',
    description: 'Identify friction and improve the steps that influence conversion.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={49} height={50} viewBox="0 0 49 50" fill="none" aria-hidden>
        <path
          d="M11.2122 20.8333C8.91428 20.8333 7.04553 22.7021 7.04553 25C7.04553 27.2979 8.91428 29.1667 11.2122 29.1667C13.5101 29.1667 15.3789 27.2979 15.3789 25C15.3789 22.7021 13.5101 20.8333 11.2122 20.8333ZM22.3184 21.0354C22.5289 20.225 22.4101 19.3854 21.9893 18.6667C21.5664 17.9458 20.8893 17.4333 20.0809 17.225C19.2726 17.0104 18.433 17.1313 17.708 17.5562L17.2435 17.8292C16.3955 17.1208 15.408 16.5667 14.3351 16.1917V15.6271C14.3351 13.9042 12.933 12.5021 11.2101 12.5021C9.4872 12.5021 8.08512 13.9042 8.08512 15.6271V16.1917C7.0122 16.5667 6.02678 17.1208 5.17678 17.8292L4.7122 17.5562C3.98928 17.1313 3.1497 17.0104 2.33928 17.225C1.53095 17.4354 0.853866 17.9479 0.433032 18.6646C0.0101157 19.3854 -0.108634 20.225 0.101782 21.0354C0.312199 21.8438 0.824699 22.5208 1.54137 22.9417L2.02887 23.2292C1.89553 23.8542 1.83095 24.4292 1.83095 25.0021C1.83095 25.575 1.89345 26.15 2.02678 26.7729L1.54137 27.0604C0.822616 27.4833 0.310116 28.1604 0.101782 28.9687C-0.108634 29.7792 0.0101157 30.6187 0.430949 31.3375C0.853866 32.0583 1.53095 32.5708 2.33928 32.7792C3.1497 32.9937 3.98928 32.8729 4.7122 32.4479L5.17678 32.175C6.0247 32.8833 7.0122 33.4375 8.08512 33.8125V34.3771C8.08512 36.1 9.4872 37.5021 11.2101 37.5021C12.933 37.5021 14.3351 36.1 14.3351 34.3771V33.8125C15.408 33.4375 16.3934 32.8833 17.2435 32.175L17.708 32.4479C18.433 32.8729 19.2726 32.9937 20.0809 32.7792C20.8893 32.5687 21.5664 32.0562 21.9872 31.3396C22.4101 30.6187 22.5289 29.7792 22.3184 28.9687C22.108 28.1604 21.5955 27.4833 20.8768 27.0583L20.3934 26.7729C20.5247 26.15 20.5893 25.575 20.5893 25.0021C20.5893 24.4292 20.5268 23.8542 20.3914 23.2292L20.8768 22.9437C21.5976 22.5208 22.1101 21.8438 22.3184 21.0354ZM36.3184 26.0417C36.8184 28.9917 39.3726 31.25 42.4622 31.25C45.908 31.25 48.7122 28.4458 48.7122 25C48.7122 21.5542 45.908 18.75 42.4622 18.75C39.3726 18.75 36.8164 21.0083 36.3184 23.9583H29.9622V12.5C29.9622 9.62708 32.2976 7.29167 35.1705 7.29167H36.3184C36.8184 10.2417 39.3726 12.5 42.4622 12.5C45.908 12.5 48.7122 9.69583 48.7122 6.25C48.7122 2.80417 45.908 0 42.4622 0C39.3726 0 36.8164 2.25833 36.3184 5.20833H35.1705C31.1497 5.20833 27.8789 8.47917 27.8789 12.5V23.9583H24.7539C24.1789 23.9583 23.7122 24.425 23.7122 25C23.7122 25.575 24.1789 26.0417 24.7539 26.0417H27.8789V37.5C27.8789 41.5208 31.1497 44.7917 35.1705 44.7917H36.3184C36.8184 47.7417 39.3726 50 42.4622 50C45.908 50 48.7122 47.1958 48.7122 43.75C48.7122 40.3042 45.908 37.5 42.4622 37.5C39.3726 37.5 36.8164 39.7583 36.3184 42.7083H35.1705C32.2976 42.7083 29.9622 40.3729 29.9622 37.5V26.0417H36.3184Z"
          className="fill-secondary dark:fill-backgroundBody"
        />
      </svg>
    ),
    backIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={49} height={50} viewBox="0 0 49 50" fill="none" aria-hidden>
        <path
          d="M11.2122 20.8333C8.91428 20.8333 7.04553 22.7021 7.04553 25C7.04553 27.2979 8.91428 29.1667 11.2122 29.1667C13.5101 29.1667 15.3789 27.2979 15.3789 25C15.3789 22.7021 13.5101 20.8333 11.2122 20.8333ZM36.3184 26.0417C36.8184 28.9917 39.3726 31.25 42.4622 31.25C45.908 31.25 48.7122 28.4458 48.7122 25C48.7122 21.5542 45.908 18.75 42.4622 18.75C39.3726 18.75 36.8164 21.0083 36.3184 23.9583H29.9622V12.5C29.9622 9.62708 32.2976 7.29167 35.1705 7.29167H36.3184Z"
          className="fill-backgroundBody dark:fill-secondary"
        />
      </svg>
    ),
  },
]

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-xl:justify-start max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({
  card,
  widthClass,
}: {
  card: CapabilityCard
  widthClass: string
}) => (
  <RevealWrapper className={`reveal-me group relative min-h-[410px] w-full overflow-hidden ${widthClass}`}>
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span>{card.icon}</span>
        <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] max-sm:text-2xl">{card.title}</h5>
        <p className="mb-2 text-lg font-normal leading-snug">{card.headline}</p>
        <p>{card.description}</p>
      </div>

      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span>{card.backIcon}</span>
        <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary max-sm:text-2xl">
          {card.title}
        </h5>
        <p className="mb-2 text-lg text-backgroundBody dark:text-secondary">{card.headline}</p>
        <p className="text-backgroundBody dark:text-secondary">{card.description}</p>
      </div>
    </div>
  </RevealWrapper>
)

/** Layout: Home-24 ServicesV16 — hover-flip cards, 3+2 grid. */
const RevenueCapabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Revenue Capabilities</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 lg:leading-[1.21]">
              Build the systems behind
              <span className="font-instrument italic"> better sales.</span>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-[770px]">
              From deciding what to say to getting it in front of the right people.
            </p>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {topRowCards.map((card) => (
          <FlipCard
            key={card.title}
            card={card}
            widthClass="md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]"
          />
        ))}
      </div>

      <div
        className={`${gridRowClass} max-lg:mt-5 max-xl:justify-center max-xl:[&>*:first-child]:border-r max-xl:[&>*:nth-child(2)]:border-r max-2xl:[&>*:nth-child(3)]:border-r-0 lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}>
        {bottomRowCards.map((card) => (
          <FlipCard key={card.title} card={card} widthClass="md:w-[calc(50%-10px)] lg:w-[calc(50%-15px)] xl:w-[595px]" />
        ))}
      </div>
    </section>
  )
}

export default RevenueCapabilities
