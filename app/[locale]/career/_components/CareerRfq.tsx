'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useMemo, useState } from 'react'

const INITIAL_VISIBLE_COUNT = 6

const faqData = [
  {
    id: 1,
    question: 'How do I apply for a role at WOW Superagency?',
    answer:
      'Browse our open positions below, open the role that fits you, and submit your application with your resume and portfolio (when relevant). Our talent team reviews every application and reaches out if there is a match.',
  },
  {
    id: 2,
    question: 'What is the hiring process like?',
    answer:
      'Most roles follow a short process: application review, an intro call, a skills or portfolio conversation, and a final culture fit chat with the team. We keep timelines clear so you always know what comes next.',
  },
  {
    id: 3,
    question: 'Do you offer remote or hybrid work?',
    answer:
      'Yes. Depending on the role, we offer hybrid and remote-friendly setups. We prioritize collaboration and outcomes — whether you are in the office a few days a week or working remotely.',
  },
  {
    id: 4,
    question: 'What benefits do team members receive?',
    answer:
      'We offer competitive health benefits, learning & development support, performance bonuses, mental health resources, modern tools, and generous time off. Exact benefits can vary by location and role.',
  },
  {
    id: 5,
    question: 'I do not see a role that fits. Can I still apply?',
    answer:
      'Absolutely. Send an open application through our contact page with your resume and a short note about the kind of work you want to do. We keep strong candidates in mind as new roles open.',
  },
  {
    id: 6,
    question: 'What kind of experience do you look for?',
    answer:
      'We care about craft, curiosity, and collaboration. Relevant experience helps, but we also value portfolios, side projects, and people who learn quickly and communicate well across disciplines.',
  },
  {
    id: 7,
    question: 'Is there room to grow inside WOW?',
    answer:
      'Yes. Because WOW is a connected ecosystem of divisions, you can deepen expertise in your lane or grow across design, marketing, technology, and AI — with mentorship and real client work.',
  },
  {
    id: 8,
    question: 'Do you hire internationally?',
    answer:
      'We hire where we can support strong collaboration and compliance. Availability depends on the role, so check the job listing or ask our team during the intro call.',
  },
  {
    id: 9,
    question: 'How long does it take to hear back after applying?',
    answer:
      'We aim to respond within one to two weeks. If a role is a strong fit, you will hear sooner. High volume periods can take a little longer, but every application is reviewed.',
  },
  {
    id: 10,
    question: 'Who can I contact with career questions?',
    answer:
      'Reach out through our contact form or book a conversation from the careers page. Mention the role you are interested in and we will connect you with the right person on the talent team.',
  },
]

const CareerRfq = () => {
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
              <SectionLabel className="mb-5">Careers FAQ</SectionLabel>
            </RevealWrapper>

            <TextAppearAnimation>
              <h2 className="text-appear text-[48px] font-medium leading-[1.05] tracking-[-0.055em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
                <span className="block font-instrument italic font-normal tracking-[-0.06em]">People</span> <br />
                <span className="block font-normal">Asked Us</span>
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="max-w-[420px] lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-base leading-relaxed text-[#808080] transition-colors duration-300 md:text-lg">
                Answers to common questions about hiring, benefits, remote work, and growing your career at WOW
                Superagency.
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
                    className={`accordion-itemV4 faq-body-transition relative flex w-full cursor-pointer flex-col border dark:bg-dark px-6 pb-6 pt-6 duration-300 ${
                      activeAccordion === faq.id
                        ? 'open active border-black dark:border-white'
                        : 'border-black/10 dark:border-white/10'
                    }`}
                    data-active={activeAccordion === faq.id ? true : false}
                    onClick={() => toggleAccordion(faq.id)}>
                    <h3 className="text-[23px] font-normal tracking-normal md:text-[25px] md:leading-[34.2px]">
                      {faq.question}
                    </h3>
                    <div
                      className={`grid transition-all duration-[400ms] ease-in-out ${
                        activeAccordion === faq.id ? 'mt-6 grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}>
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

export default CareerRfq
