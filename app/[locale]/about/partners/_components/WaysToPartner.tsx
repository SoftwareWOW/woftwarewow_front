import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'

const ways = [
  {
    id: 1,
    title: 'Technology',
    description: 'Platforms and product teams that integrate with WOW delivery across software, AI, and cloud.',
  },
  {
    id: 2,
    title: 'Agency & Service',
    description: 'Specialist agencies that extend creative, marketing, or technical capacity on shared engagements.',
  },
  {
    id: 3,
    title: 'Referral',
    description: 'Trusted introducers who connect growing businesses with the right WOW division.',
  },
  {
    id: 4,
    title: 'Strategic',
    description: 'Long-term collaborators aligned on joint offerings, co-marketing, and shared growth plans.',
  },
]

/** Layout: Home-15 ElevateBrand — large numbered hover rows. */
const WaysToPartner = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-16 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>Partner Paths</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                Ways to partner with <WowText>WOW</WowText> 
              </h2>
            </RevealWrapper>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                Four clear paths — choose the model that fits how you work.
              </p>
            </RevealWrapper>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList
                className="flex justify-end max-md:justify-center"
                itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto"
              >
                <ButtonComponent href="/contact" variant="secondary">
                  Become a Partner
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:dark:border-dark">
          {ways.map((item) => (
            <div
              key={item.id}
              className="group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-[1.01] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <InstrumentText
                variant="solid"
                className="w-8 text-xl leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody"
              >
                0 {item.id}
              </InstrumentText>
              <h3 className="mt-2 text-2xl font-normal leading-tight tracking-[-2px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-[40px] md:w-[520px] md:text-[48px] lg:text-[64px] xl:text-[72px] xl:leading-[1.15] xl:tracking-[-2.88px]">
                {item.title}
              </h3>
              <p className="ml-2.5 self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WaysToPartner
