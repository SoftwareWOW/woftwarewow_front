'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'
import InstrumentText from '../shared/InstrumentText'
import SectionLabel from '../shared/SectionLabel'

const INITIAL_VISIBLE_COUNT = 6

const faqData = [
  {
    id: 1,
    question: 'What makes WOW different from a traditional agency?',
    answer:
      'Traditional agencies usually specialize in one area. WOW operates as a connected ecosystem of divisions — each leading in its field, but working from one shared strategy to keep your brand, technology, and growth aligned.',
  },
  {
    id: 2,
    question: 'Which division should I start with?',
    answer:
      'It depends on your biggest priority right now — visibility, technology, design, or growth. After a free consultation, we recommend the smartest starting point and how other divisions can support you over time.',
  },
  {
    id: 3,
    question: 'Do you work with small businesses?',
    answer:
      'Yes. We partner with ambitious small and mid-sized businesses at every stage — from launching a first website to scaling with AI, automation, and multi-channel growth programs.',
  },
  {
    id: 4,
    question: 'Can WOW handle multiple services together?',
    answer:
      'Absolutely. WOW Superagency is your single point of contact. We coordinate the right specialists behind the scenes — whether you need a new website, marketing campaign, custom software, or AI automation.',
  },
  {
    id: 5,
    question: 'How do we start?',
    answer:
      'Book a free consultation, tell us what you are trying to build or improve, and we will recommend the best next step.',
  },
  {
    id: 6,
    question: 'What does it cost to work with WOW Superagency?',
    answer:
      'Every engagement is scoped to your goals. After a free consultation, you receive a transparent proposal with clear deliverables, timelines, and investment — whether you need one division or a full ecosystem rollout.',
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
      'Use our contact form or book directly from our contact page. We will learn about your business, identify opportunities, and outline how WOW can help you grow.',
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
    <section className="relative overflow-hidden px-3 md:px-4">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-5">Expertise</SectionLabel>
            </RevealWrapper>

            <h2 className="text-[48px] font-medium leading-[1.05] tracking-[-0.055em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
              <InstrumentText className="block font-normal tracking-[-0.06em]">People</InstrumentText>
              <br />
              <TextAppearAnimation>
                <span className="text-appear block font-normal">Asked Us</span>
              </TextAppearAnimation>
            </h2>
          </div>

          <div className="max-w-[420px] lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-base leading-relaxed text-[#808080] transition-colors duration-300 md:text-lg">
                Answers to common questions about our services, process, pricing, and how we help businesses grow.
              </p>
            </TextAppearAnimation>
                  <RevealWrapper className="mt-6 flex justify-end md:mt-8">
                          <ButtonComponentList>
                            <ButtonComponent href="/rfq"   variant="white">
                        View All FAQ
                            </ButtonComponent>
                          </ButtonComponentList>
                        </RevealWrapper>
          </div>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 items-start gap-7 md:grid-cols-2 lg:grid-cols-3">
          {faqColumns.map((faqArray, index) => (
            <RevealWrapper key={index} className="space-y-[30px]">
              {faqArray.map((faq) => (
                <div className="reveal-me" key={faq.id}>
                  <div
                    className={`accordion-itemV4 faq-body-transition relative flex w-full cursor-pointer flex-col border dark:bg-dark px-6 pb-6 pt-6 duration-300 ${
                      activeAccordion === faq.id
                        ? 'open active border-black dark:border-white'
                        : 'border-black/10 dark:border-white/10'
                    }`}
                    data-active={activeAccordion === faq.id ? true : false}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <h3 className="text-[23px] font-normal tracking-normal md:text-[25px] md:leading-[34.2px]">
                      {faq.question}
                    </h3>
                    <div
                      className={`grid transition-all duration-[400ms] ease-in-out ${
                        activeAccordion === faq.id ? 'mt-6 grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="accordion-bodyV4 transition-transform duration-[400] ease-in-out">
                          <p className="font-[375]">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-end pt-6">
                      <div
                        className={`accordion-header-iconV4 !relative !bottom-auto !right-auto aspect-square shrink-0 !rounded-full transition-transform duration-[400ms] dark:border-dark ${
                          activeAccordion === faq.id ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
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
