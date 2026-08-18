import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const CheckIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody dark:stroke-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

const solutions = [
  {
    number: '01',
    title: 'Product Strategy & Development',
    description: 'Turn ideas into functional, scalable digital products built around real business goals.',
    items: ['Product strategy', 'MVP development', 'SaaS platforms', 'Web & mobile apps'],
  },
  {
    number: '02',
    title: 'Product Design & Experience',
    description: 'Create intuitive experiences that make your product easier to understand, adopt, and use.',
    items: ['UX/UI design', 'Product design', 'Design systems', 'User journeys'],
  },
  {
    number: '03',
    title: 'Go-to-Market & Growth',
    description: 'Build visibility, generate demand, and create stronger paths from audience to customer.',
    items: ['Positioning', 'SEO & content', 'Paid campaigns', 'Growth marketing'],
  },
  {
    number: '04',
    title: 'Automation & Scale',
    description: 'Connect the technology and systems supporting customers, teams, and operations as the business grows.',
    items: ['AI automation', 'CRM systems', 'API integrations', 'Cloud & infrastructure'],
  },
]

/** Layout: Home-23 WhyChooseUsV7 — 2×2 numbered cards with checklists. */
const MissionSolutions = () => {
  return (
    <section id="solutions">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>INDUSTRY SOLUTIONS</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear lg:leading-[1.1]">Everything Behind a Stronger Digital Product.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-4 text-[#808080]">
              Bring product development, brand, acquisition, and business systems together with one connected team.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me grid grid-cols-12 gap-[30px]">
          {solutions.map((item) => (
            <div
              key={item.number}
              className="col-span-12 flex-1 rounded-radius-sm border border-[#e5e5e5] px-[30px] py-10 dark:border-white/10 lg:col-span-6"
            >
              <span className="font-instrument text-5xl italic leading-none text-secondary dark:text-backgroundBody">
                {item.number}
              </span>
              <h5 className="mb-2.5 mt-5">{item.title}</h5>
              <p className="text-base font-normal leading-[25.6px] text-[#808080]">{item.description}</p>
              <ul className="mt-5 space-y-3">
                {item.items.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-base leading-[25.6px] text-[#808080]">
                    <CheckIcon />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper className="mt-7 flex justify-center md:mt-14">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="/contact" variant="primary">
              Explore All Services
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default MissionSolutions
