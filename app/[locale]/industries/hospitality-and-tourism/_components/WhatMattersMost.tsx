import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const points = [
  {
    title: 'Get Discovered',
    description: 'Reach travelers where they search, explore, and make decisions.',
  },
  {
    title: 'Build Desire',
    description: 'Use stronger branding, content, and visuals to make the experience worth choosing.',
  },
  {
    title: 'Drive More Bookings',
    description: 'Create clearer journeys from interest to reservation.',
  },
  {
    title: 'Improve Guest Experience',
    description: 'Make important information, communication, and digital touchpoints easier.',
  },
  {
    title: 'Build Loyalty',
    description: 'Stay connected after the experience and encourage repeat visits.',
  },
]

/** Layout: Home-12 WhyChooseUs — left list + right image. */
const WhatMattersMost = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>BUILT AROUND THE GUEST</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">Make Every Step Worth Remembering.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-[#808080]">
              We help strengthen the moments that influence how guests discover, choose, experience, and remember your
              brand.
            </p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-[#e5e5e5] dark:[&>*:not(:last-child)]:border-white/10">
            {points.map((point) => (
              <RevealWrapper key={point.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper
            as="figure"
            className="relative min-h-[320px] overflow-hidden rounded-radius-md md:min-h-[480px] md:w-1/2 lg:min-h-[560px]"
          >
            <img
              src="/images/wow/nav/cards/pexels-akaaljotsingh-anandpuria-156395437-10703306%201.png"
              alt="Hospitality and tourism guest experience"
              className="h-full min-h-[320px] w-full rounded-radius-md object-cover md:min-h-[480px] lg:min-h-[560px]"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhatMattersMost
