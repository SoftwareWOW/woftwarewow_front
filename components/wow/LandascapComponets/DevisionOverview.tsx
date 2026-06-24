'use client'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'

const divisions = [
  {
    id: 1,
    title: 'SoftwareWOW!',
    description: 'Custom software, mobile apps, and digital products engineered to scale with your ambitions.',
  },
  {
    id: 2,
    title: 'WOW Marketing',
    description: 'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
  },
  {
    id: 3,
    title: 'WOW Design',
    description: 'Brand identity and visual systems that make your business impossible to forget.',
  },
  {
    id: 4,
    title: 'WOW Intelligence',
    description: 'AI-powered insights and automation that sharpen strategy and accelerate results.',
  },
  {
    id: 5,
    title: 'WOW Social',
    description: 'Social strategy and community management that transforms followers into loyal advocates.',
  },
  {
    id: 6,
    title: 'WOW Accelerate',
    description: 'Growth programs and coaching designed to fast-track your business to its next milestone.',
  },
  {
    id: 7,
    title: 'WOW Websites',
    description: 'High-performance websites built for speed, search visibility, and conversion.',
  },
  {
    id: 8,
    title: 'WOW Impact',
    description: 'Purpose-led initiatives and giving programs that amplify your brand and community reach.',
  },
  {
    id: 9,
    title: 'WOW Host',
    description: 'Secure, reliable hosting and infrastructure that keeps your business online around the clock.',
  },
  {
    id: 10,
    title: 'WOW Hub',
    description: 'A centralized command center for tools, training, and seamless team collaboration.',
  },
]

const DevisionOverview = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 0,
  })

  return (
    <section
      ref={triggerRef}
      className="service-section overflow-hidden bg-[#CBE8DF] pb-14 pt-14 transition-colors duration-300 dark:bg-dark-300 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
      aria-labelledby="divisions-heading">
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-3 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <TextAppearAnimation>
              <h2
                id="divisions-heading"
                className="text-appear text-left text-secondary dark:text-backgroundBody max-md:text-3xl max-sm:text-3xl">
                Ten powerful divisions.{' '}
                <span className="font-instrument italic text-secondary dark:text-backgroundBody">
                  One connected ecosystem.
                </span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-secondary/70 dark:text-backgroundBody/70">
                WOW Superagency unites specialized teams—marketing, design, technology, AI, and more—under one
                coordinated strategy. Get world-class expertise without the complexity of managing multiple vendors.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-7 md:mt-14">
              <Link
                href="/services"
                className="rv-button rv-button-white mx-auto block w-full text-center md:inline-block md:w-auto"
                aria-label="Explore the WOW Superagency ecosystem">
                <div className="rv-button-top">
                  <span>Explore the Ecosystem</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Explore the Ecosystem</span>
                </div>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="service-wrapper mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10"
        aria-label="WOW Superagency divisions">
        {divisions.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-1 flex-col gap-4 rounded-none border-t border-t-secondary bg-backgroundBody px-5 py-14 dark:border-t-primary dark:bg-black md:w-[370px] md:flex-row md:gap-[22px] md:px-[25px] md:py-[70px]">
            <div aria-hidden="true">
              <p className="font-instrument text-5xl font-normal leading-[64px] text-black dark:text-white max-md:text-3xl">
                {String(item.id).padStart(2, '0')}
              </p>
            </div>
            <div className="space-y-4 md:space-y-8">
              <h3 className="font-normal leading-[110%] tracking-[-1.08px] text-black dark:text-white max-md:text-2xl md:max-w-[200px] md:text-4xl">
                {item.title}
              </h3>
              <p className="text-base font-normal leading-6 tracking-[0.32px] text-colorText dark:text-backgroundBody/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DevisionOverview
