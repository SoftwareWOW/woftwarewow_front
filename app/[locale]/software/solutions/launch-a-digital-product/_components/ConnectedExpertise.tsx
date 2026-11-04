import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { WowNavLink } from '@/components/wow/nav/WowNavLink'
import { softwareWowServiceHref } from '@/data/softwareWowMegaNavRoutes'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const expertise = [
  {
    title: 'Product Design & Prototyping',
    description: 'Shape and validate your product experience.',
    href: softwareWowServiceHref('product-design-prototyping'),
  },
  {
    title: 'Custom Software Development',
    description: 'Build around your unique requirements.',
    href: softwareWowServiceHref('custom-software-development'),
  },
  {
    title: 'Web Applications',
    description: 'Develop connected browser-based products.',
    href: softwareWowServiceHref('web-applications'),
  },
  {
    title: 'Mobile App Development',
    description: 'Create intuitive mobile experiences.',
    href: softwareWowServiceHref('mobile-applications'),
  },
]

/** Layout: homepage-14/ServicesV13 */
const ConnectedExpertise = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Connected Expertise</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                One idea. <br />
                <InstrumentText>The right expertise.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] max-md:text-justify md:ml-auto md:text-right">
                Bring together the specialists your product needs, from first prototype to launch-ready code.
              </p>
            </TextAppearAnimation>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {expertise.map((item) => (
            <RevealWrapper
              key={item.href}
              className="reveal-me group relative h-[360px] w-full overflow-hidden rounded-radius-md border bg-backgroundBody dark:border-dark dark:bg-dark sm:w-[calc(50%-10px)] lg:h-[440px] xl:w-[calc(25%-15px)]"
            >
              <div className="absolute flex h-full w-full translate-y-0 items-center justify-center px-8 text-center opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <h3 className="text-[25px] font-light leading-[1.2] lg:text-3xl">{item.title}</h3>
              </div>
              <div className="absolute inset-0 z-10 h-full w-full translate-y-full bg-secondary p-8 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-secondary">
                <WowNavLink href={item.href} className="block h-full" aria-label={item.title}>
                  <div className="mb-[55px] flex items-center justify-between gap-1">
                    <h3 className="translate-y-5 text-[25px] font-light leading-[1.2] text-white opacity-0 transition-all delay-[240ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-white lg:text-3xl">
                      {item.title}
                    </h3>
                    <span className="shrink-0 translate-x-20 transition-all duration-1000 group-hover:translate-x-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden>
                        <path
                          d="M5 16H27"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 7L27 16L18 25"
                          className="stroke-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="translate-y-5 text-white opacity-0 transition-all delay-[340ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-white lg:text-xl">
                    {item.description}
                  </p>
                </WowNavLink>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedExpertise
