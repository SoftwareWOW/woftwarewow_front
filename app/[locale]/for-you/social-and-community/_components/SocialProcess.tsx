import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'
import { cmsImageSrc } from '@/lib/strapi/cms-section-props'

/** Layout: Home-07 ProcessV4 — image + numbered vertical process. */
const SocialProcess = ({
  eyebrow = 'Our Process',
  title = 'How we build social that lasts',
  steps,
  image,
}: Partial<CmsProcessSection> = {}) => {
  const displaySteps =
    steps?.map((step, index) => ({
      number: String(step.order ?? index + 1).padStart(2, '0'),
      title: step.title,
      description: step.description ?? '',
    })) ?? []
  const processImageSrc = cmsImageSrc(image)

  if (!displaySteps.length && !processImageSrc) {
    return null
  }

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto max-w-[770px]">{title}</h2>
          </RevealWrapper>
        </div>

        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          {processImageSrc ? (
            <figure className="overflow-hidden rounded-radius-md md:shrink-0">
              <img
                src={processImageSrc}
                alt={image?.alt ?? 'Social and community process'}
                className="h-auto w-full object-cover"
              />
            </figure>
          ) : null}

          <div>
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-28 xl:space-y-[170px]">
              {displaySteps.map((step) => (
                <li key={step.number} className="max-w-max px-10">
                  <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                    <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-transparent dark:from-white dark:to-[#BDBDBD]">
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-5 max-w-[483px] text-base leading-relaxed text-[#808080]">{step.description}</p>
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

export default SocialProcess
