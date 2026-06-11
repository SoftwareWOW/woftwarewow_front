
import Portfolio from '@/components/homepage-01/Portfolio'
import Testimonial from '@/components/homepage-01/Testimonial'

import CTA from '@/components/shared/CTA'
import ClientsV3 from '@/components/shared/ClientsV3'
import Community from '@/components/shared/Community'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import ServicesV8 from '@/components/shared/ServicesV8'

import WowLayout from '@/components/wow/WowLayout'

import WowHero from '@/components/wow/sections/WowHero'


export const metadata = {
  title: 'WOW Superagency | Where Ambitions Become Achievements',
  description:
    'Integrated web, marketing, AI, applications, content, and infrastructure for small businesses. Clear to understand, fast to launch, built for real-world outcomes.',
}

const Home = () => {
  return (
    <WowLayout>
 
      <WowHero />
      <ServicesV8 />
      {/* <WowProcessSection /> */}
           <Portfolio />
      <ClientsV3 />
      <Community />
      <FAQ />
      <Testimonial />
      <CTA buttonText="Book Now">
        Ready to grow?
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Let&apos;s talk.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Book a free meeting.</i>
      </CTA>
       {/* <WowRatingSection /> */}
      {/* <About /> */}
      {/* <WowStatistics />
      <WowServices />
      <WowBlog />
      <WowTestimonials />
      <WowExpertise />
      <WowFaq />
      <WowFeaturedWork />
      <WowCta /> */}
    </WowLayout>
  )
}

export default Home
