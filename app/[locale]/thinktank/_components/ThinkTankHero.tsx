import PageHero from '@/app/[locale]/about/_components/PageHero'
import { meetHeroClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'

type ThinkTankHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
}

const ThinkTankHero = ({
  badgeTitle = 'Think Tank',
  title = 'Book a',
  italicTitle = 'Think Tank Session',
  description = 'A focused working session with our team to explore ideas, solve challenges, and move your project or initiative forward.',
}: ThinkTankHeroProps) => (
  <PageHero
    badgeTitle={badgeTitle}
    title={title}
    italicTitle={italicTitle}
    description={description}
    spacing={meetHeroClass}
  />
)

export default ThinkTankHero
