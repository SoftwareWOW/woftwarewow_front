import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Calendar, Clock, Monitor, Video } from 'lucide-react'
import { meetSectionClass, meetSectionInnerClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'

const sessionDetails = [
  { label: 'Duration', value: '30 Minutes', icon: Clock },
  { label: 'Meeting Type', value: 'Online', icon: Monitor },
  { label: 'Platform', value: 'Google Meet', icon: Video },
  { label: 'Cost', value: 'Included', icon: Calendar },
]

const ThinkTankSessionInfo = () => (
  <section className={meetSectionClass}>
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-10 text-center md:mb-14">
        <SectionLabel className="mb-5">Session Information</SectionLabel>
        <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
          What to <span className="font-instrument italic">expect</span>
        </h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sessionDetails.map((item) => {
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

export default ThinkTankSessionInfo
