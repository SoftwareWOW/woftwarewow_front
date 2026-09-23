import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { partnerSteps as DEFAULT_PARTNERSTEPS } from '../_data/whitelabel'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import { mergeProcessSteps, mergeSectionHeader, cmsImageSrc } from '@/lib/strapi/cms-section-props'

/** Layout: technology-and-saas ClientJourney — image + numbered steps. */
type HowWePartnerProps = Partial<CmsProcessSection>

const HowWePartner = ({
  eyebrow = 'HOW IT WORKS',
  title = 'Built Around Your Client Relationship.',
  description = 'Successful technology businesses continuously improve the product while building the systems that bring users in and keep them there.',
  steps,
  image,
}: HowWePartnerProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, description }, { eyebrow, title, description })
  const mergedSteps = mergeProcessSteps([...DEFAULT_PARTNERSTEPS], steps).map((step, i) => ({
    ...DEFAULT_PARTNERSTEPS[i],
    title: step.title,
    description: step.description ?? DEFAULT_PARTNERSTEPS[i].description,
  }))
  const imageSrc = cmsImageSrc(image, '/images/wow/nav/cards/software%26technology.png')

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">{header.title}</h2>
          </TextAppearAnimation>
          {header.description ? (
            <TextAppearAnimation>
              <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">{header.description}</p>
            </TextAppearAnimation>
          ) : null}
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative min-h-[320px] w-full overflow-hidden rounded-radius-md md:min-h-[480px] md:w-[min(100%,420px)] md:shrink-0 lg:min-h-[560px]">
            <img
              src={imageSrc ?? ''}
              alt={image?.alt ?? 'White-label partnership delivery'}
              className="h-full min-h-[320px] w-full rounded-radius-md object-cover md:min-h-[480px] lg:min-h-[560px]"
            />
          </figure>

          <div className="min-w-0 flex-1">
            <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
              {mergedSteps.map((step, index) => (
                <li key={step.number} className="relative max-w-max px-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span
                      className={`inline-block bg-gradient-to-r bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent ${
                        index === 0 ? 'from-backgroundBody to-gray-400' : 'from-white to-gray-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-3 max-w-[483px] text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HowWePartner
