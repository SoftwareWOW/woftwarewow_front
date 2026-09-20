import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import { mapMarkdownBlogCard } from '@/lib/blog/markdown'
import type { BlogCard } from '@/lib/blog/types'
import {
  loadBlogPostBySlug,
  loadBlogPostFeed,
  loadBlogPostSlugs,
} from '@/lib/strapi/load-blog-post'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

import BlogDetailsContent from '../_components/BlogDetailsContent'
import BlogDetailsHero from '../_components/BlogDetailsHero'

export const revalidate = 60
export const dynamicParams = true

type PageProps = {
  params: Promise<{ slug: string; locale: string }>
}

function loadMarkdownBlog(slug: string): BlogCard | null {
  try {
    const blog = getMarkDownContent('data/blogsV2/', slug)
    return mapMarkdownBlogCard(blog.data as Record<string, unknown>, blog.content)
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const blogs = getMarkDownData('data/blogsV2') as Array<{ slug: string }>
  const slugSet = new Set(blogs.map((blog) => blog.slug))

  try {
    const cmsSlugs = await loadBlogPostSlugs('en-US')
    cmsSlugs.forEach((slug) => slugSet.add(slug))
  } catch {
    // Strapi unavailable at build time — markdown slugs only
  }

  return Array.from(slugSet, (slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const cms = await loadBlogPostBySlug(slug, locale as Locale)

  if (cms?.seo?.title || cms?.seo?.description) {
    return {
      title: cms.seo.title,
      description: cms.seo.description,
    }
  }

  const markdown = loadMarkdownBlog(slug)
  if (markdown?.title) {
    return {
      title: `${markdown.title} | Blog`,
      description: markdown.description,
    }
  }

  return { title: 'Blog' }
}

const BlogDetails = async ({ params }: PageProps) => {
  const { slug, locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const cms = await loadBlogPostBySlug(slug, typedLocale)
  const feedPosts = await loadBlogPostFeed(typedLocale)

  const markdownPosts = (getMarkDownData('data/blogsV2') as Record<string, unknown>[]).map(
    (blog) => mapMarkdownBlogCard(blog),
  )

  const allPosts = feedPosts.length ? feedPosts : markdownPosts
  const post = cms?.post ?? loadMarkdownBlog(slug)

  if (!post) notFound()

  const restBlogPosts = allPosts.filter((item) => item.slug !== slug)

  return (
    <LayoutOne>
      <BlogDetailsHero
        badgeTitle="Blog Details"
        title={post.title}
        description={post.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogDetailsContent post={post} restBlogPosts={restBlogPosts} />
      <WowGrowthCta
        accentText="Ready to"
        mainText="Grow?"
        ariaLabel="Contact WOW Superagency"
      />
    </LayoutOne>
  )
}

export default BlogDetails
