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
    title: 'Brand & Digital Presence',
    description: 'Establish a professional identity that communicates credibility, expertise, and value.',
    items: ['Brand identity', 'Visual identity', 'Creative design', 'Digital presence'],
  },
  {
    number: '02',
    title: 'Websites & Digital Experiences',
    description:
      'Build modern digital experiences that make services, properties, expertise, and next steps easier to explore.',
    items: ['Website design', 'Web development', 'UX & conversion', 'Platform integrations'],
  },
  {
    number: '03',
    title: 'Marketing & Lead Generation',
    description: 'Increase visibility and generate more qualified opportunities across digital channels.',
    items: ['SEO', 'Paid campaigns', 'Content marketing', 'Social media'],
  },
  {
    number: '04',
    title: 'Sales, CRM & Automation',
    description: 'Create smarter systems for capturing, managing, nurturing, and converting opportunities.',
    items: ['CRM systems', 'Lead automation', 'Sales funnels', 'AI workflows'],
  },
]

/** Layout: Home-23 WhyChooseUsV7 — 2×2 numbered cards with checklists. */
const GuestSolutions = () => {
  return (
    <section id="solutions">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>INDUSTRY SOLUTIONS</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear lg:leading-[1.1]">Built for High-Trust Decisions.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-4 text-[#808080]">
              Connect your brand, digital presence, marketing, and sales systems around the way your clients actually
              make decisions.
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

export default GuestSolutions
