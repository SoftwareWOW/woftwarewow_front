import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import communityImg from '@/public/images/community-image.jpg'
import Image from 'next/image'

const Communities = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Community</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-12 md:mb-20">
              Growing <span className="font-instrument italic">together.</span> <br />
              As a community.
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <RevealWrapper className="col-span-full flex flex-col items-start justify-center gap-x-4 border p-6 dark:border-dark max-md:gap-y-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-md:block max-md:w-full">
              <h3 className="mb-8 leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
                Join Our Community of <br />
                500+ Designers
              </h3>
              <ButtonComponentList
                className="flex max-md:w-full"
                itemClassName="max-md:w-full md:inline-block md:w-auto">
                <ButtonComponent href="https://discord.com/invite/Y8n8ST6a" variant="secondary" fullWidth>
                  Join Discord
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
              Design Tips & <br className="hidden md:block" />
              Tutorial Videos
            </h3>
            <ButtonComponentList className="flex justify-center">
              <ButtonComponent href="https://youtu.be/JGLfyTDgfDc?si=0-iUKu3hv8uewpxg" variant="secondary">
                Subscribe Now
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>

          <RevealWrapper className="card col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="mb-3 flex justify-center">
              <SectionLabel>Linkedin</SectionLabel>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Stay Updated On <br />
              Latest Design Trends
            </h3>
            <ButtonComponentList className="flex justify-center">
              <ButtonComponent href="https://www.linkedin.com/company/staticmania" variant="secondary">
                Follow Now
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Communities
