import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const capabilities = [
  {
    number: '01',
    title: 'iOS & Android',
    description: 'Native and cross-platform mobile experiences.',
  },
  {
    number: '02',
    title: 'APIs & Integrations',
    description: 'Connect apps with platforms and business systems.',
  },
  {
    number: '03',
    title: 'Authentication',
    description: 'Secure account and user-access experiences.',
  },
  {
    number: '04',
    title: 'Notifications',
    description: 'Keep users informed and engaged.',
  },
  {
    number: '05',
    title: 'Payments & Commerce',
    description: 'Enable transactions and mobile commerce where required.',
  },
  {
    number: '06',
    title: 'Cloud & Backend',
    description: 'Infrastructure that powers the experience behind the app.',
  },
]

/** Layout: for-you/branding-and-creative/BrandCapabilities (Home-12 WhyChooseUs) */
const Capabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Capabilities</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Everything your app needs to <InstrumentText>perform.</InstrumentText>
            </h2>
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
              src="/images/wow/nav/cards/Softwaerwow.png"
              alt="Mobile app capabilities"
              className="h-full min-h-[320px] w-full object-cover md:min-h-[480px]"
            />
          </RevealWrapper>
        </div>

        <RevealWrapper className="mt-10 flex justify-center gap-3 max-md:flex-col max-md:items-center md:mt-14 md:gap-4">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="/contact" variant="primary">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Capabilities
