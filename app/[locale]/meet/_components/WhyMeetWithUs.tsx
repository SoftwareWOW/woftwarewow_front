import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Gift, MessageSquare, Route, Sparkles } from 'lucide-react'
import { meetSectionClass, meetSectionInnerClass } from './meetSectionSpacing'

const whyMeetItems = [
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

const WhyMeetWithUs = () => (
  <section className={meetSectionClass}>
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-10 text-center md:mb-14">
        <SectionLabel className="mb-5">Why Meet With Us</SectionLabel>
        <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
          A conversation designed to{' '}
          <span className="font-instrument italic">move you forward</span>
        </h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {whyMeetItems.map((item) => {
          const Icon = item.icon

          return (
            <RevealWrapper key={item.title}>
              <article className="flex h-full flex-col rounded-radius-md border border-black/10 bg-backgroundBody p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(97,92,206,0.12)] dark:border-white/10 dark:bg-dark-200 dark:hover:shadow-[0_8px_32px_rgba(97,92,206,0.2)] md:p-7">
                <span className="mb-5 inline-flex size-11 items-center justify-center rounded-radius-sm border border-black/10 bg-background text-primary dark:border-white/10 dark:bg-[#0D0D0D]">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mb-3 text-xl font-medium text-secondary dark:text-[#F2F2F2]">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
              </article>
            </RevealWrapper>
          )
        })}
      </div>
    </div>
  </section>
)

export default WhyMeetWithUs
