import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'

const CheckIcon = () => (
  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary sm:size-6 dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody dark:stroke-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

type AdvantageItem = { title: string; description: string }

type SharedHostingAdvantageSectionProps = {
  eyebrow: string
  title: string
  accentTitle: string
  description: string
  image: { src: string; alt: string; width?: number; height?: number }
  items: ReadonlyArray<AdvantageItem>
}

/** Copy of accelerate BuiltForGrowth — image left + checklist with title + description. */
export default function SharedHostingAdvantageSection({
  eyebrow,
  title,
  accentTitle,
  description,
  image,
  items,
}: SharedHostingAdvantageSectionProps) {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-2">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 text-3xl leading-tight sm:text-[34px] md:text-[44px] lg:mb-16 lg:text-[54px] xl:text-[64px] xl:leading-[1.1]">
            {title}
            <InstrumentText>{accentTitle}</InstrumentText>
          </h2>
        </TextAppearAnimation>

        <RevealWrapper className="flex flex-col gap-x-16 gap-y-12 lg:flex-row lg:items-start">
          <figure className="relative min-h-[280px] overflow-hidden rounded-radius-sm lg:w-1/2 lg:min-h-[420px]">
            <CmsResponsiveImage
              image={image}
              alt={image.alt}
              fill
              sizes={CMS_IMAGE_SIZES.halfGrid}
              className="rounded-radius-sm object-cover"
            />
          </figure>
          <div className="lg:w-1/2">
            <p className="mb-8 text-base leading-[1.6] tracking-[0.32px] text-[#808080] md:text-lg">
              {description}
            </p>
            <ul className="[&>*:not(:last-child)]:mb-5 md:[&>*:not(:last-child)]:mb-6">
              {items.map((item) => (
                <li key={item.title} className="flex list-none items-start gap-4">
                  <CheckIcon />
                  <div>
                    <h5 className="text-lg font-light leading-snug md:text-xl">{item.title}</h5>
                    <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">
                      {item.description}
                    </p>
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
