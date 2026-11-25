import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'

const CheckIcon = () => (
  <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-secondary sm:size-5 dark:bg-backgroundBody">
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

/** Copy of accelerate BuiltForGrowth — image left + checklist; equal-height row on md+. */
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
          <h2 className="text-appear mb-6 text-[clamp(1.75rem,4vw,4rem)] font-light leading-[1.2] md:mb-8 lg:mb-12">
            {title}
            <InstrumentText>{accentTitle}</InstrumentText>
          </h2>
        </TextAppearAnimation>

        {/* Plain grid (not reveal-me) so both columns share one row height */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <RevealWrapper className="reveal-me relative min-h-[220px] overflow-hidden rounded-radius-sm sm:min-h-[280px] md:min-h-0">
            <div className="relative h-full min-h-[220px] w-full sm:min-h-[280px] md:absolute md:inset-0 md:min-h-0">
              <CmsResponsiveImage
                image={image}
                alt={image.alt}
                fill
                sizes={CMS_IMAGE_SIZES.halfGrid}
                className="rounded-radius-sm object-cover"
              />
            </div>
          </RevealWrapper>

          <RevealWrapper className="reveal-me flex flex-col justify-center">
            <p className="mb-4 text-[clamp(0.875rem,1.35vw,1.125rem)] leading-[1.55] tracking-[0.32px] text-[#808080] md:mb-5 lg:mb-6">
              {description}
            </p>
            <ul className="[&>*:not(:last-child)]:mb-3 md:[&>*:not(:last-child)]:mb-4">
              {items.map((item) => (
                <li key={item.title} className="flex list-none items-start gap-3">
                  <CheckIcon />
                  <div>
                    <h5 className="text-[clamp(0.95rem,1.6vw,1.2rem)] font-light leading-snug">{item.title}</h5>
                    <p className="mt-0.5 text-[clamp(0.8125rem,1.25vw,1rem)] leading-[1.5] tracking-[0.32px] text-[#808080]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
