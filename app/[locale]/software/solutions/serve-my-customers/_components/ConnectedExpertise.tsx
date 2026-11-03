'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { WowNavLink } from '@/components/wow/nav/WowNavLink'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const services = [
  {
    title: 'Web Applications',
    description: 'Customer portals and digital platforms.',
    hoverImage: '/images/wow/LandingPageNaveBare/Website%201%202.svg',
    href: '/software/web-applications',
  },
  {
    title: 'Mobile App Development',
    description: 'Connected mobile experiences.',
    hoverImage: '/images/wow/LandingPageNaveBare/Social%203.svg',
    href: '/software/mobile-applications',
  },
  {
    title: 'Product Design & Prototyping',
    description: 'Intuitive, user-focused interfaces.',
    hoverImage: '/images/wow/LandingPageNaveBare/Client%20Portal%202.svg',
    href: '/software/product-design-prototyping',
  },
  {
    title: 'Business Systems & Automation',
    description: 'Smarter customer workflows.',
    hoverImage: '/images/wow/LandingPageNaveBare/AI%20and%20Automation%202.svg',
    href: '/software/business-systems-automation',
  },
]

const ArrowIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
    <path
      d="M5 16H27"
      className="stroke-black transition-colors duration-500 group-hover:stroke-white dark:stroke-white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 7L27 16L18 25"
      className="stroke-black transition-colors duration-500 group-hover:stroke-white dark:stroke-white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/** Layout: homepage-08/ServicesV7 */
const ConnectedExpertise = () => {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Connected Expertise</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              The technology behind better <InstrumentText>experiences.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-[#808080]">
              The SoftwareWOW services that bring better customer experiences to life.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {services.map((item) => (
            <RevealWrapper key={item.title} className="reveal-me block">
              <WowNavLink
                href={item.href}
                className="block overflow-hidden rounded-radius-md border bg-backgroundBody transition-all duration-300 dark:border-dark dark:bg-dark"
              >
                <div className="group relative z-10 flex items-center justify-between gap-6 px-5 py-5 md:px-10 md:py-8">
                  <div
                    style={{ backgroundImage: `url(${item.hoverImage})` }}
                    className="in-expo absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-secondary/60" />
                  </div>

                  <div className="relative z-10 flex flex-col items-start gap-x-16 gap-y-2 md:flex-row md:items-center">
                    <h3 className="text-[25px] font-light leading-[1.2] transition-colors duration-700 group-hover:text-white md:min-w-[380px] lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="max-w-lg text-[#808080] transition-colors duration-700 group-hover:text-white lg:text-xl">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 inline-flex size-14 shrink-0 overflow-hidden rounded-radius-sm border bg-backgroundBody transition-all duration-[800ms] ease-faq-body-transition group-hover:border-transparent group-hover:bg-primary dark:border-dark dark:bg-dark lg:size-24">
                    <ArrowIcon className="in-expo absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-20 group-hover:opacity-0 lg:size-8" />
                    <ArrowIcon className="absolute left-1/2 top-1/2 size-6 -translate-x-20 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:-translate-x-1/2 group-hover:opacity-100 lg:size-8" />
                  </div>
                </div>
              </WowNavLink>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedExpertise
