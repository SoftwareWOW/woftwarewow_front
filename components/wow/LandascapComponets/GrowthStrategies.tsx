'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import topArrowDark from '@/public/images/icons/top-arrow-dark.svg'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    date: 'JUNE 7, 2026',
    title: 'What Is a Superagency — and Why Small Businesses Need One in 2026',
    thumbnail: '/images/blog-img/blogV3-img-1.png',
    href: '/ai-blog',
  },
  {
    id: 2,
    date: 'JUNE 7, 2026',
    title: 'How AI Personalization Can Improve Your Website Experience Without Extra Complexity',
    thumbnail: '/images/blog-img/blogV3-img-2.png',
    href: '/ai-blog',
  },
  {
    id: 3,
    date: 'JUNE 7, 2024',
    title: 'From Social Media to CRM: Building a Better Sales Funnel for Growing Businesses',
    thumbnail: '/images/blog-img/blogV3-img-3.png',
    href: '/ai-blog',
  },
]

const GrowthStrategies = () => {
  return (
    <section className="overflow-hidden bg-secondary pb-14 pt-14 transition-colors duration-300 dark:bg-black md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear max-w-[640px] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-backgroundBody">
              Insights, Trends &amp; Growth Strategies
            </h2>
          </TextAppearAnimation>

          <RevealWrapper className="max-w-[420px] lg:text-right">
            <p className="text-base leading-relaxed text-backgroundBody/70 dark:text-white/60">
              Explore practical advice, industry trends, marketing strategies, AI innovations, and business growth
              insights.
            </p>
            <Link
              href="/ai-blog"
              className="rv-button rv-button-white mt-6 inline-block border border-backgroundBody/30 bg-transparent dark:border-white/30">
              <div className="rv-button-top !bg-transparent !text-backgroundBody dark:!text-white">
                <span className="text-xs uppercase tracking-[0.15em]">View All Articles</span>
              </div>
              <div className="rv-button-bottom !bg-transparent !text-backgroundBody dark:!text-white">
                <span className="text-xs uppercase tracking-[0.15em]">View All Articles</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>

        <div className="divide-y divide-backgroundBody/10 dark:divide-white/10">
          {articles.map((article) => (
            <RevealWrapper
              key={article.id}
              className="group flex flex-col gap-6 py-10 first:pt-0 last:pb-0 md:flex-row md:items-center md:gap-10 lg:gap-14">
              <Link
                href={article.href}
                className="block w-full shrink-0 overflow-hidden rounded-lg md:w-[280px] lg:w-[340px]">
                <Image
                  src={article.thumbnail}
                  alt=""
                  width={340}
                  height={220}
                  className="aspect-[340/220] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <span className="mb-4 inline-flex w-fit rounded-full bg-backgroundBody/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-backgroundBody/80 dark:bg-white/10 dark:text-white/70">
                  {article.date}
                </span>

                <Link href={article.href}>
                  <h3 className="mb-6 max-w-3xl text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-[1.25] tracking-[-0.02em] text-backgroundBody transition-colors hover:text-primary dark:hover:text-[#b794f4]">
                    {article.title}
                  </h3>
                </Link>

                <Link
                  href={article.href}
                  className="rv-button rv-button-white inline-flex w-fit border border-backgroundBody/30 bg-transparent dark:border-white/30">
                  <div className="rv-button-top flex items-center !bg-transparent !text-backgroundBody dark:!text-white">
                    <span className="pr-2 text-xs uppercase tracking-[0.12em]">Read More</span>
                    <Image src={topArrowDark} alt="" width={14} height={14} aria-hidden />
                  </div>
                  <div className="rv-button-bottom flex items-center !bg-transparent !text-backgroundBody dark:!text-white">
                    <span className="pr-2 text-xs uppercase tracking-[0.12em]">Read More</span>
                    <Image src={topArrowDark} alt="" width={14} height={14} aria-hidden />
                  </div>
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GrowthStrategies
