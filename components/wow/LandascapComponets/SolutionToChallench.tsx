
'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
      {/* Background decorative elements - matching WowSuperAgencyClient */}
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

      {/* Gradient background image - preserved */}
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] opacity-80 dark:opacity-40 sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>

      <div className="container relative z-10">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row lg:justify-between">
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear max-lg:leading-[1.33] text-[#000000] dark:text-[#F2F2F2]">
                Frequently asked{' '}
                <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent lg:text-[65px]">
                  questions
                </span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#555555] dark:text-[#999999] md:justify-self-end md:text-right">
                Everything you need to know about partnering with WOW Superagency—from how our ecosystem works to
                what you can expect when we build together.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#8b7cff] to-[#b794f4] px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8b7cff]/30"
                >
                  <span className="relative z-10 font-medium">Book a Free Consultation</span>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px] space-y-4">
          {visibleFaqs.map((faq, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'border-[#8b7cff]/50 bg-white/80 backdrop-blur-sm dark:bg-dark/80 shadow-lg shadow-[#8b7cff]/10 dark:shadow-[#8b7cff]/20'
                    : 'border-[#e5e5e5] bg-white/50 backdrop-blur-sm dark:border-white/5 dark:bg-dark/50 hover:border-[#8b7cff]/20 dark:hover:border-[#8b7cff]/20'
                }`}
              >
                <div
                  className={`flex cursor-pointer items-center justify-between p-6 transition-colors duration-300 md:p-8 ${
                    isActive ? 'pb-4' : ''
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
                  <h3
                    className={`pr-4 text-lg font-medium transition-colors duration-300 md:text-xl lg:text-2xl ${
                      isActive
                        ? 'text-[#1a1a1a] dark:text-[#F2F2F2]'
                        : 'text-[#333333] dark:text-[#CCCCCC]'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8b7cff] to-[#b794f4] text-white'
                        : 'bg-[#f0f0f0] text-[#8b7cff] dark:bg-white/5 dark:text-[#b794f4]'
                    }`}
                  >
                    {isActive ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </div>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 md:px-8 md:pb-8">
                      <p className="max-w-3xl text-[15px] leading-[1.7] tracking-[0.01em] text-[#555555] dark:text-[#999999] md:text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </RevealWrapper>

        {faqData.length > INITIAL_VISIBLE_COUNT && (
          <RevealWrapper className="mx-auto mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleToggleShowAll}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#e5e5e5] bg-white/80 px-8 py-3 text-[#1a1a1a] transition-all duration-300 hover:scale-105 hover:border-[#8b7cff]/50 hover:shadow-lg hover:shadow-[#8b7cff]/10 dark:border-white/10 dark:bg-dark/50 dark:text-[#F2F2F2] dark:hover:border-[#8b7cff]/30"
              aria-expanded={showAll}
            >
              <span className="relative z-10 font-medium">
                {showAll ? 'See Less' : 'See More'}
              </span>
            </button>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default SolutionToChallenges