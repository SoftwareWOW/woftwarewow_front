import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import communityImg from '@/public/images/wow/Hero/career/team/teamimage.png'
import Image from 'next/image'
import { FaFacebookF, FaPlus } from 'react-icons/fa6'

const communityAvatars = [
  '/images/wow/Hero/career/team/Avatar wrap-1.png',
  '/images/wow/Hero/career/team/Avatar wrap-2.png',
  '/images/wow/Hero/career/team/Avatar wrap-3.png',
  '/images/wow/Hero/career/team/Avatar wrap-4.png',
  '/images/wow/Hero/career/team/Avatar wrap-5.png',
  '/images/wow/Hero/career/team/Avatar wrap.png',
]

const Communities = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mb-12 md:mb-20">
              Learn, Connect & <span className="font-instrument  italic !bg-none !bg-clip-border !text-inherit">Grow With WOW</span>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <RevealWrapper className="col-span-full flex flex-col items-stretch gap-6 border p-6 dark:border-dark max-md:gap-y-8 md:flex-row md:items-center md:justify-between md:gap-x-10 md:p-10">
            <div className="flex max-w-[520px] flex-col items-start max-md:w-full">
              <div className="mb-6 flex items-center">
                {communityAvatars.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-backgroundBody dark:border-dark sm:size-12"
                    style={{ marginLeft: index === 0 ? 0 : -18, zIndex: index + 1 }}>
                    <Image src={src} alt={`Community member ${index + 1}`} fill className="object-cover" sizes="48px" />
                  </div>
                ))}
              </div>

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

            <figure className="max-md:w-full">
              <Image src={communityImg} alt="Community Discussion" className="max-md:w-full" />
            </figure>
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
