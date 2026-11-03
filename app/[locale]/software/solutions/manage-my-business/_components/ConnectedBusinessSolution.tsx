import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const capabilities = [
  {
    title: 'Centralized Operations',
    description: 'Manage essential business activities through connected tools and interfaces.',
  },
  {
    title: 'Smarter Workflows',
    description: 'Reduce repetitive work with automated tasks, notifications, and approvals.',
  },
  {
    title: 'Customer Management',
    description: 'Keep customer information and interactions organized and accessible.',
  },
  {
    title: 'Real-Time Visibility',
    description: 'Give teams clearer views of tasks, activity, and business performance.',
  },
  {
    title: 'Connected Applications',
    description: 'Help your existing platforms exchange information more effectively.',
  },
]

/** Layout: homepage-24/WhatWeOffer */
const ConnectedBusinessSolution = () => {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Solution</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              One connected way to <InstrumentText>run your business.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-[#808080]">
              Imagine your teams, information, and processes working together instead of operating in separate
              systems. We help you create a more connected business environment through software tailored to your
              operations.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-12 items-stretch gap-y-16 lg:gap-x-16">
          <RevealWrapper as="figure" className="reveal-me col-span-12 overflow-hidden rounded-radius-md lg:col-span-6">
            <img
              src="/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg"
              alt="Connected business dashboard showing operations, customers, workflows, and insights"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-12 self-center lg:col-span-6">
            <h3 className="mb-3 text-[25px] font-light leading-[1.2] lg:text-3xl">Everything works better together</h3>
            <ul className="list-inside list-disc space-y-2">
              {capabilities.map((item) => (
                <li key={item.title} className="text-[#808080]">
                  <span className="text-[#0D0D0D] dark:text-[#F2F2F2]">{item.title}</span> — {item.description}
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ConnectedBusinessSolution
