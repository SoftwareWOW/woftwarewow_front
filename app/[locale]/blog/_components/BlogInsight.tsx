'use client'

import { BlogType } from '@/app/[locale]/blog/page'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'

import ButtonComponent from '@/components/wow/shared/ButtonComponent'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useMemo, useState } from 'react'

interface BlogsProps {
  Blogs: BlogType[]
}

const CATEGORIES = ['ALL', 'NEWS', 'CASE STUDY', 'TECHNOLOGY', 'EVENT'] as const
type Category = (typeof CATEGORIES)[number]

const INITIAL_COUNT = 4
const LOAD_MORE_COUNT = 4

function getBlogTags(blog: BlogType): string[] {
  if (!blog.tags) return []
  if (Array.isArray(blog.tags)) return blog.tags.map(String)
  return String(blog.tags)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
}

function resolveCategory(blog: BlogType): Exclude<Category, 'ALL'> {
  const haystack = `${blog.title} ${blog.description ?? ''} ${getBlogTags(blog).join(' ')}`.toLowerCase()

  if (
    /ai|artificial|automation|blockchain|voice|technology|tech|software|personalization|email|video/.test(
      haystack,
    )
  ) {
    return 'TECHNOLOGY'
  }

  if (/event|podcast|conference|webinar/.test(haystack)) {
    return 'EVENT'
  }

  if (/case|project|study|transformation|shift|era|evolution|dynamics/.test(haystack)) {
    return 'CASE STUDY'
  }

  return 'NEWS'
}

function formatDate(date?: string) {
  return date?.toUpperCase?.() ?? date ?? ''
}

type CategorizedBlog = BlogType & { category: Exclude<Category, 'ALL'> }

const BlogInsight: FC<BlogsProps> = ({ Blogs }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [isCollapsing, setIsCollapsing] = useState(false)

  const categorizedBlogs = useMemo<CategorizedBlog[]>(
    () =>
      Blogs.map((blog) => ({
        ...blog,
        category: resolveCategory(blog),
      })),
    [Blogs],
  )

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'ALL') return categorizedBlogs
    return categorizedBlogs.filter((blog) => blog.category === activeCategory)
  }, [activeCategory, categorizedBlogs])

  const visibleBlogs = filteredBlogs.slice(0, visibleCount)
  const hasMore = visibleCount < filteredBlogs.length
  const canToggle = filteredBlogs.length > INITIAL_COUNT
  const showSeeLess = isCollapsing || !hasMore

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category)
    setVisibleCount(INITIAL_COUNT)
    setIsCollapsing(false)
  }

  const handleSeeMoreToggle = () => {
    if (showSeeLess) {
      const nextCount = Math.max(visibleCount - LOAD_MORE_COUNT, INITIAL_COUNT)
      setVisibleCount(nextCount)
      if (nextCount <= INITIAL_COUNT) setIsCollapsing(false)
      return
    }

    const nextCount = Math.min(visibleCount + LOAD_MORE_COUNT, filteredBlogs.length)
    setVisibleCount(nextCount)
    if (nextCount >= filteredBlogs.length) setIsCollapsing(true)
  }

  return (
    <section className="relative overflow-hidden bg-background px-3  transition-colors duration-300 dark:bg-background md:px-4">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Insights header */}
        <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="relative max-w-[560px]">
           
            <TextAppearAnimation>
              <h2 className="text-appear relative text-[clamp(2.75rem,6vw,4.5rem)] font-normal leading-[1.2] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                <span className="font-instrument italic">Insights</span>
                That Help
                <br />
                <span>Businesses Grow</span>
              </h2>
            </TextAppearAnimation>
          </div>

          <RevealWrapper className="relative max-w-[420px] lg:pb-2 lg:text-right">
            <p className="text-base leading-relaxed text-[#808080] transition-colors duration-300">
              Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth.
            </p>
          </RevealWrapper>
        </div>

        {/* Category filter */}
        <RevealWrapper className="mb-8 md:mb-10">
          <div
            role="tablist"
            aria-label="Blog categories"
            className="flex w-full flex-wrap overflow-hidden rounded-radius-sm border border-[#e5e5e5] bg-[#f5f5f5] dark:border-white/10 dark:bg-dark/50 sm:flex-nowrap">
            {CATEGORIES.map((category, index) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`relative flex-1 px-3 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 sm:px-4 sm:py-4 sm:text-xs md:text-[13px] ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-background text-[#0D0D0D] hover:bg-[#8b7cff]/10 dark:text-[#F2F2F2] dark:hover:bg-white/5'
                  } ${index > 0 ? 'border-l border-[#1515151A] dark:border-[#EDF0F51A]' : ''}`}>
                  {category}
                </button>
              )
            })}
          </div>
        </RevealWrapper>

        {/* Blog cards */}
        <div className="flex flex-col gap-5 md:gap-6">
          {visibleBlogs.map((blog) => (
            <RevealWrapper key={blog.slug}>
              <article className="group overflow-hidden rounded-radius-md border border-[#1515151A] bg-background transition-colors duration-300 dark:border-[#EDF0F51A] dark:bg-background">
                <div className="flex flex-col-reverse gap-6 p-5 sm:p-6 lg:flex-row lg:items-stretch lg:gap-10 lg:p-8 xl:p-10">
                  <div className="flex flex-1 flex-col justify-between gap-8">
                    <div>
                      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#808080] sm:text-xs">
                        {formatDate(blog.date)}
                      </p>
                      <Link href={`/blog/${blog.slug}`}>
                        <h3 className="max-w-2xl text-[clamp(1.35rem,2.8vw,2.15rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 group-hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:group-hover:text-[#b794f4]">
                          {blog.title ?? 'Untitled'}
                        </h3>
                      </Link>
                    </div>

                    <div>
                      <ButtonComponent href={`/blog/${blog.slug}`} variant="white" >
                        3 Minute Read
                      </ButtonComponent>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="relative block w-full shrink-0 overflow-hidden rounded-radius-sm border border-[#e5e5e5] dark:border-white/5 lg:w-[42%] lg:max-w-[480px]">
                    <Image
                      src={blog.thumbnail || blog.featureImage || '/images/blog-img/blog-img-5.png'}
                      alt={blog.title ?? 'Blog post'}
                      width={480}
                      height={280}
                      className="aspect-[16/10] h-full w-full rounded-radius-sm object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <p className="py-16 text-center text-base text-[#808080]">No articles in this category yet.</p>
        )}

        {canToggle && (
          <div className="mt-10 flex justify-center md:mt-14">
            <ButtonComponent variant="white" onClick={handleSeeMoreToggle} ariaExpanded={showSeeLess}>
              {showSeeLess ? 'See Less' : 'See More'}
            </ButtonComponent>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogInsight
