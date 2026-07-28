import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import Link from 'next/link'
import { FC } from 'react'

interface BlogDataType {
  slug: string
  content: string
  [key: string]: any
}

interface BlogListProps {
  blogData: BlogDataType[]
}

const BlogDetailsList: FC<BlogListProps> = ({ blogData }) => {
  if (!blogData?.length) return null

  return (
    <RevealWrapper className="grid grid-cols-1 items-stretch justify-items-center gap-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
      {blogData.map((item) => (
        <RevealWrapper key={item.slug} className="group mx-auto flex w-full flex-col xl:max-w-[370px]">
          <Link href={`/blog/${item.slug}`}>
            <figure className="mb-6 overflow-hidden xl:aspect-[370/399] rounded-radius-sm">
              <img
                src={item.thumbnail || item.featureImage || '/images/blog-img/blog-img-5.png'}
                alt={item.title ?? 'Blog post'}
                className="h-full w-full object-cover transition-all duration-500 hover:scale-125"
              />
            </figure>
          </Link>

          <div className="blog-title">
            <Link href={`/blog/${item.slug}`}>
              <h3 className="text-[27px] leading-tight tracking-tight md:text-3xl lg:text-4xl">
                {item.title}
              </h3>
            </Link>
            <p className="font-poppins mb-5 mt-3 text-lg font-normal leading-[1.4] tracking-[0.4px] md:mb-10 md:mt-5">
              {item.description}
            </p>
            <ButtonComponent href={`/blog/${item.slug}`} variant="white">
              3 Minute Read
            </ButtonComponent>
          </div>
        </RevealWrapper>
      ))}
    </RevealWrapper>
  )
}

export default BlogDetailsList
