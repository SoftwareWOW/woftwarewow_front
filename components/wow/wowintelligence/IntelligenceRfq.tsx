'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useState } from 'react'
import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
const INITIAL_VISIBLE_COUNT = 4

const faqData = [
  {
    id: 1,
    question: 'What does WOW Intelligence actually do for my business?',
    answer:
      'WOW Intelligence connects your customer channels and business data to an AI core that answers inquiries, qualifies leads, updates your CRM, automates workflows, and surfaces insights — so your team spends less time on repetitive work and more time on growth.',
  },
  {
    id: 2,
    question: 'What AI solutions can you build?',
    answer:
      'We design and deploy AI assistants, chatbots, lead qualification flows, smart automations, predictive analytics, reporting dashboards, and custom intelligence layers tailored to how your business operates today.',
  },
  {
    id: 3,
    question: 'Can WOW Intelligence integrate with tools we already use?',
    answer:
      'Yes. We connect to CRMs, email, live chat, help desks, Slack, Microsoft Teams, WhatsApp, and other platforms you rely on — so intelligence flows through your existing stack instead of replacing it.',
  },
  {
    id: 4,
    question: 'How long does an AI or automation project take?',
    answer:
      'Timelines depend on scope. A focused assistant or automation workflow can launch in a few weeks, while broader intelligence layers with multiple integrations may take longer. After discovery, we share a clear roadmap with milestones.',
  },
  {
    id: 5,
    question: 'Is our business data kept secure?',
    answer:
      'Yes. We follow industry best practices for data security and confidentiality. Access controls, secure integrations, and compliance considerations are built into every WOW Intelligence engagement from the start.',
  },
  {
    id: 6,
    question: 'Do we need an in-house AI team to work with you?',
    answer:
      'No. WOW Intelligence handles strategy, architecture, integration, deployment, and ongoing optimization. We explain everything in plain language and train your team on the tools we deliver.',
  },
  {
    id: 7,
    question: 'How do you estimate cost for an intelligence project?',
    answer:
      'We start with a discovery and audit to understand your goals, data, and workflows. From there, we provide a transparent proposal with scope, deliverables, timeline, and investment before build work begins.',
  },
  {
    id: 8,
    question: 'How do we get started with WOW Intelligence?',
    answer:
      'Book a strategy call or reach out through our contact form. We will review your current processes, identify high-impact AI opportunities, and outline the smartest next step for your business.',
  },
]

const IntelligenceRfq = () => {
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
    <section className="relative overflow-hidden px-3 md:px-4">
         <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.8] scale-y-[3.4] sm:scale-y-[1.6] md:scale-x-[1.9] md:scale-y-[1.5] lg:scale-x-[1.7] lg:scale-y-[1.5] xl:scale-y-[1.4] 2xl:scale-y-[1]">
        <Image src={gradientBg} alt="" aria-hidden />

      </div>
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper>
            <SectionLabel className="mb-5">Intelligence FAQ</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear text-foreground dark:text-backgroundBody">
              Frequently Asked <span className="font-instrument italic">Questions</span>
            </h2>
          </TextAppearAnimation>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#808080] sm:text-lg">
            Answers to common questions about AI assistants, automation, data integration, and how WOW
            Intelligence helps your business work smarter.
          </p>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[900px] [&>*:not(:last-child)]:mb-6">
          {visibleFaqs.map((item, index) => (
            <div
              key={item.id}
              className={`faq-body-transition overflow-hidden border bg-backgroundBody duration-[400ms] dark:bg-dark ${
                activeIndex === index ? 'pb-10' : 'pb-0'
              }`}
              style={{
                borderColor: activeIndex === index ? 'black' : 'transparent',
              }}
            >
              <div
                className={`relative cursor-pointer py-5 max-md:px-5 md:px-10 md:py-[35px] ${
                  activeIndex === index ? 'open active' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-normal max-lg:pr-[33px] sm:text-[23px] sm:font-medium md:text-[25px] md:leading-[25.2px] md:tracking-wide">
                  {item.question}
                </h3>
                <div
                  className={`accordion-header-icon transition-transform duration-[400ms] ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-[400ms] ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="faq-body-transition duration-[500ms] max-md:px-5 max-md:text-base md:px-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>

        {faqData.length > INITIAL_VISIBLE_COUNT && (
          <RevealWrapper className="mt-10 flex justify-center md:mt-14">
            <ButtonComponentList>
              <ButtonComponent type="button" variant="secondary" onClick={handleToggleShowAll} ariaExpanded={showAll}>
                {showAll ? 'See Less' : 'See More'}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default IntelligenceRfq
