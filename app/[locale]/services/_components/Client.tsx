import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import testimonialData from '@/data/testimonials/testimonialV2.json'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const Client = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <RevealWrapper className="mb-3 flex justify-center">
          <SectionLabel>Testimonials</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 text-center lg:mb-20">
         What our clients say about us
          </h2>
        </TextAppearAnimation>
      </div>

      <RevealWrapper>
        <div className="flex items-center gap-[30px] max-sm:mb-[1px]">
          <Marquee pauseOnHover speed={110} autoFill>
            {testimonialData?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-96 border p-[30px] first:ml-[30px] dark:border-dark max-md:min-h-[237px] md:max-h-[237px] md:w-[470px]">
                <p className="text-[17px] leading-normal tracking-normal">{testimonial.feedback}</p>
                <div className="mt-[29px] flex items-center gap-4">
                  <Image src={testimonial.image} width={64} height={64} quality={90} alt="Review Author" />
                  <div>
                    <h3 className="text-xl font-medium leading-[1.2] tracking-wide">{testimonial.name}</h3>
                    <p className="mt-[3.5px] text-base font-light leading-5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default Client
