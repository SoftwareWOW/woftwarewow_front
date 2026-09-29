import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import processImg from '@/public/images/process-img-01.png'
import Image from 'next/image'
import { cmsImageSrc } from '@/lib/strapi/cms-section-props'
import type { CmsProcessSection } from '@/lib/strapi/mappers/page-sections'

type Props = Partial<CmsProcessSection>

/** Layout: Home-07 ProcessV4 — image height matches steps; centered CTA. */
const ProductJourney = ({ eyebrow, title, description, steps, image }: Props = {}) => {
  const displaySteps =
    steps?.map((step, index) => ({
      number: String(index + 1).padStart(2, '0'),
      title: step.title,
      description: step.description ?? '',
    })) ?? []
  const imageSrc = cmsImageSrc(image)

  if (!displaySteps.length && !title) {
    return null
  }

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          {eyebrow ? (
            <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
          ) : null}
          {title ? (
            <TextAppearAnimation>
              <h2 className="text-appear mx-auto max-w-[770px]">{title}</h2>
            </TextAppearAnimation>
          ) : null}
          {description ? (
            <TextAppearAnimation>
              <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">{description}</p>
            </TextAppearAnimation>
          ) : null}
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative w-full overflow-hidden rounded-radius-md md:w-[min(100%,420px)] md:shrink-0">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Product journey from concept to launch"
                className="h-full min-h-[280px] w-full rounded-radius-md object-cover md:absolute md:inset-0 md:min-h-0"
              />
            ) : (
              <Image
                src={processImg}
                alt="Product journey from concept to launch"
                className="h-full min-h-[280px] w-full rounded-radius-md object-cover md:absolute md:inset-0 md:min-h-0"
              />
            )}
          </figure>

          {displaySteps.length ? (
            <div className="min-w-0 flex-1">
              <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
                {displaySteps.map((step, index) => (
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
                      {step.description ? (
                        <p className="mt-3 max-w-[483px] text-[#808080]">{step.description}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </RevealWrapper>

        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="white">
              Discuss My Product Idea
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProductJourney
