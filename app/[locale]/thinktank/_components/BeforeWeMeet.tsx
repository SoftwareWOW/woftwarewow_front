import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Lightbulb, Route, Target } from 'lucide-react'
import { meetSectionClass, meetSectionInnerClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'

const beforeWeMeetItems = [
  {
    title: 'A Challenge',
    description: 'Something you want to solve.',
    icon: Target,
  },
  {
    title: 'A Decision',
    description: 'Something you need clarity on.',
    icon: Route,
  },
  {
    title: 'An Opportunity',
    description: 'Something you want to explore.',
    icon: Lightbulb,
  },
]

const BeforeWeMeet = () => (
  <section className={meetSectionClass}>
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-10 text-center md:mb-14">
        <SectionLabel className="mb-5">Before We Meet</SectionLabel>
        <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
          Come with one thing to <span className="font-instrument italic">move forward</span>
        </h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {beforeWeMeetItems.map((item) => {
          const Icon = item.icon

          return (
            <RevealWrapper key={item.title}>
              <article className="rounded-radius-md border border-black/10 bg-backgroundBody px-6 py-5 transition-colors duration-300 dark:border-white/10 dark:bg-background">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-radius-sm bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="text-lg font-medium text-secondary dark:text-[#F2F2F2]">{item.title}</h3>
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

export default BeforeWeMeet
