'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useMemo, useState } from 'react'

const faqData = [
  {
    id: 1,
    question: 'What kinds of processes can you automate?',
    answer:
      'Repetitive, predictable work across leads, follow-ups, admin, support, reporting and internal handoffs — anywhere the same steps happen often enough to justify a system.',
  },
  {
    id: 2,
    question: 'Do I need to replace my existing software?',
    answer:
      'Usually no. We connect the platforms you already use where it makes sense, and only recommend replacements when current tools create more friction than value.',
  },
  {
    id: 3,
    question: 'Does everything run without human involvement?',
    answer:
      'Not always. Good automation keeps people in the loop for decisions, exceptions and relationship work while machines handle the repetitive steps.',
  },
  {
    id: 4,
    question: 'How do you decide what should be automated?',
    answer:
      'We start with frequency, time cost, error risk and business impact — then prioritize opportunities that free your team without creating fragile systems.',
  },
  {
    id: 5,
    question: 'How much does the package cost?',
    answer:
      'The final investment depends on the number and complexity of workflows, integrations and implementation requirements. If WOW approves a starting price, state it here as well.',
  },
  {
    id: 6,
    question: 'How long does implementation take?',
    answer:
      'A typical starting package runs about 1–2 weeks, depending on how many workflows you need, how complex the integrations are and how quickly we can access your systems.',
  },
]

/** Layout: Home Faq — 3-column accordion grid, closed by default. */
const AutomationFaq = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const faqColumns = useMemo(() => {
    const columns: (typeof faqData)[] = [[], [], []]
    faqData.forEach((faq, index) => {
      columns[index % 3].push(faq)
    })
    return columns
  }, [])

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
                Before you automate.
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
      </div>
    </section>
  )
}

export default AutomationFaq
