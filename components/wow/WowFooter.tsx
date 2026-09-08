'use client'

import FooterTabContent from '@/components/wow/footer/FooterTabContent'
import { footerTextTabs, type FooterTabId } from '@/components/wow/footer/footer-tab-data'
import WowFooterShell from '@/components/wow/footer/WowFooterShell'
import WowText from '@/components/wow/shared/WowText'
import type { Dictionary } from '@/i18n/types'

type WowFooterProps = {
  footer: Dictionary['footer']
}

export default function WowFooter({ footer: _footer }: WowFooterProps) {
  return (
    <WowFooterShell
      tabs={footerTextTabs}
      defaultTabId="ask"
      copyright="© 2026 WOW Superagency. All rights reserved."
      watermark={
        <>
          <WowText variant="watermark" className="text-[length:inherit]" />
          <span className="ml-2 text-[length:inherit] !text-[#1a1a1a]/[0.04] dark:!text-white/[0.04] sm:ml-3">
            Superagency
          </span>
        </>
      }
      renderPanel={(tab) => <FooterTabContent tab={tab as FooterTabId} />}
    />
  )
}
