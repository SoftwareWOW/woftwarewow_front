import PageHero from '@/app/[locale]/about/_components/PageHero'
import { meetHeroClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'

const ThinkTankHero = () => (
  <PageHero
    badgeTitle="Think Tank"
    title="Book a Think Tank Session"
    description="A focused working session with our team to explore ideas, solve challenges, and move your project or initiative forward."
    spacing={meetHeroClass}
  />
)

export default ThinkTankHero
