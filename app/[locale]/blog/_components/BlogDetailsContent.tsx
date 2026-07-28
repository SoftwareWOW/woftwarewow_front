import RevealWrapper from '@/components/animation/RevealWrapper'
import TableOfContent from '@/components/shared/TableOfContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import BlogDetailsList from './BlogDetailsList'
import BlogShareButtons from './BlogShareButtons'

interface RestOfTheBlogType {
  slug: string
  content: string
  [key: string]: any
}

const blogs: RestOfTheBlogType[] = getMarkDownData('data/blogsV2')

const BlogDetailsContent = ({ blog, slug }: { blog: any; slug?: string }) => {
  const currentSlug = slug ?? blog?.data?.slug
  const RestBlogData = blogs.filter((item) => item.slug !== currentSlug).slice(0, 3)
  const headings = blog.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <RevealWrapper as="figure" className="reveal-me w-full 2xl:max-h-[523px]">
          <Image
            src={blog?.data?.thumbnail || blog?.data?.featureImage || '/images/blog-img/blog-img-5.png'}
            width={1280}
            height={523}
            alt={blog?.data?.title || 'Blog Details'}
            className="w-full object-cover"
          />
        </RevealWrapper>

        <div className="mt-12 flex flex-col justify-start gap-10 pb-14 md:mt-[60px] md:pb-16 lg:flex-row lg:pb-[88px] xl:pb-[100px]">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-24 max-md:mb-10">
              <TableOfContent tableOfContents={tableOfContents}>
                <div className="mb-7 mt-10 lg:mt-16 xl:mt-20">
                  <h6>Share This Post</h6>
                </div>
                <BlogShareButtons
                  title={blog?.data?.title || 'Blog post'}
                  description={blog?.data?.description}
                />
              </TableOfContent>
            </div>
          </aside>
          <article className="career-details-body overflow-hidden">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{blog.content}</ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="container overflow-hidden pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px]">
        <BlogDetailsList blogData={RestBlogData} />
      </div>
    </section>
  )
}

export default BlogDetailsContent
