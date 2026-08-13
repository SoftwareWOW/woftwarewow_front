import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Attract',
    description: 'Get discovered by the right audience.',
  },
  {
    number: '02',
    title: 'Engage',
    description: 'Give them a reason to explore and trust the business.',
  },
  {
    number: '03',
    title: 'Convert',
    description: 'Turn attention into enquiries, leads or purchases.',
  },
  {
    number: '04',
    title: 'Nurture',
    description: 'Keep promising opportunities moving.',
  },
  {
    number: '05',
    title: 'Close',
    description: 'Turn qualified opportunities into customers.',
  },
  {
    number: '06',
    title: 'Improve',
    description: 'Use what you learn to strengthen the next cycle.',
  },
]

/** Home-07 — ProcessV4: image + numbered vertical process list. */
const ConnectedGrowth = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>Connected Growth</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">From first click to closed customer.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-2xl text-[#808080]">
              Growth works better when marketing, conversion and sales aren&apos;t treated as separate activities.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          <figure className="overflow-hidden rounded-radius-sm md:w-1/2">
            <img
              src="/images/process-img-01.png"
              alt="Connected growth from first click to closed customer"
              className="h-full w-full rounded-radius-sm object-cover"
            />
          </figure>

          <div className="md:w-1/2">
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-16">
              {steps.map((step) => (
                <li key={step.number} className="max-w-max px-10">
                  <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                    <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:text-transparent">
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3 className="uppercase">{step.title}</h3>
                    <p className="mt-5 max-w-[483px] text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ConnectedGrowth
