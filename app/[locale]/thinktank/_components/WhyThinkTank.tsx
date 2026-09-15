import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'
import { Lightbulb, MessageSquare, Route, Users } from 'lucide-react'
import { meetSectionClass, meetSectionInnerClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'

const DEFAULT_WHYTHINKTANKITEMS = [
  {
    title: 'Focused Discussion',
    description: 'Work through a specific challenge, idea, or decision with our team.',
    icon: MessageSquare,
  },
  {
    title: 'Specialist Input',
    description: 'Bring in the right expertise across strategy, technology, marketing, design, and AI.',
    icon: Lightbulb,
  },
  {
    title: 'Practical Direction',
    description: 'Leave with clearer priorities, decisions, and next steps.',
    icon: Route,
  },
  {
    title: 'Collaborative Thinking',
    description: 'A working conversation built around your project, not a generic consultation.',
    icon: Users,
  },
]

type WhyThinkTankProps = Partial<CmsTechnologiesSection>

const WhyThinkTank = ({
  eyebrow = 'Why Join a Think Tank Session',
  title = 'A session designed to',
  accentTitle = 'create clarity',
  items,
}: WhyThinkTankProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle }, { eyebrow, title, accentTitle })
  const mergedItems = mergeFeatureItems(
    DEFAULT_WHYTHINKTANKITEMS.map(({ title: itemTitle, description, icon }) => ({
      title: itemTitle,
      description,
      icon,
    })),
    items,
  ).map((item, index) => ({
    ...DEFAULT_WHYTHINKTANKITEMS[index],
    title: item.title,
    description: item.description ?? DEFAULT_WHYTHINKTANKITEMS[index].description,
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

export default WhyThinkTank
