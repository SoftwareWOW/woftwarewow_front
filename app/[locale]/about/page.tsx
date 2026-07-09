import AwardsV2 from '@/components/aboutpage/AwardsV2'
import Team from '@/components/aboutpage/Team'
import About from '@/components/shared/About'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
// import Marquee from '@/components/shared/Marquee'
import Marquee from '@/components/wow/shared/Marquee'
import Video from '@/components/shared/Video'
import PageHero from './_components/PageHero'
import HeroAbout from '@/components/homepage-07/HeroAbout'
import SkewMarquee from '@/components/shared/SkewMarquee'
import TechStack from './_components/TechStack'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import SolutionToChallenges from '@/components/wow/LandascapComponets/SolutionToChallench'

export const metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="About"
        title="WOW"
        italicTitle="Superagency"
       description="Get to know the team, vision, and ecosystem helping businesses grow through technology, design, marketing, and AI."
      />
      {/* <About /> */}
        <HeroAbout spacingTop="pt-10 sm:pt-16 md:pt-[100px] mb-10 lg:mb-20" />
        <SkewMarquee />
        <TechStack />
      <Team />
      <Marquee />
      {/* <AwardsV2 /> */}
          <SolutionToChallenges/>
       <WowGrowthCta />
     
      {/* <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/12.png' },
            { id: '3', img: '/images/agent/13.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA> */}
    </LayoutOne>
  )
}

export default AboutPage
