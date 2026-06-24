'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { useMemo, useState } from 'react'

const INITIAL_VISIBLE_COUNT = 6

const faqData = [
  {
    id: 1,
    question: 'What does it cost to work with WOW Superagency?',
    answer:
      'Every engagement is scoped to your goals. After a free consultation, we provide a transparent proposal with clear deliverables, timelines, and investment—whether you need a single division or a full ecosystem rollout. No hidden fees, no surprises.',
  },
  {
    id: 2,
    question: 'Can I start with one service and expand later?',
    answer:
      'Absolutely. Many clients begin with a website, marketing campaign, or software build and grow into additional divisions as their needs evolve. Our ecosystem model makes scaling seamless without switching agencies.',
  },
  {
    id: 3,
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary by scope. A marketing campaign may launch in weeks, while custom software can take several months. We set realistic milestones upfront and keep you updated at every stage through your dedicated account lead.',
  },
  {
    id: 4,
    question: 'Do you work with startups and established businesses?',
    answer:
      'Yes. WOW Superagency serves ambitious small and mid-sized businesses at every stage—from launching a first website to scaling operations with AI, automation, and multi-channel growth strategies.',
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
      'You receive a dedicated point of contact, regular progress updates, and access to WOW Hub for collaboration. We believe clear communication is as important as the work itself.',
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
      'We build feedback loops into every project phase. If something is not meeting expectations, we address it quickly and adjust course. Our goal is long-term partnership, not one-off transactions.',
  },
  {
    id: 10,
    question: 'How do I schedule a consultation?',
    answer:
      'Visit our contact page or book a free consultation directly from this site. We will learn about your business, identify opportunities, and outline how the WOW ecosystem can help you grow.',
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
    <section className="relative overflow-hidden bg-background pb-14 pt-14 transition-colors duration-300 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 md:flex-row md:items-end lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear flex-1 text-secondary dark:text-backgroundBody">
              <i className="font-instrument italic text-secondary dark:text-backgroundBody">People </i>
              Asked Us
            </h2>
          </TextAppearAnimation>

          <div className="self-start md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-96 text-colorText dark:text-dark-100 lg:max-w-[470px]">
                Straight answers to the questions business owners ask most before partnering with WOW Superagency.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 items-start gap-7 md:grid-cols-2 lg:grid-cols-3">
          {faqColumns.map((faqArray, index) => (
            <RevealWrapper key={index} className="space-y-[30px]">
              {faqArray.map((faq) => (
                <div className="reveal-me" key={faq.id}>
                  <div
                    className={`accordion-itemV4 faq-body-transition relative w-full space-y-6 border bg-backgroundBody px-6 pb-8 pt-6 duration-300 dark:bg-dark-200 ${
                      activeAccordion === faq.id
                        ? 'open active border-black dark:border-[#8b7cff]/30'
                        : 'border-black/10 dark:border-white/10'
                    } md:px-10 md:pb-[60px] md:pt-10 lg:max-w-[370px]`}
                    data-active={activeAccordion === faq.id}>
                    <div
                      className="accordion-headerV4 flex cursor-pointer items-center justify-between"
                      onClick={() => toggleAccordion(faq.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          toggleAccordion(faq.id)
                        }
                      }}
                      aria-expanded={activeAccordion === faq.id}>
                      <h3 className="pr-4 text-[23px] font-normal tracking-normal text-secondary dark:text-backgroundBody md:text-[25px] md:leading-[34.2px]">
                        {faq.question}
                      </h3>
                      <div
                        className={`accordion-header-iconV4 shrink-0 transition-transform duration-[400ms] dark:border-dark ${activeAccordion === faq.id ? 'open active rotate-180' : ''}`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-[400ms] ease-in-out ${activeAccordion === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className="accordion-bodyV4 transition-transform duration-[400] ease-in-out">
                          <p className="font-[375] leading-relaxed text-colorText dark:text-dark-100">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </RevealWrapper>
          ))}
        </div>

        {faqData.length > INITIAL_VISIBLE_COUNT && (
          <RevealWrapper className="mt-10 flex justify-center md:mt-14">
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

export default Faq
