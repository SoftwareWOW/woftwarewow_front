import Team from '@/components/aboutpage/Team'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import TeamHero from './_components/TeamHero'

const TeamPage = () => {
  return (
    <LayoutOne>
      <TeamHero
        title="Our Creative "
        italicTitle="Team"
        badgeTitle="Team"
        description="These alternatives can add a different tone or emphasis depending on how you want
to introduce your creative team. Let me know if you'd like any specific adjustments!"
        scale
        spacing="pt-32 md:pt-36 lg:pt-[180px] pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pb-[120px] overflow-hidden relative"
      />
      <Team />
 <WowGrowthCta />
    </LayoutOne>
  )
}

export default TeamPage
