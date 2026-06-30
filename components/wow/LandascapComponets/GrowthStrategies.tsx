'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import topArrowDark from '@/public/images/icons/top-arrow-dark.svg'
import Image from 'next/image'
import Link from 'next/link'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

const articles = [
  {
    id: 1,
    date: 'JUNE 7, 2026',
    title: 'What Is a Superagency — and Why Growing Businesses Need One in 2026',
    description:
      'Why fragmented vendors slow growth — and how an integrated partner helps you move faster with fewer blind spots.',
    thumbnail: '/images/wow/Hero/Growth/image (1).png',
    href: '/ai-blog',
  },
  {
    id: 2,
    date: 'JUNE 7, 2026',
    title: 'How AI Personalization Improves Your Website Without Adding Complexity',
    description:
      'Practical ways to use AI for better content, smarter experiences, and stronger conversions — without rebuilding everything.',
    thumbnail: '/images/wow/Hero/Growth/image (2).png',
    href: '/ai-blog',
  },
  {
    id: 3,
    date: 'JUNE 7, 2024',
    title: 'From Social Media to CRM: Building a Sales Funnel That Actually Converts',
    description:
      'How to connect awareness, engagement, and follow-up into one system that turns interest into revenue.',
    thumbnail: '/images/wow/Hero/Growth/image (2).png',
    href: '/ai-blog',
  },
]

const GrowthStrategies = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 py-3 transition-colors duration-300 dark:bg-background md:px-4 md:py-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <TextAppearAnimation>
            <div>
              <h2 className="text-appear max-w-[640px] font-normal leading-[1.1] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                Insights, Trends &amp;{' '}
                <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                  Growth Strategies
                </span>
              </h2>
            </div>
          </TextAppearAnimation>

          <RevealWrapper className="max-w-[420px] lg:text-right">
            <p className="text-base leading-relaxed text-[#808080] transition-colors duration-300">
              Practical ideas on marketing, technology, AI, and business growth — written for owners who want clarity,
              not jargon.
            </p>
            <ButtonComponentList className="mt-6 flex justify-center lg:justify-end">
              <ButtonComponent href="/ai-blog" variant="secondary" size="sm">
                View All Articles
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="divide-y divide-[#e5e5e5] dark:divide-white/10">
          {articles.map((article) => (
            <RevealWrapper
              key={article.id}
              className="group flex flex-col gap-6 py-8 first:pt-0 last:pb-0 transition-all duration-300 hover:bg-white/30 hover:px-4 hover:py-8 hover:-mx-4 hover:rounded-radius-sm dark:hover:bg-dark/30 md:flex-row md:items-center md:gap-10 lg:gap-14"
            >
              <Link
                href={article.href}
                className="block w-full shrink-0 overflow-hidden rounded-radius-sm border border-[#e5e5e5] shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:shadow-none md:w-[280px] lg:w-[340px]"
              >
                <Image
                  src={article.thumbnail}
                  alt=""
                  width={340}
                  height={220}
                  className="aspect-[340/220] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <span className="mb-3 inline-flex w-fit rounded-radius-sm bg-[#f0f0f0] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#808080] dark:bg-white/10 dark:text-[#808080]">
                  {article.date}
                </span>

                <Link href={article.href}>
                  <h3 className="mb-2 max-w-3xl text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-[1.25] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:hover:text-[#b794f4]">
                    {article.title}
                  </h3>
                </Link>

                <p className="mb-4 max-w-3xl text-sm leading-relaxed text-[#808080] transition-colors duration-300 md:text-base">
                  {article.description}
                </p>

                <ButtonComponentList className="flex justify-start">
                  <ButtonComponent href={article.href} variant="secondary" size="sm">
                    Read More
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GrowthStrategies