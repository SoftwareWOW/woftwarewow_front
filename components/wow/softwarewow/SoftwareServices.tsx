'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import useScrollingSoftwareServices from '@/hooks/useScrollingSoftwareServices'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const CARD_WIDTH = 360

type SoftwareWowService = {
  slug: string
  title: string
  description: string
  feature: string[]
}

const SOFTWARE_WOW_SERVICES: SoftwareWowService[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software',
    description: 'Bespoke systems engineered end-to-end.',
    feature: ['Tailored to your workflows', 'Scalable architecture', 'Full lifecycle ownership'],
  },
  {
    slug: 'ai-intelligence',
    title: 'AI & Intelligence',
    description: 'LLMs, agents & smart automations.',
    feature: ['Custom AI integrations', 'Intelligent automation', 'Data-driven decisions'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Fast, scalable modern web apps.',
    feature: ['Modern frontend stacks', 'Performance-first builds', 'Responsive by default'],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native-grade iOS & Android products.',
    feature: ['Cross-platform delivery', 'App store readiness', 'Offline-first experiences'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI / UX Design',
    description: 'Interfaces that convert and delight.',
    feature: ['User-centered flows', 'Design systems', 'Conversion-focused layouts'],
  },
  {
    slug: 'cloud-infra',
    title: 'Cloud & Infra',
    description: 'Elastic, resilient cloud architecture.',
    feature: ['Cloud-native setup', 'Auto-scaling infrastructure', 'Cost-optimized hosting'],
  },
  {
    slug: 'api-integrations',
    title: 'API & Integrations',
    description: 'Connect any tool, any platform.',
    feature: ['Third-party connections', 'Secure API design', 'Real-time data sync'],
  },
  {
    slug: 'automation',
    title: 'Automation',
    description: 'Workflows that run your business.',
    feature: ['Process automation', 'Reduced manual work', 'Reliable task pipelines'],
  },
  {
    slug: 'devops-deploy',
    title: 'DevOps & Deploy',
    description: 'CI/CD pipelines built for speed.',
    feature: ['Continuous delivery', 'Automated testing', 'Zero-downtime releases'],
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Turn raw data into decisions.',
    feature: ['Custom dashboards', 'Actionable reporting', 'Predictive insights'],
  },
  {
    slug: 'maintenance',
    title: 'Maintenance',
    description: 'Reliable support, always on.',
    feature: ['Proactive monitoring', 'Security patching', 'Dedicated support'],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Defense-grade protection by design.',
    feature: ['Security audits', 'Compliance readiness', 'Threat prevention'],
  },
]

const SoftwareServices = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee, stepMarquee } = useScrollingSoftwareServices()

  const handlePrev = () => {
    stepMarquee('prev', CARD_WIDTH)
  }

  const handleNext = () => {
    stepMarquee('next', CARD_WIDTH)
  }

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 sm:items-center md:mb-20 md:flex-row lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="rv-badge mb-3 md:mb-4">
              <span className="rv-badge-text">SoftwareWOW! Services</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Built to Scale With <br />
                <span className="font-instrument italic">Your Business</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg max-md:text-justify md:place-self-end md:text-right">
                Custom software, mobile apps, and digital products — engineered end-to-end inside the
                SoftwareWOW! ecosystem, not against it.
              </p>
            </TextAppearAnimation>

            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Get Free Quotes</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Get Free Quotes</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
          className="relative overflow-hidden"
        >
          <div
            ref={marqueeRef}
            className="flex w-fit flex-nowrap justify-center xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-l [&>*:last-child]:border-r dark:[&>*:last-child]:border-l-dark dark:[&>*:last-child]:border-r-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark"
          >
            {SOFTWARE_WOW_SERVICES.map((service) => (
              <Link
                href="/services"
                className="card group relative h-[500px] w-[360px] flex-shrink-0"
                key={service.slug}
              >
                <div className="absolute flex h-full w-full translate-y-0 items-center justify-center opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                  <h5>{service.title}</h5>
                </div>
                <div className="absolute z-10 h-full w-full translate-y-full border-t border-primary bg-secondary p-8 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-secondary">
                  <div className="mb-[55px] flex items-center justify-between gap-1">
                    <h5 className="translate-y-5 text-primary opacity-0 transition-all delay-[240ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody max-sm:text-3xl">
                      {service.title}
                    </h5>

                    <span className="translate-x-20 transition-all duration-1000 group-hover:translate-x-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                          d="M5 16H27"
                          className="stroke-primary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 7L27 16L18 25"
                          className="stroke-primary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="translate-y-5 text-backgroundBody/70 opacity-0 transition-all delay-[340ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody/70">
                    {service.description}
                  </p>
                  <ul className="mt-6 translate-y-5 pl-4 opacity-0 transition-all delay-[440ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100">
                    {service.feature.map((point) => (
                      <li
                        key={point}
                        className="leading-relexed list-disc text-base text-backgroundBody/70 dark:text-backgroundBody/70"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous service"
          className="absolute left-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-radius-sm bg-[#EDF0F5] p-2 opacity-50 transition-colors duration-300 hover:opacity-70 sm:left-4 sm:p-3 md:p-4 lg:p-5 dark:bg-[#151515]"
        >
          <ChevronLeft className="size-7 text-secondary sm:size-9 dark:text-white" strokeWidth={1.5} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next service"
          className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-radius-sm bg-[#EDF0F5] p-2 opacity-50 transition-colors duration-300 hover:opacity-70 sm:right-4 sm:p-3 md:p-4 lg:p-5 dark:bg-[#151515]"
        >
          <ChevronRight className="size-7 text-secondary sm:size-9 dark:text-white" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  )
}

export default SoftwareServices
