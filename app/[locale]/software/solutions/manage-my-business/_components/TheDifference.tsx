'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const comparisons = [
  {
    before: 'Information scattered across tools',
    after: 'Information easier to access',
    detail: 'Bring important business data into connected workflows and interfaces.',
  },
  {
    before: 'Manual handoffs between teams',
    after: 'Clearer workflow ownership',
    detail: 'Define who does what—and let systems route work automatically.',
  },
  {
    before: 'Duplicate data entry everywhere',
    after: 'One source of operational truth',
    detail: 'Reduce retyping and errors when platforms share the same core data.',
  },
  {
    before: 'Slow approval cycles',
    after: 'Faster decisions with visibility',
    detail: 'Notifications and dashboards keep leaders informed without chasing updates.',
  },
  {
    before: 'Tools that do not scale with growth',
    after: 'Systems that grow with your business',
    detail: 'Build flexible platforms that adapt as teams, customers, and processes expand.',
  },
]

const total = String(comparisons.length).padStart(2, '0')

/** Layout: homepage-04/TestimonialV5 */
const TheDifference = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container relative">
        <div className="mb-9 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Difference</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Less friction. <InstrumentText>More momentum.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl">
              The goal isn&apos;t to add more software to your business. It&apos;s to make the technology you use more
              useful.
            </p>
          </TextAppearAnimation>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          navigation={{
            prevEl: '.manage-business-difference-prev',
            nextEl: '.manage-business-difference-next',
          }}
          speed={1500}
          allowTouchMove
          autoplay={{
            delay: 3700,
            disableOnInteraction: false,
          }}
        >
          {comparisons.map((item, index) => (
            <SwiperSlide key={item.before}>
              <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                <div className="flex-1 rounded-radius-md border p-8 dark:border-dark">
                  <p className="mb-5 text-sm uppercase leading-[1.6] tracking-[0.96px]">Before</p>
                  <p className="text-2xl leading-[1.1]">{item.before}</p>
                </div>
                <div className="flex-1 rounded-radius-md border border-secondary bg-secondary p-8 dark:border-backgroundBody dark:bg-backgroundBody">
                  <p className="mb-5 text-sm uppercase leading-[1.6] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    After
                  </p>
                  <p className="text-2xl leading-[1.1] text-backgroundBody dark:text-secondary">{item.after}</p>
                  <p className="mt-5 text-lg leading-[1.6] tracking-[0.36px] text-backgroundBody/70 dark:text-secondary/70">
                    {item.detail}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-[1.6]">
                {String(index + 1).padStart(2, '0')} / {total}
              </p>
            </SwiperSlide>
          ))}
          <div className="absolute bottom-0 right-0 z-50">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                aria-label="Previous comparison"
                className="manage-business-difference-prev rounded-radius-sm border bg-backgroundBody p-1.5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary md:p-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M12.9417 16.5621C12.9998 16.6201 13.0458 16.6891 13.0773 16.7649C13.1087 16.8408 13.1249 16.9221 13.1249 17.0043C13.1249 17.0864 13.1087 17.1677 13.0773 17.2436C13.0458 17.3194 12.9998 17.3884 12.9417 17.4464C12.8836 17.5045 12.8147 17.5506 12.7388 17.582C12.663 17.6134 12.5816 17.6296 12.4995 17.6296C12.4174 17.6296 12.3361 17.6134 12.2602 17.582C12.1843 17.5506 12.1154 17.5045 12.0573 17.4464L5.80733 11.1964C5.74922 11.1384 5.70312 11.0695 5.67167 10.9936C5.64021 10.9177 5.62402 10.8364 5.62402 10.7543C5.62402 10.6721 5.64021 10.5908 5.67167 10.5149C5.70312 10.439 5.74922 10.3701 5.80733 10.3121L12.0573 4.06207C12.1746 3.94479 12.3337 3.87891 12.4995 3.87891C12.6654 3.87891 12.8244 3.94479 12.9417 4.06207C13.059 4.17934 13.1249 4.3384 13.1249 4.50425C13.1249 4.67011 13.059 4.82917 12.9417 4.94644L7.13311 10.7543L12.9417 16.5621Z"
                    className="fill-secondary dark:fill-backgroundBody"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next comparison"
                className="manage-business-difference-next rounded-radius-sm border bg-backgroundBody p-1.5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary md:p-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M14.1925 11.1964L7.94254 17.4464C7.88447 17.5045 7.81553 17.5506 7.73966 17.582C7.66379 17.6134 7.58247 17.6296 7.50035 17.6296C7.41823 17.6296 7.33691 17.6134 7.26104 17.582C7.18517 17.5506 7.11623 17.5506 7.05816 17.4464C7.00009 17.3884 6.95403 17.3194 6.9226 17.2436C6.89117 17.1677 6.875 17.0864 6.875 17.0043C6.875 16.9221 6.89117 16.8408 6.9226 16.7649C6.95403 16.6891 7.00009 16.6201 7.05816 16.5621L12.8668 10.7543L7.05816 4.94644C6.94088 4.82917 6.875 4.67011 6.875 4.50425C6.875 4.3384 6.94088 4.17934 7.05816 4.06207C7.17544 3.94479 7.3345 3.87891 7.50035 3.87891C7.6662 3.87891 7.82526 3.94479 7.94254 4.06207L14.1925 10.3121C14.2506 10.3701 14.2967 10.439 14.3282 10.5149C14.3597 10.5908 14.3758 10.6721 14.3758 10.7543C14.3758 10.8364 14.3597 10.9177 14.3282 10.9936C14.2967 11.0695 14.2506 11.1384 14.1925 11.1964Z"
                    className="fill-secondary dark:fill-backgroundBody"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default TheDifference
