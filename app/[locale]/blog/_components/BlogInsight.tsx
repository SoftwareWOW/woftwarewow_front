'use client'

import type { BlogCard, BlogCategoryTab } from '@/lib/blog/types'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'

import ButtonComponent from '@/components/wow/shared/ButtonComponent'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useMemo, useState } from 'react'

interface BlogsProps {
  Blogs: BlogCard[]
  categories?: BlogCategoryTab[]
}

const INITIAL_COUNT = 4
const LOAD_MORE_COUNT = 4

function resolveCategory(blog: BlogCard): string {
  return blog.categoryLabel?.trim().toUpperCase() ?? ''
}

function formatDate(date?: string) {
  return date?.toUpperCase?.() ?? date ?? ''
}

type CategorizedBlog = BlogCard & { category: string }

const BlogInsight: FC<BlogsProps> = ({ Blogs, categories }) => {
  const categoryTabs = useMemo(
    () => [{ label: 'ALL', slug: 'ALL' }, ...(categories ?? [])],
    [categories],
  )

  const [activeCategory, setActiveCategory] = useState('ALL')
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

    const activeTab = categoryTabs.find((tab) => tab.slug === activeCategory)
    if (!activeTab) return categorizedBlogs

    return categorizedBlogs.filter((blog) => {
      if (blog.categorySlug) {
        return blog.categorySlug === activeTab.slug
      }

      return blog.category === activeTab.label.toUpperCase()
    })
  }, [activeCategory, categorizedBlogs, categoryTabs])

  const visibleBlogs = filteredBlogs.slice(0, visibleCount)
  const hasMore = visibleCount < filteredBlogs.length
  const canToggle = filteredBlogs.length > INITIAL_COUNT
  const showSeeLess = isCollapsing || !hasMore

  const handleCategoryChange = (category: string) => {
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
            {categoryTabs.map((category, index) => {
              const isActive = activeCategory === category.slug
              return (
                <button
                  key={category.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`relative flex-1 px-3 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 sm:px-4 sm:py-4 sm:text-xs md:text-[13px] ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-background text-[#0D0D0D] hover:bg-[#8b7cff]/10 dark:text-[#F2F2F2] dark:hover:bg-white/5'
                  } ${index > 0 ? 'border-l border-[#1515151A] dark:border-[#EDF0F51A]' : ''}`}>
                  {category.label.toUpperCase()}
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

                  {(blog.thumbnail || blog.featureImage) ? (
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="relative block w-full shrink-0 overflow-hidden rounded-radius-sm border border-[#e5e5e5] dark:border-white/5 lg:w-[42%] lg:max-w-[480px]">
                      <Image
                        src={blog.thumbnail || blog.featureImage || ''}
                        alt={blog.title ?? 'Blog post'}
                        width={480}
                        height={280}
                        className="aspect-[16/10] h-full w-full rounded-radius-sm object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  ) : null}
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
