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
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-12 items-stretch gap-y-16 lg:gap-x-16">
          <RevealWrapper as="figure" className="reveal-me col-span-12 overflow-hidden rounded-radius-md lg:col-span-6">
            <img
              src="/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg"
              alt="Connected business dashboard showing operations, customers, workflows, and insights"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-12 space-y-7 lg:col-span-6">
            <div className="space-y-2">
              <SectionLabel>The Solution</SectionLabel>
              <TextAppearAnimation>
                <h2 className="text-appear lg:leading-[1.1]">
                  One connected way to <InstrumentText>run your business.</InstrumentText>
                </h2>
              </TextAppearAnimation>
              <TextAppearAnimation>
                <p className="text-appear text-base font-normal text-black/70 dark:text-backgroundBody/70 md:text-lg md:leading-[28.8px] md:tracking-[0.36px]">
                  Imagine your teams, information, and processes working together instead of operating in separate
                  systems. We help you create a more connected business environment through software tailored to your
                  operations.
                </p>
              </TextAppearAnimation>
            </div>
            <div>
              <TextAppearAnimation>
                <p className="text-appear mb-3 text-3xl font-normal text-black dark:text-white md:text-4xl md:leading-10 md:tracking-[-1.08px]">
                  Everything works better together
                </p>
              </TextAppearAnimation>
              <RevealWrapper as="ul" className="reveal-me list-inside list-disc space-y-0.5">
                {capabilities.map((item) => (
                  <li
                    key={item.title}
                    className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70"
                  >
                    <span className="text-black dark:text-white">{item.title}</span> — {item.description}
                  </li>
                ))}
              </RevealWrapper>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ConnectedBusinessSolution
