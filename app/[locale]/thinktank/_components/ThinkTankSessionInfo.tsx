import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'
import { Calendar, Clock, Monitor, Video } from 'lucide-react'
import { meetSectionClass, meetSectionInnerClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'

const DEFAULT_SESSIONDETAILS = [
  { label: 'Duration', value: '30 Minutes', icon: Clock },
  { label: 'Meeting Type', value: 'Online', icon: Monitor },
  { label: 'Platform', value: 'Google Meet', icon: Video },
  { label: 'Cost', value: 'Included', icon: Calendar },
]

type ThinkTankSessionInfoProps = Partial<CmsTechnologiesSection>

const ThinkTankSessionInfo = ({
  eyebrow = 'Session Information',
  title = 'What to',
  accentTitle = 'expect',
  items,
}: ThinkTankSessionInfoProps = {}) => {
  const header = mergeSectionHeader({ eyebrow, title, accentTitle }, { eyebrow, title, accentTitle })
  const mergedItems = mergeFeatureItems(
    DEFAULT_SESSIONDETAILS.map(({ label, value, icon }) => ({
      title: label,
      description: value,
      icon,
    })),
    items,
  ).map((item, index) => ({
    ...DEFAULT_SESSIONDETAILS[index],
    label: item.title,
    value: item.description ?? DEFAULT_SESSIONDETAILS[index].value,
  }))

  return (
  <section className={meetSectionClass}>
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-10 text-center md:mb-14">
        <SectionLabel className="mb-5">{header.eyebrow}</SectionLabel>
        <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
          {header.title} <span className="font-instrument italic">{header.accentTitle}</span>
        </h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mergedItems.map((item) => {
          const Icon = item.icon

          return (
            <RevealWrapper key={item.label}>
              <div className="rounded-radius-md border border-black/10 bg-backgroundBody px-6 py-5 transition-colors duration-300 dark:border-white/10 dark:bg-background">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-radius-sm bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#808080]">{item.label}</p>
                </div>
                <p className="text-lg font-medium text-secondary dark:text-[#F2F2F2]">{item.value}</p>
              </div>
            </RevealWrapper>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default ThinkTankSessionInfo
