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
      'Browse the open roles on this page, choose the position that fits you, and click Apply Now. Submit your resume and portfolio when relevant — our talent team reviews every application and follows up if there is a match.',
  },
  {
    id: 2,
    question: 'What is the hiring process like?',
    answer:
      'Most roles follow a clear path: application review, an intro call, a skills or portfolio conversation, then a final culture-fit chat with the team. We keep timelines transparent so you always know what comes next.',
  },
  {
    id: 3,
    question: 'Do you offer flexible or hybrid schedules?',
    answer:
      'Yes. We support flexible scheduling options and work-life balance so you can do your best work. Exact arrangements depend on the role — details are shared during the interview process.',
  },
  {
    id: 4,
    question: 'What will I love about working here?',
    answer:
      'Team members get career development, modern tools & technology, recognition & rewards, continuous learning, and a collaborative culture focused on innovation and meaningful impact.',
  },
  {
    id: 5,
    question: 'I do not see a role that fits. Can I still apply?',
    answer:
      'Absolutely. Send an open application through our contact page with your resume and a short note about the work you want to do. We keep strong candidates in mind as new roles open.',
  },
  {
    id: 6,
    question: 'What kind of experience do you look for?',
    answer:
      'We value craft, curiosity, and collaboration. Relevant experience helps, but portfolios, side projects, and people who learn quickly and communicate well across design, tech, and marketing stand out too.',
  },
  {
    id: 7,
    question: 'Is there room to grow inside WOW?',
    answer:
      'Yes. WOW is a connected ecosystem of divisions — you can deepen expertise in your lane or grow across branding, software, AI, websites, marketing, and business growth with real client work and mentorship.',
  },
  {
    id: 8,
    question: 'How can I join the WOW community before applying?',
    answer:
      'Explore our community for educational content and networking, watch tutorials on YouTube, and follow WOW on LinkedIn for updates and future opportunities — all linked in the Communities section above.',
  },
  {
    id: 9,
    question: 'How long does it take to hear back after applying?',
    answer:
      'We aim to respond within one to two weeks. Strong matches often hear sooner. High-volume periods can take a little longer, but every application is reviewed carefully.',
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
        <div className="mb-10 flex flex-col items-center justify-center gap-x-10 gap-y-4 md:mb-20">
          <div>
            <RevealWrapper>
           <div className='text-center'>   <SectionLabel className="mb-5">Careers FAQ</SectionLabel></div>
            </RevealWrapper>

            <TextAppearAnimation>
              <h2 className="text-appear text-[48px] font-medium leading-[1.05] tracking-[-0.055em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px]">
                <span className="block font-outfit font-[300px]">Frequently Asked Questions</span> 
              </h2>
            </TextAppearAnimation>
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
