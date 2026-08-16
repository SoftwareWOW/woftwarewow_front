'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useMemo, useState } from 'react'

const faqData = [
  {
    id: 1,
    question: 'How much does the package cost?',
    answer:
      'Investment starts from $5,999. The final amount depends on product scope, design depth, integrations and how much of the build is included in the first release.',
  },
  {
    id: 2,
    question: 'How long does it take?',
    answer:
      'A typical starting engagement runs about 1–2 weeks for discovery and first-release foundations, with longer timelines when design and development scope expands.',
  },
  {
    id: 3,
    question: 'Do I need a full product specification before we start?',
    answer:
      'No. We can start from an idea, a prototype or an existing product and help define what belongs in the first release.',
  },
  {
    id: 4,
    question: 'What if I only have an idea?',
    answer:
      'That is a common starting point. We help clarify the problem, audience, features and technical direction before design and build begin.',
  },
  {
    id: 5,
    question: 'Can you improve an existing SaaS product?',
    answer:
      'Yes. We can redesign, rebuild or expand an existing product when it needs a clearer experience, stronger foundation or next version.',
  },
  {
    id: 6,
    question: 'What happens after launch?',
    answer:
      'We help you go live with analytics and a clear foundation so you can learn from real usage and prioritize what comes next.',
  },
]

const INITIAL_VISIBLE = 3

/** Layout: AutomationFaq — 3-column accordion, closed by default + load more. */
const SaasFaq = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleFaqs = useMemo(
    () => (showAll || faqData.length <= INITIAL_VISIBLE ? faqData : faqData.slice(0, INITIAL_VISIBLE)),
    [showAll],
  )

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

  return (
    <section className="relative overflow-hidden px-3 md:px-4">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-5">Questions, answered</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear text-[48px] font-normal leading-[1.05] tracking-[-0.055em] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
                Before we start building.
              </h2>
            </TextAppearAnimation>
          </div>

          <RevealWrapper className="flex justify-start lg:justify-end">
            <ButtonComponentList>
              <ButtonComponent href="/rfq" variant="white">
                View All FAQ
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 items-start gap-7 md:grid-cols-2 lg:grid-cols-3">
          {faqColumns.map((faqArray, index) => (
            <RevealWrapper key={index} className="space-y-[30px]">
              {faqArray.map((faq) => (
                <div className="reveal-me" key={faq.id}>
                  <div
                    className={`accordion-itemV4 faq-body-transition relative flex w-full cursor-pointer flex-col border px-6 pb-6 pt-6 duration-300 dark:bg-dark ${
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

        {!showAll && faqData.length > INITIAL_VISIBLE ? (
          <RevealWrapper className="mt-10 flex justify-center">
            <ButtonComponentList>
              <ButtonComponent variant="white" onClick={() => setShowAll(true)}>
                Load More
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}

export default SaasFaq
