import BlogHero from '@/app/[locale]/blog/_components/BlogHero'
import BlogPostV5 from '@/components/blogpage/BlogPostV5'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'AI Blog',
}

export interface BlogType {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlogs: BlogType[] = getMarkDownData('data/blogsV2')
const featuredBlog = loadedBlogs.find((blog) => blog.slug === 'the-new-era-of-digital-advertising') ?? loadedBlogs[0]

const BlogPage = () => {
  return (
    <LayoutOne>
      <BlogHero blog={featuredBlog} />
         <Marquess/>
      {/* <PageHero
        badgeTitle="Blog"
        title="What we got to say"
        italicTitle=""
        description="These alternatives can add a different tone or emphasis depending on how you want  to introduce your creative team. Let me know if you'd like any specific adjustments!"
      /> */}
      <BlogPostV5 Blogs={loadedBlogs} />
      <WowGrowthCta />
    </LayoutOne>
  )
}

export default BlogPage
