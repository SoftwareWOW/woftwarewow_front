import PageHero from '@/app/[locale]/about/_components/PageHero'
import { meetHeroClass } from './meetSectionSpacing'

type MeetHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
}

const MeetHero = ({
  badgeTitle = 'Consultation',
  title = 'Schedule a',
  italicTitle = 'Meeting',
  description = 'Book a free consultation with our team to discuss your project, business goals, and discover how we can help you build the right digital solution.',
}: MeetHeroProps) => (
  <PageHero
    badgeTitle={badgeTitle}
    title={title}
    italicTitle={italicTitle}
    description={description}
    spacing={meetHeroClass}
  />
)

export default MeetHero
