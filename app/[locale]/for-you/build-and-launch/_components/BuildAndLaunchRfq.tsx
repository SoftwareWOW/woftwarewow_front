'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 3

const servicesData = [
  {
    id: 1,
    title: 'Branding From A To Z',
    subtitle: 'Clarity, identity, and positioning that set your business up for long-term growth.',
    items: [
      'Brand Strategy & Positioning',
      'Visual Identity Systems',
      'Logo & Mark Design',
      'Brand Guidelines & Standards',
      'Messaging & Voice Development',
      'Collateral & Launch Assets',
    ],
  },
  {
    id: 2,
    title: 'Sales Funnels & Revenue Systems',
    subtitle: 'Systems that turn visitors into leads and leads into paying customers.',
    items: [
      'User Research & Market Analysis',
      'Concept Ideation',
      'Prototyping',
      'Sketching & Wireframing',
      'Funnel Architecture & Mapping',
      'Conversion Optimization & A/B Testing',
    ],
  },
  {
    id: 3,
    title: 'High-Performance Websites',
    subtitle: 'Fast, reliable websites designed to convert visitors into paying customers.',
    items: [
      'UX Strategy & Information Architecture',
      'Custom Web Design',
      'Next.js & Headless Development',
      'SEO & Core Web Vitals Optimization',
      'CMS Integration & Training',
      'Ongoing Maintenance & Support',
    ],
  },
  {
    id: 4,
    title: 'Custom Software & Automation',
    subtitle: 'Digital products and workflows that remove bottlenecks and scale operations.',
    items: [
      'SaaS & Web Application Development',
      'Mobile App Development',
      'API Integrations & Middleware',
      'AI-Powered Automation',
      'Legacy System Modernization',
      'Product Roadmapping & Delivery',
    ],
  },
  {
    id: 5,
    title: 'Marketing & Growth Campaigns',
    subtitle: 'Performance-driven campaigns that attract qualified leads and measurable ROI.',
    items: [
      'Paid Media & PPC Management',
      'SEO & Content Strategy',
      'Email Marketing & Nurture Flows',
      'Social Media Strategy',
      'Analytics & Attribution',
      'Growth Experimentation',
    ],
  },
  {
    id: 6,
    title: 'AI & Intelligence Solutions',
    subtitle: 'Smart tools that sharpen decisions, reduce manual work, and accelerate results.',
    items: [
      'AI Strategy & Use-Case Discovery',
      'Chatbots & Virtual Assistants',
      'Predictive Analytics',
      'Process Automation',
      'Data Pipelines & Dashboards',
      'Team Training & Adoption',
    ],
  },
]

/** Layout: SolutionToChallenges accordion — Build & Launch RFQ variant with centered header. */
const BuildAndLaunchRfq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleServices = showAll ? servicesData : servicesData.slice(0, INITIAL_VISIBLE_COUNT)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleToggleShowAll = () => {
    if (showAll && activeIndex !== null && activeIndex >= INITIAL_VISIBLE_COUNT) {
      setActiveIndex(null)
    }
    setShowAll((prev) => !prev)
  }

  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] opacity-60 dark:opacity-40 sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-4 flex justify-center">
            <SectionLabel>From Idea to Launch</SectionLabel>
          </RevealWrapper>
          <RevealWrapper>
            <h2 className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              Bring the pieces together.
            </h2>
          </RevealWrapper>
          <RevealWrapper className="mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Instead of finding separate providers for every part of your launch, build the essentials through one
              coordinated team.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="w-full [&>*:not(:last-child)]:mb-6">
          {visibleServices.map((service, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={service.id}
                className={`accordion-item relative w-full rounded-radius-sm border bg-backgroundBody px-5 py-0 duration-300 dark:bg-dark ${
                  isActive
                    ? 'open active border-black dark:border-white/10'
                    : 'border-black/10 dark:border-white/10'
                }`}
                data-active={isActive ? true : false}
              >
                <div
                  className={`accordion-header group relative flex cursor-pointer justify-between py-[35px] ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleAccordion(index)
                    }
                  }}
                  aria-expanded={isActive}
                >
                  <h3 className="flex flex-col gap-x-10 gap-y-3 font-outfit text-[25px] font-[500px] leading-[25.2px] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] md:flex-row md:items-center md:font-medium md:leading-[1.2] lg:text-3xl">
                    <span>{service.title}</span>
                    <span className="mt-2 pr-[2px] text-base font-normal text-[#808080] transition-colors duration-300 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {service.subtitle}
                    </span>
                  </h3>
                  <div
                    className={`flex size-[60px] shrink-0 items-center justify-center rounded-radius-sm bg-primary transition-colors duration-300 group-hover:bg-primary/50 dark:group-hover:bg-[#1F1F1F] md:size-[65px] lg:size-[79px] ${
                      isActive ? 'bg-primary/50 dark:bg-[#1F1F1F]' : ''
                    }`}
                  >
                    <ArrowDown
                      aria-hidden
                      className={`size-10 !stroke-white !text-white transition-transform duration-300 ease-out ${
                        isActive ? 'rotate-180' : ''
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="accordion-body flex flex-col justify-start gap-x-10 pb-10 duration-300 md:flex-row lg:gap-x-[73px]">
                      <ul className="[&>*:not(:last-child)]:mb-1">
                        {service.items.slice(0, Math.ceil(service.items.length / 2)).map((item) => (
                          <li
                            key={item}
                            className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-[#555555] transition-colors duration-300 dark:text-[#999999]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="[&>*:not(:last-child)]:mb-1">
                        {service.items.slice(Math.ceil(service.items.length / 2)).map((item) => (
                          <li
                            key={item}
                            className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-[#555555] transition-colors duration-300 dark:text-[#999999]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </RevealWrapper>

        <RevealWrapper className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:mt-14">
          {servicesData.length > INITIAL_VISIBLE_COUNT && (
            <ButtonComponentList>
              <ButtonComponent type="button" variant="white" onClick={handleToggleShowAll} ariaExpanded={showAll}>
                {showAll ? 'See Less' : 'See More'}
              </ButtonComponent>
            </ButtonComponentList>
          )}
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="secondary">
              Start Now
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuildAndLaunchRfq
