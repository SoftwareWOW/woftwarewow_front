import PageHero from '@/app/[locale]/about/_components/PageHero'
import { meetHeroClass } from './meetSectionSpacing'

const MeetHero = () => (
  <PageHero
    badgeTitle="Consultation"
    title="Schedule a"
    italicTitle="Meeting"
    description="Book a free consultation with our team to discuss your project, business goals, and discover how we can help you build the right digital solution."
    spacing={meetHeroClass}
  />
)

export default MeetHero
