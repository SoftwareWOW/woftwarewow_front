import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

import BlogDetailsContent from '../_components/BlogDetailsContent'
import BlogDetailsHero from '../_components/BlogDetailsHero'
import { BlogType } from '../page'

export async function generateStaticParams() {
  const blogs: BlogType[] = getMarkDownData('data/blogsV2')

  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const blog = getMarkDownContent('data/blogsV2/', slug)
  const postBlog = blog.data

  return (
    <LayoutOne>
      <BlogDetailsHero
        badgeTitle="Blog Details"
        title={postBlog.title}
        description={postBlog.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogDetailsContent blog={blog} slug={slug} />
      <WowGrowthCta
        accentText="Ready to"
        mainText="Grow?"
        ariaLabel="Contact WOW Superagency"
      />
    </LayoutOne>
  )
}

export default BlogDetails
