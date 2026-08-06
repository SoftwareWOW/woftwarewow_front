import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/wow/shared/Marquee'
import PageHero from './_components/PageHero'
import HeroAbout from '@/components/homepage-07/HeroAbout'
import SkewMarquee from '@/components/shared/SkewMarquee'
import TechStack from './_components/TechStack'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import SolutionToChallenges from '@/components/wow/LandascapComponets/SolutionToChallench'
import Team from '@/components/aboutpage/Team'

export const metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <PageHero
          badgeTitle="About"
          title="WOW"
          italicTitle="Superagency"
          description="Get to know the team, vision, and ecosystem helping businesses grow through technology, design, marketing, and AI."
        />
        <HeroAbout />
        <SkewMarquee className="!pb-0 !pt-0 lg:!pb-0" />
        <TechStack />
        <Team />
        <Marquee />
        <SolutionToChallenges />
        <div className="mb-3">
          <WowGrowthCta
            accentText="Ready to"
            mainText="Grow?"
            ariaLabel="Contact WOW Superagency"
          />
        </div>
      </div>
    </LayoutOne>
  )
}

export default AboutPage
