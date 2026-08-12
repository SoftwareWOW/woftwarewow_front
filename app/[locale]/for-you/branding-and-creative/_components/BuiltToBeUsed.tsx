import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type AssetCard = {
  title: string
  description: string
  Icon: () => JSX.Element
}

const LogoSystemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <circle cx="20" cy="20" r="12" className="stroke-current" strokeWidth="1.5" />
    <text
      x="20"
      y="24"
      textAnchor="middle"
      className="fill-current"
      style={{ fontSize: '10px', fontWeight: 600 }}
    >
      ID
    </text>
  </svg>
)

const ColorTypographyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <path d="M12 28V12h6c3.3 0 6 2 6 5.5S21.3 23 18 23h-3v5H12zm3-8h2.5c1.7 0 3-1 3-2.5S19.2 15 17.5 15H15v5z" className="fill-current" />
    <path d="M26 28l2-6h4l2 6h-2.2l-.4-1.2h-2.8L28.2 28H26zm3.2-3h2.4l-1.2-3.4L29.2 25z" className="fill-current" />
  </svg>
)

const BrandGuidelinesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <rect x="10" y="8" width="16" height="22" rx="1.5" className="stroke-current" strokeWidth="1.5" />
    <path d="M14 14h8M14 18h8M14 22h5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CreativeTemplatesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <rect x="10" y="8" width="16" height="22" rx="1.5" className="stroke-current" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="4" className="stroke-current" strokeWidth="1.5" />
    <path d="M18 15.5v5M15.5 18h5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const BusinessMaterialsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <rect x="8" y="14" width="14" height="10" rx="1" className="stroke-current" strokeWidth="1.5" />
    <path d="M22 16h8l2 3v5h-10" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

const DigitalAssetsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" aria-hidden>
    <path d="M10 12h16v14H10V12z" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 16h8M14 20h5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="26" cy="24" r="4" className="stroke-current" strokeWidth="1.5" />
  </svg>
)

const assets: AssetCard[] = [
  {
    title: 'Logo System',
    description: 'Primary, secondary and flexible brand marks.',
    Icon: LogoSystemIcon,
  },
  {
    title: 'Color & Typography',
    description: 'A defined visual system for consistent communication.',
    Icon: ColorTypographyIcon,
  },
  {
    title: 'Brand Guidelines',
    description: 'Clear rules for how the identity should be applied.',
    Icon: BrandGuidelinesIcon,
  },
  {
    title: 'Creative Templates',
    description: 'Reusable foundations for social, campaigns and content.',
    Icon: CreativeTemplatesIcon,
  },
  {
    title: 'Business Materials',
    description: 'Branded collateral for presentations, documents and other key touchpoints.',
    Icon: BusinessMaterialsIcon,
  },
  {
    title: 'Digital Assets',
    description: 'Brand elements prepared for websites and other digital experiences.',
    Icon: DigitalAssetsIcon,
  },
]

const gridRowClass =
  'flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark'

const FlipCard = ({ asset }: { asset: AssetCard }) => (
  <RevealWrapper className="reveal-me group relative min-h-[280px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
    <div>
      <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
        <span className="inline-flex text-secondary dark:text-backgroundBody">
          <asset.Icon />
        </span>
        <h5 className="mb-3 mt-8 text-2xl leading-[1.2] -tracking-[1.08px]">{asset.title}</h5>
        <p className="text-base leading-relaxed text-[#808080]">{asset.description}</p>
      </div>
      <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-10 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
        <span className="inline-flex text-backgroundBody dark:text-secondary">
          <asset.Icon />
        </span>
        <h5 className="mb-3 mt-8 text-2xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
          {asset.title}
        </h5>
        <p className="text-base leading-relaxed text-backgroundBody/80 dark:text-secondary/80">{asset.description}</p>
      </div>
    </div>
  </RevealWrapper>
)

/** Layout: Home-13 ServicesV12 — hover-flip cards (3+3 grid), no CTA on back. */
const BuiltToBeUsed = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 text-center md:mb-24">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Built to Be Used</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">A brand your whole business can use.</h2>
          </TextAppearAnimation>
        </div>
      </div>

      <div className={gridRowClass}>
        {assets.slice(0, 3).map((asset) => (
          <FlipCard key={asset.title} asset={asset} />
        ))}
      </div>

      <div
        className={`${gridRowClass} max-lg:mt-5 max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark`}
      >
        {assets.slice(3).map((asset) => (
          <FlipCard key={asset.title} asset={asset} />
        ))}
      </div>
    </section>
  )
}

export default BuiltToBeUsed
