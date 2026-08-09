import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
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

/** Layout: Home-16 ServicesV14 — hover arrow cards (not Strategy Centre OurExpertise). */
const PartnerCategories = () => {
  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Categories</SectionLabel>
        </RevealWrapper>
        <HeadingWithInstrument
          className="mb-3 text-center"
          before="Technology & platform"
          accent="partners"
        />
        <TextAppearAnimation>
          <p className="text-appear mx-auto lg:max-w-[770px]">
            Broad categories that span WOW divisions — from AI and cloud to marketing and creative.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px]">
        {partnerTypes.map((item) => (
          <RevealWrapper
            key={item.title}
            className="reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <h5 className="mb-2 lg:mb-3">{item.title}</h5>
            <p className="mb-16 lg:mb-20">{item.description}</p>
            <div className="flex items-center justify-center overflow-hidden border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
              <span className="translate-x-4 transition-transform duration-[400ms] group-hover:translate-x-20">
                <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                  <path
                    d="M5.11377 16H27.1138"
                    className="stroke-secondary dark:stroke-backgroundBody"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.1138 7L27.1138 16L18.1138 25"
                    className="stroke-secondary dark:stroke-backgroundBody"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="-translate-x-24 transition-transform duration-[400ms] group-hover:-translate-x-[18px]">
                <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                  <path
                    d="M5.11377 16H27.1138"
                    className="stroke-backgroundBody dark:stroke-secondary"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.1138 7L27.1138 16L18.1138 25"
                    className="stroke-backgroundBody dark:stroke-secondary"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper className="mx-auto mt-7 flex justify-center max-md:w-full max-md:px-4 md:mt-14">
        <ButtonComponentList>
          <ButtonComponent href="/contact" variant="secondary">
            Explore Partnerships
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default PartnerCategories
