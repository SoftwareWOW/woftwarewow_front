import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Reach the Right People',
    description: 'Search, content, social, advertising, and targeted campaigns.',
  },
  {
    number: '02',
    title: 'Create Confidence',
    description: 'Strong positioning, professional branding, useful content, and better digital experiences.',
  },
  {
    number: '03',
    title: 'Create the Opportunity',
    description: 'Landing pages, inquiries, consultations, forms, and lead-generation journeys.',
  },
  {
    number: '04',
    title: 'Stay Connected',
    description: 'CRM, email, automation, remarketing, and intelligent follow-up.',
  },
  {
    number: '05',
    title: 'Move Toward the Deal',
    description: 'Better sales processes, communication, and conversion systems.',
  },
]

/** Layout: Home-07 ProcessV4 — image height matches steps. */
const ClientJourney = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>THE GROWTH JOURNEY</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Turn Interest Into Opportunity.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
              High-value decisions rarely happen in one interaction. We help create a connected journey that builds
              confidence and keeps opportunities moving forward.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative min-h-[320px] w-full overflow-hidden rounded-radius-md md:min-h-[480px] md:w-[min(100%,420px)] md:shrink-0 lg:min-h-[560px]">
            <img
              src="/images/wow/nav/cards/pexels-cottonbro-4069290%201.png"
              alt="Finance and real estate client journey"
              className="h-full min-h-[320px] w-full rounded-radius-md object-cover md:min-h-[480px] lg:min-h-[560px]"
            />
          </figure>

          <div className="min-w-0 flex-1">
            <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
              {steps.map((step, index) => (
                <li key={step.number} className="relative max-w-max px-10">
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
                    <h3>{step.title}</h3>
                    <p className="mt-3 max-w-[483px] text-[#808080]">{step.description}</p>
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

export default ClientJourney
