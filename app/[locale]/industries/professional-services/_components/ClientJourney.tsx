import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Get Found',
    description: 'Search, content, campaigns, social, and stronger market visibility.',
  },
  {
    number: '02',
    title: 'Build Authority',
    description: 'A strong brand, website, positioning, proof, and professional digital experience.',
  },
  {
    number: '03',
    title: 'Create Opportunity',
    description: 'Clear offers, conversion paths, lead capture, booking, and sales funnels.',
  },
  {
    number: '04',
    title: 'Strengthen Relationships',
    description: 'CRM, automation, follow-up, retention, and ongoing marketing.',
  },
]

/** Layout: Home-07 ProcessV4 — image height matches steps. */
const ClientJourney = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>The Client Journey</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              Turn Expertise Into a Client Growth <InstrumentText>Engine.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
              Great expertise alone does not guarantee growth. We help build the journey that takes someone from
              discovering your business to becoming a confident, qualified client.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative min-h-[320px] w-full overflow-hidden rounded-radius-md md:min-h-[480px] md:w-[min(100%,420px)] md:shrink-0 lg:min-h-[560px]">
            <Image
              src="/images/wow/nav/cards/pexels-cottonbro-4069290 1.png"
              alt="Client journey from discovery to qualified client"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="rounded-radius-md object-cover"
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
