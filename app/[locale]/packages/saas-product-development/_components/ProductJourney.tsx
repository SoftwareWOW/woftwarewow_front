import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Define the problem, users, goals and product requirements.',
  },
  {
    number: '02',
    title: 'Scope',
    description: 'Prioritize functionality and define the first release.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create user journeys, UX, interface and prototype.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop, integrate and test the product.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy the product and prepare it for real users.',
  },
]

/** Layout: Home-07 ProcessV4 — image height matches steps; centered CTA. */
const ProductJourney = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>The Product Journey</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Clear steps from concept to launch.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
              Growth works better when the product is built in clear stages — from discovery through launch.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative w-full overflow-hidden rounded-radius-md md:w-[min(100%,420px)] md:shrink-0">
            <img
              src="/images/wow/nav/cards/Softwaerwow.png"
              alt="Product journey from concept to launch"
              className="h-full min-h-[280px] w-full rounded-radius-md object-cover md:absolute md:inset-0 md:min-h-0"
            />
          </figure>

          <div className="min-w-0 flex-1">
            <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
              {steps.map((step, index) => (
                <li key={step.number} className="relative max-w-max px-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span
                      className={`inline-block bg-gradient-to-r bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent ${
                        index === 0 ? 'from-backgroundBody to-gray-400' : 'from-white to-gray-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-3 max-w-[483px] text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>

        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="white">
              Discuss My Product Idea
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProductJourney
