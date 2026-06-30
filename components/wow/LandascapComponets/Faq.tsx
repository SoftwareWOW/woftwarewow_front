'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { useMemo, useState } from 'react'
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
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container mx-auto max-w-[1320px] px-3 md:px-4">
        <div className="mb-10 flex flex-col items-start justify-between gap-x-10 gap-y-4 md:mb-20 md:flex-row md:items-end lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear text-[#000000] dark:text-[#F2F2F2]">
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

        <div className="mx-auto grid w-full grid-cols-1 items-start gap-7 md:grid-cols-2 lg:grid-cols-3">
          {faqColumns.map((faqArray, index) => (
            <RevealWrapper key={index} className="space-y-[30px]">
              {faqArray.map((faq) => (
                <div className="reveal-me" key={faq.id}>
                  <div
                    className={`accordion-itemV4 faq-body-transition relative w-full border bg-backgroundBody px-6 pb-8 pt-6 duration-300 dark:bg-dark md:px-10 md:pb-[60px] md:pt-10 lg:max-w-[370px] ${
                      activeAccordion === faq.id
                        ? 'open active border-black dark:border-white/10'
                        : 'border-black/10 dark:border-white/10'
                    }`}
                    data-active={activeAccordion === faq.id ? true : false}
                  >
                    <div
                      className="accordion-headerV4 flex cursor-pointer items-center justify-between"
                      onClick={() => toggleAccordion(faq.id)}
                    >
                      <h3 className="text-[23px] font-normal tracking-normal md:text-[25px] md:leading-[34.2px]">
                        {faq.question}
                      </h3>
                      <div
                        className={`accordion-header-iconV4 transition-transform duration-[400ms] dark:border-dark ${
                          activeAccordion === faq.id ? 'open active rotate-180' : ''
                        }`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-[400ms] ease-in-out ${
                        activeAccordion === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className={`accordion-bodyV4 transition-transform duration-[400] ease-in-out`}>
                          <p className="font-[375]">{faq.answer}</p>
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
            <ButtonComponentList>
              <ButtonComponent
                type="button"
                variant="secondary"
                onClick={handleToggleShowAll}
                ariaExpanded={showAll}
              size="sm"
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