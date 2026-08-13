import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const included = [
  {
    title: 'Brand Foundation',
    description: 'Brand identity, visual direction and core messaging.',
  },
  {
    title: 'Website & Digital Presence',
    description: 'A professional website and essential online setup.',
  },
  {
    title: 'Marketing Foundation',
    description: 'Initial strategy, SEO foundations and launch planning.',
  },
  {
    title: 'Social Setup',
    description: 'Core social channels and content direction.',
  },
  {
    title: 'Business Technology',
    description: 'Essential tools, integrations and automation where required.',
  },
  {
    title: 'Hosting & Infrastructure',
    description: 'Hosting, domain, business email, security and backups.',
  },
]

/** Home-12 — WhyChooseUs: centered header + list + image + CTA. */
const WhatsIncluded = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">What your launch can include.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              A coordinated set of essentials designed to take your business from concept to market.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {included.map((item) => (
              <RevealWrapper key={item.title} className="reveal-me py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{item.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img
              src="/images/wow/nav/cards/Startup%20laiunch%201.png"
              alt="Startup launch package essentials"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
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

export default WhatsIncluded
