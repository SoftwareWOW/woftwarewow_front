'use client'

import LegalDocumentBody from '@/components/shared/LegalDocumentBody'
import type { LegalDocumentFooterLink } from '@/components/shared/legal-document-types'
import { privacyPolicySections } from '@/components/shared/privacy-policy-sections'
import { FC } from 'react'

export { privacyPolicySections }

type PrivacyPolicyBodyProps = {
  content: string
  lastUpdated: string
  footerLinks?: LegalDocumentFooterLink[]
}

const PrivacyPolicyBody: FC<PrivacyPolicyBodyProps> = ({ content, lastUpdated, footerLinks }) => (
  <LegalDocumentBody
    content={content}
    lastUpdated={lastUpdated}
    sections={privacyPolicySections}
    footerLinks={footerLinks}
  />
)

export default PrivacyPolicyBody
