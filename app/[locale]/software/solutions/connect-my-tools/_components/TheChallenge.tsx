import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const challenges = [
  {
    title: 'Data Silos',
    description: 'Information scattered across platforms.',
    image: '/images/wow/LandingPageNaveBare/data-servers-close-up-2026-01-08-06-54-55-utc%202.svg',
  },
  {
    title: 'Manual Transfers',
    description: 'Moving data between tools takes time.',
    image: '/images/wow/LandingPageNaveBare/notes-with-words-and-female-hand-on-light-backgrou-2026-03-24-21-39-26-utc%201.svg',
  },
  {
    title: 'Duplicate Work',
    description: 'Teams repeat tasks across systems.',
    image: '/images/wow/LandingPageNaveBare/hands-in-unity-teamwork-with-a-robotic-limb-2026-01-08-00-16-05-utc%201.svg',
  },
  {
    title: 'Limited Visibility',
    description: 'No clear view across your operations.',
    image: '/images/wow/LandingPageNaveBare/Intelligence%202.svg',
  },
]

/** Layout: homepage-06/ServicesV9 */
const TheChallenge = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>The Challenge</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Too many tools. <InstrumentText>Not enough connection.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end lg:w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] md:ml-auto md:text-right">
                Disconnected systems create extra work and make important information harder to manage.
              </p>
            </TextAppearAnimation>
          </div>
        </div>
      </div>
      <RevealWrapper className="reveal-me mx-auto w-full max-w-[1170px] overflow-hidden rounded-radius-md">
        {challenges.map((item, index) => (
          <div
            key={item.title}
            className={`group relative overflow-hidden border-x border-t bg-backgroundBody dark:border-dark dark:bg-dark ${
              index === challenges.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="relative z-10 flex items-center justify-between px-5 py-10 md:px-10 md:py-[60px]">
              <h3 className="relative z-10 flex flex-col gap-x-32 gap-y-3 text-[25px] font-light leading-[1.2] md:flex-row md:items-center lg:text-3xl">
                <span>{item.title}</span>
                <span className="mt-2 max-w-lg pr-[2px] text-base font-normal text-[#808080] md:text-xl md:leading-[1.4] md:tracking-[0.4px] lg:text-xl">
                  {item.description}
                </span>
              </h3>
              <div className="shrink-0 transform transition-transform duration-500 ease-in-out group-hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <path
                    d="M5 16H27"
                    className="stroke-black dark:stroke-white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 7L27 16L18 25"
                    className="stroke-black dark:stroke-white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="overflow-hidden">
              <figure className="h-0 -translate-y-4 transform opacity-0 transition-all duration-700 ease-in-out group-hover:h-[110px] group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:h-[160px] lg:group-hover:h-[230px]">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover px-5 pb-5 pt-4 transition-all duration-700 ease-in-out md:px-10 md:pb-10"
                />
              </figure>
            </div>
          </div>
        ))}
      </RevealWrapper>
    </section>
  )
}

export default TheChallenge
