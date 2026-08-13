import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const phases = [
  {
    id: '01',
    title: 'Now',
    heading: "Fix what's holding you back",
    subtext: 'High-impact problems creating friction today.',
    bullets: 'Automation • Integrations • Critical system upgrades',
  },
  {
    id: '02',
    title: 'Next',
    heading: 'Connect & Improve',
    subtext: 'Improvements that make the business work better together.',
    bullets: 'CRM • Workflows • Reporting • Digital experience',
  },
  {
    id: '03',
    title: 'Later',
    heading: 'Prepare to Scale',
    subtext: 'Longer-term capabilities for where the business is going.',
    bullets: 'Custom software • AI • Infrastructure • New systems',
  },
]

/** Layout: SpecialistTeams / Home-15 ElevateBrand — split header + large numbered hover rows. */
const TransformationPriorities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Prioritize the Right Changes</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2>You don&apos;t need to change everything at once.</h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                We identify which improvements will make the biggest difference, then build a transformation roadmap
                around your priorities, resources and business needs.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:dark:border-dark">
          {phases.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform flex-col items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:flex-row md:pb-10 md:pt-10"
            >
              <div className="flex items-start gap-5">
                <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                  {item.id}.
                </span>
                <h3 className="mt-2 text-nowrap text-2xl font-normal uppercase leading-tight tracking-[-2px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-[55px] md:w-[430px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]">
                  {item.title}
                </h3>
              </div>
              <div className="ml-2.5 self-center text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px]">
                <p className="text-sm font-medium uppercase tracking-wide md:text-base">{item.heading}</p>
                <p className="mt-2 text-xs md:text-base md:leading-[1.6] md:tracking-[0.32px]">{item.subtext}</p>
                <p className="mt-2 text-xs text-secondary/50 dark:text-backgroundBody/50 md:text-sm">{item.bullets}</p>
              </div>
            </div>
          ))}
        </div>

        <RevealWrapper className="mt-10 max-md:w-full md:mt-14">
          <ButtonComponentList className="flex max-md:justify-center">
            <ButtonComponent href="/contact" variant="primary">
              Find My Transformation Priorities
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TransformationPriorities
