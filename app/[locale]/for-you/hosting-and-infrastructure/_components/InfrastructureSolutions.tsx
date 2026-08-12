import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type IconTone = 'front' | 'back'

type SolutionCard = {
  title: string
  headline: string
  description: string
  Icon: (props: { tone: IconTone }) => JSX.Element
}

const strokeClass = (tone: IconTone) =>
  tone === 'front'
    ? 'stroke-secondary dark:stroke-backgroundBody'
    : 'stroke-backgroundBody dark:stroke-secondary'

const fillClass = (tone: IconTone) =>
  tone === 'front'
    ? 'fill-secondary dark:fill-backgroundBody'
    : 'fill-backgroundBody dark:fill-secondary'

const HostingIcon = ({ tone }: { tone: IconTone }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <circle cx="16" cy="16" r="8" className={strokeClass(tone)} strokeWidth="1.5" />
    <path d="M10 16h12M16 10v12" className={strokeClass(tone)} strokeWidth="1.5" strokeLinecap="round" />
    <rect x="24" y="20" width="8" height="12" rx="1" className={strokeClass(tone)} strokeWidth="1.5" />
    <path d="M26 24h4M26 27h4M26 30h4" className={strokeClass(tone)} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const DomainsIcon = ({ tone }: { tone: IconTone }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <circle cx="20" cy="20" r="12" className={strokeClass(tone)} strokeWidth="1.5" />
    <path d="M8 20h24M20 8c3 4 3 20 0 24M20 8c-3 4-3 20 0 24" className={strokeClass(tone)} strokeWidth="1.5" />
    <text x="20" y="23" textAnchor="middle" className={fillClass(tone)} style={{ fontSize: '7px', fontWeight: 600 }}>
      WWW
    </text>
  </svg>
)

const EmailIcon = ({ tone }: { tone: IconTone }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <rect x="6" y="12" width="28" height="18" rx="2" className={strokeClass(tone)} strokeWidth="1.5" />
    <path d="M6 14l14 10L34 14" className={strokeClass(tone)} strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="26" y="6" width="8" height="6" rx="1" className={strokeClass(tone)} strokeWidth="1.5" />
  </svg>
)

const CloudIcon = ({ tone }: { tone: IconTone }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <path
      d="M12 28h16a6 6 0 0 0 0-12 8 8 0 0 0-15.5-2A5 5 0 0 0 12 28z"
      className={strokeClass(tone)}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M16 22h8v6h-8v-6z" className={strokeClass(tone)} strokeWidth="1.5" />
  </svg>
)

const SecurityIcon = ({ tone }: { tone: IconTone }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <path
      d="M20 6l12 4v8c0 8-5.5 14-12 16-6.5-2-12-8-12-16V10l12-4z"
      className={strokeClass(tone)}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M15 20l3.5 3.5L25 17" className={strokeClass(tone)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BackupsIcon = ({ tone }: { tone: IconTone }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <path
      d="M10 20a10 10 0 0 1 16.5-7.5M30 20a10 10 0 0 1-16.5 7.5"
      className={strokeClass(tone)}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M26 8v5h5M14 32v-5h-5" className={strokeClass(tone)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="16" y="15" width="8" height="10" rx="1" className={strokeClass(tone)} strokeWidth="1.5" />
  </svg>
)

const solutions: SolutionCard[] = [
  {
    title: 'Website Hosting',
    headline: 'Reliable hosting for your digital presence.',
    description: 'Shared, VPS and dedicated hosting options depending on your requirements.',
    Icon: HostingIcon,
  },
  {
    title: 'Domains',
    headline: 'Your business starts with the right address.',
    description: 'Domain registration and management for your online presence.',
    Icon: DomainsIcon,
  },
  {
    title: 'Business Email',
    headline: 'Professional communication under your brand.',
    description: 'Business email connected to your company domain.',
    Icon: EmailIcon,
  },
  {
    title: 'Cloud & Storage',
    headline: 'Infrastructure that can grow with you.',
    description: 'Cloud resources and storage for evolving business requirements.',
    Icon: CloudIcon,
  },
  {
    title: 'Security',
    headline: 'Protect what keeps your business running.',
    description: 'Infrastructure security designed to reduce unnecessary exposure and risk.',
    Icon: SecurityIcon,
  },
  {
    title: 'Backups & CDN',
    headline: 'Better resilience and delivery.',
    description: 'Backup and content-delivery solutions supporting availability and performance.',
    Icon: BackupsIcon,
  },
]

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({ card }: { card: SolutionCard }) => (
  <RevealWrapper className="reveal-me group relative min-h-[320px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span className="inline-flex">
          <card.Icon tone="front" />
        </span>
        <h5 className="mb-3 mt-8 text-2xl leading-[1.2] -tracking-[1.08px]">{card.title}</h5>
        <p className="mb-2 text-lg font-normal leading-snug">{card.headline}</p>
        <p className="text-base leading-relaxed text-[#808080]">{card.description}</p>
      </div>
      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-10 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span className="inline-flex">
          <card.Icon tone="back" />
        </span>
        <h5 className="mb-3 mt-8 text-2xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
          {card.title}
        </h5>
        <p className="mb-2 text-lg text-backgroundBody dark:text-secondary">{card.headline}</p>
        <p className="text-base leading-relaxed text-backgroundBody/80 dark:text-secondary/80">{card.description}</p>
      </div>
    </div>
  </RevealWrapper>
)

/** Layout: RevenueCapabilities / ServicesV16 — hover-flip cards, 3+3 grid. */
const InfrastructureSolutions = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Infrastructure Solutions</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              The essentials, managed in <InstrumentText>one place.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {solutions.slice(0, 3).map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>

      <div
        className={`${gridRowClass} max-lg:mt-5 max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}
      >
        {solutions.slice(3).map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  )
}

export default InfrastructureSolutions
