import ContactForm from '@/components/contactpage/ContactForm'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import type { Locale } from '@/i18n/config'
import { mergeCmsHero } from '@/lib/strapi/mappers/page-sections'
import {
  buildFooterResourceMetadata,
  loadFooterResourcePage,
} from '@/lib/strapi/load-footer-resource-page'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export const revalidate = 60

const PAGE_KEY = 'contact' as const

const DEFAULT_HERO = {
  title: "Let's Work Together",
  badgeTitle: 'Contact',
  description:
    'Discover our innovative, cutting-edge no-code websites, crafted to effortlessly captivate and engage your visitors.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildFooterResourceMetadata(PAGE_KEY, locale as Locale, { title: 'Contact' })
}

const ContactPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadFooterResourcePage(PAGE_KEY, locale as Locale)
  const hero = mergeCmsHero(DEFAULT_HERO, cms.hero)

  return (
    <LayoutOne>
      <PageHero
        {...hero}
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <ContactForm />
    </LayoutOne>
  )
}

export default ContactPage
