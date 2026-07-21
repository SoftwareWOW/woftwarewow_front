import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const testimonialData = [
  {
    id: 1,
    name: 'Michael Carter',
    role: 'CEO at Horizon Retail',
    image: '/images/wow/Hero/client/Michael Carter.png',
    feedback: 'Their eCommerce website transformed our store and helped sales grow within weeks of launch.',
  },
  {
    id: 2,
    name: 'Emma Richardson',
    role: 'Founder of BrightPath SaaS',
    image: '/images/wow/Hero/client/Emma Richardson.jpg',
    feedback: 'They delivered a custom platform that fits our workflow—clean, fast, and ready to scale.',
  },
  {
    id: 3,
    name: 'Daniel Foster',
    role: 'COO at Apex Logistics',
    image: '/images/wow/Hero/client/Daniel Foster.png',
    feedback: 'Their AI automation cut our support load and improved response times across the board.',
  },
  {
    id: 4,
    name: 'Sophia Bennett',
    role: 'Marketing Director at Nova Brands',
    image: '/images/wow/Hero/client/Sophia Bennett.png',
    feedback: 'Their marketing strategy brought qualified leads every month with clear reporting and ROI.',
  },
  {
    id: 5,
    name: 'Olivia Hayes',
    role: 'Brand Lead at Studio Meridian',
    image: '/images/wow/Hero/client/Avatar.png',
    feedback: 'From brand identity to creative assets, they helped us stand out with a cohesive story.',
  },
  {
    id: 6,
    name: 'James Whitfield',
    role: 'Growth Manager at Pulse CRM',
    image: '/images/wow/Hero/client/Avatar (1).png',
    feedback: 'They rebuilt our funnel and CRM setup, boosting conversions and giving our team clarity.',
  },
  {
    id: 7,
    name: 'Ava Thompson',
    role: 'Product Owner at CloudNest',
    image: '/images/wow/Hero/client/Avatar (2).png',
    feedback: 'A true partner from discovery to launch—clear communication and delivery beyond expectations.',
  },
  {
    id: 8,
    name: 'Noah Ellis',
    role: 'Operations Director at PeakForge',
    image: '/images/wow/Hero/client/client1.png',
    feedback: 'They connected our tools into one ecosystem, making work smoother and decisions data-driven.',
  },
]

const Client = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <RevealWrapper className="mb-3 flex justify-center">
          <SectionLabel>Testimonials</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 text-center lg:mb-20">What our clients say about us</h2>
        </TextAppearAnimation>
      </div>

      <RevealWrapper>
        <div className="flex items-center gap-[30px] max-sm:mb-[1px]">
          <Marquee pauseOnHover speed={110} autoFill>
            {testimonialData?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-96 border p-[30px] first:ml-[30px] dark:border-dark max-md:min-h-[237px] md:max-h-[237px] md:w-[470px]">
                <p className="line-clamp-2 min-h-[2.55em] text-[17px] leading-normal tracking-normal">
                  {testimonial.feedback}
                </p>
                <div className="mt-[29px] flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    width={64}
                    height={64}
                    quality={90}
                    alt="Review Author"
                    className="size-16 shrink-0 rounded-full object-cover"
                  />
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
