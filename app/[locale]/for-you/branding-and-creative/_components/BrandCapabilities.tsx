import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const capabilities = [
  {
    number: '01',
    title: 'Brand Strategy',
    description:
      'Define positioning, personality, audience, differentiation and the ideas your brand should stand for.',
  },
  {
    number: '02',
    title: 'Visual Identity',
    description: 'Create logos, typography, colors and the visual language that makes the brand recognizable.',
  },
  {
    number: '03',
    title: 'Messaging & Voice',
    description: 'Shape how your brand communicates, from core messages to tone of voice.',
  },
  {
    number: '04',
    title: 'Brand Guidelines',
    description: 'Turn the identity into a practical system for keeping everything consistent.',
  },
  {
    number: '05',
    title: 'Creative & Campaign Design',
    description: 'Create advertising, social, digital and campaign assets that bring the brand to life.',
  },
]

/** Layout: Home-12 WhyChooseUs — centered header + list + image + dual CTAs. */
const BrandCapabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Brand Capabilities</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">From strategy to every expression of your brand.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              Build the foundations first, then turn them into a visual and creative system your business can actually
              use.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {capabilities.map((item) => (
              <RevealWrapper key={item.number} className="reveal-me py-3.5 pr-[30px] lg:py-[30px]">
                <h5>
                  <span className="mr-2 text-[#808080]">{item.number}</span>
                  {item.title}
                </h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/home-5/why-rivor.png"
              alt="Brand strategy and creative identity"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>

        <RevealWrapper className="mt-10 flex justify-center gap-3 max-md:flex-col max-md:items-center md:mt-14 md:gap-4">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="/contact" variant="primary">
              Get Started
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BrandCapabilities
