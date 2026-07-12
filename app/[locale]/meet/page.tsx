import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/app/[locale]/about/_components/PageHero'
import {
  Calendar,
  Clock,
  Gift,
  Globe,
  MessageSquare,
  Monitor,
  Route,
  Sparkles,
  Video,
} from 'lucide-react'
import type { Metadata } from 'next'
import CalendlyEmbed from './_components/CalendlyEmbed'
import MeetFaq from './_components/MeetFaq'

export const metadata: Metadata = {
  title: 'Schedule a Meeting',
  description:
    'Book a free consultation with WOW Superagency to discuss your project, business goals, and discover how we can help you build the right digital solution.',
}

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

const meetingDetails = [
  { label: 'Duration', value: '30 Minutes', icon: Clock },
  { label: 'Meeting Type', value: 'Online', icon: Monitor },
  { label: 'Platform', value: 'Google Meet', icon: Video },
  { label: 'Cost', value: 'Free', icon: Calendar },
]

type MeetPageProps = {
  params: Promise<{ locale: string }>
}

const MeetPage = async ({ params }: MeetPageProps) => {
  await params
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Consultation"
        title="Schedule a"
        italicTitle="Meeting"
        description="Book a free consultation with our team to discuss your project, business goals, and discover how we can help you build the right digital solution."
        spacing="relative overflow-hidden py-28 md:py-36 lg:py-[160px]"
      />

      <section className="relative overflow-hidden px-3 pb-16 md:px-4 md:pb-24">
        <div className="relative z-10 mx-auto max-w-[1320px]">
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

      <section className="relative overflow-hidden px-3 pb-16 md:px-4 md:pb-24">
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <RevealWrapper className="mb-10 text-center md:mb-14">
            <SectionLabel className="mb-5">Meeting Information</SectionLabel>
            <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              What to <span className="font-instrument italic">expect</span>
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {meetingDetails.map((item) => {
              const Icon = item.icon

              return (
                <RevealWrapper key={item.label}>
                  <div className="rounded-radius-md border border-black/10 bg-white/50 px-6 py-5 backdrop-blur-sm dark:border-white/10 dark:bg-dark/50">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-radius-sm bg-primary/10 text-primary">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#808080]">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-lg font-medium text-secondary dark:text-[#F2F2F2]">
                      {item.value}
                    </p>
                  </div>
                </RevealWrapper>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="schedule"
        className="relative overflow-hidden px-3 pb-20 md:px-4 md:pb-28"
        aria-labelledby="calendly-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <RevealWrapper className="mb-8 text-center md:mb-12">
            <SectionLabel className="mb-5">Book Your Time</SectionLabel>
            <h2
              id="calendly-heading"
              className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]"
            >
              Choose a time that <span className="font-instrument italic">works for you</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
              Select an available slot below and we will send you a confirmation with your meeting
              details.
            </p>
          </RevealWrapper>

          <RevealWrapper>
            {calendlyUrl ? (
              <CalendlyEmbed url={calendlyUrl} />
            ) : (
              <div
                role="status"
                className="rounded-radius-md border border-dashed border-black/20 bg-backgroundBody px-6 py-16 text-center dark:border-white/20 dark:bg-dark-200"
              >
                <Globe className="mx-auto mb-4 size-8 text-primary" aria-hidden />
                <h3 className="mb-3 text-xl font-medium text-secondary dark:text-[#F2F2F2]">
                  Scheduling is temporarily unavailable
                </h3>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-[#808080]">
                  Our booking calendar is not configured yet. Please contact us directly and our team
                  will help you schedule a meeting.
                </p>
                <div className="mt-8">
                  <ButtonComponentList>
                    <ButtonComponent href="/contact" variant="primary">
                      Contact Us
                    </ButtonComponent>
                  </ButtonComponentList>
                </div>
              </div>
            )}
          </RevealWrapper>
        </div>
      </section>

      <MeetFaq />

      <section className="relative overflow-hidden bg-background px-3 pb-24 pt-8 transition-colors duration-300 dark:bg-background md:px-4 md:pb-32">
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="rounded-radius-md border border-[#e5e5e5] bg-white/50 px-6 py-12 backdrop-blur-sm transition-all duration-300 dark:border-white/5 dark:bg-dark/50 md:px-10 md:py-16 lg:px-14 lg:py-20">
            <RevealWrapper className="mx-auto max-w-[900px] text-center">
              <SectionLabel className="mb-5">Get Started</SectionLabel>
              <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                Ready to Start Your <span className="font-instrument italic">Project?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
                Schedule a meeting with our team and let&apos;s discuss how we can turn your ideas
                into reality.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <ButtonComponentList>
                  <ButtonComponent href="/meet#schedule" variant="primary" ariaLabel="Schedule a Meeting">
                    Schedule a Meeting
                  </ButtonComponent>
                </ButtonComponentList>
                <ButtonComponentList>
                  <ButtonComponent href="/contact" variant="secondary" ariaLabel="Contact us">
                    Contact Us
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </LayoutOne>
  )
}

export default MeetPage
