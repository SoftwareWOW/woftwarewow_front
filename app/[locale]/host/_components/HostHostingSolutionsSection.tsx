'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Image from 'next/image'
import Link from 'next/link'
import { HOST_HOSTING_SOLUTIONS } from './host-content'

const WhiteArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      d="M4 14L14 4M14 4H6M14 4V12"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function HostHostingSolutionsSection() {
  const section = HOST_HOSTING_SOLUTIONS
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section ref={triggerRef} className="service-section relative overflow-x-hidden overflow-y-visible">
      <div className="container">
        <RevealWrapper className="reveal-me mb-6 flex flex-col gap-6 md:mb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <SectionLabel className="mb-4">{section.eyebrow}</SectionLabel>
            <h2>{section.title}</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#808080] lg:max-w-[470px] lg:text-right">
            {section.description}
          </p>
        </RevealWrapper>
      </div>
      <article
        ref={contentRef}
        className="service-wrapper mt-10 flex flex-col gap-6 overflow-x-hidden overflow-y-visible max-md:px-5 md:mt-16 md:w-fit md:flex-row md:flex-nowrap md:items-start md:pl-[20%] md:pr-10 md:pb-6"
      >
        <div className="grid max-h-[404px] w-[332px] content-between">
          <p className="text-sm uppercase leading-[1.1] tracking-[3px] text-secondary dark:text-backgroundBody">
            {section.eyebrow}
          </p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={97} height={96} viewBox="0 0 97 96" fill="none" aria-hidden>
              <path
                d="M60.5 48L78.5 66M78.5 66L60.5 84M78.5 66H24.5V12"
                className="stroke-secondary dark:stroke-backgroundBody"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {section.services.map((service) => (
          <div
            className="group rounded-radius-sm border p-5 dark:border-dark md:w-[740px] md:p-[30px] lg:w-[890px]"
            key={service.slug}
          >
            <Link href={service.href} className="block w-full">
              <div className="flex w-full flex-col gap-y-7 md:flex-row md:gap-x-12">
                <figure className="relative size-[270px] shrink-0 overflow-hidden rounded-radius-sm">
                  <Image
                    src={service.coverImage}
                    alt={service.title}
                    fill
                    sizes="270px"
                    className="object-cover"
                  />
                </figure>
                <div className="flex min-w-0 flex-1 flex-col justify-between md:min-h-[270px]">
                  <figure className="relative mb-[50px] mt-2 hidden size-20 cursor-pointer self-end overflow-hidden rounded-radius-sm border border-transparent bg-primary p-7 transition-all duration-500 md:block lg:p-8">
                    <WhiteArrowIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0" />
                    <WhiteArrowIcon className="absolute -translate-x-[47px] translate-y-16 opacity-0 transition-all duration-500 group-hover:-translate-y-[3px] group-hover:translate-x-0 group-hover:opacity-100" />
                  </figure>

                  <p className="text-base lg:text-lg">{service.description}</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-4 pt-4 sm:mt-2">
                <h4 className="min-w-0 flex-1 text-[25px] leading-[1.15] lg:text-[46px] lg:leading-[1.1] lg:tracking-[-1.44px]">
                  {service.title}
                </h4>
                <span className="text-5xl font-light leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:tracking-[-2.88px]">
                  {service.number}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </article>
    </section>
  )
}
