'use client'

import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useAIChatController } from './AIChatController'

const AIChatWindow = dynamic(() => import('./AIChatWindow'), {
  ssr: false,
  loading: () => null,
})

export default function AIAssistant() {
  const { isOpen, request, close } = useAIChatController()

  return (
    <AnimatePresence>
      {isOpen ? (
        <AIChatWindow
          onClose={close}
          requestId={request?.id}
          initialMessage={request?.message}
          startVoice={request?.voice}
        />
      ) : null}
    </AnimatePresence>
  )
}
