import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'
import Image from 'next/image'

type CommunitiesProps = {
  avatars?: CmsGalleryImage[]
  teamImage?: CmsGalleryImage | null
}

const Communities = ({ avatars, teamImage }: CommunitiesProps = {}) => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mb-12 md:mb-20">
              Learn, Connect & Grow With WOW
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <RevealWrapper className="col-span-full flex flex-col items-stretch gap-6 border p-6 dark:border-dark max-md:gap-y-8 md:flex-row md:items-center md:justify-between md:gap-x-10 md:p-10">
            <div className="flex max-w-[520px] flex-col items-start max-md:w-full">
              {avatars?.length ? (
                <div className="mb-6 flex items-center">
                  {avatars.map((item, index) => (
                    <div
                      key={`${item.src}-${index}`}
                      className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-backgroundBody dark:border-dark sm:size-12"
                      style={{ marginLeft: index === 0 ? 0 : -18, zIndex: index + 1 }}>
                      <Image
                        src={item.src}
                        alt={item.alt ?? `Community member ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ))}
                </div>
              ) : null}

              <h3 className="mb-8 leading-[1.2] tracking-[-1.08px] lg:text-4xl">
                Explore our community, educational content, and professional network built to support continuous
                learning and career growth.
              </h3>

              <ButtonComponentList
                className="flex max-md:w-full"
                itemClassName="max-md:w-full md:inline-block md:w-auto">
                <ButtonComponent href="https://discord.com/invite/Y8n8ST6a" variant="secondary" fullWidth>
                  Join Community
                </ButtonComponent>
              </ButtonComponentList>
            </div>

            {teamImage?.src ? (
              <figure className="max-md:w-full">
                <img
                  src={teamImage.src}
                  alt={teamImage.alt ?? 'Community Discussion'}
                  className="max-md:w-full rounded-radius-md"
                />
              </figure>
            ) : null}
          </RevealWrapper>

          <RevealWrapper className="card col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="mb-3 flex justify-center">
              <SectionLabel>Youtube</SectionLabel>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Explore tutorials, webinars, and industry insights.
            </h3>
            <ButtonComponentList className="flex justify-center">
              <ButtonComponent href="https://youtu.be/JGLfyTDgfDc?si=0-iUKu3hv8uewpxg" variant="secondary">
                Watch Videos
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>

          <RevealWrapper className="card col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="mb-3 flex justify-center">
              <SectionLabel>Linkedin</SectionLabel>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Follow our journey and discover future opportunities.
            </h3>
            <ButtonComponentList className="flex justify-center">
              <ButtonComponent href="https://www.linkedin.com/company/staticmania" variant="secondary">
                Follow WOW
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Communities
