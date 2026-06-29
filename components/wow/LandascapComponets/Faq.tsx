'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { useMemo, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

const INITIAL_VISIBLE_COUNT = 6

const faqData = [
  {
    id: 1,
    question: 'What does it cost to work with WOW Superagency?',
    answer:
      'Every engagement is scoped to your goals. After a free consultation, you receive a transparent proposal with clear deliverables, timelines, and investment — whether you need one division or a full ecosystem rollout.',
  },
  {
    id: 2,
    question: 'Can I start with one service and expand later?',
    answer:
      'Absolutely. Many clients begin with a website, marketing campaign, or software project and expand into additional divisions as their needs grow. Our ecosystem model makes scaling seamless.',
  },
  {
    id: 3,
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope. A marketing campaign may launch in weeks; custom software can take several months. We set realistic milestones upfront and keep you informed at every stage.',
  },
  {
    id: 4,
    question: 'Do you work with startups and established businesses?',
    answer:
      'Yes. We partner with ambitious small and mid-sized businesses at every stage — from launching a first website to scaling with AI, automation, and multi-channel growth.',
  },
  {
    id: 5,
    question: 'What makes your team different from freelancers?',
    answer:
      'You get a full agency ecosystem—not a single specialist. Strategists, designers, developers, and marketers collaborate under one roof with shared standards, project management, and accountability.',
  },
  {
    id: 6,
    question: 'How do you handle communication during a project?',
    answer:
      'You receive a dedicated point of contact, regular progress updates, and access to WOW Hub for collaboration. Clear communication is part of how we deliver.',
  },
  {
    id: 7,
    question: 'Do you sign NDAs and protect client data?',
    answer:
      'Yes. We treat every client relationship with confidentiality and follow industry best practices for data security—especially for healthcare, legal, and finance clients with compliance requirements.',
  },
  {
    id: 8,
    question: 'Can you redesign an existing website without losing SEO?',
    answer:
      'Yes. WOW Websites specializes in migrations and redesigns that preserve search rankings while improving performance, conversion, and brand presentation.',
  },
  {
    id: 9,
    question: 'What if I am not satisfied with the results?',
    answer:
      'We build feedback into every project phase. If something is not meeting expectations, we address it quickly and adjust course. We are building long-term partnerships, not one-off transactions.',
  },
  {
    id: 10,
    question: 'How do I schedule a consultation?',
    answer:
      'Use the form below or book directly from our contact page. We will learn about your business, identify opportunities, and outline how WOW can help you grow.',
  },
]

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleFaqs = showAll ? faqData : faqData.slice(0, INITIAL_VISIBLE_COUNT)

  const faqColumns = useMemo(() => {
    const columns: (typeof faqData)[] = [[], [], []]
    visibleFaqs.forEach((faq, index) => {
      columns[index % 3].push(faq)
    })
    return columns
  }, [visibleFaqs])

  const toggleAccordion = (id: number) => {
    setActiveAccordion((prevActive) => (prevActive === id ? null : id))
  }

  const handleToggleShowAll = () => {
    if (showAll) {
      const hiddenIds = new Set(faqData.slice(INITIAL_VISIBLE_COUNT).map((faq) => faq.id))
      if (activeAccordion !== null && hiddenIds.has(activeAccordion)) {
        setActiveAccordion(null)
      }
    }
    setShowAll((prev) => !prev)
  }

  return (
    <section className="relative overflow-hidden bg-background px-3 py-3 transition-colors duration-300 dark:bg-background md:px-4 md:py-4">
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

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-x-10 gap-y-4 md:mb-20 md:flex-row md:items-end lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear flex-1 text-[#000000] dark:text-[#F2F2F2]">
              <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                People
              </span>{' '}
              Asked Us
            </h2>
          </TextAppearAnimation>

          <div className="self-start md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-96 text-[#555555] dark:text-[#999999] lg:max-w-[470px]">
                Straight answers to the questions business owners ask most before choosing a long-term digital partner.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqColumns.map((faqArray, index) => (
            <RevealWrapper key={index} className="space-y-6">
              {faqArray.map((faq) => (
                <div
                  key={faq.id}
                  className={`group relative rounded-radius-sm border transition-all duration-300 ${
                    activeAccordion === faq.id
                      ? 'border-[#8b7cff]/50 bg-white/80 backdrop-blur-sm shadow-lg shadow-[#8b7cff]/10 dark:bg-dark/80 dark:shadow-[#8b7cff]/20'
                      : 'border-[#e5e5e5] bg-white/50 backdrop-blur-sm hover:border-[#8b7cff]/20 dark:border-white/5 dark:bg-dark/50 dark:hover:border-[#8b7cff]/20'
                  }`}
                >
                  <div
                    className="flex cursor-pointer items-start justify-between gap-4 p-6 transition-colors duration-300 md:p-8"
                    onClick={() => toggleAccordion(faq.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggleAccordion(faq.id)
                      }
                    }}
                    aria-expanded={activeAccordion === faq.id}
                  >
                    <h3
                      className={`text-lg font-medium leading-[1.3] transition-colors duration-300 md:text-xl ${
                        activeAccordion === faq.id
                          ? 'text-[#1a1a1a] dark:text-[#F2F2F2]'
                          : 'text-[#333333] dark:text-[#CCCCCC]'
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        activeAccordion === faq.id
                          ? 'bg-gradient-to-r from-[#8b7cff] to-[#b794f4] text-white shadow-lg shadow-[#8b7cff]/30'
                          : 'bg-[#f0f0f0] text-[#8b7cff] dark:bg-white/5 dark:text-[#b794f4]'
                      }`}
                    >
                      {activeAccordion === faq.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <p className="text-[15px] leading-[1.7] text-[#555555] dark:text-[#999999] md:text-[16px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative bottom line */}
                  <div
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] transition-all duration-500 ${
                      activeAccordion === faq.id ? 'w-2/3' : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </RevealWrapper>
          ))}
        </div>

        {faqData.length > INITIAL_VISIBLE_COUNT && (
          <RevealWrapper className="mt-10 flex justify-center md:mt-14">
            <ButtonComponentList>
              <ButtonComponent
                type="button"
                variant="secondary"
                onClick={handleToggleShowAll}
                ariaExpanded={showAll}
              >
                {showAll ? 'See Less' : 'See More'}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default Faq