'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import bigArrowIcon from '@/public/images/icons/big-arrow-Icon-dark.svg'
import Image from 'next/image'
import { useContactDialogOptional } from '../shared/ContactDialogProvider'

interface WowGrowthCtaProps {
  accentText?: string
  mainText?: string
  ariaLabel?: string
}

const WowGrowthCta = ({
  accentText = 'Ready to',
  mainText = 'Grow?',
  ariaLabel = 'Contact WOW Superagency',
}: WowGrowthCtaProps) => {
  const contactDialog = useContactDialogOptional()

  const handleOpenContact = () => {
    contactDialog?.open()
  }

  return (
    <section className="bg-backgroundBody pb-5 sm:pb-10 md:pb-15 lg:pb-20 dark:bg-secondary">
      <div className="container flex flex-col justify-center gap-y-10 max-md:items-center sm:justify-between md:flex-row">
        <RevealWrapper
          as="h2"
          className="reveal-me text-[46px] font-normal leading-[1.1] max-lg:leading-[1.33] lg:text-[96px] lg:tracking-[-2.88px]"
        >
          <span className="font-instrument italic max-md:mr-4 lg:text-[100px]">
            {accentText}
          </span>

          <br className="hidden md:block" />

          {mainText}
        </RevealWrapper>

        <button
          type="button"
          onClick={handleOpenContact}
          aria-label={ariaLabel}
          className="cursor-pointer border-0 bg-transparent p-0"
        >
          <RevealWrapper className="reveal-me group h-44 w-44 overflow-hidden rounded-radius-sm bg-secondary p-5 dark:bg-primary lg:h-[230px] lg:w-[230px]">
            <figure className="relative h-full w-full rounded-radius-sm bg-primary dark:bg-secondary">
              <Image
                src={bigArrowIcon}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-28 group-hover:translate-x-9 group-hover:opacity-0 max-lg:scale-75"
              />

              <Image
                src={bigArrowIcon}
                alt=""
                aria-hidden="true"
                className="absolute -left-2 top-full inline -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:-translate-y-[105px] group-hover:translate-x-[48%] group-hover:opacity-100 max-lg:scale-75 md:group-hover:-translate-y-32 md:group-hover:translate-x-[80%]"
              />
            </figure>
          </RevealWrapper>
        </button>
      </div>
    </section>
  )
}

export default WowGrowthCta
