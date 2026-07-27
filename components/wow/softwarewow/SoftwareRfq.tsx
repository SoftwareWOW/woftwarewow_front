'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: 'What kinds of software does SoftwareWOW! build?',
    answer:
      'We design and engineer custom web apps, mobile apps, SaaS products, internal tools, APIs, and digital platforms — from MVP to production systems that scale with your business.',
  },
  {
    id: 2,
    question: 'How long does a typical software project take?',
    answer:
      'Timelines depend on scope and complexity. A focused MVP often takes 6–12 weeks, while larger platforms can run several months. After discovery, we share a clear roadmap with milestones and delivery dates.',
  },
  {
    id: 3,
    question: 'How do you estimate cost for custom software?',
    answer:
      'Most projects are fixed-bid once requirements, scope, and deliverables are clear. We start with a discovery conversation to understand goals, then provide a transparent estimate before engineering begins.',
  },
  {
    id: 4,
    question: 'Do you handle both design and development?',
    answer:
      'Yes. Our team covers product design, UI/UX, frontend, backend, cloud infrastructure, and quality assurance — so you get one accountable partner from concept through launch.',
  },
  {
    id: 5,
    question: 'Will we own the code and intellectual property?',
    answer:
      'Yes. Upon project completion and payment, you own the source code and related IP we create for your product, unless a different arrangement is agreed in writing upfront.',
  },
  {
    id: 6,
    question: 'Can you modernize or extend an existing product?',
    answer:
      'Absolutely. We audit legacy codebases, refactor for performance and security, migrate stacks when needed, and add new features without disrupting what already works.',
  },
  {
    id: 7,
    question: 'What technologies do you work with?',
    answer:
      'We use modern stacks such as Next.js, React, Node.js, NestJS, TypeScript, cloud platforms, and AI tooling — choosing what best fits your product goals, team, and long-term maintainability.',
  },
  {
    id: 8,
    question: 'How do we get started?',
    answer:
      'Book a call or reach out through our contact form. We will discuss your goals, recommend an approach, and outline next steps — discovery, proposal, and a kickoff plan tailored to your product.',
  },
]

const SoftwareRfq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden px-3 md:px-4">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.8] scale-y-[3.4] sm:scale-y-[1.6] md:scale-x-[1.9] md:scale-y-[1.5] lg:scale-x-[1.7] lg:scale-y-[1.5] xl:scale-y-[1.4] 2xl:scale-y-[1]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper>
            <SectionLabel className="mb-5">Software FAQ</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Frequently Asked <i className="font-instrument italic">Questions</i>
            </h2>
          </TextAppearAnimation>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#808080] sm:text-lg">
            Answers to common questions about custom software, timelines, ownership, and how we work with SoftwareWOW!
          </p>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[900px] [&>*:not(:last-child)]:mb-6">
          {faqData.map((item, index) => (
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

        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Still have questions? Contact us
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SoftwareRfq
