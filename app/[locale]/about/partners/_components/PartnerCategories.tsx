import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const partnerTypes = [
  {
    title: 'Technology & AI',
    description: 'Platforms and technologies powering smarter solutions.',
  },
  {
    title: 'Marketing & Growth',
    description: 'Partners helping businesses reach, convert, and grow.',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Reliable platforms supporting secure digital operations.',
  },
  {
    title: 'Creative & Digital',
    description: 'Specialists extending our creative and digital capabilities.',
  },
]

/** Layout: Home-13 WhyChooseUsV2 — stacked list + image (distinct from WhyWePartner cards). */
const PartnerCategories = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-16 md:flex-row lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Categories</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                Technology & platform <InstrumentText>partners</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>

          <div className="w-full md:max-w-80 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] md:place-self-end md:text-right">
                Broad categories that span WOW divisions — from AI and cloud to marketing and creative.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList
                className="flex justify-end max-md:justify-center"
                itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto"
              >
                <ButtonComponent href="/contact" variant="secondary">
                  Explore Partnerships
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*]:border-b dark:[&>*]:border-dark">
            {partnerTypes.map((item) => (
              <RevealWrapper key={item.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{item.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{item.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img
              src="/images/wow/Hero/devision/Accelerate.jpg"
              alt="Technology and platform partners"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default PartnerCategories
