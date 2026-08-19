import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { partnershipTypes } from '../_data/partners'

/** Layout: Home-02 ProcessV2 — 4 equal hover cards. */
const HowWePartner = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="" aria-hidden="true" />
      </div>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-4 md:mb-5">
              <SectionLabel>PARTNERSHIP MODELS</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">Different ways to grow together.</h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] md:place-self-end md:text-right">
                We build partnerships around shared value, complementary expertise, and better outcomes for clients.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <RevealWrapper className="grid grid-cols-12 items-center justify-center gap-[1px]">
          {partnershipTypes.map((type) => (
            <div
              key={type.id}
              className="group col-span-full min-h-[320px] bg-backgroundBody px-7 pb-4 pt-7 backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary max-sm:border-x max-sm:border-t max-sm:border-dark/5 sm:col-span-6 md:min-h-[400px] md:px-10 md:pb-16 md:pt-10 lg:col-span-4 xl:col-span-3"
            >
              <h4 className="pb-3 leading-[1.2] transition-colors duration-300 dark:group-hover:text-secondary md:mb-4">
                {type.title}
              </h4>
              <p className="text-[17px] italic leading-[25.5px] text-[#000000b3] transition-colors duration-300 dark:text-dark-100 dark:group-hover:text-dark-200">
                {type.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HowWePartner
