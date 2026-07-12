'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useState } from 'react'
import { meetSectionClass, meetSectionInnerClass } from './meetSectionSpacing'

const faqItems = [
  {
    id: 1,
    question: 'What happens after scheduling?',
    answer:
      'You will receive a confirmation email with your meeting details and a Google Meet link. Our team will review your information beforehand so we can make the most of your consultation.',
  },
  {
    id: 2,
    question: 'Is the meeting free?',
    answer:
      'Yes. Your initial consultation is completely free with no obligation. It is an opportunity to understand your goals and explore how we can help.',
  },
  {
    id: 3,
    question: 'Can I reschedule?',
    answer:
      'Absolutely. Use the reschedule link in your confirmation email to pick a new time that works better for you.',
  },
  {
    id: 4,
    question: 'What should I prepare?',
    answer:
      'Come with a brief overview of your business, current challenges, and goals. Any existing website, branding, or project notes are helpful but not required.',
  },
]

export default function MeetFaq() {
  const [activeId, setActiveId] = useState<number | null>(1)

  return (
    <section className={meetSectionClass} aria-labelledby="meet-faq-heading">
      <div className={meetSectionInnerClass}>
        <RevealWrapper className="mb-10 text-center md:mb-14">
          <SectionLabel className="mb-5">FAQ</SectionLabel>
          <h2
            id="meet-faq-heading"
            className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]"
          >
            Common <span className="font-instrument italic">Questions</span>
          </h2>
        </RevealWrapper>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {faqItems.map((faq) => {
            const isActive = activeId === faq.id

            return (
              <RevealWrapper key={faq.id}>
                <div
                  className={`faq-body-transition relative flex w-full cursor-pointer flex-col border px-6 pb-6 pt-6 duration-300 dark:bg-dark ${
                    isActive
                      ? 'open active border-black dark:border-white'
                      : 'border-black/10 dark:border-white/10'
                  }`}
                  data-active={isActive}
                  onClick={() => setActiveId(isActive ? null : faq.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setActiveId(isActive ? null : faq.id)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                >
                  <h3 className="text-left text-[20px] font-normal tracking-normal md:text-[22px] md:leading-[30px]">
                    {faq.question}
                  </h3>
                  <div
                    className={`grid transition-all duration-[400ms] ease-in-out ${
                      isActive ? 'mt-5 grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-left text-base leading-relaxed text-[#808080]">{faq.answer}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-end pt-5">
                    <div
                      className={`accordion-header-iconV4 !relative !bottom-auto !right-auto aspect-square shrink-0 !rounded-full transition-transform duration-[400ms] dark:border-dark ${
                        isActive ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
