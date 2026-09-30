import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { cmsImageSrc } from '@/lib/strapi/cms-section-props'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'

type Props = Partial<CmsProcessSection>

/** Copied from Home-07 ProcessV4 — local copy, not imported from origin. */
const ConnectedGrowth = ({ eyebrow, title, description, steps, image }: Props = {}) => {
  const imageSrc = cmsImageSrc(image)
  const displaySteps =
    steps?.map((step, index) => ({
      number: String(index + 1).padStart(2, '0'),
      title: step.title,
      description: step.description ?? '',
    })) ?? []

  if (!displaySteps.length && !title && !imageSrc) {
    return null
  }

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          {eyebrow ? (
            <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
              <span className="rv-badge-text">{eyebrow}</span>
            </RevealWrapper>
          ) : null}
          {title ? (
            <TextAppearAnimation>
              <h2 className="text-appear mx-auto max-w-[770px]">{title}</h2>
            </TextAppearAnimation>
          ) : null}
          {description ? (
            <TextAppearAnimation>
              <p className="text-appear mx-auto mt-3 max-w-2xl">{description}</p>
            </TextAppearAnimation>
          ) : null}
        </div>
        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          {imageSrc ? (
            <figure>
              <img
                src={imageSrc}
                alt={image?.alt ?? ''}
                className="rounded-radius-md"
              />
            </figure>
          ) : null}

          {displaySteps.length ? (
            <div>
              <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
                {displaySteps.map((step, index) => (
                  <li key={step.number} className="max-w-max px-10">
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
                      <h3 className="">{step.title}</h3>
                      {step.description ? <p className="mt-5 max-w-[483px]">{step.description}</p> : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ConnectedGrowth
