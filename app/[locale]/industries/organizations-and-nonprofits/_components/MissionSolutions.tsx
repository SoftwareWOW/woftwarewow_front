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
    title: 'Brand & Storytelling',
    description:
      'Build a clear identity and message that makes your mission easier to understand, trust, and support.',
    items: ['Brand strategy', 'Visual identity', 'Campaign creative', 'Storytelling'],
  },
  {
    number: '02',
    title: 'Websites & Digital Experiences',
    description:
      'Create an accessible digital home for your programs, resources, campaigns, and communities.',
    items: ['Website design', 'Web development', 'Donation journeys', 'Registration & forms'],
  },
  {
    number: '03',
    title: 'Outreach & Community Growth',
    description: 'Reach new audiences and keep supporters connected to your work.',
    items: ['Social media', 'Content marketing', 'Email campaigns', 'Digital advertising'],
  },
  {
    number: '04',
    title: 'Technology & Automation',
    description: 'Simplify internal processes and create more connected systems behind your organization.',
    items: ['CRM systems', 'Workflow automation', 'AI assistants', 'Custom integrations'],
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
            <h2 className="text-appear lg:leading-[1.1]">Built to Move Your Mission Forward.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-4 text-[#808080]">
              Bring your brand, digital presence, outreach, and internal systems together around the people and
              communities you serve.
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
