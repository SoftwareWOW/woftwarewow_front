'use client'

import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import AIChatButton from './AIChatButton'

const AIChatWindow = dynamic(() => import('./AIChatWindow'), {
  ssr: false,
  loading: () => null,
})

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AIChatButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <AnimatePresence>{isOpen ? <AIChatWindow onClose={() => setIsOpen(false)} /> : null}</AnimatePresence>
    </>
  )
}
