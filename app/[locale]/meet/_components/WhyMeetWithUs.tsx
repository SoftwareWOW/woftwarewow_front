import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'
import { Gift, MessageSquare, Route, Sparkles } from 'lucide-react'
import { meetSectionClass, meetSectionInnerClass } from './meetSectionSpacing'

const DEFAULT_WHYMEETITEMS = [
  {
    title: 'Free Consultation',
    description: 'Get expert guidance at no cost and explore the best path forward for your business.',
    icon: Gift,
  },
  {
    title: 'Expert Technical Advice',
    description: 'Speak with specialists across technology, design, marketing, and AI.',
    icon: Sparkles,
  },
  {
    title: 'Clear Project Roadmap',
    description: 'Leave with practical next steps tailored to your goals, timeline, and budget.',
    icon: Route,
  },
  {
    title: 'No Obligation',
    description: 'A pressure-free conversation focused on clarity, value, and the right fit.',
    icon: MessageSquare,
  },
]

type WhyMeetWithUsProps = Partial<CmsTechnologiesSection>

const WhyMeetWithUs = ({
  eyebrow = 'Why Meet With Us',
  title = 'A conversation designed to',
  accentTitle = 'move you forward',
  description,
  items,
}: WhyMeetWithUsProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title, accentTitle, description },
    { eyebrow, title, accentTitle, description },
  )
  const mergedItems = mergeFeatureItems(
    DEFAULT_WHYMEETITEMS.map(({ title: itemTitle, description: itemDescription, icon }) => ({
      title: itemTitle,
      description: itemDescription,
      icon,
    })),
    items,
  ).map((item, index) => ({
    ...DEFAULT_WHYMEETITEMS[index],
    title: item.title,
    description: item.description ?? DEFAULT_WHYMEETITEMS[index].description,
  }))

  return (
  <section className={meetSectionClass}>
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-10 text-center md:mb-14">
        <SectionLabel className="mb-5">{header.eyebrow}</SectionLabel>
        <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
          {header.title}{' '}
          <span className="font-instrument italic">{header.accentTitle}</span>
        </h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mergedItems.map((item) => {
          const Icon = item.icon

          return (
            <RevealWrapper key={item.title}>
              <article className="rounded-radius-md border border-black/10 bg-backgroundBody px-6 py-5 transition-colors duration-300 dark:border-white/10 dark:bg-background">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-radius-sm bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="text-lg font-medium tracking-normal text-secondary dark:text-[#F2F2F2]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
              </article>
            </RevealWrapper>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default WhyMeetWithUs
