import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const points = [
  {
    title: 'Build Credibility',
    description: 'Create a brand and digital presence that reflects the quality of your expertise.',
  },
  {
    title: 'Generate Better Leads',
    description: 'Reach the right audience and create clearer paths from interest to inquiry.',
  },
  {
    title: 'Strengthen Your Positioning',
    description: 'Differentiate your firm in markets where competitors often look and sound the same.',
  },
  {
    title: 'Improve Client Experience',
    description: 'Make communication, onboarding, booking, and service delivery more seamless.',
  },
  {
    title: 'Grow Consistently',
    description: 'Create marketing, sales, and digital systems that support sustainable growth.',
  },
]

/** Layout: Home-12 WhyChooseUs — left list + right image. */
const WhatMattersMost = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>What Matters Most</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">Your Expertise Deserves a Stronger Business Around It.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-[#808080]">
              We help professional service firms strengthen the way they are discovered, trusted, chosen, and
              experienced.
            </p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b">
            {points.map((point) => (
              <RevealWrapper key={point.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/home-5/why-rivor.png"
              alt="Professional services growth"
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhatMattersMost
