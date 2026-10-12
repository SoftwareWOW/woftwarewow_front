'use client'

import LegalDocumentBody from '@/components/shared/LegalDocumentBody'
import type { LegalDocumentFooterLink } from '@/components/shared/legal-document-types'
import { termsOfServiceSections } from '@/components/shared/terms-of-service-sections'
import { FC } from 'react'

export { termsOfServiceSections }

type TermsOfServiceBodyProps = {
  content: string
  lastUpdated: string
  footerLinks?: LegalDocumentFooterLink[]
}

const TermsOfServiceBody: FC<TermsOfServiceBodyProps> = ({ content, lastUpdated, footerLinks }) => (
  <LegalDocumentBody
    content={content}
    lastUpdated={lastUpdated}
    sections={termsOfServiceSections}
    footerLinks={footerLinks}
  />
)

export default TermsOfServiceBody
