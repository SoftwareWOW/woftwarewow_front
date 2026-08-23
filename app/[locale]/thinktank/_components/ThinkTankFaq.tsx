'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { meetSectionClass, meetSectionInnerClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'
import { useMemo, useState } from 'react'

const faqData = [
  {
    id: 1,
    question: 'What is a Think Tank session?',
    answer:
      'A Think Tank session is a focused working conversation with our team—not a first-time consultation. We work through a specific challenge, decision, or opportunity related to your project or initiative.',
  },
  {
    id: 2,
    question: 'Who can book a Think Tank session?',
    answer:
      'Think Tank sessions are designed for existing clients and partners who already work with WOW and want to move a specific project, decision, or idea forward with our team.',
  },
  {
    id: 3,
    question: 'What should I bring to the session?',
    answer:
      'Come prepared with one clear focus: a challenge to solve, a decision you need clarity on, or an opportunity you want to explore. Context on your project or initiative helps us make the session productive.',
  },
  {
    id: 4,
    question: 'Can multiple team members join?',
    answer:
      'Yes. You can include colleagues from your side when booking. Share relevant context in the Project / Initiative field so we know who is involved and what you want to accomplish.',
  },
  {
    id: 5,
    question: 'What topics can we discuss?',
    answer:
      'Strategy, technology, marketing, design, AI, websites, growth, delivery, and next-step planning—anything tied to a project or initiative you are actively working on with WOW.',
  },
  {
    id: 6,
    question: 'What happens after the session?',
    answer:
      'You leave with clearer priorities, decisions, and next steps. If additional work is needed, our team will outline recommended follow-up actions and how WOW can support what comes next.',
  },
]

const ThinkTankFaq = () => {
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
    <section className={meetSectionClass}>
      <div className={meetSectionInnerClass}>
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-5">Think Tank FAQ</SectionLabel>
            </RevealWrapper>

            <TextAppearAnimation>
              <h2 className="text-appear text-[48px] font-medium leading-[1.05] tracking-[-0.055em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
                <span className="block font-instrument italic font-normal tracking-[-0.06em]">Questions</span>{' '}
                <br />
                <span className="block font-normal">About Think Tank</span>
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="max-w-[420px] lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-base leading-relaxed text-[#808080] transition-colors duration-300 md:text-lg">
                Answers to common questions about Think Tank sessions, who they are for, and what to expect.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-6 flex justify-end md:mt-8">
              <ButtonComponentList>
                <ButtonComponent href="/faq" variant="white">
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

export default ThinkTankFaq
