'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { useState } from 'react'
import WowButton from '../WowButton'

const faqs = [
  { question: 'What makes WOW Superagency different?', answer: '' },
  { question: 'Do you offer post-launch support?', answer: '' },
  { question: 'What industries do you serve?', answer: '' },
  { question: 'Do I have to pay customs fees or duty on my package?', answer: '' },
  {
    question: 'How much does app development cost?',
    answer:
      'If you need to exchange a product, please contact us within 14 days of receiving your order. We will determine the best course of action and guide you through the process.',
  },
  { question: 'Where can I change or cancel my order?', answer: '' },
]

export default function WowFaq() {
  const [openIndex, setOpenIndex] = useState(4)

  return (
    <section className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1170px]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <TextAppearAnimation>
              <h2 className="text-appear text-[clamp(2rem,4vw,3rem)] font-light">Our Magic</h2>
            </TextAppearAnimation>
            <p className="mt-2 font-instrument text-2xl md:text-3xl">Problems We Can Solve</p>
          </div>
          <RevealWrapper>
            <p className="max-w-[470px] text-base text-colorText dark:text-dark-100">
              When detailing testimonials, it&apos;s important to include key elements that provide context and
              authenticity.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <RevealWrapper
                key={faq.question}
                as="button"
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`rounded-lg border border-secondary/10 bg-white p-6 text-left transition dark:border-dark dark:bg-dark-200 ${
                  isOpen && faq.answer ? 'sm:col-span-1 lg:row-span-2' : ''
                }`}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium leading-snug">{faq.question}</h3>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-backgroundBody text-lg dark:bg-dark">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && faq.answer && (
                  <p className="faq-body-transition mt-4 text-sm leading-relaxed text-colorText duration-300 dark:text-dark-100">
                    {faq.answer}
                  </p>
                )}
              </RevealWrapper>
            )
          })}
        </div>

        <RevealWrapper className="mt-10 flex justify-center">
          <WowButton href="/contact" variant="dark">
            Contact Us
          </WowButton>
        </RevealWrapper>
      </div>
    </section>
  )
}
