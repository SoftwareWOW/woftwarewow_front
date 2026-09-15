import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

const DEFAULT_ITEMS = [
  { id: 1, name: 'Impact', description: 'Authority & reputation' },
  { id: 2, name: 'Design', description: 'Brand identity' },
  { id: 3, name: 'Websites', description: 'Digital presence' },
  { id: 4, name: 'Social', description: 'Social positioning' },
  { id: 5, name: 'Marketing', description: 'Visibility & content' },
  { id: 6, name: 'Events', description: 'Speaking & audience opportunities' },
]

type Props = Partial<CmsTechnologiesSection>

/** Home-15 — ElevateBrand: split header + large numbered hover rows. */
const SpecialistExpertise = ({
  eyebrow = 'One Package. Specialist Expertise.',
  title = 'One brand.',
  accentTitle = ' Multiple specialists.',
  description =
    'Bring strategy, design, content, digital, and growth expertise together through one connected team.',
  items,
}: Props = {}) => {
  const mergedItems = mergeFeatureItems(
    DEFAULT_ITEMS.map(({ name, description: desc }) => ({ title: name, description: desc })),
    items,
  ).map((item, index) => ({
    ...DEFAULT_ITEMS[index],
    name: item.title,
    description: item.description ?? DEFAULT_ITEMS[index].description,
  }))

  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2>
                {title}
                <InstrumentText>{accentTitle}</InstrumentText>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                {description}
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:dark:border-dark">
          {mergedItems.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                0{item.id}
              </span>
              <h3 className="mt-2 flex items-baseline gap-[0.25em] text-nowrap text-2xl font-normal leading-tight tracking-[-2px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-[55px] md:w-[730px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]">
                <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText>
                {item.name}
              </h3>
              <p className="ml-2.5 self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialistExpertise
