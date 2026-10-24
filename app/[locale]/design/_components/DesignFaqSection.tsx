'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useMemo, useState } from 'react'
import { DESIGN_FAQ_DEFAULT_OPEN_ID, DESIGN_FAQ_HEADER, DESIGN_FAQS } from './design-content'

export default function DesignFaqSection() {
  const faqItems = DESIGN_FAQS
  const header = DESIGN_FAQ_HEADER
  const [activeAccordion, setActiveAccordion] = useState<number | null>(DESIGN_FAQ_DEFAULT_OPEN_ID)

  const faqColumns = useMemo(() => {
    const columns: Array<Array<(typeof DESIGN_FAQS)[number]>> = [[], [], []]
    faqItems.forEach((faq, index) => {
      columns[index % 3].push(faq)
    })
    return columns
  }, [faqItems])

  const toggleAccordion = (id: number) => {
    setActiveAccordion((prevActive) => (prevActive === id ? null : id))
  }

  return (
    <section className="relative overflow-hidden px-3 md:px-4">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-8 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-5">{header.sectionLabel}</SectionLabel>
            </RevealWrapper>

            <h2 className="text-[48px] font-light leading-[1.05] tracking-[-0.055em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] sm:text-[64px] md:text-[76px] lg:text-[58px] xl:text-[72px]">
              <TextAppearAnimation>
                <span className="text-appear block font-normal">
                  {header.titleBefore} <InstrumentText>{header.titleAccent}</InstrumentText>
                </span>
              </TextAppearAnimation>
            </h2>
          </div>

          <div className="max-w-[420px] lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-base leading-relaxed text-[#808080] transition-colors duration-300 md:text-lg">
                {header.description}
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-6 flex justify-end md:mt-8">
              <ButtonComponentList>
                <ButtonComponent href={header.viewAllHref} variant="white">
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
