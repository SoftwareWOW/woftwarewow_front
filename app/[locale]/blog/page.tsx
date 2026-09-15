import BlogHero, { type BlogHeroPost } from '@/app/[locale]/blog/_components/BlogHero'

import type { Locale } from '@/i18n/config'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

const PAGE_SLUG = 'blog' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Blog',
  title: 'Insights That Help Businesses Grow',
  description:
    'Practical ideas, expert perspectives, and emerging trends across technology, marketing, AI, websites, and business growth.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Blog' })
}

import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import getMarkDownData from '@/utils/GetMarkDownData'
import BlogCaseStudies from './_components/BlogCaseStudies'
import BlogInsight from './_components/BlogInsight'

export interface BlogType {
  slug: string
  content: string
  title?: string
  description?: string
  date?: string
  thumbnail?: string
  featureImage?: string
  tags?: string | string[]
  author?: {
    name: string
    avatar: string
  }
  [key: string]: any
}

const loadedBlogs: BlogType[] = getMarkDownData('data/blogsV2') as BlogType[]
const featuredBlog = (loadedBlogs.find((blog) => blog.slug === 'the-new-era-of-digital-advertising') ??
  loadedBlogs[0]) as unknown as BlogHeroPost

const BlogPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  const featuredPost: BlogHeroPost = {
    ...featuredBlog,
    title: hero.title ?? featuredBlog.title,
    description: hero.description ?? featuredBlog.description,
  }

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <BlogHero blog={featuredPost} />
        <Marquess />
        <BlogInsight Blogs={loadedBlogs} {...(sections.blogInsight ?? {})} />
        <BlogCaseStudies blogs={loadedBlogs} {...(sections.blogCaseStudies ?? {})} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default BlogPage
