import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
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

/** Layout: Home-23 WhyChooseUsV7 — 2×2 bordered grid (not Strategy Centre ProcessV10). */
const WhyWePartner = () => {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Why Partner</SectionLabel>
          </RevealWrapper>
          <HeadingWithInstrument className="lg:leading-[1.1]" before="Why we" accent="partner" />
          <TextAppearAnimation>
            <p className="text-appear mt-4 font-normal text-black/70 dark:text-backgroundBody/70">
              Partnerships that raise quality, speed, and client value across the WOW ecosystem.
            </p>
          </TextAppearAnimation>
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
      </div>
    </section>
  )
}

export default WhyWePartner
