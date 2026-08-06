import LayoutOne from '@/components/shared/LayoutOne'
import Team from '@/components/aboutpage/Team'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Metadata } from 'next'
import TeamHero from './_components/TeamHero'

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the creative team behind WOW Superagency — strategists, designers, developers, and marketers helping businesses grow through technology, design, marketing, and AI.',
  keywords: [
    'WOW Superagency team',
    'creative agency team',
    'digital marketing experts',
    'design agency Palermo',
    'meet our team',
  ],
  openGraph: {
    title: 'Our Team | WOW Superagency',
    description:
      'Meet the strategists, designers, developers, and marketers behind WOW Superagency.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | WOW Superagency',
    description:
      'Meet the creative team behind WOW Superagency helping businesses grow through technology, design, marketing, and AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const TeamPage = () => {
  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <TeamHero
          title="Our Creative "
          italicTitle="Team"
          badgeTitle="Team"
          description="These alternatives can add a different tone or emphasis depending on how you want to introduce your creative team. Let me know if you'd like any specific adjustments!"
          scale
        />
        <Team />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default TeamPage
