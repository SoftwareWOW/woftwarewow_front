import PageHero from '@/app/[locale]/about/_components/PageHero'

type QuotationHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
}

const QuotationHero = ({
  badgeTitle = 'REQUEST A QUOTE',
  title = "Tell Us What You're Building.",
  italicTitle,
  description = "Share a few details about your project and we'll help define the right scope, team, and next steps.",
}: QuotationHeroProps) => (
  <PageHero
    badgeTitle={badgeTitle}
    title={title}
    italicTitle={italicTitle}
    description={description}
    spacing="relative overflow-hidden pt-[130px] md:pt-[180px] pb-8 sm:pb-12 md:pb-16 lg:pb-20"
  />
)

export default QuotationHero
