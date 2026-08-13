import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import processImg from '@/public/images/process-img-01.png'
import Image from 'next/image'

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

/** Copied from Home-07 ProcessV4 — local copy, not imported from origin. */
const ConnectedGrowth = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Connected Growth</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">From first click to closed customer.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-2xl">
              Growth works better when marketing, conversion and sales aren&apos;t treated as separate activities.
            </p>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          <figure>
            <Image src={processImg} alt="Connected growth from first click to closed customer" className="rounded-radius-md" />
          </figure>

          <div>
            <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
              {steps.map((step, index) => (
                <li key={step.number} className="max-w-max px-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span
                      className={`inline-block bg-gradient-to-r bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent ${
                        index === 0 ? 'from-backgroundBody to-gray-400' : 'from-white to-gray-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3 className="">{step.title}</h3>
                    <p className="mt-5 max-w-[483px]">{step.description}</p>
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
