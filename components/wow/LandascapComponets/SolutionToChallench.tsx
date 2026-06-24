'use client'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 5

const faqData = [
  {
    id: 1,
    question: 'What is WOW Superagency?',
    answer:
      'WOW Superagency is a full-service growth partner for small and mid-sized businesses. We bring marketing, design, software development, AI, websites, and hosting together under one coordinated team—so you get enterprise-level capabilities without juggling multiple agencies.',
  },
  {
    id: 2,
    question: 'How is WOW different from a traditional agency?',
    answer:
      'Instead of offering a single specialty, WOW operates as a connected ecosystem of divisions. Each division is a leader in its field, but they work together under one strategy. That means your brand, technology, and growth initiatives stay aligned from day one.',
  },
  {
    id: 3,
    question: 'Which industries do you serve?',
    answer:
      'We partner with businesses across healthcare, construction, legal, hospitality, retail, professional services, eCommerce, nonprofits, and technology. Our division structure lets us tailor solutions to your industry while drawing on cross-sector expertise.',
  },
  {
    id: 4,
    question: 'Do I need to work with each division separately?',
    answer:
      'No. WOW Superagency acts as your single point of contact. We coordinate the right specialists behind the scenes—whether you need a new website, a marketing campaign, custom software, or AI automation—so you experience one seamless partnership.',
  },
  {
    id: 5,
    question: 'How does the WOW ecosystem work in practice?',
    answer:
      'Think of it as a hub-and-spoke model. WOW Hub centralizes your tools and collaboration, while divisions like WOW Marketing, WOW Design, WOW Websites, and SoftwareWOW! deliver specialized work. Everything connects through shared strategy, brand standards, and project management.',
  },
  {
    id: 6,
    question: 'What does onboarding look like?',
    answer:
      'We start with a free consultation to understand your goals, challenges, and timeline. From there, we recommend the right divisions and build a phased roadmap. You receive a dedicated account lead who keeps every workstream coordinated and transparent.',
  },
  {
    id: 7,
    question: 'How are projects priced?',
    answer:
      'Pricing depends on scope, timeline, and which divisions are involved. We offer project-based engagements, retainers, and ongoing support packages. After your consultation, you receive a clear proposal with deliverables, milestones, and investment—no hidden fees.',
  },
  {
    id: 8,
    question: 'Do you offer support after launch?',
    answer:
      'Absolutely. Whether it is website maintenance through WOW Host, campaign optimization through WOW Marketing, or product updates through SoftwareWOW!, we provide ongoing support to keep your business growing long after the initial launch.',
  },
  {
    id: 9,
    question: 'Can you work with businesses outside North America?',
    answer:
      'Yes. WOW Superagency serves clients globally with remote collaboration, flexible time zones, and digital-first delivery. Our teams are experienced in working across borders while maintaining clear communication and consistent quality.',
  },
  {
    id: 10,
    question: 'How do I get started?',
    answer:
      'Book a free consultation through our website or contact page. We will learn about your business, identify quick wins and long-term opportunities, and outline how the WOW ecosystem can help you move faster with less complexity.',
  },
]

const SolutionToChallenges = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleFaqs = showAll ? faqData : faqData.slice(0, INITIAL_VISIBLE_COUNT)

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
    <section className="relative overflow-hidden bg-background pb-14 pt-14 transition-colors duration-300 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] opacity-80 dark:opacity-40 sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row lg:justify-between">
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear max-lg:leading-[1.33] text-secondary dark:text-backgroundBody">
                Frequently asked{' '}
                <span className="font-instrument italic text-secondary dark:text-backgroundBody lg:text-[65px]">
                  questions
                </span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-colorText dark:text-dark-100 md:justify-self-end md:text-right">
                Everything you need to know about partnering with WOW Superagency—from how our ecosystem works to
                what you can expect when we build together.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Book a Free Consultation</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Book a Free Consultation</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {visibleFaqs.map((faq, index) => (
            <div key={faq.id} className="accordion-item overflow-hidden bg-secondary duration-300 dark:bg-dark-200">
              <div
                className={`accordion-header group relative flex cursor-pointer justify-between px-5 py-[35px] md:px-10 ${
                  activeIndex === index ? 'active' : ''
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
                aria-expanded={activeIndex === index}>
                <h3 className="pr-4 text-[25px] font-normal leading-[1.2] text-white md:font-medium lg:text-4xl lg:leading-[1.2]">
                  {faq.question}
                </h3>
                <div className="accordion-header-iconV3 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="active-arrow absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 duration-300 ease-faq-body-transition group-hover:rotate-90 md:size-8">
                    <path d="M5 16H27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                <div className="overflow-hidden">
                  <div className="accordion-body px-5 pb-10 duration-300 sm:px-10 sm:pt-2 md:ml-0">
                    <p className="max-w-3xl text-[17px] leading-[1.6] tracking-[0.36px] text-backgroundBody/70 dark:text-dark-100">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>

        {faqData.length > INITIAL_VISIBLE_COUNT && (
          <RevealWrapper className="mx-auto mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleToggleShowAll}
              className="rv-button rv-button-white block md:inline-block"
              aria-expanded={showAll}>
              <div className="rv-button-top">
                <span>{showAll ? 'See Less' : 'See More'}</span>
              </div>
              <div className="rv-button-bottom">
                <span>{showAll ? 'See Less' : 'See More'}</span>
              </div>
            </button>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default SolutionToChallenges
