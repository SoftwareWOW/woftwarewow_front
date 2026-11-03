import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Layers, Eye, GitBranch, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const challenges: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Disconnected Tools',
    description: "Your information lives across platforms that don't work well together.",
    icon: Layers,
  },
  {
    title: 'Manual Processes',
    description: 'Repetitive tasks and approvals take time away from important work.',
    icon: GitBranch,
  },
  {
    title: 'Limited Visibility',
    description: "It's difficult to see what's happening across teams and operations.",
    icon: Eye,
  },
  {
    title: 'Growing Complexity',
    description: 'Processes that worked before become harder to manage as you grow.',
    icon: TrendingUp,
  },
]

/** Layout: homepage-17/WhyChooseUsV6 — compact bordered icon cards. */
const TheChallenge = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>The Challenge</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Your business shouldn&apos;t feel this <InstrumentText>complicated.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">
              As businesses grow, everyday work can become scattered across spreadsheets, messages, applications, and
              manual processes. Important information gets harder to find, and teams spend more time managing tools than
              getting work done.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map(({ title, description, icon: Icon }) => (
            <RevealWrapper
              key={title}
              className="reveal-me border px-6 py-8 dark:border-dark md:px-[30px] md:py-10"
            >
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-radius-sm border dark:border-dark">
                <Icon aria-hidden className="size-5 text-secondary dark:text-backgroundBody" strokeWidth={1.5} />
              </span>
              <h6 className="mb-2 text-lg font-light">{title}</h6>
              <p className="text-base leading-relaxed text-[#808080]">{description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheChallenge
