import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import {
  loadBlogPostBySlug,
  loadBlogPostFeed,
  loadBlogPostSlugs,
} from '@/lib/strapi/load-blog-post'
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

export async function generateStaticParams() {
  try {
    const cmsSlugs = await loadBlogPostSlugs('en-US')
    return cmsSlugs.map((slug) => ({ slug }))
  } catch {
    return []
  }
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

  if (cms?.post.title) {
    return {
      title: `${cms.post.title} | Blog`,
      description: cms.post.description,
    }
  }

  return { title: 'Blog' }
}

const BlogDetails = async ({ params }: PageProps) => {
  const { slug, locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const cms = await loadBlogPostBySlug(slug, typedLocale)

  if (!cms?.post) notFound()

  const allPosts = await loadBlogPostFeed(typedLocale)
  const restBlogPosts = allPosts.filter((item) => item.slug !== slug)

  return (
    <LayoutOne>
      <BlogDetailsHero
        badgeTitle="Blog Details"
        title={cms.post.title}
        description={cms.post.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogDetailsContent post={cms.post} restBlogPosts={restBlogPosts} />
      <WowGrowthCta
        accentText="Ready to"
        mainText="Grow?"
        ariaLabel="Contact WOW Superagency"
      />
    </LayoutOne>
  )
}

export default BlogDetails
