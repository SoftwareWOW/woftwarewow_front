import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

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

const satelliteLabels = ['Operations', 'Customers', 'Workflows', 'Insights'] as const

/** Layout: business-systems-automation/BusinessSystemsAutomationHero — connected dashboard ecosystem. */
const ConnectedBusinessSolution = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-10 flex flex-col items-start gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="md:max-w-[55%]">
            <RevealWrapper className="mb-3">
              <SectionLabel>The Solution</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                One connected way to <InstrumentText>run your business.</InstrumentText>
              </h2>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-3 max-w-2xl">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">
                Imagine your teams, information, and processes working together instead of operating in separate
                systems. We help you create a more connected business environment through software tailored to your
                operations.
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <RevealWrapper className="reveal-me relative mx-auto w-full max-w-[640px] shrink-0 lg:mx-0 lg:w-[48%]">
            <div className="relative aspect-[4/3] w-full">
              <figure className="relative h-full w-full overflow-hidden rounded-radius-md border dark:border-dark">
                <Image
                  src="/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg"
                  alt="Connected business platform dashboard"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </figure>
              {satelliteLabels.map((label, index) => (
                <div
                  key={label}
                  className="absolute rounded-radius-sm border bg-backgroundBody px-3 py-2 text-xs font-light shadow-md dark:border-dark dark:bg-dark"
                  style={{
                    top: index % 2 === 0 ? `${12 + index * 8}%` : 'auto',
                    bottom: index % 2 === 1 ? `${10 + index * 6}%` : 'auto',
                    left: index < 2 ? `${index * 4}%` : 'auto',
                    right: index >= 2 ? `${(index - 2) * 6}%` : 'auto',
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </RevealWrapper>

          <ul className="flex flex-1 flex-col gap-4 md:gap-5">
            {capabilities.map((item) => (
              <RevealWrapper
                key={item.title}
                as="li"
                className="reveal-me border px-5 py-5 dark:border-dark md:px-8 md:py-6"
              >
                <h6 className="mb-1.5 text-lg font-light">{item.title}</h6>
                <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
              </RevealWrapper>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ConnectedBusinessSolution
