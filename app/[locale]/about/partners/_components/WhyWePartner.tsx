import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const benefits = [
  {
    title: 'Better solutions',
    description: 'Combine WOW delivery with specialist platforms for stronger client outcomes.',
  },
  {
    title: 'Specialist expertise',
    description: 'Tap deep product and industry knowledge without building every capability in-house.',
  },
  {
    title: 'Faster delivery',
    description: 'Reuse proven integrations and playbooks so teams move from brief to launch sooner.',
  },
  {
    title: 'More value for clients',
    description: 'Give growing businesses coordinated technology, marketing, creative, and growth support.',
  },
]

/** Layout: Home-23 WhyChooseUsV7 — 2×2 bordered grid. */
const WhyWePartner = () => {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Why Partner</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="lg:leading-[1.1]">
              Why we <InstrumentText>partner</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-4">
            <p className="font-normal text-black/70 dark:text-backgroundBody/70">
              Partnerships that raise quality, speed, and client value across the WOW ecosystem.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me grid grid-cols-12 gap-[30px]">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6"
            >
              <h5 className="mb-2.5">{item.title}</h5>
              <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
                {item.description}
              </p>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper className="reveal-me mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Become a Partner
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhyWePartner
