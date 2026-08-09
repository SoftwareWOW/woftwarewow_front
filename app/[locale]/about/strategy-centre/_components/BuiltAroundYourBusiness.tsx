import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'

const points = [
  {
    title: 'Business goals',
    description: 'Built around the outcomes that matter most.',
  },
  {
    title: 'Industry context',
    description: 'Shaped by your industry and competitive landscape.',
  },
  {
    title: 'Market & customer',
    description: 'Focused on your audience and market opportunities.',
  },
  {
    title: 'Growth stage',
    description: 'Matched to where your business is today.',
  },
  {
    title: 'Budget & resources',
    description: 'Prioritized for practical, measurable returns.',
  },
]

const BuiltAroundYourBusiness = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">
              Strategies built around <i className="font-instrument">your business</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">
              Tailored by goals, industry, market, customer, maturity, and budget
            </p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b">
            {points.map((point) => (
              <RevealWrapper key={point.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{point.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="md:w-1/2">
            <img src="/images/home-5/why-rivor.png" alt="Strategies built around your business" className="h-full w-full" />
          </RevealWrapper>
        </div>
        <RevealWrapper as="ul" className="mt-14 flex justify-center">
          <li>
            <Link href="/meet" className="rv-button rv-button-sm rv-button-primary">
              <div className="rv-button-top">
                <span>Book a Strategy Session</span>
              </div>
              <div className="rv-button-bottom">
                <span>Book a Strategy Session</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuiltAroundYourBusiness
