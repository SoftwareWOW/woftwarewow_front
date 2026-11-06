import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { CMS_IMAGE_SIZES, CmsResponsiveImage, mergeFeatureItems } from '@/lib/strapi/cms-section-props'

const DEFAULT_PLATFORMS = [
  {
    name: 'Welcome Emails',
    description: 'Make a great first impression and introduce your brand.',
    features: [
      'Best for: New subscribers · First impressions',
      'Content: Introductions · Offers · Getting started',
    ],
  },
  {
    name: 'Newsletters',
    description: 'Share updates, insights, and content worth reading.',
    features: [
      'Best for: Engagement · Brand awareness',
      'Content: News · Articles · Tips',
    ],
  },
  {
    name: 'Promotional Emails',
    description: 'Turn timely offers and announcements into action.',
    features: [
      'Best for: Campaigns · Sales · Conversions',
      'Content: Offers · Launches · Promotions',
    ],
  },
  {
    name: 'Lifecycle Emails',
    description: 'Stay connected at key moments in the customer journey.',
    features: [
      'Best for: Nurturing · Retention · Re-engagement',
      'Content: Follow-ups · Reminders · Win-back',
    ],
  },
]

/** Layout: Home-14 ServicesV13 cards — header matches social capabilities mock. */
const PlatformPresence = ({
  eyebrow = 'Social Capabilities',
  title = 'Everything behind a',
  accentTitle = 'stronger social',
  titleSuffix = ' presence.',
  description = 'From deciding what to say to getting it in front of the right people.',
  items,
  image,
}: Partial<CmsTechnologiesSection> & { titleSuffix?: string } = {}) => {
  const displayPlatforms = mergeFeatureItems(
    DEFAULT_PLATFORMS.map((platform) => ({ ...platform, title: platform.name })),
    items,
  ).map((platform, index) => ({
    ...DEFAULT_PLATFORMS[index],
    name: platform.title,
    description: platform.description ?? DEFAULT_PLATFORMS[index].description,
  }))
  const hasSideImage = Boolean(image?.src)

  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-12 flex flex-col items-start gap-8 md:mb-16 lg:mb-20 lg:flex-row lg:items-center lg:justify-between lg:gap-x-10">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                {title}
                {accentTitle ? <InstrumentText> {accentTitle} </InstrumentText> : null}
                {titleSuffix}
              </h2>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-4">
              <p className="max-w-lg text-base leading-relaxed text-[#808080]">{description}</p>
            </RevealWrapper>
          </div>

          {hasSideImage ? (
            <RevealWrapper className="reveal-me relative w-full max-w-sm shrink-0 overflow-hidden rounded-radius-md lg:max-w-md">
              <CmsResponsiveImage
                image={image}
                alt={image?.alt ?? 'Social insights on mobile'}
                sizes={CMS_IMAGE_SIZES.sideColumn}
                width={image?.width ?? 400}
                height={image?.height ?? 520}
                className="h-auto w-full object-cover"
              />
            </RevealWrapper>
          ) : null}
        </div>
      </div>

      <div className="flex justify-center max-xl:flex-wrap max-xl:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-l [&>*:last-child]:border-r dark:[&>*:last-child]:border-l-dark dark:[&>*:last-child]:border-r-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {displayPlatforms.map((platform) => (
          <RevealWrapper
            key={platform.name}
            className="group relative h-[500px] w-full overflow-hidden shadow-none sm:w-[calc(50%-10px)] lg:w-[360px]"
          >
            <div className="absolute flex h-full w-full translate-y-0 items-center justify-center opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
              <h5 className="max-sm:text-3xl">{platform.name}</h5>
            </div>
            <div className="absolute z-10 h-full w-full translate-y-full border-t border-primary bg-secondary p-8 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-secondary">
              <div className="mb-[55px] flex items-center justify-between gap-1">
                <h5 className="translate-y-5 text-primary opacity-0 transition-all delay-[240ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody max-sm:text-3xl">
                  {platform.name}
                </h5>
                <span className="translate-x-20 transition-all duration-1000 group-hover:translate-x-0" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                    <path
                      d="M5 16H27"
                      className="stroke-primary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 7L27 16L18 25"
                      className="stroke-primary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="translate-y-5 text-backgroundBody/70 opacity-0 transition-all delay-[340ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody/70">
                {platform.description}
              </p>
              <ul className="mt-6 translate-y-5 pl-4 opacity-0 transition-all delay-[440ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100">
                {platform.features.map((feature) => (
                  <li
                    key={feature}
                    className="list-disc text-base leading-relaxed text-backgroundBody/70 dark:text-backgroundBody/70"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default PlatformPresence
