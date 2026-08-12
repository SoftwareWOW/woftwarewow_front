import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const foundations = [
  {
    title: 'Your Business',
    description: 'Websites • Applications • Customer Experiences',
  },
  {
    title: 'Hosting & Cloud',
    description: 'The infrastructure keeping everything available.',
  },
  {
    title: 'Performance & Delivery',
    description: 'Fast, reliable access to your digital services.',
  },
  {
    title: 'Security & Backups',
    description: 'Protection and recovery behind the scenes.',
  },
]

/** Layout: BrandCapabilities / WhyChooseUs — centered header + list + image + CTA. */
const DigitalFoundations = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Digital Foundations</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">Everything behind your online presence.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              The things customers don&apos;t see are often the things keeping everything running.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {foundations.map((item) => (
              <RevealWrapper key={item.title} className="reveal-me py-3.5 pr-[30px] lg:py-[30px]">
                <h5 className="uppercase tracking-wide">{item.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/wow/nav/cards/Intelligent.png"
              alt="Digital infrastructure supporting your online presence"
              className="h-full min-h-[320px] w-full object-cover md:min-h-[480px]"
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

export default DigitalFoundations
